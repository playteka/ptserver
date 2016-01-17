//- p5_env.js
Blockly.Blocks['p5_env_createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Canvas");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField("Height");
    this.appendDummyInput()
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["2D", "P2D"], ["3D", "WEBGL"]]), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_createcanvas'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'createCanvas(' + value_width + ',' + value_height + ',' + dropdown_type + ');\n' ;
  return code;
};

Blockly.Blocks['p5_env_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("width");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_width'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'width';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_env_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("height");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_height'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'height';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};