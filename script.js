const formulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    const card = `
        <div class="card">
            <img src="${novo.imagem}" alt="${novo.titulo}">
            <h3>${novo.titulo}</h3>
            <p>${novo.texto}</p>
        </div>
    `;

    colecao.innerHTML += card;
    formulario.reset();
});
