const View = {
    render(read){
        document.body.innerHTML = `
            <div class="caixa">
                <header>
                    <div class="notification">
                        <h1>Notifications</h1>
                        <span>${read}</span>
                    </div>
                    <div class="buttonRead">
                        <button>Mark all as read</button>
                    </div>
                </header>
                <main></main>
            </div>
        `
    }
}

export { View }