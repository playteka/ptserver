//- p5_math.js

Blockly.Blocks['p5_math_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["PI", "PI"], ["1/2 PI", "HALF_PI"], ["1/4 PI", "QUARTER_PI"], ["2 PI", "TWO_PI"]]), "CONSTANT");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_constant'] = function(block) {
  var dropdown_constant = block.getFieldValue('CONSTANT');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_constant;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random");
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField("min");
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField("max");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_random'] = function(block) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random(' + value_min + ',' + value_max + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_math_abs'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("abs");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_abs'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'abs(' + value_x + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_dist2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dist");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("X2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("Y2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_dist2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dist(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_dist3d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dist 3D");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1");
    this.appendValueInput("Z1")
        .setCheck("Number")
        .appendField("Z1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("X2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("Y2");
    this.appendValueInput("Z2")
        .setCheck("Number")
        .appendField("Z2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_dist3d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z1 = Blockly.JavaScript.valueToCode(block, 'Z1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z2 = Blockly.JavaScript.valueToCode(block, 'Z2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dist(' + value_x1 + ',' + value_y1 + ',' + value_z1 + ',' + value_x2 + ',' + value_y2 + ',' + value_z2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("map");
    this.appendValueInput("VALUE")
        .appendField("value");
    this.appendValueInput("CURRENT_START")
        .setCheck("Number")
        .appendField("current start");
    this.appendValueInput("CURRENT_STOP")
        .setCheck("Number")
        .appendField("current stop");
    this.appendValueInput("TARGET_START")
        .setCheck("Number")
        .appendField("target start");
    this.appendValueInput("TARGET_STOP")
        .setCheck("Number")
        .appendField("target stop");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_map'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_current_start = Blockly.JavaScript.valueToCode(block, 'CURRENT_START', Blockly.JavaScript.ORDER_ATOMIC);
  var value_current_stop = Blockly.JavaScript.valueToCode(block, 'CURRENT_STOP', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_start = Blockly.JavaScript.valueToCode(block, 'TARGET_START', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_stop = Blockly.JavaScript.valueToCode(block, 'TARGET_STOP', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'map(' + value_value + ',' + value_current_start + ',' + value_current_stop 
  								  + ',' + value_target_start + ',' + value_target_stop + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_math_ceil'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("ceil");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_ceil'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ceil(' + value_x + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_floor'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("floor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_floor'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'floor(' + value_x + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_math_contrain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("constrain");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("value");
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField("min");
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField("max");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_contrain'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'contrain(' + value_value + ',' + value_min + ',' + value_max + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

