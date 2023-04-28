const Notification = {
    init({id, imgComent, user, content, Action, data}){
        const main = document.querySelector('main')
        if (content !== ''){
            main.innerHTML += `
            <div id="mensagem${id}">
                <table>
                    <tr>
                        <td rowspan="2" class="imgUser">
                            <img src="${user.img}" alt="">
                        </td>
                        <td class="userAction" id="userAction${id}">
                            <p><span>${user.username}</span> ${Action} <div class="notify" id="notify${id}"></div></p>
                            <p class="data">${data}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="action">
                            <p>${content}</p>
                        </td>
                    </tr>
                </table>
            </div>`
        }else if(imgComent !== ''){
            main.innerHTML += `
                <div id="mensagem${id}">
                    <table>
                        <tr>
                            <td rowspan="2" class="imgUser">
                                <img src="${user.img}" alt="">
                            </td>
                            <td class="userAction" id="userAction${id}">
                                <p><span>${user.username}</span> ${Action} <div class="notify" id="notify${id}"></div></p>
                                <p class="data">${data}</p>
                            </td>
                            <td class="imgComent">
                                <img src="${imgComent}" alt="">
                            </td>
                        </tr>
                    </table>
                </div>`
        }
        else{
            main.innerHTML += `
            <div id="mensagem${id}">
                <table>
                    <tr>
                        <td rowspan="2" class="imgUser">
                            <img src="${user.img}" alt="">
                        </td>
                        <td class="userAction" id="userAction${id}">
                            <p><span>${user.username}</span> ${Action} <div class="notify" id="notify${id}"></div></p>
                            <p class="data">${data}</p>
                        </td>
                    </tr>
                </table>
            </div>`
        }
    }
}

export { Notification }