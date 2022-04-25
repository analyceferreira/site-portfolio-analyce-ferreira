const popupScreen = document.querySelector('.popup-screen');
const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.contact-form-item-button');

submitBtn.addEventListener('click' && 'submit', () => {
    a()
})

function a () { popupScreen.classList.add('active');}

closeBtn.addEventListener('click', () => {
    popupScreen.classList.remove('active')
})

