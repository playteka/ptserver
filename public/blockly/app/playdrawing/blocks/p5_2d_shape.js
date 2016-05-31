//- p5_2d_shape.js
Blockly.Blocks['p5_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Point"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'point(' + value_x + ',' + value_y + ');\n';
  return code;
};

Blockly.Blocks['p5_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Line"]);
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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'line(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ');\n';
  return code;
};

Blockly.Blocks['p5_triangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Triangle"]);
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
    this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("X3");
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField("Y3");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_triangle'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'triangle(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ',' + value_x3 + ',' + value_y3 + ');\n';
  return code;
};


Blockly.Blocks['p5_2dshape_rectmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["rectMode"])
        .appendField(new Blockly.FieldDropdown([[LANG["CORNER"], "CORNER"], [LANG["CORNERS"], "CORNERS"], [LANG["RADIUS"], "RADIUS"], [LANG["CENTER"], "CENTER"]]), "MODE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_2dshape_rectmode'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'rectMode(' + dropdown_mode + ');\n';
  return code;
};



Blockly.Blocks['p5_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Rectangle"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'rect(' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ');\n';
  return code;
};

Blockly.Blocks['p5_round_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Round Rectangle"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField(LANG["Radius"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_round_rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'rect(' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ',' + value_radius + ');\n';
  return code;
};

Blockly.Blocks['p5_quad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Quad"]);
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
    this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("X3");
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField("Y3");
    this.appendValueInput("X4")
        .setCheck("Number")
        .appendField("X4");
    this.appendValueInput("Y4")
        .setCheck("Number")
        .appendField("Y4");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_quad'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'X4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y4 = Blockly.JavaScript.valueToCode(block, 'Y4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'quad(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ',' 
                     + value_x3 + ',' + value_y3 + ',' + value_x4 + ',' + value_y4 + ');\n';
  return code;
};

Blockly.Blocks['p5_2dshape_ellipsemode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["ellipseMode"])
        .appendField(new Blockly.FieldDropdown([[LANG["CENTER"], "CENTER"], [LANG["CORNER"], "CORNER"], [LANG["CORNERS"], "CORNERS"], [LANG["RADIUS"], "RADIUS"]]), "MODE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_2dshape_ellipsemode'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ellipseMode(' + dropdown_mode + ');\n';
  return code;
};


Blockly.Blocks['p5_ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Ellipse"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ellipse(' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ');\n';
  return code;
};


Blockly.Blocks['p5_arc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Arc"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(LANG["Width"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(LANG["Height"]);
    this.appendValueInput("START")
        .setCheck("Number")
        .appendField(LANG["Start"]);
    this.appendValueInput("STOP")
        .setCheck("Number")
        .appendField(LANG["Stop"]);
    this.appendDummyInput()    
        .appendField(new Blockly.FieldDropdown([[LANG["OPEN"], "OPEN"], [LANG["CHORD"], "CHORD"], [LANG["PIE"], "PIE"]]), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_arc'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
  var value_stop = Blockly.JavaScript.valueToCode(block, 'STOP', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'arc(' + value_x + ',' + value_y + ',' 
                        + value_width + ',' + value_height + ',' 
                        + value_start + ',' + value_stop + ','
                        + dropdown_mode + ');\n';
  return code;
};

Blockly.Blocks['p5_bezier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["Bezier"]);
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
    this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("X3");
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField("Y3");
    this.appendValueInput("X4")
        .setCheck("Number")
        .appendField("X4");
    this.appendValueInput("Y4")
        .setCheck("Number")
        .appendField("Y4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_bezier'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'X4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y4 = Blockly.JavaScript.valueToCode(block, 'Y4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'bezier(' + value_x1 + ',' + value_y1 + ','
                       + value_x2 + ',' + value_y2 + ',' 
                       + value_x3 + ',' + value_y3 + ','
                       + value_x4 + ',' + value_y4 + ','
                       + ');\n';
  return code;
};