// all devices defined in the workspace are managed here.
var all_objects = {
init: function(){
    //set current object to 'none'
    this.current_object = 'none';

    //object names and inside names
    this.object_list.length = 0;
    this.object_list_dropdown.length = 0;

    //clear property JSON array like ['obj':['prop1','prop2',...]]
    for(var i in this.property_list){
        this.property_list[i].length = 0;
    }
    //clear JSON array like ['obj':[['prop1','prop1_inside'],['prop2','prop2_inside']],...]
    for(var i in this.property_list_dropdown){
        this.property_list_dropdown[i].length = 0;
    }

    //clear with_return_function JSON array like ['obj':['fun1','fun2',...]]
    for(var i in this.with_return_function_list){
        this.with_return_function_list[i].length = 0;
    }
    //clear with_return_function JSON array like ['obj':[['fun1','fun1_inside'],['fun2','fun2_inside']],...]
    for(var i in this.with_return_function_list_dropdown){
        this.with_return_function_list_dropdown[i].length = 0;
    }
 
    //clear no_return_function JSON array like ['obj':['fun1','fun2',...]]
    for(var i in this.with_return_function_list){
        this.no_return_function_list[i].length = 0;
    }
    //clear no_return_function JSON array like ['obj':[['fun1','fun1_inside'],['fun2','fun2_inside']],...]
    for(var i in this.with_return_function_list_dropdown){
        this.no_return_function_list_dropdown[i].length = 0;
    }
},
append: function(){
    //object list
    if (this.object_list.length == 0) { this.object_list.push('obj'); }
    if (this.object_list_dropdown.length == 0) { this.object_list_dropdown.push(['obj', 'obj']); }

    //property list
    if (this.property_list['obj'].length == 0) { this.property_list['obj'].push('prop'); }
    if (this.property_list_dropdown['obj'].length == 0) { this.property_list_dropdown['obj'].push(['prop', 'prop']); }

    //with_return_function list
    if (this.with_return_function_list['obj'].length == 0) { this.with_return_function_list['obj'].push('fun'); }
    if (this.with_return_function_list_dropdown['obj'].length == 0) { this.with_return_function_list_dropdown['obj'].push(['fun', 'fun']); }

    //no_return_function list
    if (this.no_return_function_list['obj'].length == 0) { this.with_return_function_list['obj'].push('fun'); }
    if (this.no_return_function_list_dropdown['obj'].length == 0) { this.with_return_function_list_dropdown['obj'].push(['fun', 'fun']); }
},
create_inside_name: function(outside_name) {
    //return inside_name base on outside_name
    return Blockly.JavaScript.variableDB_.getName(outside_name, Blockly.Variables.NAME_TYPE);
},
find_property_outside_name: function(inside_name){
    for (var i = all_objects.object_list_dropdown.length - 1; i >= 0; i--) {
        if(all_objects.object_list_dropdown[i][1] == inside_name){
            return all_objects.object_list_dropdown[i][0];
        }
    }
}
};

//default current object is 'none'
all_objects.current_object = 'none';
//default value of object list
all_objects.object_list = new Array('obj');
all_objects.object_list_dropdown = new Array(['obj', 'obj']);
//default value of property list
all_objects.property_list = new Array();
all_objects.property_list['obj'] = new Array('prop');
all_objects.property_list_dropdown = new Array();
all_objects.property_list_dropdown['obj'] = new Array(['prop', 'prop']);
//default value of with_return_function list
all_objects.with_return_function_list = new Array();
all_objects.with_return_function_list['obj'] = new Array('fun');
all_objects.with_return_function_list_dropdown = new Array();
all_objects.with_return_function_list_dropdown['obj'] = new Array(['fun', 'fun']);
//default value of no_return_function list
all_objects.no_return_function_list = new Array();
all_objects.no_return_function_list['obj'] = new Array('fun');
all_objects.no_return_function_list_dropdown = new Array();
all_objects.no_return_function_list_dropdown['obj'] = new Array(['fun', 'fun']);


