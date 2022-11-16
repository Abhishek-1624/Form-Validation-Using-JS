function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length <= 5){
        seterror("name", "*Length of name cannot be less than 5!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>45){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10 ){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    // (?=.*\d)          // should contain at least one digit
    // (?=.*[a-z])       // should contain at least one lower case
    // (?=.*[A-Z])       // should contain at least one upper case
    // [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
    // if (!password.includes(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)){
    //     seterror("pass", "Which contain atleast one letter, one number and one special character and one uppercase letter");
    //     returnval = false;
    // }
    if (password.length < 6){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }else if(password.length>50){
        seterror("pass", "*Password too long!");
        returnval = false;
    }else if(password.search(/\d/) == -1){
        seterror("pass", "*Password should contain atleast one number !");
        returnval = false;
    }else if(password.search(/[a-z]/) == -1){
        seterror("pass", "*Password should contain atleast one lowercase letter !");
        returnval = false;
    }else if(password.search(/[A-Z]/) == -1){
        seterror("pass", "*Password should contain atleast one Uppercase letter !");
        returnval = false;
    }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\?]/) == -1){
        seterror("pass", "*Password should contain atleast one Special Character !");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

