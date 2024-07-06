document.getElementById("signup-btn").addEventListener("click",()=>{
    console.log("clicked");

    let namepattern = /^[A-Za-z][A-Za-z ]*$/g
    let emailpattern = /[a-zA-z\d]+@+[a-z]+.+[a-z]{2,3}/g
    let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
    let agepattern = /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/g


    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let age = document.getElementById("age").value;

    let namematch = name.match(namepattern);
    let emailmatch = email.match(emailpattern);
    let passmatch = pass.match(passwordpattern);
    let agematch = age.match(agepattern);

    if(namematch && emailmatch && passmatch && agematch){
        console.log("correct");
        window.location.href = "index.html"
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if name is incorrect 
    else if(!namematch && emailmatch && passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if name & email is incorrect 
    else if(!namematch && !emailmatch && passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if name & Password is incorrect 
     else if(!namematch && emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if name & age is incorrect 
    else if(!namematch && emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if name,email & password is incorrect 
    else if(!namematch && !emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if email,password & age is incorrect 
    else if(namematch && !emailmatch && !passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if name,password & age is incorrect 
    else if(!namematch && emailmatch && !passmatch && !agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
      // if name,email & age is incorrect 
      else if(!namematch && !emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if email is incorrect 
    else if(namematch && !emailmatch && passmatch && agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
    // if email & name is incorrect 
    else if(!namematch && !emailmatch && passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
     // if email & password is incorrect 
     else if(namematch && !emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
     // if email & age is incorrect 
     else if(namematch && !emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect mail"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if password is incorrect 
    else if(namematch && emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
     // if password & name is incorrect 
    else if(!namematch && emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
     // if password & Email is incorrect 
     else if(namematch && !emailmatch && !passmatch && agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect mail"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }
      // if password & age is incorrect 
      else if(namematch && emailmatch && !passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if age is incorrect 
    else if(namematch && emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
     // if age & name is incorrect 
     else if(!namematch && emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
      // if age & email is incorrect 
      else if(namematch && !emailmatch && passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect mail"
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    // if age & password is incorrect 
    else if(namematch && emailmatch && !passmatch && !agematch){
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"
        document.getElementById("ageerror").innerText = "You must be 18 or older"
        document.getElementById("msg").innerText = ""
    }
    else if(name == "" && email == "" && pass == "" && age == ""){
        document.getElementById("msg").innerText = "please fill out this fields"
}
    else if(!namematch && !emailmatch && !passmatch && !agematch){
        document.getElementById("msg").innerText = "Invalid Fields"
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""
        document.getElementById("ageerror").innerText = ""
    }
    else{
     alert("error")
    }
})