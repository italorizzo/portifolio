import Dados from '../data.json' assert {type: 'json'}
import { Comment } from './Comment.js'
import { MyComent } from './MyComent.js'

const App = {
    start(){
        var i = 0
        App.init(i)
        MyComent.render(button)
        function button(){
            document.getElementById('send').addEventListener('click', () => {
                var texto = document.getElementById('texto').value
                var id = Dados.comments.at(-1).id
                var myPerfil = Dados.currentUser
                var MyComent = {
                    "id": `${id + 1}`,
                    "content": `${texto}`,
                    "createdAt": "1s",
                    "score": 0,
                    "user": `${myPerfil}`,
                    "replies": []
                }
                adicionar(MyComent, texto)
            })
        }
        function adicionar(MyComent, texto){
            if (texto.length > 0){
                Dados.comments.push(MyComent)
                var i = 0
                App.init(i)
            }
        }
    },
    init(i){
        var x1 = Dados.comments.replies.length
        var x2 = Dados.comments.length
        console.log(x1)
        var total = x1 + x2
        for (i; i < total; i++){
            var infos = Dados.comments[i]
            if (i === 0){
                var inicio = 0
            } else {
                var inicio = 1
            }
            const cont = i
            Comment.render({
                cont,
                inicio,
                content: infos.content,
                created: infos.createdAt, 
                score: infos.score,  
                replies: infos.replies,
                user: infos.user,
            })
        }
        console.log(MyComent.render())
    }
}

export { App }