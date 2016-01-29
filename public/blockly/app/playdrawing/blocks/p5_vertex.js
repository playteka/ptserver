Blockly.Blocks['p5_vertex_beginshape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["beginShape"])
        .appendField(new Blockly.FieldDropdown([[LANG["POLYGON"], "POLYGON"], [LANG["POINTS"], "POINTS"],
         [LANG["LINES"], "LINES"], [LANG["TRIANGLES"], "TRIANGLES"], 
         [LANG["TRIANGLE_FAN"], "TRIANGLE_FAN"], [LANG["TRIANGLE_STRIP"], "TRIANGLE_STRIP"], 
         [LANG["QUADS"], "QUADS"], [LANG["QUAD_STRIP"], "QUAD_STRIP"]]), "KIND");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_beginshape'] = function(block) {
  var dropdown_kind = block.getFieldValue('KIND');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_kind == 'POLYGON') {
      var code = 'beginShape();\n';
  }
  else{
      var code = 'beginShape(' + dropdown_kind + ');\n' ;
  }
  return code;
};

Blockly.Blocks['p5_vertex_endshape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["endShape"])
        .appendField(new Blockly.FieldDropdown([[LANG["OPEN"], "OPEN"], [LANG["CLOSE"], "CLOSE"]]), "MODE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_endshape'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_mode == 'OPEN') {
      var code = 'endShape();\n';
  }
  else{
      var code = 'endShape(' + dropdown_mode + ');\n' ;
  }
  return code;
};

Blockly.Blocks['p5_vertex_vertex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["vertex"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_vertex'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vertex(' + value_x + ',' + value_y + ');\n' ;
  return code;
};

Blockly.Blocks['p5_vertex_curvevertex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["curve Vertex"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_curvevertex'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'curveVertex(' + value_x + ',' + value_y + ');\n' ;
  return code;
};

Blockly.Blocks['p5_vertex_quadraticvertex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["quadratic Vertex"]);
    this.appendValueInput("CX")
        .setCheck("Number")
        .appendField("cx");
    this.appendValueInput("CY")
        .setCheck("Number")
        .appendField("cy");
    this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("x3");
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField("y3");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_quadraticvertex'] = function(block) {
  var value_cx = Blockly.JavaScript.valueToCode(block, 'CX', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cy = Blockly.JavaScript.valueToCode(block, 'CY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'quadraticVertex(' + ',' + value_cx + ',' + value_cy + ',' + value_x3 + ',' + value_y3 + ');\n' ;
  return code;
};

Blockly.Blocks['p5_vertex_beziervertex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["bezier Vertex"]);
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("x2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("y2");
    this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("x3");
    this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField("y3");
    this.appendValueInput("X4")
        .setCheck("Number")
        .appendField("x4");
    this.appendValueInput("Y4")
        .setCheck("Number")
        .appendField("y4");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_beziervertex'] = function(block) {
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'X4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y4 = Blockly.JavaScript.valueToCode(block, 'Y4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'bezierVertex(' + value_x2 + ',' + value_y2 + ',' + value_x3 + ',' + value_y3 + ',' + value_x4 + ',' + value_y4 + ');\n' ;
  return code;
};

Blockly.Blocks['p5_vertex_begincontour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["beginContour"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_begincontour'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'beginContour();\n';
  return code;
};

Blockly.Blocks['p5_vertex_endcontour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["endContour"]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_vertex_endcontour'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'endContour();\n';
  return code;
};