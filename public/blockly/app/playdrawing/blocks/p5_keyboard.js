//- p5_keyboard.js
Blockly.Blocks['p5_keyboard_keyispressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keyispressed'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keyIsPressed';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_keyboard_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_key'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Key';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_keyboard_keycode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KeyCode");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keycode'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'KeyCode';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_keyboard_code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["BACKSPACE", "BACKSPACE"], ["DELETE", "DELETE"], ["ENTER", "ENTER"], ["RETURN", "RETURN"], ["TAB", "TAB"], ["ESCAPE", "ESCAPE"], ["SHIFT", "SHIFT"], ["option", "OPTIONNAME"], ["CONTROL", "CONTROL"], ["ALT", "ALT"], ["UP_ARROW", "UP_ARROW"], ["DOWN_ARROW", "DOWN_ARROW"], ["LEFT_ARROW", "LEFT_ARROW"], ["RIGHT_ARROW", "RIGHT_ARROW"]]), "CODE");
    this.setInputsInline(true);
    this.setOutput(true,"Number");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_code'] = function(block) {
  var dropdown_code = block.getFieldValue('CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_code;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_keyboard_keypressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key Pressed");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keypressed'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function keyPressed() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_keyboard_keyreleased'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key Released");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keyreleased'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function keyReleased() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_keyboard_keytyped'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Key Typed");
    this.appendStatementInput("BODY");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keytyped'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function keyTyped() { \n';
  code += statements_body;
  code += '}\n'
  return code;
};

Blockly.Blocks['p5_keyboard_keyisdown'] = {
  init: function() {
    this.appendValueInput("CODE")
        .setCheck("Number")
        .appendField("Key is down");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_keyboard_keyisdown'] = function(block) {
  var value_code = Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'keyIsDown('+ value_code + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};