

import crossBarImgURL from './assets/Cross Bar@4x.png'
import dropPlusImgURL from './assets/Drop Plus@4x.png'
import loginPageURL from './pages/login.html'


function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq_icon');

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.src = crossBarImgURL;
        icon.src = 'assets/Cross Bar@4x.png';
    } else {
        answer.classList.add('hidden');
        icon.src = 'assets/Drop Plus@4x.png';
    }
}


let faqElements = document.querySelectorAll('.faq_item')

faqElements.forEach(element=>{
    const icon = element.querySelector('.faq_icon');
    icon.src = dropPlusImgURL;
    


    element.addEventListener('click', ()=>{
        const answer = element.nextElementSibling;
        const icon = element.querySelector('.faq_icon');
        
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            icon.src = crossBarImgURL;
            // icon.src = 'assets/Cross Bar@4x.png';
        } else {
            answer.classList.add('hidden');
            // icon.src = 'assets/Drop Plus@4x.png';
            icon.src = dropPlusImgURL;
        }
        
    })
})



let loginButton = document.querySelectorAll('.loginButton')
loginButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        open(loginPageURL, '_self')
    })

})