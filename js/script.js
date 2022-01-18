let login=document.getElementById("login");
let modal_login=document.getElementById("modal-login");
let close_login=document.getElementById("close-btn");
let signin=document.getElementById("signin");
let modal_signin=document.getElementById("modal-signin");
let close_signin=document.getElementById("close-signin-btn");

login.onclick=function () {
    modal_signin.classList.remove("active");
    modal_login.classList.add("active");
}
close_login.onclick=function () {
    modal_login.classList.remove("active");
    
}

signin.onclick=function () {
    modal_login.classList.remove("active");
    modal_signin.classList.add("active");
}
close_signin.onclick=function () {
    modal_signin.classList.remove("active");
    
}
window.onscroll=function () {
    modal_login.classList.remove("active");
    modal_signin.classList.remove("active");
    
}
