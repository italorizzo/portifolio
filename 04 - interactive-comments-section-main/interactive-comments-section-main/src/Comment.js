const Comment = {
    init({content, created, score, user, replies}){
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
                            <span id="user">${repliesUser.username}</span>
                            <span id="data">${repliesData}</span>
                        </td>
                        <td class="reply">
                            <button><img src="images/icon-reply.svg" alt=""> <p>Reply</p></button>
                        </td>
                    </tr>
                    <tr>
                        <td class="content" colspan="2">
                            <p><span class="reply">@${repliesMencion} </span>${repliesContent}</p>
                        </td>
                    </tr>
                </table>
            </div>`
            }
        }
    }
}

export { Comment }