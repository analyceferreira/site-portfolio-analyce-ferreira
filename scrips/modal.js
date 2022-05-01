const popupScreen = document.querySelector('.popup-screen');
const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('form');
const buttonSubmit = document.querySelector('.button-submit');
const nameForm = document.querySelector('#contact-name');
const emailForm = document.querySelector('#contact-email');
const messageForm = document.querySelector('#contact-message');
const phoneForm = document.querySelector('#contact-phone');



form.addEventListener('submit', () => {
    openPopup();
})

function openPopup () { 
    popupScreen.classList.add('active');
}

closeBtn.addEventListener('click', () => {
    popupScreen.classList.remove('active')
})



$(buttonSubmit).click(function(e) {
    e.preventDefault();
    $.ajax({
       method: 'POST',
       url: 'https://formsubmit.co/ajax/contato@analyceferreira.com.br',
       dataType: 'json',
       accepts: 'application/json',
       data: {
           name: nameForm.value,
           email: emailForm.value,           
           message: "Telefone: " + phoneForm.value + "     Mensagem: " + messageForm.value
       },
       success: data => openPopup(),
       error: (err) => console.log('Este é o erro' + err)
    });
});