//arduino board block
Blockly.Blocks['object_definition'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(230);
    
    this.appendDummyInput("OBJECT")
    .appendField(LANG["Object Definition"]);
    
    this.appendDummyInput("NAME")
    .appendField(LANG["object name"])
    .appendField(new Blockly.FieldTextInput("obj"), "name");
    
    this.appendValueInput('PROPERTY0')
    .appendField(LANG["properties"])
    .setCheck("property_type");
    
    this.setMutator(new Blockly.Mutator(['property_create_with_item']));
    this.itemCount_ = 1;
    
    this.setTooltip('');
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
        this.removeInput('PROPERTY' + x);
    }
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    
    for (var x = 0; x < this.itemCount_; x++) {
        var input = this.appendValueInput('PROPERTY' + x).setCheck("property_type");
        //this.moveInputBefore("PROPERTY"+x, "PROGRAM");
        if (x == 0) {
            input.appendField(LANG["properties"]);
        }
    }
    if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
        .appendField(LANG["no properties"]);
        //this.moveInputBefore("EMPTY", "PROGRAM");
    }
},
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'property_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
        var itemBlock = Blockly.Block.obtain(workspace, 'property_create_with_item');
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
            this.removeInput('PROPERTY' + x);
        }
    }
    this.itemCount_ = 0;
    
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
        var input = this.appendValueInput('PROPERTY' + this.itemCount_).setCheck("property_type");
        //this.moveInputBefore('PROPERTY' + this.itemCount_ , "PROGRAM");
        if (this.itemCount_ == 0) {
            input.appendField(LANG["properties"]);
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
        .appendField(LANG["no properties"]);
        //this.moveInputBefore("EMPTY", "PROGRAM");
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
        var input = this.getInput('PROPERTY' + x);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        x++;
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
}
};

