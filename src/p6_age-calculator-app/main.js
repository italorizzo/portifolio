function getData() {
    const date = new Date()
    let dia = date.getDate()
    let mes = date.getMonth()
    let ano = date.getFullYear()
    return dataHoje = [ano, mes, dia]
}

function verify(inputElement) {
    const sanitizedValue = inputElement.value.replace(/[^\d]/g, "")
    inputElement.value = sanitizedValue
}

function verifyAge() {
    const inputDia = document.getElementById("diaInput").value
    const inputMes = document.getElementById("mesInput").value
    const inputAno = document.getElementById("anoInput").value

    const dataInserida = new Date(inputAno, inputMes - 1, inputDia)
    const dataLimite = new Date()

    dataLimite.setDate(dataLimite.getDate() - 1)
    dataLimite.setFullYear(dataLimite.getFullYear() - 100)

    if (dataInserida >= dataLimite && dataInserida <= new Date()) {
        age(inputDia, inputMes, inputAno)
        return true 
    } else {
        return false
    }
}

function age(dia, mes, ano) {
    getData()
    event.preventDefault()

    if (dataHoje[1] < mes || (dataHoje[1] === mes && dataHoje[2] < dia)) {
        dataHoje[0] -= 1
    }

    let ageYears = Math.abs(dataHoje[0] - parseInt(ano))
    let ageMonths = Math.abs(dataHoje[1] - parseInt(mes))
    let ageDays = 31 - Math.abs(dataHoje[2] - parseInt(dia))

    if (mes >= dataHoje[1]){
        ageMonths = 12 - Math.abs(dataHoje[1] - parseInt(mes))
    }
    if (ageDays === 0 && ageMonths > 0) {
        ageMonths -= 1
        ageDays = 30
    }
    if (ageMonths == 12){
        ageMonths = 0
    }
    if (ageMonths % 2 != 0 && ageMonths > inputMes){
        ageDays -= 1
    }
    document.getElementById("dia").textContent = ageDays
    document.getElementById("mes").textContent = ageMonths
    document.getElementById("ano").textContent = ageYears
}
