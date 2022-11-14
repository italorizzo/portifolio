const Notification = {
    init({user, content, Action, data}){
        const main = document.querySelector('main')
        main.innerHTML = `
        <table>
            <tr>
                <td rowspan="2">
                    <img src="${user.img}" alt="">
                </td>
                <td>
                    <p><span>${user.username}</span> ${Action}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>${data}</p>
                    <p>${content}</p>
                </td>
            </tr>
        </table>`
    }
}

export { Notification }