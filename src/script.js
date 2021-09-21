var nome = "Guilherme"
var notaDoPrimeiroBimestre = 9.4355
var notaDoSegundoBimestre = 7.234
var notaDoTerceiroBimestre = 4.234
var notaDoQuartoBimestre = 2.183
 
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
 
var notaFixada = notaFinal.toFixed(1)

console.log("Bem-vindo " + nome)
console.log(notaFixada)

if(notaFixada >= 7)
      if(notaFixada==10)
       console.log("Uau! Aprovado com Sucesso")
      else
       console.log("Parabens, aprovado! Media " + notaFixada)
     else
      console.log("Você foi Reprovado!")
 
//Revisão
//variáveis, strings, console.log, tofixed, operações matemáticas, concatenação