Blockly.Blocks['property_create_with_container'] = {
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

Blockly.JavaScript['property_create_with_container'] = function(block) {
}

Blockly.Blocks['property_create_with_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
init: function() {
    this.setColour(260);
    this.appendDummyInput()
    .appendField(LANG["property"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
}
};

Blockly.JavaScript['property_create_with_item'] = function(block) {
}



Blockly.JavaScript['object_definition'] = function(block) {

    //get the object name
    var object_name = block.getFieldValue('name');
    
    //push object into the object list and the dropdown menu of object list
    all_objects.object_list.push(object_name);
    var inside_name = all_objects.create_inside_name(object_name);
    all_objects.object_list_dropdown.push([object_name,inside_name]);

    //initialize property list of this object
    if(all_objects.property_list[object_name]){
        //clear the list
        all_objects.property_list[object_name].length = 0;
        //push default value into the list
        all_objects.property_list[object_name].push('prop');
    }
    else{
        //create a list
        all_objects.property_list[object_name] = new Array();
        //push default value into the list
        all_objects.property_list[object_name].push('prop');
    }
    //initialize the property dropdown menu
    if (all_objects.property_list_dropdown[object_name]) {
        all_objects.property_list_dropdown[object_name].length = 0;
        //push a default value into the list
        all_objects.property_list_dropdown[object_name].push(['prop','prop']);
    }
    else{
        all_objects.property_list_dropdown[object_name] = new Array();
        //push a default value into the list
        all_objects.property_list_dropdown[object_name].push(['prop','prop']);
    }

    //initialize with_return_function list of this object
    if(all_objects.with_return_function_list[object_name]){
        all_objects.with_return_function_list[object_name].length = 0;
        //push default value into the list
        all_objects.with_return_function_list[object_name].push('fun');
    }
    else{
        all_objects.with_return_function_list[object_name] = new Array();
        //push default value into the list
        all_objects.with_return_function_list[object_name].push('fun');
    }
    //initialize with_return_function list dropdown menu
    if (all_objects.with_return_function_list_dropdown[object_name]) {
        all_objects.with_return_function_list_dropdown[object_name].length = 0;
        //push default value into the list
        all_objects.with_return_function_list_dropdown[object_name].push(['fun','fun']);
    }
    else{
        all_objects.with_return_function_list_dropdown[object_name] = new Array();
        //push default value into the list
        all_objects.with_return_function_list_dropdown[object_name].push(['fun','fun']);
    }

    //initialize with_return_function list of this object
    if(all_objects.no_return_function_list[object_name]){
        all_objects.no_return_function_list[object_name].length = 0;
        //push default value into the list
        all_objects.no_return_function_list[object_name].push('fun');
    }
    else{
        all_objects.no_return_function_list[object_name] = new Array();
        //push default value into the list
        all_objects.no_return_function_list[object_name].push('fun');
    }
    //initialize with_return_function list dropdown menu
    if (all_objects.no_return_function_list_dropdown[object_name]) {
        all_objects.no_return_function_list_dropdown[object_name].length = 0;
        //push default value into the list
        all_objects.no_return_function_list_dropdown[object_name].push(['fun','fun']);
    }
    else{
        all_objects.no_return_function_list_dropdown[object_name] = new Array();
        //push default value into the list
        all_objects.no_return_function_list_dropdown[object_name].push(['fun','fun']);
    }

    //set this object as current object
    all_objects.current_object = object_name;

    // assemble the connections
    var connection_list = new Array();
    for (var n = 0; n < block.itemCount_; n++) {
        var connection = Blockly.JavaScript.valueToCode(block, 'PROPERTY' + n, Blockly.JavaScript.ORDER_COMMA);
        if (connection) {
            connection_list.push(connection);
        };
    }

    //set current object back to 'none'
    all_objects.current_object = 'none';

    //remove the first element from the property list
    all_objects.property_list[object_name].shift();
    all_objects.property_list_dropdown[object_name].shift();
    //remove the first element from with_return_function list
    all_objects.with_return_function_list[object_name].shift();
    all_objects.with_return_function_list_dropdown[object_name].shift();
    //remove the first element from the no_return_function list
    all_objects.no_return_function_list[object_name].shift();
    all_objects.no_return_function_list_dropdown[object_name].shift();
    
    //assemble devices
    var property_defintions = "\n" + connection_list.join("\n") +"\n";
    
    //assemble code
    var code = "function " + inside_name +"() {\n";
    code += property_defintions;
    code += "}\n";
    
    return code;

};

// the object property
Blockly.Blocks['object_property'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendValueInput("VALUE")
    .appendField(LANG["Define property"])
    .appendField(new Blockly.FieldTextInput("prop"), "prop_var")
    .appendField(LANG["As"]);
    this.setInputsInline(true);
    this.setOutput(true, "property_type");
    this.setTooltip('');
}
};

Blockly.JavaScript['object_property'] = function(block) {
    //get the property name
    var text_prop_var = block.getFieldValue('prop_var');
    //get the inside property nanme
    var inside_name = all_objects.create_inside_name(text_prop_var);
    //get the initial value of the property
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    //if user didn't set the intial value of the propety, set null as default
    value = value ? value : 'null';
    
    //get the parent object of this property
    var parent = all_objects.current_object;

    if (parent != 'none') {
        //push the property variable into the property list and the proerty list dropdown menu
        all_objects.property_list[parent].push(text_prop_var);
        all_objects.property_list_dropdown[parent].push([text_prop_var,inside_name]);
    }
 
    //Assemble code
    var code = "this." + inside_name + " = " + value + ";"
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// the object property
Blockly.Blocks['object_function'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(230);

    this.appendDummyInput("DUMMY")
    .appendField(LANG["Define function"])
    .appendField(new Blockly.FieldTextInput("fun"), "fun_var");

    this.appendDummyInput("DUMMY")
    .appendField(LANG["With return"])
    .appendField(new Blockly.FieldCheckbox("FALSE"), "with_return_var");

    this.appendStatementInput("PROGRAM")

    this.setInputsInline(false);
    this.setOutput(true, "property_type");
    this.setTooltip('');
}
};

Blockly.JavaScript['object_function'] = function(block) {
    //get function name
    var text_fun_var = block.getFieldValue('fun_var');
    //get the inside function name
    var inside_name = all_objects.create_inside_name(text_fun_var);
    //whether is has return value
    var with_return_var = block.getFieldValue('with_return_var');
    
    //get the parent object of this property
    var parent = all_objects.current_object;

    if (parent != 'none') {
        if (with_return_var == 'TRUE') {
            //push with_return_function into the list and the dropdown menu list
            all_objects.with_return_function_list[parent].push(text_fun_var);
            all_objects.with_return_function_list_dropdown[parent].push([text_fun_var,inside_name]);          
        }
        else{ // no return function
            //push the no_return_function into the list and the dropdown menu list
            all_objects.no_return_function_list[parent].push(text_fun_var);
            all_objects.no_return_function_list_dropdown[parent].push([text_fun_var,inside_name]);
        }
    }
    // get program statements
    var program_statements = Blockly.JavaScript.statementToCode(block, 'PROGRAM');

    //assemble the code
    var code = 'this.' + inside_name + ' = function(){ \n';
    code += program_statements;
    code += '};';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

// get property
Blockly.Blocks['object_get_property'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendDummyInput('PROPERTY')
    .appendField(LANG["Get property"])
    .appendField(new Blockly.FieldDropdown(all_objects.property_list_dropdown['obj']), "prop_var");
    this.parent_object = 'none';
    this.updateShape_(this.parent_object);

    this.setOutput(true);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('parentObject', this.parent_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var parent = xmlElement.getAttribute('parentObject');
    this.updateShape_(parent);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(parent) {
    
    // set parent_object to the current parent
    this.parent_object = parent;
    
    var prop_field = this.getField_('prop_var');
    
    // set the the mendu of prop field to a new array.
    if (parent != null && parent != 'none' 
        && all_objects.property_list_dropdown[parent].length > 0) {
        prop_field.menuGenerator_ = all_objects.property_list_dropdown[parent];
    }
    else{ // parent == "none" or null
        prop_field.menuGenerator_ = all_objects.property_list_dropdown['obj'];
    }
    }
};

Blockly.JavaScript['object_get_property'] = function(block) {

        block.updateShape_(all_objects.current_object);
    

    if (all_objects.current_object != 'none') {
        var prop_var = block.getFieldValue('prop_var');
        var code = 'this.' + prop_var;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    else{
        return null;
    }
};


// set property
Blockly.Blocks['object_set_property'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendDummyInput('PROPERTY')
    

    this.appendValueInput("VALUE")
        .appendField(LANG["Set property"])
        .appendField(new Blockly.FieldDropdown(all_objects.property_list_dropdown['obj']), "prop_var")
        .appendField(LANG["To"]);

    this.parent_object = 'none';
    this.updateShape_(this.parent_object);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('parentObject', this.parent_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var parent = xmlElement.getAttribute('parentObject');
    this.updateShape_(parent);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(parent) {
    // set parent_object to the current parent
    this.parent_object = parent;
    //get the prop field
    var prop_field = this.getField_('prop_var');
    
    // set the the mendu of prop field to a new array.
    if (parent != null && parent != 'none' 
        && all_objects.property_list_dropdown[parent].length > 0) {
        prop_field.menuGenerator_ = all_objects.property_list_dropdown[parent];
    }
    else{ // parent == "none" or null, or no property defined
        prop_field.menuGenerator_ = all_objects.property_list_dropdown['obj'];
    }
    }
};

Blockly.JavaScript['object_set_property'] = function(block) {
    
    if (block.parent_object != all_objects.current_object) {
        block.updateShape_(all_objects.current_object);
    }

    if (all_objects.current_object != 'none') {
        var prop_var = block.getFieldValue('prop_var');
        var value= Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        value = value ? value : 'null';
        //assemble code
        var code = 'this.' + prop_var + ' = ' + value + ';\n';
        return code;
    }
    else{
        return null;
    }
};

// call with_return_function in the object definition scope
Blockly.Blocks['object_call_with_return_function'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendDummyInput('FUNCTION')
    .appendField(LANG["Call function"])
    .appendField(new Blockly.FieldDropdown(all_objects.with_return_function_list_dropdown['obj']), "fun_var");
    this.parent_object = 'none';
    this.updateShape_(this.parent_object);

    this.setOutput(true);
    this.setTooltip('');
},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('parentObject', this.parent_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var parent = xmlElement.getAttribute('parentObject');
    this.updateShape_(parent);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(parent) {
    // set parent_object to the current parent
    this.parent_object = parent;
    
    //get the fun field
    var fun_field = this.getField_('fun_var');
    var menu = all_objects.with_return_function_list_dropdown[parent];
    
    // set the the mendu of prop field to a new array.
    if (parent != null && parent != 'none' && menu.length > 0) {
        fun_field.menuGenerator_ = menu;
    }
    else{ // parent == "none" or null, or no with_return_function defined
        fun_field.menuGenerator_ = all_objects.with_return_function_list_dropdown['obj'];
    }
    
    /*
    // Add or remove a Value Input.
    if (parent != 'none') {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField(LANG["Call function"])
            .appendField(new Blockly.FieldDropdown(all_objects.with_return_function_list_dropdown[parent]), "fun_var");
    }
    else{ // parent == "none"
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField(LANG["Call function"]);
    }
    */
    }
};

Blockly.JavaScript['object_call_with_return_function'] = function(block) {

    if (block.parent_object != all_objects.current_object) {
        block.updateShape_(all_objects.current_object);
    }

    if (all_objects.current_object != 'none') {
        var fun_var = block.getFieldValue('fun_var');
        var code = 'this.' + fun_var + '()';
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    else{
        return null;
    }
};

// call no_return_function in the object definition scope
Blockly.Blocks['object_call_no_return_function'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendDummyInput('FUNCTION')
    .appendField(LANG["Call function"])
    .appendField(new Blockly.FieldDropdown(all_objects.no_return_function_list_dropdown['obj']), "fun_var");
    this.parent_object = 'none';
    this.updateShape_(this.parent_object);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('');
},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('parentObject', this.parent_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var parent = xmlElement.getAttribute('parentObject');
    this.updateShape_(parent);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(parent) {
    // set parent_object to the current parent
    this.parent_object = parent;
    
    //get the fun field
    var fun_field = this.getField_('fun_var');
    var menu = all_objects.no_return_function_list_dropdown[parent];
    
    // set the the mendu of prop field to a new array.
    if (parent != null && parent != 'none' && menu.length > 0) {
        fun_field.menuGenerator_ = menu;
    }
    else{ // parent == "none" or null, or no with_return_function defined
        fun_field.menuGenerator_ = all_objects.no_return_function_list_dropdown['obj'];
    }

    /*
    // Add or remove a Value Input.
    if (parent != 'none') {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField(LANG["Call function"])
            .appendField(new Blockly.FieldDropdown(all_objects.no_return_function_list_dropdown[parent]), "fun_var");
    }
    else{ // parent == "none"
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField(LANG["Call function"]);
    }
    */
    }
};

Blockly.JavaScript['object_call_no_return_function'] = function(block) {

    if (block.parent_object != all_objects.current_object) {
        block.updateShape_(all_objects.current_object);
    }

    if (all_objects.current_object != 'none') {
        var fun_var = block.getFieldValue('fun_var');
        var code = 'this.' + fun_var + '();\n';
        return code;
    }
    else{
        return null;
    }
};


// create a new object
Blockly.Blocks['object_new_object'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendDummyInput('OBJECT')
    .appendField(LANG["New object"])
    .appendField(new Blockly.FieldDropdown(all_objects.object_list_dropdown), "object_var");

    this.setOutput(true);
    this.setTooltip('');

}
};

Blockly.JavaScript['object_new_object'] = function(block) {

    var object_var = block.getFieldValue('object_var');
    var code = 'new ' + object_var + '()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};


// get property from variable
Blockly.Blocks['object_get_variable_s_property'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendValueInput("VAR")
        .appendField(LANG["Get"]);

    var dropdown = new Blockly.FieldDropdown(all_objects.object_list_dropdown, function(option) {
      this.sourceBlock_.updateShape_(option);
    });
    this.appendDummyInput("OBJECT")
        .appendField(LANG["s"])
        .appendField(dropdown, "object_var");

    this.appendDummyInput('PROPERTY')
        .appendField('.');

    this.selected_object = 'obj';
    //this.updateShape_(this.selected_object);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('selectedObject', this.selected_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var obj = xmlElement.getAttribute('selectedObject');
    this.updateShape_(obj);
  },

  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(obj) {

    outside_name = all_objects.find_property_outside_name(obj);

    this.selected_object = outside_name;    

    if (all_objects.property_list_dropdown[outside_name] != null && all_objects.property_list_dropdown[outside_name].length > 0) {
        this.removeInput('PROPERTY');
        this.appendDummyInput("PROPERTY")
            .appendField('.')
            .appendField(new Blockly.FieldDropdown(all_objects.property_list_dropdown[outside_name]), "prop_var");
    }
    else {
        this.removeInput('PROPERTY');
        this.appendDummyInput("PROPERTY")
            .appendField('.');
    }
    }
};

Blockly.JavaScript['object_get_variable_s_property'] = function(block) {

    //block.updateShape_(this.selected_object);
    
    var variable= Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    var prop_var = block.getFieldValue('prop_var')

    if (variable.length != 0 && prop_var != null) {
        //assemble code
        var code = variable + '.' + prop_var;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    else{
        return null;
    }
};

// set property from variable
Blockly.Blocks['object_set_variable_s_property'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendValueInput("VAR")
        .appendField(LANG["Set"]);

    var dropdown = new Blockly.FieldDropdown(all_objects.object_list_dropdown, function(option) {
      this.sourceBlock_.updateShape_(option);
    });
    this.appendDummyInput("OBJECT")
        .appendField(LANG["s"])
        .appendField(dropdown, "object_var");

    this.appendDummyInput('PROPERTY')
        .appendField('.');

    this.appendValueInput("VALUE")
        .appendField(LANG["To"]);

    this.selected_object = 'obj';

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('selectedObject', this.selected_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var obj = xmlElement.getAttribute('selectedObject');
    this.updateShape_(obj);
  },

  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(obj) {

    outside_name = all_objects.find_property_outside_name(obj);

    this.selected_object = outside_name;    

    if (all_objects.property_list_dropdown[outside_name] != null && all_objects.property_list_dropdown[outside_name].length > 0) {
        this.removeInput('PROPERTY');
        this.appendDummyInput("PROPERTY")
            .appendField('.')
            .appendField(new Blockly.FieldDropdown(all_objects.property_list_dropdown[outside_name]), "prop_var");
        this.moveInputBefore("PROPERTY", "VALUE");
    }
    else {
        this.removeInput('PROPERTY');
        this.appendDummyInput("PROPERTY")
            .appendField('.');
        this.moveInputBefore("PROPERTY", "VALUE");
    }
    }
};

Blockly.JavaScript['object_set_variable_s_property'] = function(block) {

    //block.updateShape_(this.selected_object);
    
    var variable= Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    var prop_var = block.getFieldValue('prop_var')
    var value= Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    value = value ? value : 'null';

    if (variable.length != 0 && prop_var != null) {
        //assemble code
        var code = variable + '.' + prop_var + ' = ' + value + ';\n';
        return code;
    }
    else{
        return null;
    }
};


// call with_return_function from variable
Blockly.Blocks['object_call_variable_s_with_retrun_function'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendValueInput("VAR")
        .appendField(LANG["Call"]);

    var dropdown = new Blockly.FieldDropdown(all_objects.object_list_dropdown, function(option) {
      this.sourceBlock_.updateShape_(option);
    });
    this.appendDummyInput("OBJECT")
        .appendField(LANG["s function"])
        .appendField(dropdown, "object_var");

    this.appendDummyInput('FUNCTION')
        .appendField('.');

    this.selected_object = 'obj';
    //this.updateShape_(this.selected_object);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('selectedObject', this.selected_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var obj = xmlElement.getAttribute('selectedObject');
    this.updateShape_(obj);
  },

  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(obj) {

    outside_name = all_objects.find_property_outside_name(obj);

    this.selected_object = outside_name;    

    if (all_objects.with_return_function_list_dropdown[outside_name] != null && 
        all_objects.with_return_function_list_dropdown[outside_name].length > 0) {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField('.')
            .appendField(new Blockly.FieldDropdown(all_objects.with_return_function_list_dropdown[outside_name]), "fun_var");
    }
    else {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField('.');
    }
    }
};

Blockly.JavaScript['object_call_variable_s_with_retrun_function'] = function(block) {

    //block.updateShape_(this.selected_object);
    
    var variable= Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    var fun_var = block.getFieldValue('fun_var')

    if (variable.length != 0 && fun_var != null) {
        //assemble code
        var code = variable + '.' + fun_var + '()';
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    else{
        return null;
    }
};

// call no_return_function from variable
Blockly.Blocks['object_call_variable_s_no_retrun_function'] = {
init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);

    this.appendValueInput("VAR")
        .appendField(LANG["Call"]);

    var dropdown = new Blockly.FieldDropdown(all_objects.object_list_dropdown, function(option) {
      this.sourceBlock_.updateShape_(option);
    });
    this.appendDummyInput("OBJECT")
        .appendField(LANG["s function"])
        .appendField(dropdown, "object_var");

    this.appendDummyInput('FUNCTION')
        .appendField('.');

    this.selected_object = 'obj';
    //this.updateShape_(this.selected_object);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('');


},
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('selectedObject', this.selected_object);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var obj = xmlElement.getAttribute('selectedObject');
    this.updateShape_(obj);
  },

  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(obj) {

    outside_name = all_objects.find_property_outside_name(obj);

    this.selected_object = outside_name;    

    if (all_objects.no_return_function_list_dropdown[outside_name] != null && 
        all_objects.no_return_function_list_dropdown[outside_name].length > 0) {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField('.')
            .appendField(new Blockly.FieldDropdown(all_objects.no_return_function_list_dropdown[outside_name]), "fun_var");
    }
    else {
        this.removeInput('FUNCTION');
        this.appendDummyInput("FUNCTION")
            .appendField('.');
    }
    }
};

Blockly.JavaScript['object_call_variable_s_no_retrun_function'] = function(block) {

    //block.updateShape_(this.selected_object);
    
    var variable= Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    var fun_var = block.getFieldValue('fun_var')

    if (variable.length != 0 && fun_var != null) {
        //assemble code
        var code = variable + '.' + fun_var + '();\n';
        return code;
    }
    else{
        return null;
    }
};