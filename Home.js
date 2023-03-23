/*Write a Javascript function to validate a login form having two fields: emailId and password.*/
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["pwd"].value;
   
    /*Write if-else statement to check if the emailid is user@gamil.com and password is password.*/
    if (x == "user@gmail.com" && y == "password") {
        alert("Login Successful");
        return true;
    }
    else {
        alert("Login Unsuccessful");
        return false;
    }

   
}







