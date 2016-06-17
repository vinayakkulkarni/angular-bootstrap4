function todoValidate() {
	var currentText = document.getElementById("addToDo").value;
	var subdomain = currentText.concat(event.key);
	if (event.keyCode == 32 || !/^([a-zA-Z0-9]+)$/.test(subdomain)) {
		return false;
	}
	return true;
}