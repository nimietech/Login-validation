
let username = document.getElementById("name");
let password = document.getElementById("password");
let userError = document.querySelector(".error")
let passError = document.querySelector(".pass-error")
let correct = document.querySelector(".both-error")
    
function validate(){
    let userValue = username.value.trim()
    let passValue = password.value.trim()

    // condition for username
    if (userValue != "glory"){
        userError.style.display ="block"
        return false
    } else{
        userError.style.display ="none"
    }
    
    // condition for password
    if (passValue != "nimietech"){
        passError.style.display ="block"
        return false
    } else{
        passError.style.display ="none"
    }
}
















