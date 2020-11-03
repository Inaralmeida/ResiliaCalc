let numeros = [
    num0, num1, num2, num3, num4, num5, num6, num7, num8, num9
]
//operadores
let soma = document.querySelector('#soma')
let subtrai = document.querySelector('#subtrai')
let divide = document.querySelector('#divide')
let multiplica = document.querySelector('#multiplica')

//funções
let igual = document.querySelector('#igual')
let CE = document.querySelector('#CE')
let C = document.querySelector('#C')
let historico =  document.querySelector('#historico')


let input = document.querySelector('#input')
let salvaNum = []
let numValue = ''

let resultado = ''
resultadoFinal = 0
let operador = ''
let operando = []


numeros.forEach(function(numeros, index){
    this.document.querySelector(`num${[index]}`)
    numeros.addEventListener('click', function(){
        if(resultadoFinal != ''){
            salvaNum = []
            input.textContent = ''
            historico.textContent = ''
            resultadoFinal = ''
            resultado = ''
            numValue = ''
            operando = []
            console.log('leu o if')
        }
        numValue += index
        input.textContent += index
        /* salvaNum.splice(0, 1) */
        salvaNum.push(numValue)
        console.log(salvaNum)
        resultado = ' '
        historico.textContent = operando.join(' ')
        
        
    })
    
})
for(let elemento in numeros){
    this.addEventListener('click', function(){
        elemento.style = `color: #000`
        
    })
}


soma.addEventListener('click', function(){
    operador = '+'
    numValue = ''
    input.textContent = numValue
    numValue = ''
    operando.push(salvaNum[salvaNum.length -1])
    
    operando.push(operador)
    console.log(operando)
    historico.textContent = operando.join(' ')   
})
subtrai.addEventListener('click', function(){
    operador = '-'
    numValue = ''
    input.textContent = numValue
    numValue = ''
    operando.push(salvaNum[salvaNum.length -1])
    operando.push(operador)
    console.log(operando)
    historico.textContent = operando.join(' ')   
})
divide.addEventListener('click', function(){
    operador = '/'
    numValue = ''
    input.textContent = numValue
    numValue = ''
    operando.push(salvaNum[salvaNum.length -1])
    operando.push(operador)
    console.log(operando)
    historico.textContent = operando.join(' ')   
})
multiplica.addEventListener('click', function(){
    operador = '*'
    numValue = ''
    input.textContent = numValue
    numValue = ''
    operando.push(salvaNum[salvaNum.length -1])
    operando.push(operador)
    console.log(operando)
    historico.textContent = operando.join(' ')   
})


igual.addEventListener('click', function(){
    //pega o ultimo numero do array salvaNum
    operando.push(salvaNum[salvaNum.length -1])
    //limpa o histórico
    historico.textContent =''
    //transforma o array oprando em string
    resultado = operando.join(' ')
    
    console.log(resultado)
    
    //mostra o resultado na tela e faz a conta
    input.textContent = resultadoFinal = eval(resultado)
    
    //limpa o operando e salvaNum
    operando = []
    salvaNum = []
    //adiciona o resultado final ao operando
    operando.push(parseFloat(resultadoFinal))
    console.log(salvaNum)
    console.log(operando)
    console.log(resultado)
    
    
    
} )


CE.addEventListener('click', function(){
    salvaNum = []
    input.textContent = ''
    historico.textContent = ''
    resultadoFinal = ''
    resultado = ''
    numValue = ''
    operando = []
})


C.addEventListener('click', function(){
    // salvaNum = []
    // input.textContent = ''
    // resultadoFinal = ''
    // resultado = ''
    // numValue = ''

    document.location.reload(true)         //--------------- mudança feita mas pode-se alterar 
})

//---------------------botões gerais--------------------------------------------------
var botoes = document.querySelectorAll(".btn")

botoes.forEach(function(todosOsBotoes){
 todosOsBotoes.addEventListener('mouseover', () =>{
   todosOsBotoes.style.background = 'linear-gradient(#777,#222)'
 })
 todosOsBotoes.addEventListener('mouseout', () =>{
     todosOsBotoes.style.background = 'linear-gradient(#222, #777)'
     todosOsBotoes.style.color = 'white'
 })
})

for (let todosOsBotoes of botoes){
 todosOsBotoes.addEventListener('mousedown', () =>{
     todosOsBotoes.style.color = 'black'
     todosOsBotoes.style.background = 'linear-gradient(#222, #777)'
 })
 todosOsBotoes.addEventListener('mouseup', () =>{
     todosOsBotoes.style.color = 'white'
     todosOsBotoes.style.background = 'linear-gradient(#777,#222)'
 })
}
//---------------------botões gerais-------------------------------------------------
