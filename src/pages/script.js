
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const showHideButton = document.querySelector('.show-hide-password');
    const showHideIcon = document.getElementById('showHideIcon');

    showHideButton.addEventListener('click', function () {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        showHideIcon.src = isPasswordVisible
            ? '../assets/show_password.svg'
            : '../assets/hide_password.svg';
        showHideIcon.alt = isPasswordVisible
            ? 'Show Password'
            : 'Hide Password';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const otpInputs = document.querySelectorAll(".otp_input");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
});



// Signup to OTP to Success fake flow

let signUpScreen =  document.querySelector('.signUpScreen')
let otpScreen =  document.querySelector('.otpScreen')
let successScreen = document.querySelector('.successScreen')

let registerNowButton = document.querySelector('.signUpScreen button[type="submit"]')
console.log(registerNowButton);
let verifyEmailButton = document.querySelector('.otpScreen button[type="submit"]')
let goToHomeButton = document.querySelector('.successScreen button')

registerNowButton.addEventListener('click', (e)=>{
    e.preventDefault()
    signUpScreen.classList.toggle('hidden')
    otpScreen.classList.toggle('hidden')
})
verifyEmailButton.addEventListener('click', (e)=>{
    e.preventDefault()
    otpScreen.classList.toggle('hidden')
    successScreen.classList.toggle('hidden')
})
goToHomeButton.addEventListener('click', ()=>{
    window.location.href = '/'
})



// let otpInputs = otpScreen.querySelectorAll('input[type="number"]')