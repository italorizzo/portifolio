import Dados from '../desafios.json' assert {type: 'json'}
import { View } from './View.js'

const App = {
    start(){
        for (let i = 0; i < Dados.desafio.length; i++){
            console.log(i)
            const infos = Dados.desafio[i]
            const projeto = document.getElementById('adicionarProjetos')
            View.render({
                projeto,
                nome: infos.nome,
                link: infos.link,
                img: infos.img
            })
        }
    }
}

export { App }