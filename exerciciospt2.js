// Exercício 01 - Crie uma função que some dois valores.

const soma = (a,b) => a + b
console.log(soma(2,5))
7
// Fim



// Exercício 02 - Crie uma função que faça uma ocorrencia em loop X vezes, informado pelo usuário, somando a variavel, no final, imprima esse resultado.

const vezes = Number(prompt("Digite quantas vezes o loop deve rodar"))
function loop(){
    let soma = 0
    for(let i = 0; i < vezes; i++){
        soma += i
    }
    return soma
}
let final = loop()
console.log(`Com o loop rodando ${vezes} vezes, a soma dos números é de: ${final}`);

// Fim



// Exercício 03 - Crie uma função que calcule a sequencia Fibonacci até um determinada ocorrencia

const string = Number(prompt("Digite até qual determinada ocorrência deseja calcular a sequência de Fibonacci"))

function mostrarFibonacci(){
    let resultFinal = [0,1]
    for(let i = 2; i < string; i++){
        resultFinal[i] = resultFinal[i-1]+resultFinal[i-2]
    }
    console.log(resultFinal)
}
mostrarFibonacci()

// Fim



// Exercício 4 - Imprima o valor de uma string, uma letra em cada linha.

const string = prompt("Digite uma frase")

function imprimirSeparado(){
    for(i=0;i<string.length;i++){
        console.log(string.charAt(i))
    }
}
imprimirSeparado()

// Fim



//Exercício 05 - Inverta uma sequência de caracteres informada sem utilizar funções nativas do javascript.

const string = prompt("Digite uma frase")

function imprimirReverso(){
    let reverso = '';
    for(i=string.length;i>=0;i--){
        reverso += string.charAt(i)
    }
    console.log(reverso)
}
imprimirReverso()

// Fim