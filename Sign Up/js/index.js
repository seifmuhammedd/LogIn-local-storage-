// Intializing Variables

var signUpName = document.getElementById("userName");
var signUpEmail = document.getElementById("emailSignUp");
var signUpPassword = document.getElementById("passwordSignUp");

// Intializing Users Array
var usersList = [];

// Checking if i have registerd users

if (localStorage.getItem("users") != null) {
  usersList = JSON.parse(localStorage.getItem("users"));
}

// Add User

function addUser() {
  if (
    validation(signUpName) &&
    validation(signUpEmail) &&
    validation(signUpPassword) &&
    checkEmail()
  ) {
    var user = {
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    location.href = "../LogIn/index.html";
  } else {
   checkEmail() ? alertError("Please fill all inputs correctly") : alertError("Email already exists")
  }
}
var signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", function () {
  addUser();
});

// Validation

function validation(input) {
  myElementID = input.id;
  var term = input.value;
  var myRegex = {
    userName: /^[A-Z]\w{3,15}$/,
    emailSignUp: /^[a-zA-z]\w{1,15}@(gmail|yahoo|outlook)\.com$/,
    passwordSignUp: /^.{8,14}$/,
  };
  var regex = myRegex[myElementID];
  if (regex.test(term)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

var inputFields = document.querySelectorAll("input");
for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function () {
    validation(this);
  });
}

// Checking if the email already exists

function checkEmail() {
  if (usersList != null) {
    for (var i = 0; i < usersList.length; i++) {
      if (signUpEmail.value.toLowerCase() == usersList[i].email.toLowerCase()) {
        console.log(usersList[i].email.toLowerCase())
        
        return false;
      }
    }
    return true;
  } else {
    return true;
  }
}
function alertError(errorMessage){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMessage,
  });
}