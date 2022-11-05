function validation(e){
    e.preventDefault();
    var first_name=document.getElementById('first_name').value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var telephone = document.getElementById("telephone").value;
    var textarea =document.getElementById("text-aria").value;
    
    var first_namecheck=/^[0-9A-Za-z. ]{3,16}$/;
    var last_namecheck = /^[A-Za-z. ]{3,30}$/;
    var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{6,20}$/;
    var emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var telephonecheck =
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    var textareacheck = /^[A-Za-z0-9. ]{8,50}$/

    if(first_namecheck.test(first_name)){
        document.getElementById('firsterror').innerHTML ="";
        document.querySelector("input").style.border="3px solid green"
    }
    else {
        document.getElementById('firsterror').innerHTML ="** First name is invalid";
    }
    if (last_namecheck.test(last_name)) {
        document.getElementById("lasterror").innerHTML = "";
        document.getElementById("last_name").style.border="3px solid green"
      } else {
        document.getElementById("lasterror").innerHTML =
          "** Last name is invalid";
    }
    if (emailcheck.test(email)) {
         document.getElementById("emailerror").innerHTML = "";
         document.getElementById("email").style.border="3px solid green"
       } else {
         document.getElementById("emailerror").innerHTML =
           "** Email is invalid";
       }

 if (passwordcheck.test(password)) {
         document.getElementById("passerror").innerHTML = "";
         document.getElementById("password").style.border="3px solid green"
       } else {
         document.getElementById("passerror").innerHTML = "** Password is invalid";
       }
  if(telephonecheck.test(telephone)){
        document.getElementById("telephoneerror").innerHTML="";
        document.getElementById("telephone").style.border="3px solid green"
       }
       else {
        document.getElementById("telephoneerror").innerHTML = "**Password is invalid";
       }
 if(textareacheck.test(textarea)){
        document.getElementById("textareaerror").innerHTML="";
        document.querySelector("textarea").style.border="3px solid green"
       }
       else {
        document.getElementById("textareaerror").innerHTML = "**Text-area is invalid";
       }
       

   
}



document.getElementById("submit").addEventListener("keyup",validation);