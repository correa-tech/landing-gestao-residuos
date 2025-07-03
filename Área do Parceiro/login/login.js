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
      break;
    }
  }

  if (todosPreenchidos) {
    const email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    btn.removeAttribute('disabled');
    btn.classList.remove('botao-desabilitado');
    btn.classList.add('botao-habilitado');
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