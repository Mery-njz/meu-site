const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        descricaoIm: document.getElementById('descricao').value, 
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
                <p class="descricao">${novo.descricaoIm}</p>
            </div>
        </div>
    `;

      
    
    document.getElementById('colecao').innerHTML += novoCard; 
    formulario.reset(); 
});

function renderiazarCards(flores){
    const novoCard =
 <div class="card"> 
            <div class="letras">
                <h3>${flores.titulo}</h3>
                <p>${flores.texto}</p>
            </div>
            <div class="img">
                <img src="${novo.imagem}" alt="${novo.descricaoIm}" style="max-width:100%; border-radius:10px;"/>
                <p class="descricao">${novo.descricaoIm}</p>
            </div>
        </div>
