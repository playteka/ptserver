Blockly.Blocks['p5_network_connect'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(LANG["Connect IP:"])
        .appendField(new Blockly.FieldTextInput("127.0.0.1"), "IP")
        .appendField(LANG["Port:"])
        .appendField(new Blockly.FieldTextInput("9090"), "PORT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_network_connect'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var text_ip = block.getFieldValue('IP');
  var text_port = block.getFieldValue('PORT');
  // TODO: Assemble JavaScript into code variable.
  var code = value_var + " = io('http://" + text_ip + ":" + text_port + "');\n";
  return code;
};

Blockly.Blocks['p5_network_event'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(LANG["Event"])
        .appendField(new Blockly.FieldTextInput("message"), "EVENT");
    this.appendValueInput("DATA")
        .setCheck("unwrap_type")
        .appendField(LANG["Data"]);
    this.appendStatementInput("PROGRAM")
        .setCheck("event_type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "event_type");
    this.setNextStatement(true, "event_type");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_network_event'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var text_event = block.getFieldValue('EVENT');
  var value_data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_program = Blockly.JavaScript.statementToCode(block, 'PROGRAM');
  
  // Assemble JavaScript into code variable.
  var code = value_var + ".on('" + text_event + "', function (data) {\n";
  code += value_data;
  code += statements_program;
  code += "});\n";
  
  return code;
};

Blockly.Blocks['p5_network_emit'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Emit");
    this.appendValueInput("DATA")
        .setCheck("json_type")
        .appendField(new Blockly.FieldTextInput("message"), "MESSAGE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_network_emit'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var text_message = block.getFieldValue('MESSAGE');
  var value_data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);

  var socket_name = value_var;
  var message_name = text_message;

  // TODO: Assemble JavaScript into code variable.
  var code = socket_name + ".emit('" + message_name + "', " + value_data + ");\n";

  return code;
};


Blockly.Blocks['p5_network_data_unwrap'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(LANG["Unwrap Data"]);

    this.appendValueInput('CONNECTION0')
    .appendField(LANG["content"]+0)
    .appendField("==>");

    this.appendDummyInput("PROGRAM");
    //.appendField("program");

    this.setMutator(new Blockly.Mutator(['connections_create_with_item']));
    this.itemCount_ = 1;

    this.setInputsInline(false);
    this.setOutput(true, "unwrap_type");
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },

mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
},
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
        this.removeInput('CONNECTION' + x);
    }
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    
    for (var x = 0; x < this.itemCount_; x++) {
        var input = this.appendValueInput('CONNECTION' + x)
                        .appendField(LANG["content"]+x)
                        .appendField("==>");
        this.moveInputBefore("CONNECTION"+x, "PROGRAM");
        if (x == 0) {
            //input.appendField("connections");
        }
    }
    if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
        .appendField(LANG["no content"]);
        this.moveInputBefore("EMPTY", "PROGRAM");
    }
},
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'connections_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
        var itemBlock = Blockly.Block.obtain(workspace, 'connections_create_with_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
    }
    return containerBlock;
},
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
        this.removeInput('EMPTY');
    } else {
        for (var x = this.itemCount_ - 1; x >= 0; x--) {
            this.removeInput('CONNECTION' + x);
        }
    }
    this.itemCount_ = 0;
    
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
        var input = this.appendValueInput('CONNECTION' + this.itemCount_)
                        .appendField(LANG["content"]+this.itemCount_)
                        .appendField("==>");
        this.moveInputBefore('CONNECTION' + this.itemCount_ , "PROGRAM");
        if (this.itemCount_ == 0) {
            //input.appendField("connections");
        }
        // Reconnect any child blocks.
        if (itemBlock.valueConnection_) {
            input.connection.connect(itemBlock.valueConnection_);
        }
        this.itemCount_++;
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
        .appendField(LANG["no content"]);
        this.moveInputBefore("EMPTY", "PROGRAM");
    }
    
},
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
        var input = this.getInput('CONNECTION' + x);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        x++;
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
}
};

Blockly.Blocks['connections_create_with_container'] = {
    /**
     * Mutator block for list container.
     * @this Blockly.Block
     */
init: function() {
    this.setColour(260);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
}
};

Blockly.Blocks['connections_create_with_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
init: function() {
    this.setColour(260);
    this.appendDummyInput()
    .appendField(LANG["content"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
}
};

Blockly.JavaScript['p5_network_data_unwrap'] = function(block) {
    
    // assemble the contents
    var sentence_list = new Array();
    for (var n = 0; n < block.itemCount_; n++) {
        var content = Blockly.JavaScript.valueToCode(block, 'CONNECTION' + n, Blockly.JavaScript.ORDER_COMMA);
        if (content) {
            var sentence = content + " = data.content"+n + ";"
            sentence_list.push(sentence);
        };
    }
    
    //assemble code
    var code = sentence_list.join("\n") +"\n";

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_network_data_wrap'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(LANG["Wrap Data"]);

    this.appendValueInput('CONNECTION0')
    .appendField("content"+0)
    .appendField("<==");

    this.appendDummyInput("PROGRAM");
    //.appendField("program");

    this.setMutator(new Blockly.Mutator(['connections_create_with_item']));
    this.itemCount_ = 1;

    this.setInputsInline(false);
    this.setOutput(true, "json_type");
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },

mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
},
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
        this.removeInput('CONNECTION' + x);
    }
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    
    for (var x = 0; x < this.itemCount_; x++) {
        var input = this.appendValueInput('CONNECTION' + x)
                        .appendField("content"+x)
                        .appendField("<==");
        this.moveInputBefore("CONNECTION"+x, "PROGRAM");
        if (x == 0) {
            //input.appendField("connections");
        }
    }
    if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
        .appendField(LANG["no content"]);
        this.moveInputBefore("EMPTY", "PROGRAM");
    }
},
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'connections_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
        var itemBlock = Blockly.Block.obtain(workspace, 'connections_create_with_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
    }
    return containerBlock;
},
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
        this.removeInput('EMPTY');
    } else {
        for (var x = this.itemCount_ - 1; x >= 0; x--) {
            this.removeInput('CONNECTION' + x);
        }
    }
    this.itemCount_ = 0;
    
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
        var input = this.appendValueInput('CONNECTION' + this.itemCount_)
                        .appendField("content"+this.itemCount_)
                        .appendField("<==");
        this.moveInputBefore('CONNECTION' + this.itemCount_ , "PROGRAM");
        if (this.itemCount_ == 0) {
            //input.appendField("connections");
        }
        // Reconnect any child blocks.
        if (itemBlock.valueConnection_) {
            input.connection.connect(itemBlock.valueConnection_);
        }
        this.itemCount_++;
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
        .appendField(LANG["no content"]);
        this.moveInputBefore("EMPTY", "PROGRAM");
    }
    
},
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
        var input = this.getInput('CONNECTION' + x);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        x++;
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
}
};

Blockly.JavaScript['p5_network_data_wrap'] = function(block) {
    
    // assemble the contents
    var sentence_list = new Array();
    for (var n = 0; n < block.itemCount_; n++) {
        var value = Blockly.JavaScript.valueToCode(block, 'CONNECTION' + n, Blockly.JavaScript.ORDER_COMMA);
        if (value) {
            var sentence = "content"+n + " : " + value;
            sentence_list.push(sentence);
        };
    }
    
    //assemble code
    var code = sentence_list.join(", ");
    code = '{ ' + code + ' }';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
