
function ValidateValue() {

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var Confirm = document.getElementById("Confirm").value;

    var result = document.getElementById("result");

    result.setAttribute("class", "alert theme-danger text-center d-block");
    result.style.backgroundColor = "#f7d6d9";

    if (user == "" && email == "" && pass == "" && Confirm == "") {

        result.innerHTML = "Enter Data";
        return false;

    } else if (user.length < 5 || user.length > 15) {

        result.innerHTML = "Enter 5-15 characters in name";
        return false;

    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 3) == -1) {

        result.innerHTML = "Enter Valid Email";
        return false;

    } else if (pass.length < 8) {

        result.innerHTML = "Weak Password";
        return false;

    } else if (pass != Confirm) {

        result.innerHTML = "Passwords Do Not Match";
        return false;

    } else {

        result.innerHTML = "All Data Is Valid";
        return true;

    }
}
