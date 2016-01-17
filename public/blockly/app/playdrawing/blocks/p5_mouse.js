//- p5_mouse.js

Blockly.Blocks['p5_mouse_mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousex'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_mouse_mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseY");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousey'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_mouse_mouseispressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mouseispressed'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseIsPressed';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_mouse_mousemoved'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Moved");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousemoved'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function mouseMoved() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_mouse_mousedragged'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Dragged");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousedragged'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function mouseDragged() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_mouse_mousepressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Pressed");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousepressed'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function mousePressed() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};


Blockly.Blocks['p5_mouse_mousereleased'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Released");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mousereleased'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function mouseReleased() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_mouse_mouseclicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Clicked");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_mouse_mouseclicked'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function mouseClicked() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};