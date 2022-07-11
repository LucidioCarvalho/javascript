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
_______________________________________________________________________________

Operadores do JS

    Aritmeticos
    Atribuicao
    Relacionais
    Logicos
    Ternario


Aritimeticos
5 + 2 -> 7
5 - 2 -> 3
5 * 2 -> 10
5 / 2 -> 2.5
5 % 2 -> 1 resto da divisao inteira
5 ** 2 -> 25 5 ao quadrado, potencia.

_______________________________________________________________________________

Para fazer a conta abaixo voce deve colocar em () 5 e 3 
caso contrario o JS vai fazer primeiro a divisao depois a soma

5 + 3 / 2
_______________________________________________________________________________

Ordem Precedencia
()
**
* / %
+ -

_______________________________________________________________________________

Atribuicao Simples

var a = 5 + 3 -> a recebe 8
var b = a % 5 -> b recebe 3
var c = 5*b**2 -> c recebe 45
var d = 10 -a/2 -> d recebe 6
var e = 6*2 / d -> e recebe 2
var f = b % e +4 / e -> f recebe 3

_______________________________________________________________________________
Auto Atribuicoes

var n = 3
n = n + 4 -> variavel n vai valer 7

_______________________________________________________________________________

Simplificando

var n = 3
n= n + 4 fica n += 4

_______________________________________________________________________________

Incremento

var x =5
x+=1 para x++1
_______________________________________________________________________________

Operador Relacional

O resultado da operacao vai ser valor booleano.

> -> maior
< -> menor
>= -> maior ou igual 
<= -> menor ou igual
== -> igual
!= -> diferente de

_______________________________________________________________________________

Operadores de Identidade

=== esta testando mesmo valor e mesmo tipo
ex:
5 === '5' -> FALSE
_______________________________________________________________________________

Operadores Logicos

! -> negacao
&& -> conjuncao binario, os dois precisam ser True
|| -> disjuncao binario, que um dos 2 seja True

ex:
idade >= 15 && idade <=17 -> a idade esta entre 15 e 17?
estado == 'RJ || estado == 'SP'
salario >1500 && sexo !'M'

Oredem de precedencia

    ! && ||

_______________________________________________________________________________

Ternario

?
:
ex:
var media =5.5
media > 7? 'Aprovado':'Reprovado'
print-> 'Reprovado'

_______________________________________________________________________________

DOM -> Document Object Model

arvore hierarquia

    window existem 3 objetos -> location,document, history

    document -> HTML

    html -> head, body

    head -> meta,title

    body -> h1,p,div, etc



