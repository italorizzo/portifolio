const select = document.getElementById('img-selecionada')
const img_1 = document.querySelector('.img-1')
const img_2 = document.querySelector('.img-2')
const img_3 = document.querySelector('.img-3')
const img_4 = document.querySelector('.img-4')
const carrinho = document.getElementById('menu-carrinho')
const next2 = document.getElementById ('next2')
const previus2 = document.getElementById('previus2')
const img_produto = document.getElementById('img-produto')

function img1(){
    select.innerHTML = `<div id="img-selecionada" onclick="imgproduto()">
    <img id="select" src="images/image-product-1.jpg" alt="">
  </div>`
    img_1.setAttribute('id', 'outras-select')
    img_2.removeAttribute('id')
    img_3.removeAttribute('id')
    img_4.removeAttribute('id')
}
function img2(){
    select.innerHTML = `<div id="img-selecionada" onclick="imgproduto()">
    <img id="select" src="images/image-product-2.jpg" alt="">
  </div>`
    img_1.removeAttribute('id')
    img_2.setAttribute('id', 'outras-select')
    img_3.removeAttribute('id')
    img_4.removeAttribute('id')
}
function img3(){
    select.innerHTML = `<div id="img-selecionada" onclick="imgproduto()">
    <img id="select" src="images/image-product-3.jpg" alt="">
  </div>`
    img_1.removeAttribute('id')
    img_2.removeAttribute('id')
    img_3.setAttribute('id', 'outras-select')
    img_4.removeAttribute('id')
}
function img4(){
    select.innerHTML = `<div id="img-selecionada" onclick="imgproduto()">
    <img id="select" src="images/image-product-4.jpg" alt="">
  </div>`
    img_1.removeAttribute('id')
    img_2.removeAttribute('id')
    img_3.removeAttribute('id')
    img_4.setAttribute('id', 'outras-select')
}
function imgproduto(){
    img_1.removeAttribute('id')
    img_2.removeAttribute('id')
    img_3.removeAttribute('id')
    img_4.removeAttribute('id')
    img_produto.style.visibility = 'visible'
    const close = document.getElementById('close')
    const select_grande = document.getElementById('img-selecionada-grande')
    const imagem1_grande = document.querySelector('.img-1-grande')
    const imagem2_grande = document.querySelector('.img-2-grande')
    const imagem3_grande = document.querySelector('.img-3-grande')
    const imagem4_grande = document.querySelector('.img-4-grande')

    function img1Grande(){
      select_grande.innerHTML = `<div id="img-selecionada-grande" class="img-selecionada-max">
      <img id="select-grande" src="images/image-product-1.jpg" alt="">
    </div>`
      imagem1_grande.setAttribute('id', 'outras-select-grande')
      imagem2_grande.removeAttribute('id')
      imagem3_grande.removeAttribute('id')
      imagem4_grande.removeAttribute('id')
    }
    function img2Grande(){
      select_grande.innerHTML = `<div id="img-selecionada-grande" class="img-selecionada-max">
        <img id="select-grande" src="images/image-product-2.jpg" alt="">
      </div>`
        imagem1_grande.removeAttribute('id')
        imagem2_grande.setAttribute('id', 'outras-select-grande')
        imagem3_grande.removeAttribute('id')
        imagem4_grande.removeAttribute('id')
    }
    function img3Grande(){
      select_grande.innerHTML = `<div id="img-selecionada-grande" class="img-selecionada-max">
      <img id="select-grande" src="images/image-product-3.jpg" alt="">
    </div>`
      imagem1_grande.removeAttribute('id')
      imagem2_grande.removeAttribute('id')
      imagem3_grande.setAttribute('id', 'outras-select-grande')
      imagem4_grande.removeAttribute('id')
    }
    function img4Grande(){
      select_grande.innerHTML = `<div id="img-selecionada-grande" class="img-selecionada-max">
      <img id="select-grande" src="images/image-product-4.jpg" alt="">
    </div>`
      imagem1_grande.removeAttribute('id')
      imagem2_grande.removeAttribute('id')
      imagem3_grande.removeAttribute('id')
      imagem4_grande.setAttribute('id', 'outras-select-grande')
    }
    
    imagem1_grande.addEventListener('click', img1Grande)
    imagem2_grande.addEventListener('click', img2Grande)
    imagem3_grande.addEventListener('click', img3Grande)
    imagem4_grande.addEventListener('click', img4Grande)

    const previus = document.getElementById('previus')
    const next = document.getElementById('next')
    var cont = 1 
    
    function nextorpreviusImg(){
      if (cont == 1){
        img1Grande()
      }else if(cont == 2){
        img2Grande()
      }else if(cont == 3){
        img3Grande()
      }else if (cont == 4){
        img4Grande()
      } else{
        cont = 0
      }
    }
    
    next.addEventListener('click', () => {
      cont += 1
      nextorpreviusImg()
    })
    previus.addEventListener('click', () => {
      cont -= 1
      nextorpreviusImg()
    })

    close.addEventListener('click', () => {
        img_produto.style.visibility = 'hidden'
    })
}
function menu(){
  const div = document.getElementById('cart-check')

  div.classList.toggle('hide');
  sumir()
}
function sumir(){
    const classes = document.getElementById('cart-check').className;
    if (window.screen.width < 884){
      if (classes.indexOf('hide') !== -1){
        next2.style.zIndex = 0
        previus2.style.zIndex = 0
      }else{
        next2.style.zIndex = 1
        previus2.style.zIndex = 1
      }
    }
}

function img1pequeno(){
  select.innerHTML = `            <div id="img-selecionada" onclick="imgproduto()">
<img id="select" src="images/image-product-1.jpg" alt="">
</div>`
}
function img2pequeno(){
  select.innerHTML = `            <div id="img-selecionada" onclick="imgproduto()">
<img id="select" src="images/image-product-2.jpg" alt="">
</div>`
}
function img3pequeno(){
  select.innerHTML = `            <div id="img-selecionada" onclick="imgproduto()">
<img id="select" src="images/image-product-3.jpg" alt="">
</div>`
}
function img4pequeno(){
  select.innerHTML = `            <div id="img-selecionada" onclick="imgproduto()">
<img id="select" src="images/image-product-4.jpg" alt="">
</div>`
}

var cont1 = 1

next2.addEventListener('click', () => {
  cont1 += 1
  nextorpreviusImg2()
})
previus2.addEventListener('click', () => {
  cont1 -= 1
  nextorpreviusImg2()
})

function nextorpreviusImg2(){
  if (cont1 == 1){
    img1pequeno()
  }else if(cont1 == 2){
    img2pequeno()
  }else if(cont1 == 3){
    img3pequeno()
  }else if (cont1 == 4){
    img4pequeno()
  } else{
    cont1 = 0
  }
}
carrinho.addEventListener('click', menu)