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
  // Assemble JavaScript into code variable.
  var code = 'color(' + value_red + ',' + value_green + ',' + value_blue + ')';
  // return code
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};