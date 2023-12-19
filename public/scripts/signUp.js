let Uname = false,pswd=false,rePswd=false,Uemail=false;

const nameError = document.getElementById('name_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function userCheck(){
  const username = document.getElementById('username');
  const name_length_error = document.getElementById('name_length_error');
  if(username.value.length >= 2 || username.value===""){
    name_length_error.classList.add("d-none");
    username.classList.remove("border_alert");
    Uname = true;
  }else{
    name_length_error.classList.remove("d-none")
    username.classList.add("border_alert");
    Uname=false;
  }
}

function emailCheck(){
  const email = document.getElementById('email');
  const email_error = document.getElementById('email_error');
  if(emailPattern.test(email.value)|| email.value===""){
    email.classList.remove("border_alert");
    email_error.classList.add('d-none');
    Uemail=true;
  }else{
    email_error.classList.remove('d-none');
    email.classList.add("border_alert");
    Uemail=false;
  }
}

function passwordCheck(){
  const password = document.getElementById('password');
  const password_error =document.getElementById('password_error');
  if(/[a-z]/g.test(password.value) && /[A-Z]/g.test(password.value) && /[0-9]/g.test(password.value) && password.value.length>=8 || password.value === ""){
    password_error.classList.add('d-none');
    password.classList.remove("border_alert");
    rePassword.removeAttribute('readonly');
    pswd=true;
  }else if(!/[a-z]/g.test(password.value)){
    password_error.textContent="small letter required";
    password_error.classList.remove('d-none');
    password.classList.add("border_alert");
    pswd=false
  }else if(!/[A-Z]/g.test(password.value)){
    password_error.textContent="capital letter required";
    password_error.classList.remove('d-none');
    password.classList.add("border_alert");
    pswd=false
  }else if(!/[0-9]/g.test(password.value)){
    password_error.textContent="number required";
    password_error.classList.remove('d-none');
    password.classList.add("border_alert");
    pswd=false
  }else if(password.value.length<8 ){
    password_error.textContent="minimum 8 characters required";
    password_error.classList.remove('d-none');
    password.classList.add("border_alert");
    pswd=false
  }
}

function rePasswordCheck(){
  const password =document.getElementById('password').value;
  const rePassword = document.getElementById('rePassword');
  const repassword_error =document.getElementById('repassword_error');
  if(password !== rePassword.value){
    repassword_error.classList.remove('d-none');
    repassword_error.textContent="Password don't match";
    rePassword.classList.add("border_alert");
    rePswd=false;
  }else if( rePassword.value == ""){
    repassword_error.classList.add('d-none');
    rePassword.classList.remove("border_alert");
  }else{
    repassword_error.classList.add('d-none');
    rePassword.classList.remove("border_alert");
    rePswd=true;
  }
}

function validate(){
let required=true;
const inputs = document.getElementsByTagName('input');
const errors =document.getElementsByTagName('p');
for(i=0; i<inputs.length; i++){
if(inputs[i].value===""){
  errors[i].classList.remove('d-none');
  errors[i].textContent="*this field is required";
  required=false;
}else{
  errors[i].classList.add('d-none');
}
}
if(Uname && Uemail && pswd && rePswd && required){
return true;
}else{
return false;
}
}