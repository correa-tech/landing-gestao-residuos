const cabecalho = document.getElementById('cabecalho');
const itensMenu = document.querySelectorAll('#menu li a');
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

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

btnMenu.addEventListener('click', () => {
    menu.classList.toggle("ativo");

    const aberto = btnMenu.getAttribute("aria-expanded") === "true";
    btnMenu.setAttribute("aria-expanded", String(!aberto));

})
