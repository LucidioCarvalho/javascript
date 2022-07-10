NOme de cada variavel
identificadores
    Podem comecar com letra, $ ou _

    Nao pode comecar com numeros

    E  possivel usar letras ou numeros

    E possivel usar acentos e simbolos

    Nao podem conter espacos

    Nao podem ser palavras reservadas
_______________________________________________________________________________
Dicas

    Maiusculas e minusculas fazem a diferenca
    Tente escolher nomes coerentes para variaveis

Data Types -> typeof

number existem dois tipos primitivos
 Infinity
 NaN


string
boolean
null
undefined
object
    Array
function

// Numbers: 1; -2; 4.5; 6.555 -> Basicamente números
// Strings: Maria, Google, Joao, pedreiro, (seu CPF) -> Basicamente cadeia de caracteres
// Boolean: True; False

________________________________________________________________________

Transformando uma string em um number

var n1 = Number.parseInt (window.prompt ('digite aqui um numero!'))
var numero1 = Number.parseFloat (window.prompt ('digite aqui um numero!'))
var numero1 = Number (window.prompt ('digite aqui um numero!’))

Mas qual é a diferença entra “Number.parseInt”, “Number.parseFloat” e Number?

// Number.parseInt: Numero Inteiro
// Number.parseFloat: Numero com virgula
// Number: Js vai decidir qual é

________________________________________________________________________

Transformando um number em uma string

window.alert ('a soma dos numeros é: ' + String(soma))      // Jeito mais simples
________________________________________________________________________

Formatando Strings:

var teste = 'java script’

‘eu estou aprendendo’ + teste
`eu estou aprendendo ${teste}` -> não esqueça de usar crase!
teste.length                   // conta quantos caracteres tem na variável  
teste.toUpperCase        // coloca tudo em caixa alta
teste.toLowerCase        // coloca tudo em minúsculo 

________________________________________________________________________

Formatando números:

Var n1 = 1543.5

n1.toFixed(2)                                                                              // Coloca em duas casas decimais (para colocar em mais ou menos casas troque o numero entre parênteses)
n1.toLocaleString( ‘pt-br’,{style: ‘currecy’, currency: ‘BRL’} )    // Coloca o R$ na frente do numero (pode trocar entre outras                                                                                                                 moedas)
n1.replace (‘.’, ‘,’)         // Troca o ponto pela virgula