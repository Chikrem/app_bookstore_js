let livros = []
const endpointDaAPI = 'https://gist.githubusercontent.com/Chikrem/69e555d1c9d66a23696c1ae30ec47717/raw/98953aefafa4b4f59a81cc5b5a0bf571f8fbd8f1/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {

    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    console.log(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}



