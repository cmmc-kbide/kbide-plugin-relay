Blockly.Blocks["relay_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RELAY PIN")
        .appendField(new Blockly.FieldTextInput("2"), "PIN")
        .appendField("SET")
        .appendField(
          new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]),
          "STATUS"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};