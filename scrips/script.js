const portfolioElements = document.querySelectorAll('.portfolio-item');

for (var item of portfolioElements) {
    if(item.classList.contains("ecommerce")){
    item.addEventListener('click', () => {
            console.log(item)
            window.open("https://github.com/analyceferreira/ecommerce-pi", "_blank");
        })
    }

    if(item.classList.contains("contrutora")){
        item.addEventListener('click', () => {
                console.log(item)
                window.open("https://github.com/analyceferreira/landing-page-icf-contrutora", "_blank");
            })
    }

    if(item.classList.contains("portfolio")){
        item.addEventListener('click', () => {
                console.log(item)
                window.open("https://github.com/analyceferreira/site-portfolio-analyce-ferreira", "_blank");
            })
    }

    if(item.classList.contains("bookAPI")){
        item.addEventListener('click', () => {
                console.log(item)
                window.open("https://github.com/analyceferreira/book-catalog-api-challenge", "_blank");
            })
    }
}