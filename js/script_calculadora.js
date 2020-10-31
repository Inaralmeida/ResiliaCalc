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
 
 
 let salvaNumero = []
  let salvaNum= salvaNumero.join('')
 
digito_1.addEventListener('click', function(){
  input.innerText += 1
  salvaNumero.push(1)  
})
digito_2.addEventListener('click', function(){
  input.innerText +=  2
  salvaNumero.push(2)
})
digito_3.addEventListener('click', function(){
  input.innerText += 3

})
digito_4.addEventListener('click', function(){
  input.innerText += 4
})

digito_5.addEventListener('click', function(){
  input.innerText += 5
  
})
digito_6.addEventListener('click', function(){
  input.innerText += 6
})
digito_7.addEventListener('click', function(){
  input.innerText += 7
})
digito_8.addEventListener('click', function(){
  input.innerText += 8
  
})
digito_9.addEventListener('click', function(){
  input.innerText += 9
})
digito_0.addEventListener('click', function(){
  input.innerText += 0
})
operador_soma.addEventListener('click', function(){
  salvaNumero.push(' ')
  input.innerText += ' +  '
  historico.innerText = salvaNum
  
  input.textContent = ' '
})

console.log(salvaNum)

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