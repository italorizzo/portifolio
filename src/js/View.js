const View = {
    render({projeto, nome, link, img}){        
        projeto.innerHTML += `
        <div class="hover:scale-105 transition-all relative shadow-lg m-2">
            <a href="${link}">
                <img class="bg-cover w-full h-full" src="${img}" alt="">
                <div class="absolute h-full w-full flex items-end gra bottom-0 bg-gradient-to-b from-white  via-gray-600 to-black opacity-30">
                    <p class="text-sm py-2 w-full text-center text-white">${nome}</p>
                </div>
            </a>
        </div>
        `
    }
}

export { View }