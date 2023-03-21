/* 
Objetivo - quando clicar no botão mostrar a imagem correspondente

- Passo 1 - Dar um jeito de pegar o elemento HTML dos botões.
- Passo 2 - dar um jeito de identificar o clique do usuário no botão
- Passo 3 - desmarcar o botão selecionado anterior
- Passo 4 - marcar o botão clicado como se estivesse selecionado
- Passo 5 - esconder imagem anterior
- Passo 6 - fazer aparecer a imagem correspondente ao botão clicado

*/
// - Passo 1 - Dar um jeito de pegar o elemento HTML dos botões.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - Passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - Passo 3 - desmarcar o botão selecionado anterior
        desativarBotãoSelecionado();

        // - Passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // - Passo 5 - esconder imagem ativa de fundo
        esconderImagemAtiva();
        
        // - Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    } )
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotãoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

