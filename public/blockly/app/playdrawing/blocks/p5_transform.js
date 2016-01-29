Blockly.Blocks['p5_transform_translate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Translate"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_transform_translate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'translate(' + value_x + ',' + value_y + ');\n' ;
  return code;
};

Blockly.Blocks['p5_transform_rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Rotate"]);
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField(LANG["Angle"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_transform_rotate'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'rotate(' + value_angle +');\n' ;
  return code;
};

Blockly.Blocks['p5_transform_scale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Scale"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_transform_scale'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'scale(' + value_x + ',' + value_y + ');\n' ;
  return code;
};

Blockly.Blocks['p5_transform_push'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Push"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_transform_push'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'push();\n';
  return code;
};

Blockly.Blocks['p5_transform_pop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Pop"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_transform_pop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pop();\n';
  return code;
};