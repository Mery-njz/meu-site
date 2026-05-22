const formulario = document.getElementById('meuFormulario'); // corrigido

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        descricaoIm: document.getElementById('descricao').value, // agora pega a descrição
        texto: document.getElementById('paragrafo').value
    };

    const novoCard = `
        <div class="card"> 
            <div class="letras">
                <h3>${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class="img">
                <img src="${novo.imagem}" alt="${novo.descricaoIm}" style="max-width:100%; border-radius:10px;"/>
            </div>
        </div>
    `;

    document.getElementById('colecao').innerHTML += novoCard; // corrigido
    formulario.reset(); // limpa o formulário
});
