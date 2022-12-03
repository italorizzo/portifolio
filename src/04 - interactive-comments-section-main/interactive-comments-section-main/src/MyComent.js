
const MyComent = {
    render(button){
        var div = document.createElement('div')
        div.id = 'MyComent'

        div.innerHTML = `
        <div class="imgPerfil">
            <img src="images/avatars/image-juliusomo.webp" alt="">
        </div>
        <div class="escreverComent" class="">
            <textarea placeholder="O que você está pensando?" type="text" name="" id="texto"></textarea>
        </div>
        <div class="enviarComent">
            <button id="send">Send</button>
        </div>`
        document.body.appendChild(div)
        return button()
    }
}

export { MyComent }