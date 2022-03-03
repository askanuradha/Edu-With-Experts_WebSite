function ValidateForm() {
	var x = document.getElementById("username").value;
	if (x == "") {
		alert("Username must be filled out!");
		return false;
	}
}