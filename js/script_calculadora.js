 var input = document.getElementById('input')
 var historico = document.getElementById('historico')
 var digito_1 = document.getElementById("digito_1")
 var digito_2 = document.getElementById("digito_2")
 var digito_3 = document.getElementById("digito_3")
 var digito_4 = document.getElementById("digito_4")
 var digito_5 = document.getElementById("digito_5")
 var digito_6 = document.getElementById("digito_6")
 var digito_7 = document.getElementById("digito_7")
 var digito_8 = document.getElementById("digito_8")
 var digito_9 = document.getElementById("digito_9")
 var digito_0 = document.getElementById("digito_0")
 var negativo = document.getElementById("negativo")
 var virgula = document.getElementById("virgula")
 var operador_soma = document.getElementById("operador_soma")
 var operador_subtracao = document.getElementById("operador_subtracao" )
 var operador_divisao = document.getElementById("operador_divisao")
 var operador_multiplicacao = document.getElementById("operador_multiplicacao")
 var operador_porcentagem = document.getElementById("operador_porcentagem")
 var operador_potenciacao = document.getElementById("operador_potenciacao")
 var operador_radiciacao = document.getElementById("operador_radiciacao")
 var operador_fracao= document.getElementById("operador_fracao")
 var backspace = document.getElementById("backspace")
 var limpa_telaC = document.getElementById("limpa_telaC")
 var limpa_telaCE = document.getElementById("limpa_telaCE")
 var botao_resultado = document.getElementById("botao_resultado")
 
 
 var salvaNumero = []
 var operador = ''
 var num1 = ''
 var a = ''
 let resultado = 0
 
 //numeros
 digito_1.addEventListener('click', function(){
  input.innerText += 1
  num1 += 1
  
})
digito_2.addEventListener('click', function(){
  input.innerText +=  '2'
  num1 += 2
  
})
digito_3.addEventListener('click', function(){
  input.innerText += 3
  num1 += 3
  
  
})
digito_4.addEventListener('click', function(){
  input.innerText += 4
  num1 +=4
})
digito_5.addEventListener('click', function(){
  input.innerText += 5
  num1 +=5
})
digito_6.addEventListener('click', function(){
  input.innerText += 6
  num1 +=6
})
digito_7.addEventListener('click', function(){
  input.innerText += 7
  num1 +=7
})
digito_8.addEventListener('click', function(){
  input.innerText += 8
  num1 +=8
  
})
digito_9.addEventListener('click', function(){
  input.innerText += 9
  num1 +=9
})
digito_0.addEventListener('click', function(){
  input.innerText += 0
  num1 +=0
})
virgula.addEventListener('click', function(){
  input.innerText +=','
  num1 += '.'
})
negativo.addEventListener('click', function(){
  input.innerText = `-${num1}`
  num1 = num1 * (-1)
})

//Funções
limpa_telaC.addEventListener('click', function(){
  salvaNumero= []
  historico.innerText = ' '
  input.innerText = ' '
})

limpa_telaCE.addEventListener('click', function(){
  input.innerText = ' '
  num1 = ''
})



//Opoeradores
operador_soma.addEventListener('click', function(){

  a= resultado + num1
  console.log(`valor de ${a}`)

  input.innerText += '+'
  operador = '+'
  salvaNumero.push(parseFloat(a))
  salvaNumero.push(operador)
  historico.innerText = salvaNumero.join(' ')
  num1= " "
  input.textContent = ' '
})

operador_subtracao.addEventListener('click', function(){
  
  input.innerText += ' -  '
  operador = '-'
  a = num1
  salvaNumero.push(parseFloat(a))
  salvaNumero.push(operador)
  historico.innerText = salvaNumero.join(' ')
  num1= " "
  console.log(salvaNumero, num1)
  input.textContent = ' '
})

operador_multiplicacao.addEventListener('click', function(){
  
  input.innerText += ' *  '
  operador = '*'
  a = num1
  salvaNumero.push(parseFloat(a))
  salvaNumero.push(operador)
  historico.innerText = salvaNumero.join(' ')
  num1= " "
  console.log(salvaNumero, num1)
  input.textContent = ' '
})

operador_divisao.addEventListener('click', function(){
  
  input.innerText += ' /  '
  operador = '/'
  a = num1
  salvaNumero.push(parseFloat(a))
  salvaNumero.push(operador)
  historico.innerText = salvaNumero.join(' ')
  num1= " "
  console.log(salvaNumero, num1)
  input.textContent = ' '
})

//resultado
botao_resultado.addEventListener('click', function(){
  
  input.innerText += ' =  '
  operador = '='
  a = num1
  salvaNumero.push(parseFloat(a))
  salvaNumero.push(operador)
  historico.innerText = salvaNumero.join(' ')

  num1= " "
  input.textContent = ''
  let resultadoFinal = []
  
  
  
  
  for(let i = 0; i < salvaNumero.length; i++){
    if( salvaNumero[i]  == "+" && salvaNumero[i+1] && salvaNumero[i-1] ){
      let numero1 = salvaNumero[i-1] 
      let numero2 = salvaNumero[i+1]
      console.log(`numero 1: ${numero1}`)
      console.log(`numero 2: ${numero2}`)
      
      let igual = salvaNumero[salvaNumero.length - 1]

      let resultado = numero1 + numero2 
      
      salvaNumero.splice(igual, 1)
      
      salvaNumero.splice(0, 3) 
    
      num1= resultado

      
      resultadoFinal.push(parseInt(resultado))
      console.log(resultado)
      console.log(salvaNumero) 
      historico.innerText = salvaNumero.join(' ')
      input.textContent = resultado
      
      /* 
      historico.innerText = salvaNumero.join(' ') + `= ${resultado}`
      num1 = resultado
      input.innerText = resultado */
    } 
    /*
    else if(salvaNumero.length % 2 == 0){
      if( salvaNumero[i]  == "+" && salvaNumero[i+1] && salvaNumero[i-1] ){
        let numero1 = salvaNumero[i-1] 
        let numero2 = salvaNumero[i+1]
        console.log(`numero 1: ${numero1}`)
        console.log(`numero 2: ${numero2}`)
        
        let resultado = numero1 + numero2 + salvaNumero[salvaNumero.length - 1]
        
        salvaNumero.splice(0, 2)
        resultadoFinal.push(resultado)
        console.log(resultadoFinal)
        
      }
    }
    
  } */
  
}

})




/* console.log(salvaNum) */

/* function falsoBinario(x){
  let numero = x.toString()
  console.log(numero.length)
  
  let resultado = []
  let resultadoFinal = resultado.join('')
  for(let i = 0; i < numero.length; i++){
    
    if(x[i] > 4){
      let num5 = 5
      resultado.push(num5)
    }
    if(x[i] < 5) {
      let num0 = 0
      resultado.push(num0)
      console.log(resultado)
    }
  }
  
  console.log( resultadoFinal)
}

falsoBinario("351772248482")

function inverter(n) {
  let numeroLetra = n.toString()
  let arrOriginal = []
  let arrInvertido = []
  
  for(let i = 0; i < numeroLetra.length; i++){
    arrOriginal.push(parseInt(numeroLetra[i]))
    console.log(numeroLetra[i])
  }
  
  for(let i = arrOriginal.length -1  ; i > -1; i--){
    arrInvertido.push(parseInt(numeroLetra[i]))
    console.log(numeroLetra[i])
  }
  console.log(arrInvertido)
}

inverter(351772248482) */