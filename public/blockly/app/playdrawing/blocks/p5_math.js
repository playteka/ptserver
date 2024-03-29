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
        .appendField(LANG["random"]);
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField(LANG["min"]);
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField(LANG["max"]);
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

Blockly.Blocks['p5_math_randomgaussian'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["randomGaussian"]);
    this.appendValueInput("MEAN")
        .appendField(LANG["Mean"]);
    this.appendValueInput("SD")
        .appendField(LANG["S.Deviation"]);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_randomgaussian'] = function(block) {
  var value_mean = Blockly.JavaScript.valueToCode(block, 'MEAN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sd = Blockly.JavaScript.valueToCode(block, 'SD', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'randomGaussian(' + value_mean + ',' + value_sd + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_dist2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["dist"]);
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
        .appendField(LANG["dist 3D"]);
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
        .appendField(LANG["map"]);
    this.appendValueInput("VALUE")
        .appendField(LANG["value"]);
    this.appendValueInput("CURRENT_START")
        .setCheck("Number")
        .appendField(LANG["current start"]);
    this.appendValueInput("CURRENT_STOP")
        .setCheck("Number")
        .appendField(LANG["current stop"]);
    this.appendValueInput("TARGET_START")
        .setCheck("Number")
        .appendField(LANG["target start"]);
    this.appendValueInput("TARGET_STOP")
        .setCheck("Number")
        .appendField(LANG["target stop"]);
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


Blockly.Blocks['p5_math_constrain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(LANG["constrain"]);
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(LANG["value"]);
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField(LANG["min"]);
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField(LANG["max"]);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_constrain'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'constrain(' + value_value + ',' + value_min + ',' + value_max + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_trig'] = {
  init: function() {
    var TRIGS = [["sin", "sin"], ["cos", "cos"], ["tan", "tan"], 
                 ["asin", "asin"], ["acos", "acos"], ["atan", "atan"], ["atan2", "atan2"]];
    var dropdown = new Blockly.FieldDropdown(TRIGS, function(option) {
      var additionalInput = (option == 'atan2');
      this.sourceBlock_.updateShape_(additionalInput);
    });
    
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(dropdown, "fun");
        
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  
  /**
   * Create XML to represent whether the 'additionalInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */  
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var additionalInput = (this.getFieldValue('fun') == 'atan2');
    container.setAttribute('additional_input', additionalInput);
    return container;
  },
  
  /**
   * Parse XML to restore the 'additionalInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var additionalInput = (xmlElement.getAttribute('additional_input') == 'true');
    this.updateShape_(additionalInput);
  },
  
  /**
   * Modify this block to have (or not have) the additional input for 'atan2'.
   * @param {boolean} additionalInput True if this block has additional input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(addtionalInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('ADDITION');
    if (addtionalInput) {
      if (!inputExists) {
        this.appendValueInput('ADDITION')
            .setCheck('Number');
      }
    } else if (inputExists) {
      this.removeInput('ADDITION');
    }
  }
};

Blockly.JavaScript['p5_math_trig'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  //Assemble JavaScript into code variable.
  var code;
  if(dropdown_fun == 'atan2'){
    var value_addtion = Blockly.JavaScript.valueToCode(block, 'ADDITION', Blockly.JavaScript.ORDER_ATOMIC); 
    code = dropdown_fun + '(' + value_value + ',' + value_addtion + ')' ;    
  }
  else{
    code = dropdown_fun + '(' + value_value +')' ;    
  }
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_anglemode'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField(LANG["Angle Mode"])
        .appendField(new Blockly.FieldDropdown([[LANG["RADIANS"], "RADIANS"], [LANG["DEGREES"], "DEGREES"]]), "MODE");
    this.setInputsInline(true);
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_anglemode'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'angleMode(' + dropdown_mode + ');\n' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};



Blockly.Blocks['p5_math_rounding'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([[LANG["round"], "round"], [LANG["ceil"], "ceil"], [LANG["floor"], "floor"]]), "fun");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_rounding'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_fun + '(' + value_value +')' ;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_misc'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([[LANG["abs"], "abs"], ["exp", "exp"], ["log", "log"], [LANG["sq"], "sq"], [LANG["sqrt"], "sqrt"]]), "fun");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['p5_math_misc'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  //Assemble JavaScript into code variable.
  var code = dropdown_fun + '(' + value_value +')' ;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_minmax'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Array")
        .appendField(new Blockly.FieldDropdown([[LANG["min"], "min"], [LANG["max"], "max"]]), "fun");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_minmax'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_fun + '(' + value_value +')' ;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_math_radegrees'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["radians", "radians"], ["degrees", "degrees"]]), "fun");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['p5_math_radegrees'] = function(block) {
  var dropdown_fun = block.getFieldValue('fun');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_fun + '(' + value_value + ')' ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

