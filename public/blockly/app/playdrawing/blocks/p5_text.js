Blockly.Blocks['p5_text_textxy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["text"]);
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textxy'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'text(' + value_string + ',' + value_x + ',' + value_y + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textrect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["text"]);
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['p5_text_textrect'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'text(' + value_string + ',' + value_x + ',' + value_y + value_width + ',' + value_height + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textalign'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["textAlign"])
        .appendField(LANG["Horizontal"])
        .appendField(new Blockly.FieldDropdown([[LANG["ALIGN_LEFT"], "LEFT"], 
            [LANG["ALIGN_CENTER"], "CENTER"], [LANG["ALIGN_RIGHT"], "RIGHT"]]), "horiz")
        .appendField(LANG["Vertical"])
        .appendField(new Blockly.FieldDropdown([[LANG["ALIGN_TOP"], "TOP"], 
            [LANG["ALIGN_BOTTOM"], "BOTTOM"], [LANG["ALIGN_CENTER"], "CENTER"], [LANG["ALIGN_BASELINE"], "BASELINE"]]), "vert");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textalign'] = function(block) {
  var dropdown_horiz = block.getFieldValue('horiz');
  var dropdown_vert = block.getFieldValue('vert');
  // TODO: Assemble JavaScript into code variable.
  var code = 'textAlign(' + dropdown_horiz + ',' + dropdown_vert + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textleading'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(LANG["Text Leading"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textleading'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'textLeading(' + value_value + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textsize'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(LANG["Text Size"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textsize'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'textSize(' + value_value + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textstyle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Text Style"])
        .appendField(new Blockly.FieldDropdown([[LANG["NORMAL"], "NORMAL"], 
            [LANG["ITALIC"], "ITALIC"], [LANG["BOLD"], "BOLD"]]), "STYLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textstyle'] = function(block) {
  var dropdown_style = block.getFieldValue('STYLE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'textStyle(' + dropdown_style + ');\n' ;
  return code;
};

Blockly.Blocks['p5_text_textwidth'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(LANG["Text Width"]);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_text_textwidth'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'textWidth(' + value_text + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
