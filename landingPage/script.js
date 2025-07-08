const cabecalho = document.getElementById('cabecalho');
const itensMenu = document.querySelectorAll('#menu li a');

window.addEventListener("load", () => {

    cabecalho.style.opacity = 1;
    
})

itensMenu.forEach((link) => {

    link.addEventListener("mouseover", () => {
        link.classList.add("hover-menu");   
    });

    link.addEventListener("mouseout",() => {
        link.classList.remove("hover-menu");
    });
})
