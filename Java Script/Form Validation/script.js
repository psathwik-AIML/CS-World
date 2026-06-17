let userName = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let tc = document.querySelector(".tc")
let form = document.querySelector(".form")
let sub = document.querySelector(".submit-button")




let isUserNameChecked = false
let isEmailChecked = false
let isPasswordChecked = false
let isCpasswordChecked = false
let isTermsChecked = false

form.addEventListener('submit', (e) => {

    e.preventDefault()
    validate()
})

userName.addEventListener('keyup', checkUserName)
// function to validate inputs 
function validate(e) {
    let userNameValue = userName.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()


     isUserNameChecked = false
     isEmailChecked = false
     isPasswordChecked = false
     isCpasswordChecked = false
     isTermsChecked = false
    // user name checking 
    checkUserName()
    // email checking 
    if (emailValue === "") {
        setError(email, "email cannot be empty")
    }
    else if(!emailCheck(emailValue)){
        setError(email,"email not valid")
    }
    else {
        setSuccess(email)
        isEmailChecked=true
    }
    // password checking 
    if (passwordValue === "") {
        setError(password, "password cannot be empty")
    }
    else if (passwordValue.length < 6) {
        setError(password, "password 6 characters should be there")
    }
    else {
        setSuccess(password)
        isPasswordChecked=true
    }
    // confirm password checking 
    if (cpasswordValue === "") {
        setError(cpassword, "confirm password cannot be empty")
    }
    else if (passwordValue !== cpasswordValue) {
        setError(cpassword, "password not match")
    }
    else {
        setSuccess(cpassword)
        isCpasswordChecked=true
    }
    // t and cchecking 
    if (!tc.checked) {
        setError(tc, "click on agree")
    }
    else {
        setSuccess(tc)
        isTermsChecked=true
    }

    if(isUserNameChecked &&isEmailChecked&&isPasswordChecked&&isCpasswordChecked&&isTermsChecked){
        form.submit()
    }

}



function checkUserName() {
    let name = userName.value.trim()
    if (name === "") {
        setError(userName, "username cannot be empty")
    }
    else if (name.length < 3) {
        setError(userName, "min 3 characters should be there")
    }
    else {
        setSuccess(userName)
        isUserNameChecked=true
    }
}
function setError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector("small")
    parent.classList.add("error")
    parent.classList.remove("success")
    small.innerText = message

}
function setSuccess(input) {
    let parent = input.parentElement
    parent.classList.add("success")
    parent.classList.remove("error")
}

function emailCheck(input){
    let emailValidation=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let mail=emailValidation.test(input)
    return mail
}