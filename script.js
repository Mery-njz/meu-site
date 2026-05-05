function alterarFundo(){
  document.body.style.backgroundColor = "black";
}

const form = document.querySelector("form");
const saida = document.createElement("div");
document.body.appendChild(saida);

form.addEventListener("submit", function(event){
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const categoria = document.getElementById("categoria").value;

  const dados = {
    nome: nome,
    email: email,
    mensagem: mensagem,
    categoria: categoria
  };

  saida.innerHTML = `
    <p><strong>Nome:</strong> ${dados.nome}</p>
    <p><strong>Email:</strong> ${dados.email}</p>
    <p><strong>Mensagem:</strong> ${dados.mensagem}</p>
    <p><strong>Categoria:</strong> ${dados.categoria}</p>
  `;
});

