const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');
    //Show input error message
    function showError(input, message){
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message
    }

    //S how success
    function showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    //Check email is valid
    function isValidEmail(email){
        
    }

    //Event Listeners
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(username.value === ''){
            showError('username is required')
        }else {
            showSuccess(username);
        }
        if(email.value === ''){
            showError('Email is required')
        }else {
            showSuccess(email);
        }
        if(password.value === ''){
            showError('Password is required')
        }else {
            showSuccess(password);
        }
        if(password2.value === ''){
            showError('Password confirmation is required')
        }else {
            showSuccess(password2);
        }

     })