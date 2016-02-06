Blockly.Blocks['p5_3d_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Point"]);
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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'point(' + value_x + ',' + value_y + value_z + ');\n';
  return code;
};

Blockly.Blocks['p5_3d_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Line"]);
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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z1 = Blockly.JavaScript.valueToCode(block, 'Z1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z2 = Blockly.JavaScript.valueToCode(block, 'Z2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'line(' + value_x1 + ',' + value_y1 + ',' + value_z1 + ',' 
                     + value_x2 + ',' + value_y2 + ',' + value_z2 + ',' + ');\n';
  return code;
};

Blockly.Blocks['p5_3d_plane'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["plane"]);
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_plane'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'plane(' + value_width + ',' + value_height + ');\n' ;
  return code;
};

Blockly.Blocks['p5_3d_sphere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["sphere"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField(LANG["Radius"]);
    this.appendValueInput("DETAIL")
        .setCheck("Number")
        .appendField(LANG["[detail]"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_sphere'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_detail = Blockly.JavaScript.valueToCode(block, 'DETAIL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(value_detail == ''){
    code = 'sphere(' + value_radius + ');\n' ;      
  }
  else{
    code = 'sphere(' + value_radius + ',' + value_detail + ');\n' ;      
  }
  return code;
};

Blockly.Blocks['p5_3d_cylinder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["cylinder"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField(LANG["Radius"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendValueInput("DETAIL")
        .setCheck("Number")
        .appendField(LANG["[detail]"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_cylinder'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_detail = Blockly.JavaScript.valueToCode(block, 'DETAIL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(value_detail == ''){
    code = 'cylinder(' + value_radius + ',' + value_height + ');\n' ;      
  }
  else{
    code = 'cylinder(' + value_radius + ',' + value_height + ',' + value_detail + ');\n' ;      
  }
  return code;
};

Blockly.Blocks['p5_3d_cone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["cone"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField(LANG["Radius"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendValueInput("DETAIL")
        .setCheck("Number")
        .appendField(LANG["[detail]"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_cone'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_detail = Blockly.JavaScript.valueToCode(block, 'DETAIL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(value_detail == ''){
    code = 'cone(' + value_radius + ',' + value_height + ');\n' ;      
  }
  else{
    code = 'cone(' + value_radius + ',' + value_height + ',' + value_detail + ');\n' ;      
  }
  return code;
};

Blockly.Blocks['p5_3d_torus'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["torus"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField(LANG["Radius"]);
    this.appendValueInput("TUBERADIUS")
        .setCheck("Number")
        .appendField(LANG["Tube Radius"]);
    this.appendValueInput("DETAIL")
        .setCheck("Number")
        .appendField(LANG["[detail]"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_torus'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tuberadius = Blockly.JavaScript.valueToCode(block, 'TUBERADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_detail = Blockly.JavaScript.valueToCode(block, 'DETAIL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(value_detail == ''){
    code = 'torus(' + value_radius + ',' + value_tuberadius + ');\n' ;      
  }
  else{
    code = 'torus(' + value_radius + ',' + value_tuberadius + ',' + value_detail + ');\n' ;      
  }
  return code;
};

Blockly.Blocks['p5_3d_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["box"]);
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendValueInput("DEPTH")
        .setCheck("Number")
        .appendField(LANG["Depth"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_3d_box'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'DEPTH', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'box(' + value_width + ',' + value_height + ',' + value_depth + ');\n' ;      
  return code;
};