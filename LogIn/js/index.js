// Intializing Variables

var emailLogIn = document.getElementById("email");
var passwordLogIn = document.getElementById("password");

// intializing users list
var usersList = [] ;

// adding the elements from the local storage

if (localStorage.getItem("users") != null){
    usersList = JSON.parse(localStorage.getItem("users"));
}

// checking LogIn

function checkLogIn () {
    if ( isInputsValid() ){
        for (var i = 0 ; i < usersList.length ; i++){
            if (emailLogIn.value.toLowerCase() == usersList[i].email.toLowerCase() && passwordLogIn.value == usersList[i].password){
                localStorage.setItem("userName", JSON.stringify(usersList[i].name));
                location.href = '../home/index.html';
            }
        }
        alertError("Email or Password might be wrong")
    }else{
        alertError("Please fill all inputs") ;
    }
}

var btn = document.getElementById("logInBtn")
btn.addEventListener("click" , function(){
    checkLogIn();
})

function isInputsValid () {
    return emailLogIn.value.length > 0 && passwordLogIn.value.length > 0 ;
}

// Displaying Error Message

function alertError(errorMessage){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }