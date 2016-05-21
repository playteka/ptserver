//- p5_structure.js
Blockly.Blocks['p5_setup'] = {
  init: function() {
    this.appendStatementInput("body")
        .appendField(LANG["setup"]);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['p5_setup'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
  // TODO: Assemble JavaScript into code variable.
  var code = "function setup() {\n";
  code += statements_body;
  code += "}\n"
  return code;
};

Blockly.Blocks['p5_draw'] = {
  init: function() {
    this.appendStatementInput("body")
        .appendField(LANG["draw"]);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['p5_draw'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
  // TODO: Assemble JavaScript into code variable.
  var code = "function draw() {\n";
  code += statements_body;
  code += "}\n"
  return code;
};

Blockly.Blocks['p5_preload'] = {
  init: function() {
    this.appendStatementInput("body")
        .appendField(LANG["preload"]);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['p5_preload'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
  // TODO: Assemble JavaScript into code variable.
  var code = "function preload() {\n";
  code += statements_body;
  code += "}\n"
  return code;
};

Blockly.Blocks['p5_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Loop"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_loop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'loop();\n';
  return code;
};

Blockly.Blocks['p5_noloop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["NoLoop"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_noloop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'noLoop();\n';
  return code;
};