const form = document.getElementById('form');
const usernameInput = document.getElementById('username-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
   //e.preventDefault() Prevent submit
   let errors = []

   if(usernameInput){

    errors = getSignupFormErrors(usernameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value)
   }
   else{

    errors = getLoginFormErrors(usernameInput.value, passwordInput.value)
   }

    if (errors.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errors.join(". ")
    }
})
function getSignupFormErrors(username, email, password, repeatPassword) {
    let errors = []

    if (username === '' || username == null){
        errors.push('Username is required')
        usernameInput.parentElement.classList.add('incorrect')
    }

    if (email === '' || email == null){
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null){
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }

    if(password.length < 8){
        errors.push('Password must be at least 8 characters long')
        passwordInput.parentElement.classList.add('incorrect')
    }

    if(password !== repeatPassword){
        errors.push('Passwords do not match')
         passwordInput.parentElement.classList.add('incorrect')
    }

    return errors;
}
function getLoginFormErrors(username, password) {
    let errors = []
    if (username === '' || username == null){
        errors.push('Username is required')
        usernameInput.parentElement.classList.add('incorrect')
    }

     if (password === '' || password == null){
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }
}    
const allInputs = [usernameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input !== null);

allInputs.forEach(input  => {
    input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect')
        errorMessage.innerText = ''
    }
  })
})

