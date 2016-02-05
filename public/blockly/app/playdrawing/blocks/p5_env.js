//- p5_env.js
Blockly.Blocks['p5_env_createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Create Canvas"]);
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendDummyInput()
        .appendField(LANG["Type"])
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

Blockly.Blocks['p5_env_resizecanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Resize Canvas"]);
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_resizecanvas'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'resizeCanvas(' + value_width + ',' + value_height + ');\n' ;
  return code;
};

Blockly.Blocks['p5_env_measurement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[LANG["width"], "width"], [LANG["height"], "height"], 
        [LANG["displayWidth"], "displayWidth"], [LANG["displayHeight"], "displayHeight"], 
        [LANG["windowWidth"], "windowWidth"], [LANG["windowHeight"], "windowHeight"]]), "value");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_measurement'] = function(block) {
  var dropdown_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_value ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_env_fullscreen'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField(LANG["fullScreen"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_fullscreen'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fullScreen(' + value_value + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_env_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[LANG["cursor"], "cursor"], [LANG["noCursor"], "noCursor"]]), "CURSOR");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['p5_env_cursor'] = function(block) {
  var dropdown_cursor = block.getFieldValue('CURSOR');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_cursor + '();\n' ;
  return code;
};


Blockly.Blocks['p5_env_focused'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["focused"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_focused'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'focused';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_env_framerate'] = {
  init: function() {
    this.appendValueInput("FPS")
        .setCheck("Number")
        .appendField(LANG["frameRate"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_framerate'] = function(block) {
  var value_fps = Blockly.JavaScript.valueToCode(block, 'FPS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'frameRate(' + value_fps + ');\n' ;
  return code;
};

Blockly.Blocks['p5_env_framecount'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["frameCount"]);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_framecount'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'frameCount';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['p5_env_datetime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
            [[LANG["year"], "year"], [LANG["month"], "month"], [LANG["day"], "day"], 
             [LANG["hour"], "hour"], [LANG["minute"], "minute"], [LANG["second"], "second"], 
             [LANG["millis"], "millis"]]), "DATETIME");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_env_datetime'] = function(block) {
  var dropdown_datetime = block.getFieldValue('DATETIME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_datetime + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

