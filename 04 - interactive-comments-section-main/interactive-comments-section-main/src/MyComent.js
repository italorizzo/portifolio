
const MyComent = {
    init(){
        var div = document.createElement('div')
        div.id = 'MyComent'
        document.body.appendChild(div)

        div.innerHTML += `
        <div class="imgPerfil">
            <img src="images/avatars/image-juliusomo.webp" alt="">
        </div>
        <div class="escreverComent" class="">
            <textarea placeholder="O que você está pensando?" type="text" name="" id="texto"></textarea>
        </div>
        <div class="enviarComent">
            <button id="send">Send</button>
        </div>`
    }
}

export { MyComent }