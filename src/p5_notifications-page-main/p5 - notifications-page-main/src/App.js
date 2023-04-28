import Actions from './Actions.json' assert{type: "json"}
import { View } from './View.js'
import { Notification } from './Notification.js'

const App = {
    start(){
        var read = Actions.notification.length
        View.render(read)
        for (let i = 0; i < Actions.notification.length; i++){
            var action = Actions.notification[i]
            Notification.init({
                user: action.user,
                content: action.content,
                imgComent: action.imgComent,
                Action: action.Action,
                data: action.data,
                id: action.id
            })
        }
        document.addEventListener('click', () => {
            App.init()
        })
        document.querySelector('.buttonRead button').addEventListener('click', () => {
            var el = document.querySelectorAll('.notify');
            console.log
            for(let i = 1; i <= el.length; i++){
                var userAction = document.getElementById(`userAction${i}`)
                var remove = document.getElementById(`notify${i}`)
                userAction.removeChild(remove)
                var color = document.querySelector(`#mensagem${i} table`)
                color.style.backgroundColor = 'white'
            }
        })
    },
    init(){
        document.getElementById('contNotify').innerHTML = document.querySelectorAll('.notify').length
    }
}

export { App }