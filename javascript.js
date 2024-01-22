function submitLogin(){
const username = document.getElementById("username").value ;
const password = document.getElementById("password").value;                                                                                                                                                                                                                                               
const message = document.getElementById("message");

if ( username === "musa" && password  === "1234" ){

message.innerHTML = "success! You are logged in"
 message.style.color = "green" ;    
//  window.location.href ='index.html'                                   

}
else if (username === "musa" && password ===""){
    message.innerHTML = " Please! Enter Password!!";
    message.style.color = "red"
}
else if (username === "" && password ==="1234"){
    message.innerHTML = " Please! Enter UserName";
    message.style.color = "red"
}
else if (username === "" && password ===""){
    message.innerHTML = "Please!!! Enter UserName & Password";
    message.style.color = "white"
}
else
{
    message.innerHTML = "error!!! invalid password or userName";
    message.style.color = "red"
}
}
// window.location.href ='index.html'