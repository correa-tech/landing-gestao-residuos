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

document.getElementById("form-parceiro").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o recarregamento da página

  const data = {
    nomeParceiro: document.getElementById("nomeParceiro").value,
    tipoParceiro: document.getElementById("tipoParceiro").value,
    responsavelParceiro: document.getElementById("responsavelParceiro").value,
    telResponsavel: document.getElementById("telResponsavel").value,
    emailResponsavel: document.getElementById("emailResponsavel").value,
    rua: document.getElementById("rua").value,
    numero: parseInt(document.getElementById("numero").value),
    bairro: document.getElementById("bairro").value,
    plastico: document.getElementById("plastico").checked,
    vidro: document.getElementById("vidro").checked,
    metal: document.getElementById("metal").checked,
    oleoCozinha: document.getElementById("oleoCozinha").checked,
    pilhaBateria: document.getElementById("pilhaBateria").checked,
    eletronico: document.getElementById("eletronico").checked,
    roupa: document.getElementById("roupa").checked,
    outros: document.getElementById("outros").checked
  };

  fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert("Dados enviados com sucesso!");
        document.getElementById("form-parceiro").reset();
      } else {
        alert("Erro ao enviar os dados.");
      }
    })
    .catch(error => {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar os dados.");
    });
});
