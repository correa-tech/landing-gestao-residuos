const form = document.getElementById('formulario-login');
const btn = document.getElementById('btn');

form.addEventListener('input', function () {
  const inputs = form.querySelectorAll('input');
  let todosPreenchidos = true;

  for (const input of inputs) {
    if (input.type === 'file') {
      if (input.files.length === 0) {
        todosPreenchidos = false;
        break;
      }
    } else if (input.value.trim() === '') {
      todosPreenchidos = false;
      input.classList.remove('valido')
      break;
    }else {
      input.classList.add('valido')
    }
  }

  if (todosPreenchidos) {
    const email = document.getElementById('email').value;
      if(!email.endsWith('@gmail.com')){
      todosPreenchidos = false;
      alert('O email deve terminar com "@"!!')
      }else{
        localStorage.setItem('email', email);
        btn.removeAttribute('disabled');
        btn.classList.remove('botao-desabilitado');
        btn.classList.add('botao-habilitado');
      }

  } else {
    btn.setAttribute('disabled', true);
    btn.classList.remove('botao-habilitado');
    btn.classList.add('botao-desabilitado');
  }

});

btn.addEventListener('click', function (event) {
  event.preventDefault()

  if(!btn.disabled){
    window.location.href = '/Área do Parceiro/parceiros.html';
  }
  
});

const icone = document.getElementById('icone-login');
const imagem = document.getElementById('imagem-sustentavel');
const abaParceiros = document.getElementById('aba-parceiros');
const btnParceiros = document.getElementById('botao-parceiros');

btnParceiros.addEventListener('click', () => {
  abaParceiros.classList.remove('animate-div'); // remove a animação de entrada
  abaParceiros.classList.add('animate-div-reverse'); // adiciona a de saída

  setTimeout(() => {
    abaParceiros.style.display = 'none';
    abaParceiros.classList.remove('animate-div-reverse'); // limpa após esconder
  }, 2300); // igual ao tempo de animação no CSS
});



icone.addEventListener('click', () => {
  abaParceiros.style.display = 'flex';
  abaParceiros.classList.remove('animate-div-reverse'); // limpa reverso
  void abaParceiros.offsetWidth; // reflow
  abaParceiros.classList.add('animate-div'); // aplica entrada
});

const image = document.getElementById('fundo');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30; // de -15px a +15px
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  image.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});




