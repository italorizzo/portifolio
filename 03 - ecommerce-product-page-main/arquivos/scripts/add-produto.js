const bt_mais = document.getElementById('bt-mais')
const bt_menos = document.getElementById('bt-menos')
const quantidade_produtos = document.getElementById('quantidade-produtos')
const bt_addcarrinho = document.getElementById('bt-addcarrinho')
const itens_carrinho = document.getElementById('itens-carrinho')
const qnt_compras = document.getElementById('qnt-compras')

var produtos = 0
var cont = 0

function produtosexistentes(){
    quantidade_produtos.textContent = produtos
}
function produtosCarrinho(){
    qnt_compras.style.visibility = 'visible'
    qnt_compras.textContent = cont
    itens_carrinho.innerHTML = `<section id="produtojadentro">
    <div id="info-produto-checkout" class="produto">
      <div id="img-produto-checkout">
        <img src="images/image-product-1-thumbnail.jpg" alt="">
      </div>
      <div id="produto-preço-checkout">
        <h1>Fall Limited Edition Sneakers</h1>
        <p>$125.00 x ${cont}<span>  $${(125.00 * cont).toFixed(2)}</span></p>
      </div>
      <div id="deletar-produto">
        <img src="images/icon-delete.svg" alt="">
      </div>
    </div>
    <div id="finalizar-compra" class="produto">
      <button>Checkout</button>
    </div>
  </section>`
  itens_carrinho.style.left = 'calc(50% - 60px)'
  itens_carrinho.style.top = 'calc(50% - 5px)'

  const deletar_produto = document.getElementById('deletar-produto')
  deletar_produto.addEventListener('click', () => {
    itens_carrinho.innerHTML = `<span id="itens-carrinho">Your cart is empaty.</span>`
    itens_carrinho.style.left = 'calc(50% - 100px)'
    itens_carrinho.style.top = 'calc(52%)'
    itens_carrinho.style.width = '200px'
    cont = 0
    qnt_compras.style.visibility = 'hidden'
  })
}

bt_mais.addEventListener('click', () => {
    produtos += 1
    produtosexistentes()
})
bt_menos.addEventListener('click', () => {
    if (produtos != 0){
        produtos -= 1
    }
    produtosexistentes()
})
bt_addcarrinho.addEventListener('click', () => {
    if (produtos != 0){
        cont += produtos
        produtosCarrinho()
    }
})