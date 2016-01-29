//- p5_pen.js

Blockly.Blocks['p5_background'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck(["Number", "color_type"])
        .appendField(LANG["Background"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_background'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'background(' + value_color +');\n';
  return code;
};

Blockly.Blocks['p5_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Clear"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'clear();\n';
  return code;
};

Blockly.Blocks['p5_fill'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck(["Number", "color_type"])
        .appendField(LANG["Fill"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_fill'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fill(' + value_color +');\n';
  return code;
};

Blockly.Blocks['p5_nofill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["NoFill"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_nofill'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'noFill();\n';
  return code;
};

Blockly.Blocks['p5_stroke'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck(["Number", "color_type"])
        .appendField(LANG["Stroke Color"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_stroke'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'stroke(' + value_color +');\n';
  return code;
};

Blockly.Blocks['p5_nostroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["NoStroke"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_nostroke'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'nostroke();\n';
  return code;
};

Blockly.Blocks['p5_strokeWeight'] = {
  init: function() {
    this.appendValueInput("WEIGHT")
        .setCheck("Number")
        .appendField(LANG["Stroke Weight"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_strokeWeight'] = function(block) {
  var value_weight = Blockly.JavaScript.valueToCode(block, 'WEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'strokeWeight(' + value_weight +');\n';
  return code;
};