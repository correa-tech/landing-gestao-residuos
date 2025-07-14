const apiURL = 'https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros';
const container = document.getElementById('detalhesParceiro');
const parceiroId = localStorage.getItem('parceiroSelecionadoId');

async function carregarDetalhes() {
  if (!parceiroId) {
    container.innerHTML = '<p>Parceiro não selecionado.</p>';
    return;
  }

  try {
    const response = await fetch(`${apiURL}/${parceiroId}`);
    const parceiro = await response.json();
    renderizarDetalhes(parceiro);
  } catch (erro) {
    container.innerHTML = '<p>Erro ao carregar detalhes do parceiro.</p>';
    console.error(erro);
  }
}

function renderizarDetalhes(p) {
  let avatar = '';
  switch (p.tipoParceiro) {
    case 'ECO': avatar = '🌿'; break;
    case 'COO': avatar = '♻️'; break;
    case 'PEV': avatar = '📦'; break;
    default: avatar = '🏢';
  }

  const dataCadastro = new Date(p.createdAt).toLocaleDateString('pt-BR');

  container.innerHTML = `
    <div class="avatar-detalhe">${avatar}</div>
    <div class="info-detalhe">
      <p><strong>Data de Cadastro:</strong> ${dataCadastro}</p>
      <p><strong>Nome do Parceiro:</strong> ${p.nomeParceiro}</p>
      <p><strong>Responsável:</strong> ${p.responsavel || 'Não informado'}</p>
      <p><strong>Telefone:</strong> ${p.telefone || 'Não informado'}</p>
      <p><strong>E-mail:</strong> ${p.email || 'Não informado'}</p>
      <p><strong>Endereço:</strong> Rua ${p.rua || '-'}, Nº ${p.numero || '-'} - ${p.bairro || '-'}</p>
      <p><strong>Tipos de Resíduos Aceitos:</strong> ${p.residuosAceitos ? p.residuosAceitos.join(', ') : 'Não informado'}</p>
    </div>
  `;
}

carregarDetalhes();
