class ObraDeArte {
    constructor(titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página

    
    const tituloF = document.getElementById('titulo').value;
    const imagemF = document.getElementById('imagem').value;
    const descricaoImF = document.getElementById('descricao').value;
    const textoF = document.getElementById('paragrafo').value;


    const novaObra = new ObraDeArte(tituloF, textoF, imagemF, descricaoImF);

    try {
        // Dispara a requisição POST para a API
        const resposta = await fetch('/api/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaObra)
        });

        if (!resposta.ok) {
            throw new Error(`Erro no servidor: ${resposta.status}`);
        }

        const dados = await resposta.json();
        
        alert('Obra enviada com sucesso!');
        formulario.reset();
        window.location.href = 'index.html'; 

    } catch (erro) {
        console.error("Erro ao enviar:", erro);
    }
});
