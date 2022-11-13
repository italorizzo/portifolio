const valor = document.getElementById('valor')
const bt_1 = document.getElementById('1')
const bt_2 = document.getElementById('2')
const bt_3 = document.getElementById('3')
const bt_4 = document.getElementById('4')
const bt_5 = document.getElementById('5')
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const custom = document.getElementById('custom')
const people = document.getElementById('people')
const proibido = document.getElementById('proibido')
const reset = document.getElementById('reset')

var porcent = 0

bt_1.addEventListener('click', () => {
    bt_1.style.backgroundColor = 'hsl(172, 67%, 45%)'
    bt_1.style.color = 'hsl(183, 100%, 15%)'

    //PADRÃO
    bt_2.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_2.style.color = 'white'
    bt_3.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_3.style.color = 'white'
    bt_4.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_4.style.color = 'white'
    bt_5.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_5.style.color = 'white'
    porcent = 0.05
})
bt_2.addEventListener('click', () => {
    bt_2.style.backgroundColor = 'hsl(172, 67%, 45%)'
    bt_2.style.color = 'hsl(183, 100%, 15%)'

    //PADRÃO
    bt_1.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_1.style.color = 'white'
    bt_3.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_3.style.color = 'white'
    bt_4.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_4.style.color = 'white'
    bt_5.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_5.style.color = 'white'

    porcent = 0.1
})
bt_3.addEventListener('click', () => {
    bt_3.style.backgroundColor = 'hsl(172, 67%, 45%)'
    bt_3.style.color = 'hsl(183, 100%, 15%)'
    
    //PADRÃO
    bt_1.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_1.style.color = 'white'
    bt_2.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_2.style.color = 'white'
    bt_4.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_4.style.color = 'white'
    bt_5.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_5.style.color = 'white'

    porcent = 0.15
})
bt_4.addEventListener('click', () => {
    bt_4.style.backgroundColor = 'hsl(172, 67%, 45%)'
    bt_4.style.color = 'hsl(183, 100%, 15%)'

    
    //PADRÃO
    bt_1.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_1.style.color = 'white'
    bt_2.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_2.style.color = 'white'
    bt_3.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_3.style.color = 'white'
    bt_5.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_5.style.color = 'white'

    porcent = 0.25
})
bt_5.addEventListener('click', () => {
    bt_5.style.backgroundColor = 'hsl(172, 67%, 45%)'
    bt_5.style.color = 'hsl(183, 100%, 15%)'

    
    //PADRÃO
    bt_1.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_1.style.color = 'white'
    bt_2.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_2.style.color = 'white'
    bt_3.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_3.style.color = 'white'
    bt_4.style.backgroundColor = 'hsl(183, 100%, 15%)'
    bt_4.style.color = 'white'

    porcent = 0.5
})
custom.addEventListener('click', () => {
    custom.addEventListener('mouseleave', () => {
        porcent = custom.value/100
    })
})
reset.addEventListener('click', () => {
    location.reload()
})

people.addEventListener('mouseleave', fazer)

function fazer(){
    if (people.value != 0){
        proibido.style.opacity = '0'
        people.style.border = '0px solid rgb(189, 0, 0)'        
        final()
    }else{
        proibido.style.opacity = '1'
        people.style.border = '1.5px solid rgb(189, 0, 0)'
    }
}
function final(){
    valor1.innerHTML = `$${(valor.value * porcent / people.value).toFixed(2)}`
    valor2.innerHTML = `$${(valor.value /people.value + (valor.value * porcent / people.value)).toFixed(2)}`
}