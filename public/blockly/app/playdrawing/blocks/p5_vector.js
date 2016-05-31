Blockly.Blocks['p5_vector_createvector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Create Vector"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_createvector'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'createVector(' + value_x + ',' + value_y + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_vector_createvector3d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Create Vector3D"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_createvector3d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'createVector(' + value_x + ',' + value_y + ',' + value_z + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_vector_set'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("B")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_set'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_a +'.set(' + value_b + ');\n'  ;
  return code;
};


Blockly.Blocks['p5_vector_add'] = {
  init: function() {
    this.appendValueInput("SUM")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("ADD1")
        .setCheck(null)
        .appendField("=");
    this.appendValueInput("ADD2")
        .setCheck(null)
        .appendField("+");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_add'] = function(block) {
  var value_sum = Blockly.JavaScript.valueToCode(block, 'SUM', Blockly.JavaScript.ORDER_ATOMIC);
  var value_add1 = Blockly.JavaScript.valueToCode(block, 'ADD1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_add2 = Blockly.JavaScript.valueToCode(block, 'ADD2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_sum + '= p5.Vector.add(' + value_add1 + ',' + value_add2 + ');\n';
  return code;
};

Blockly.Blocks['p5_vector_sub'] = {
  init: function() {
    this.appendValueInput("DIFF")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("MINUEND")
        .setCheck(null)
        .appendField("=");
    this.appendValueInput("SUBTRACTOR")
        .setCheck(null)
        .appendField("-");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_sub'] = function(block) {
  var value_diff = Blockly.JavaScript.valueToCode(block, 'DIFF', Blockly.JavaScript.ORDER_ATOMIC);
  var value_minuend = Blockly.JavaScript.valueToCode(block, 'MINUEND', Blockly.JavaScript.ORDER_ATOMIC);
  var value_subtractor = Blockly.JavaScript.valueToCode(block, 'SUBTRACTOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_diff + '= p5.Vector.sub(' + value_minuend + ',' + value_subtractor + ');\n';
  return code;
};

Blockly.Blocks['p5_vector_mult'] = {
  init: function() {
    this.appendValueInput("PRODUCT")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("MULT1")
        .setCheck(null)
        .appendField("=");
    this.appendValueInput("MULT2")
        .setCheck(null)
        .appendField("×");
    this.appendDummyInput()
        .appendField("[" + LANG["Number"] + "]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_mult'] = function(block) {
  var value_product = Blockly.JavaScript.valueToCode(block, 'PRODUCT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mult1 = Blockly.JavaScript.valueToCode(block, 'MULT1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mult2 = Blockly.JavaScript.valueToCode(block, 'MULT2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_product + '= p5.Vector.mult(' + value_mult1 + ',' + value_mult2 + ');\n';
  return code;
};

Blockly.Blocks['p5_vector_div'] = {
  init: function() {
    this.appendValueInput("QUOTIENT")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("DIV1")
        .setCheck(null)
        .appendField("=");
    this.appendValueInput("DIV2")
        .setCheck(null)
        .appendField("÷");
    this.appendDummyInput()
        .appendField("[" + LANG["Number"] + "]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_div'] = function(block) {
  var value_quotient = Blockly.JavaScript.valueToCode(block, 'QUOTIENT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_div1 = Blockly.JavaScript.valueToCode(block, 'DIV1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_div2 = Blockly.JavaScript.valueToCode(block, 'DIV2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_quotient + '= p5.Vector.div(' + value_div1 + ',' + value_div2 + ');\n';
  return code;
};

Blockly.Blocks['p5_vector_mag'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendDummyInput()
        .appendField(LANG["Length"]);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_mag'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var + '.mag()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_vector_limit'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendValueInput("LIMIT")
        .setCheck("Number")
        .appendField(LANG["Limit"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_limit'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_limit = Blockly.JavaScript.valueToCode(block, 'LIMIT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var + '.limit(' + value_limit +');\n' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['p5_vector_normalize'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(LANG["Vector"]);
    this.appendDummyInput()
        .appendField(LANG["Normalize"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vector_normalize'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var + '.normalize();\n';
  return code;
};

