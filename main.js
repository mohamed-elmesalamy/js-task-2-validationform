//create account form

// function formValidate() {
//   var firstName = document.getElementById ("firstName").value;
//   var surName =  document.getElementById("lastName").value;
//   var email =  document.getElementById("email").value;
//   var password =  document.getElementById("password").value;
//   var error =  document.getElementById("error");
//   var text = " " ;

// if (firstName.length < 5) {
//     text = "Please enter your first name.";
//     error.innerHTML = text;
//     return false;
//   }

//   else if (surName.length < 5) {
//     text = "Please enter your sur name.";
//     error.innerHTML = text;
//     return false;
//   }

//   else if (email.indexOf("@") == -1 || email.length < 10 ) {
//     text = "Please enter your email.";
//     error.innerHTML = text;
//     return false;
//   }

//   else if (password.length < 8 ) {
//     text = "Please enter a password.";
//     error.innerHTML = text;
//     return false;
//   }

// else{
//   alert ("Done");
//   return true;
// }
// }


function formValidate() {
  var firstName = document.getElementById("firstName").value;
  var surName = document.getElementById("surName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = "";

  if (firstName.length < 5) {
    text = "Please enter your first name.";
    error.innerHTML = text;
    return false;
  }

  else if (surName.length < 5) {
    text = "Please enter your sur name.";
    error.innerHTML = text;
    return false;
  }

  else if (email.indexOf("@") == -1 || email.length < 10) {
    text = "Please enter a valid email.";
    error.innerHTML = text;
    return false;
  }

  else if (password.length < 8) {
    text = "Please enter a password.";
    error.innerHTML = text;
    return false;
  }

  else {
    alert("Done");
    return true;
  }
}





// log in form


function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = " " ;

  if (email.indexOf("@") == -1 || email.length < 10 ) {
    text = "Please enter your email.";
    error.innerHTML = text;
    return false;
  }
  else if (password.length < 8 ) {
    text = "Please enter a password.";
    error.innerHTML = text;
    return false;
  }

  else{
    alert ("Done");
    return true;
}
}