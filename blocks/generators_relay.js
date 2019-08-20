Blockly.JavaScript["relay_block"] = function(block) {
	var text_pin = block.getFieldValue("PIN");
	var dropdown_status = block.getFieldValue("STATUS");
	// TODO: Assemble JavaScript into code variable.
	var status = `LOW`;
	if (dropdown_status == "HIGH") {
	  status = `HIGH`;
	}
	var code = `digitalWrite(${text_pin}, ${status});`;
	return code;
};