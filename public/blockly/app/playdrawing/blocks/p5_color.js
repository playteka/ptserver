//- p5_color.js

Blockly.Blocks['p5_gray'] = {
  init: function() {
    this.appendValueInput("GRAY")
        .setCheck("Number")
        .appendField("Gray");
    this.setInputsInline(true);
    this.setOutput(true, "color_type");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_gray'] = function(block) {
  var value_gray = Blockly.JavaScript.valueToCode(block, 'GRAY', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'color(' + value_gray + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Color"]);
    this.appendValueInput("RED")
        .setCheck("Number")
        .appendField(LANG["Red"]);
    this.appendValueInput("GREEN")
        .setCheck("Number")
        .appendField(LANG["Green"]);
    this.appendValueInput("BLUE")
        .setCheck("Number")
        .appendField(LANG["Blue"]);
    this.appendValueInput("ALPHA")
        .setCheck("Number")
        .appendField(LANG["Alpha"]);
    this.setInputsInline(true);
    this.setOutput(true, "color_type");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_color'] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_ATOMIC);
  var value_green = Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_blue = Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble JavaScript into code variable.
  var code;
  if(value_alpha){
     code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ',' + value_alpha + ')';
  }
  else{
     code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';
  }
  // return code
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_color_colormode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color Mode")
        .appendField(new Blockly.FieldDropdown([["RGB", "RGB"], ["HSB", "HSB"]]), "MODE");
    this.appendValueInput("RANGE")
        .appendField("Range");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_color_colormode'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(value_range){
    code = 'colorMode(' + dropdown_mode + ',' + value_range + ');\n' ;
  }
  else{
    code = 'colorMode(' + dropdown_mode + ');\n' ;      
  }

  return code;
};

Blockly.Blocks['p5_color_extract'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extract")
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["green", "green"], ["blue", "blue"], ["alpha", "alpha"], ["hue", "hue"], ["saturation", "saturation"], ["brightness", "brightness"]]), "fun");
    this.appendValueInput("COLOR")
        .setCheck("color_type")
        .appendField("From Color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_color_extract'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_fun + '(' + value_color + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['p5_color_lerpcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lerp Color");
    this.appendValueInput("COLOR1")
        .setCheck("color_type")
        .appendField("Color1");
    this.appendValueInput("COLOR2")
        .setCheck("color_type")
        .appendField("Color2");
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Amount");
    this.setInputsInline(true);
    this.setOutput(true, "color_type");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_color_lerpcolor'] = function(block) {
  var value_color1 = Blockly.JavaScript.valueToCode(block, 'COLOR1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color2 = Blockly.JavaScript.valueToCode(block, 'COLOR2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'lerpColor(' + value_color1 +',' + value_color2 + ',' + value_amount + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};