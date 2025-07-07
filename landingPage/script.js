const cabecalho = document.getElementById('cabecalho');
const itensMenu = document.querySelectorAll('#menu li');

window.addEventListener("load", () => {

    cabecalho.style.opacity = 1;
    
})

itensMenu.forEach((item) => {

    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#ffffff";
        item.style.color = "#71A53C";
    });

    item.addEventListener("mouseout",() => {
        item.style.backgroundColor = "transparent";
        item.style.color = "#ffffff";
    });
})
