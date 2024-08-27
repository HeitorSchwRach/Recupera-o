var produtos = []

console.log(produtos)

function novoProduto(produto, preco) {

    if (typeof (produto) != "string" && typeof (preco) != "number") {
        console.log("Dados inválidos")
    } else {
        produtos.push({
            produto: produto,
            preco: preco
        })
    }

}
function removerProduto(numero){
    produtos.pop(numero)
}
function numeroProdutos() {
    if (produto.length == 0) {
        console.log('Nenhum usuário cadastrado.')
    } else {
        console.log('Tem', usuarios.length, 'cadastrados')
    }
} 

function listarProdutos(){
    for (let i = 0; i<produtos.length; i++){
        console.log(produtos[i].produto)
        console.log(produtos[i].preco)
    }
}