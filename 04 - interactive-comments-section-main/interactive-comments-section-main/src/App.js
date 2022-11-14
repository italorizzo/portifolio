import Comments from '../data.json' assert {type: 'json'}
import { Comment } from './Comment.js'
import { MyComent } from './MyComent.js'

const App = {
    start(){
        for (let i = 0; i < Comments.comments.length; i++){
            const infos = Comments.comments[i]
            Comment.init({
                content: infos.content,
                created: infos.createdAt, 
                score: infos.score,  
                replies: infos.replies,
                user: infos.user,
            })
        }
        MyComent.init()
        document.getElementById('send').addEventListener('click', () => {
            var texto = document.getElementById('texto').value
            var MyComent = {
                "content": `${texto}`,
                "createdAt": "1s",
                "score": 0,
                "user": `${Comments.currentUser}`,
            }
            if (texto !== ''){
                Comment.comments.push('oi')
                console.log(Comment.comments)
            }
        })
    }
}

export { App }