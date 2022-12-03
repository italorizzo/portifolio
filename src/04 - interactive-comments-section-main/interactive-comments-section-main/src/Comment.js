import Dados from '../data.json' assert {type: 'json'}
const Comment = {
    render({cont, inicio, content, created, score, user, replies}){
        if (inicio === 0){
            document.body.innerHTML = ''
        }
        var div = document.createElement('div')
        div.id = 'comentario'
        document.body.appendChild(div)      
        // informações da div comentário
        div.innerHTML = `
        <table>
            <tr>
                <td class="avaliation" rowspan="2">
                    <div>
                        <button><img src="images/icon-plus.svg" alt=""></button>
                        <span>${score}</span>
                        <button><img src="images/icon-minus.svg" alt=""></button>
                    </div>
                </td>
                <td class="infosUser">
                    <img src="${user.image.webp}" alt="">
                    <span id="user">${user.username}</span>
                    <span id="you${cont}"></span>
                    <span id="data">${created}</span>
                </td>
                <td class="reply">
                    <button><img src="images/icon-reply.svg" alt=""> <p>Reply</p></button>
                </td>
            </tr>
            <tr>
                <td class="content" colspan="2">
                    <p>${content}</p>
                </td>
            </tr>
        </table>`
        if (replies.length > 0){
            for (let i = 0; i < replies.length; i++){
                var infosReplies = replies[i]
                var repliesContent = infosReplies.content
                var repliesData = infosReplies.createdAt
                var repliesScore = infosReplies.score
                var repliesMencion = infosReplies.replyingTo
                let repliesUser = infosReplies.user
                div.innerHTML += `<div id="resposta">
                <div class="linha"></div>
                <table id="tableResposta">
                    <tr>
                        <td class="avaliation" rowspan="2">
                            <div>
                                <button><img src="images/icon-plus.svg" alt=""></button>
                                <span>${repliesScore}</span>
                                <button><img src="images/icon-minus.svg" alt=""></button>
                            </div>
                        </td>
                        <td class="infosUser">
                            <img src="${repliesUser.image.webp}" alt="">
                            <span id="user">${repliesUser.username} </span>
                            <span id="you${cont}"></span>
                            <span id="data">${repliesData}</span>
                        </td>
                        <td class="reply">
                            <button><img src="images/icon-reply.svg" alt=""> <p>Reply</p></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="content" colspan="2">
                            <p><span class="reply">@${repliesMencion}</span>${repliesContent}</p>
                        </td>
                    </tr>
                </table>
            </div>`
            if (repliesUser.username === Dados.currentUser.username){
                var you = document.getElementById(`you${cont}`)
                you.innerText = 'you'
                you.style.backgroundColor = "hsl(238, 40%, 52%)"
                you.style.padding = '5px 10px 5px 10px'
                you.style.fontSize = '80%'
                you.style.color = 'white'
                you.style.fontWeight = 500
                you.style.borderRadius = '0.2rem'
                }   
            }
        }
        if (user.username === Dados.currentUser.username){
            var you = document.getElementById(`you${cont}`)
            you.innerText = 'you'
            you.style.backgroundColor = "hsl(238, 40%, 52%)"
            you.style.padding = '5px 10px 5px 10px'
            you.style.fontSize = '80%'
            you.style.color = 'white'
            you.style.fontWeight = 500
            you.style.borderRadius = '0.2rem'
        }   
    }
}

export { Comment }