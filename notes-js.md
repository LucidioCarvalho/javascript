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

n1.toFixed(2)   // Coloca em duas casas decimais (para colocar em mais ou menos casas troque o numero entre parênteses)
n1.toLocaleString( ‘pt-br’,{style: ‘currecy’, currency: ‘BRL’} )    // Coloca o R$ na frente do numero (pode trocar entre outras moedas)
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

O operador ternario pode ser usado como atalho da instrucao condicional if...else, é aplicado como parte de uma expressao maior quando uma instrucao if...else for impraticavel

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
_______________________________________________________________________________

Podendo acessar por 
 
Marca
Id
Nome 
Classe
querySeletor

_______________________________________________________________________________

Eventos DOM

Alguns eventos mais comuns sao:
    
    eventos de mouse- > mousedown, mouseup, click dblclick,mousemove,
    mouseup,mousewhell, mouseout etc.
    
    eventos de toque-> touchstart, touchmove, touchend, touchcancel.

    eventos de teclado-> keydown,keypress,keyup

    eventos de formulario -> focus, blur, change,submit

    eventos de janela -> scroll, resize, hashchange, load, unlo ad

Alguns eventos sao especificos do dispotivo, como eventos de toque apenas para smartphones e laptop touchscreen,
Ja os eventos de mouse sao disparados na maioria dos navegadores, o evento mouseover nao e disparada em smartphones

E possivel adicionar listeners para os eventos de toque e de mouse para interface responder rapidamente a todos os dispositivos.
Existem bibliotecas como FASTCLICK que descobre automaticamente quais eventos  esperar em cada dispotivo.



____________________________________________________________________
  
CONDICOES

if (condicao){
    true
} else {
    false
}
 
Uma condicao simples

var vel = 66
console.log(`A velocidade do seu carro e ${vel}KM/h`);
if (vel >60 ){
    console.log(`Seu carro esta a cima da velocidade permitida, MULTADO`);
}
console.log(`Digira com cuidado seu animal`);

Uma condicao composta
var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if (pais != 'Brasil'){
    console.log('Voce é estrangeiro')
}else{
    console.log('Voce e Brasileiro')
}

