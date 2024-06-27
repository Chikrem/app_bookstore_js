let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
let estadoOrdenacao = 0; // 0: ordem crescente, 1: ordem decrescente, 2: ordem aleatória

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados;
    if (estadoOrdenacao === 0) {
        // Ordenar em ordem crescente
        livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
        estadoOrdenacao = 1; // Mudar para o próximo estado
    } else if (estadoOrdenacao === 1) {
        // Ordenar em ordem decrescente
        livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
        estadoOrdenacao = 2; // Mudar para o próximo estado
    } else {
        // Ordem aleatória
        livrosOrdenados = livros.sort(() => Math.random() - 0.5);
        estadoOrdenacao = 0; // Mudar para o próximo estado
    }
    exibirOsLivrosNaTela(livrosOrdenados);
}