var userName = JSON.parse(localStorage.getItem("userName"));
if ( userName != null){
    document.querySelector("h1").innerHTML = `Hello ${userName}`;
}
function logOut (){
    location.href = "../LogIn/index.html";
    localStorage.removeItem("userName");
}
document.querySelector("a#logOut").addEventListener("click" , function(){
    logOut();
})