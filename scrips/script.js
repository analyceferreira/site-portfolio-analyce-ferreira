const portfolioElements = document.querySelectorAll('.portfolio-item');


for (var item of portfolioElements) {
    console.log(item);
    item.addEventListener('click', () => {
        window.open("https://github.com/analyceferreira", "_blank");
    })
}