function verificar() {
            
            var paistxt = document.getElementById('txtpais').value //utilizar o .value no final para pegar o valor digitado no campo ao invés do campo
            var ver = document.querySelector('div#ver')
            //var pais = (paistxt.value) // tbm é possível usar o valor em outra variável como ficou aqui, porém precisa trocar o nome da variável na condição if
           
            if (paistxt == 'Brasil') {
                ver.innerHTML = '<p>Você é Brasileiro</p>'
       }
            else {
                ver.innerHTML = '<p>Você é Estrangeiro</p>'


CONDICOES ANINHADAS

uma condicao composta dentro de outra

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if (hora <12){
    console.log(`Bom dia`)
} else if (hora <=18){
    console.log(`Boa tarde`)
}else {
    console.log (`Boa noite`)
}

____________________________________________________________________

CONDICAO MULTIPLA

com comando SWITCH (expressao) usado para valores pontuais, numeros inteiros e caracteres


Como exemplo abaixo puxando dia da semana do sistema e mostrando no console


var agora = new Date()
var diaSem =  agora.getDay()

console.log(diaSem)

switch (diaSem) {
    case 0: 
    console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terca`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4 :
        console.log(`Quinta`)
        break
    case 5 :
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
        break
    default :
    console.log(`Erro Dia invalido!`)
    break
    
}


____________________________________________________________________



Lacos de repedicao como a exeucao de um certo trecho de programa determinado numero de vezes
o termo é conhecido como malha de repeticao ou loopping 
-   Principal vantagem que o codigo fica menor sem alterar a estrutura do processamento.

while <(condicao)> {
    <instrucoes para condicao verdadeira>:
}

ex: Objetivo-> escrever uma mensagem limitando-a em 10x atravez de um contador que sera incrementado de mais 1*

var js_contador=1;

white (js_contador <=10){
    document.write('<p>'+ js_contador+ 'Repeticao de uma unica linha de comando dentro de um laco de condicional: ');
    js_contador +=1;

}



Exemplo abaixo com variavel de controle (valor logico =true), o controle sera feito atravez de uma pergunta na tela utilizando metodo conform ( ok ou cancel)

var js_contador=1;
var js_resposta=true;

white (js_resposta ==true){
    documento.write ('<p>'+ js_contador + 'Repeticao em uma unica linha laco condicional');
    js_contador+=1
    js_resposta = window.confirm ('Deseja continuar?');

}



____________________________________________________________________

LACO repeticao DO..WHILE

Efetua um teste logico no final de um laco (looping) pode ser controlada por condicao

ex: Calcular o salario liquido de um funcionado que trabalha por hora (horista)


    Para desenvolver o calculo é necessario ter as seguintes informacoes:
    -Quantidade de horas trabalhadas no mes (js_qht)
    -Valor da hora de trabalho (js_ht)
    -Percentual de desconto do INSS(js_inss)
-Informar a classificacao Salarial
-Objetivo/Metodo utilizado:
    entrada: window.prompt
    saida: document.write

Defnicao de variaveis:
var js_qht // var de entrada - hrs trabalhadas
var js_vht // var de entrada - Valor de hora trabalhada
var js_inss // var entrada - Percentual de desconto do INSS
var js_tdes // var de saida - Total de descontos
var js_sb // var de saida - Valor do salario bruto
var js_sl // var de saida - Valor do salario liquido
var js_resposta=true;

do{
    /* Entrada de dados */
js_qht = parseFloat(window.prompt('Ínforme a quantidade de horas trabalhadas/mes: (135 a 180) ','));
js_vht = parseFloat(window.prompt('Informe o valor da hora trabalhada: (25 a 50)','));
js_inss = parseFloat(window.prompt('Informe o percentual de desconto do INSS: (5 a 15)');

/*Processamento de dados*/
js_sb = js_vht * js_qht;
js_tdes = (js_inss/100) * js_sb;
js_sl= js_sb - js_tdes;


/*Saida de Dados com consistencia de valores */

document.write('<p><br>DEMONSTRATIVO PARA CALCULO DO SALARIO LIQUIDO</b>);
if(js_qht > 180){
    document.write('...(<b>Valor maximo excedido!</b>');
}
if (js_qht <135){
    document.write('...(<b>Valor minimo invalido!</b>);
}
document.write('<p>Valor da hora trabalhada (25 a 50) => <b>' + js_vht +</b>);
if (js_vht >50){
    document.write('...(<b>Valor maximo excedido!</b>);
}
if (js_vht <25){
    document.write('...(<b>Valor minimo invalido!</b>);
}
document.write('<p>Percentual de desconto INSS (t a 15) => <b> + js_inss + </b>);
if (js_inss >15){
    document.write('...(<b>Valor maximo excedido!</b>);
}
if(js_inss <5){
    document.write('...(<b>Valor minimo invalido!</b>);
}
document.write('<p>Salario Bruto = </b>' + js_sb);
document.write('<p>Total de desconto INSS = '+ js_tdes);
document.write('<p>Salario liquido =</b>'+ js_sl);




/* Saida de dados com aninhamento de if */
if (js_sl >10500){
    document.write('...(<b>Salario Elevado </b> maior que 10500)');
}
else{
    if(js_sl >6000){
        document.write('... (<b>Salario Satisfatorio </b> maior que 6000)')
    }
    else{
        if (js_sl >3000){
            document.write('... (<b>Salario Moderado </b> maior que 3000)');
        }
        else {
            document.write('... (<b>Salario insatisfatorio </b> menor ou igual a 3000)')
        }
    }
}
document.write('<p> =============================================================');
js_resposta = window.confirm ('Deseja continuar?');
}
while (js_resposta == true);




_____________________________________________________________________________________________________________________

INCONDICIONAL FOR
    -Efetua execucao de rotinas de um looping determinado numero de vezes utilizando um contador.


    for ( js_A=1; js_A <=5; js_A=js_A=1)
    {
        for (js_B=1; js_B<=3; js_B=js_B=1)
        {
            document.write('Incremente de 1 para js_B + js_B);
        }
        document.write('Incremento de 1 para js_A: '+ js_A);
    }
  
1
No primeiro laço for (para) a variável js_A recebe o valor inicial 1.
2
Em seguida, temos a primeira condição: js_A<=5. 
Para js_A<=5 verdadeiro, segue para o próximo comando.
3Encontramos então o segundo laço for de repetição.
4A variável js_B recebe o valor inicial 1.
5
Temos a segunda condição: js_B<=3.
Para js_B<=3 verdadeiro, segue para o próximo comando.
6
O valor armazenado em js_B é apresentado pelo comando document.write.
7
Com todos os comandos do bloco {...} executados, o loop for retorna ao início do segundo laço for.
8
O valor de js_B é incrementado de 1.
9
O segundo laço for repete a condição: js_B<=3. Enquanto verdadeiro, o bloco de comandos para esta condição é executado (repete-se linhas 6 a 9).
10
No caso de js_B<=3 não ser verdadeiro: Para js_B<=3 falso, o segundo laço for é definitivamente finalizado.
11
Seguimos para o próximo comando fora do bloco do segundo laço for.
12
O valor armazenado em js_A é apresentado pelo comando document.write.
13
Sem mais comandos na sequência, o loop for retorna ao início do primeiro laço for.
14
O valor de js_A é incrementado de 1.
15
O primeiro laço for repete a condição: js_A<=5. Enquanto verdadeiro, o bloco de comandos para esta condição é executado (repete-se linhas 12 a 15).
16
No caso de js_A<=5 não ser verdadeiro:
Para js_A<=5 falso, o js_A<=5 é definitivamente finalizado.

  Quando um “laço” é inicializado e não é finalizado, ocorre um erro de processamento denominado “laço infinito”.



 Objetivo: Efetuar a tabuada do 8 e apresentar os resultados
*/
 
/* Definicao das variaveis */
1var js_contador=1;
 
 
/* Laço de Repetição Condicional - while com loop Infinito
   Este é o loop com os procedimentos Incorretos - A sequência não se encerra
*/
/* while (js_contador > 0){
     document.write('<p>8 X ' + js_contador + ' = ' + 8*js_contador); 
        js_contador +=1;
}
*/
  
/*Este seria o loop com os procedimentos corretos
*/
2while (js_contador <= 10){ 
        3document.write('<p>8 X ' + js_contador + ' = ' + 8*js_contador); 
        js_contador +=1;4




_____________________________________________________________________________________________________________________

Método CONFIRM()

Se o botão OK for acionado, retornará o valor lógico true. Já se o botão Cancelar for acionado, retornará o valor lógico false.

    js_resp = window.confirm('Are you sure you want?');

________________________________________________________________________________________________________________

Métodos toUpperCase() e toLowerCase()

     JavaScript é uma linguagem sensitiva.
    Uma linguagem sensitiva diferencia caracteres literais maiúsculos de minúsculos.

O método toUpperCase() é aplicado para converter uma informação literal escrita em letras minúsculas ou mistas para letras maiúsculas.

            variável.toUpperCase() => js_cursodig.toUpperCase()


______________________________________________________________________________________________________________
Eventos Basicos do JS

onchange	O conteúdo de um elemento foi alterado e o elemento perdeu o foco (o usuário seleciona outra caixa).
onblur	O usuário apenas seleciona outra caixa, não precisando alterar necessariamente o seu conteúdo.
onabort	Uma transferência de imagem é interrompida pelo usuário.
onclick	O usuário clica usando o mouse.
onfocus	Um elemento do formulário ganha foco.
onkeydown	O usuário pressiona uma tecla.
onkeypress	O usuário pressiona uma tecla e depois a solta.
onkeyup	O usuário solta uma tecla.
onload	Um documento e todos os seus filhos são carregados.
onmousedown	Um botão do mouse é pressionado.
onmousemove	O mouse recebe um clique duplo.
onmouseout	O cursor do mouse sai de um elemento.
onmouseover	O cursor do mouse entra em um elemento.
onmouseup	Um botão do mouse é liberado.
onreset	Um formulário é reiniciado, ou seja, o usuário clica em um botão reset.
onresize	O tamanho de um objeto muda, ou seja, o usuário redimensiona uma janela ou frame.
onselect	Uma seleção de texto é iniciada (para input ou textarea).
onsubmit	Um formulário é submetido.
onunload	Uma página está para ser descarregada.

