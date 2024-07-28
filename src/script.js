
// import crossBarImgURL from './assets/Cross Bar@4x.png'



function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq_icon');

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        // icon.src = crossBarImgURL;
        icon.src = 'assets/Cross Bar@4x.png';
    } else {
        answer.classList.add('hidden');
        icon.src = 'assets/Drop Plus@4x.png';
    }
}