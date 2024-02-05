/*
O que será abordado nesse desafio:
- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Nesse desafio, você irá solicitar ao usuário que ele insira 
**dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

alert("Vamos jogar um jogo!")

let firstNumber = prompt("Digite o primeiro numero: ")
let secondNumber = prompt("Digite o segundo numero: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
alert("A soma dos dois números e: " + sum)
const sub = firstNumber - secondNumber
alert("A subtração dos dois números e: " + sub)
const multi = firstNumber * secondNumber
alert("A multiplicação dos dois números e: " + multi)
const div = firstNumber / secondNumber
alert("A divisão dos dois números e: " + div)
const restDiv = firstNumber % secondNumber
alert("O resto da divisão dos dois números e: " + restDiv) 

if(restDiv == 0) {
    alert("Esse numero e par.")
}
else {
    alert("Esse numero e impar.")
}