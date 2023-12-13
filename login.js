function submitForm(){
    user={
        login_id:"",
        password:""
    }
    let email =  document.querySelector("#email").value
    let password = document.querySelector("#password").value
    if(email.trim()===''||password.trim()===""){
        alert("please fill the fields");
        return;
    }
    user.login_id=email;
    user.password=password
    console.log(user);
   
}