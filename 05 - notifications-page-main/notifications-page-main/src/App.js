import Actions from './Actions.json' assert{type: "json"}
import { View } from './View.js'
import { Notification } from './Notification.js'

const App = {
    start(){
        var read = 3
        View.render(read)
        for (let i = 0; i < Actions.notification.length; i++){
            var action = Actions.notification[i]
            console.log(action.user.username)
            Notification.init({
                user: action.user,
                content: action.content,
                Action: action.Action,
                data: action.data
            })
        }
    }
}

export { App }