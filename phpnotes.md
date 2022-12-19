To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in: 
    /opt/homebrew/etc/php/8.1/

To restart php after an upgrade:
  brew services restart php
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/php/sbin/php-fpm --nodaemonize


Como funciona PHP

    Um lado cliente do outro servidor, servidor usa o apache, utilizado para interpretar o script PHP, codigo comeca a ser processado gerando arquivo HTML, vai ser enviado para lado do cliente.
    PHP considerado server-side processamento é feito no servidor e enviado para cliente.

Variaveis em PHP
$idade = 3;
$nome ="Ana";

todos devem ser em letras minusculas, PHP modifica o tipo de acordo com sua funcao.
Pode forcar uma variavel para que fique:
    Inteiro (int), (integer)
    Real (real),(float),(double)
    Caractere (string)
    Logico nao existe typecast, ele considera True or false.


    CONCATENACAO 

$nome = "Ana";
$idade = 18;
echo $nome. "tem". $idade. "anos";


    OPERADORES ARITMETICOS

Adicao $r = $a + $b 

Subtracao $r = $a - $b 

Multiplicacao $r = $a * $b 

Divisao $r = $a / $b 

Modulo $r = $a % $b 

    Ordem de procedencia
    Paranteses ()

    Multiplicacao
    Divisao * / %
    Modulo

    Adicao  + - 
    Subtracao 

Utilizando valores personalisados

Analisando a URL do navegar, voce pode passar valores personalisados direto na URL utilizando  (?)

    EX: http://localhost:8888/cursophp.com/?a=5&b=8 
    codigo fica assim:

    $n1 = $_GET["a"];
    $n2 = $_GET["b"];

echo "Valores recebidos $n1 e $n2"

___________________________________________________________________________________________________________
Funcoes adicionais

    -abs () Valor absoluto de uma variavel

$v1 = $_GET["x"];
$v2 = $_GET["y"];
echo "A soma vale " . ($v1+$v2);

o comando .abs($v2) vai pegar o valor absoluto dele, ou seja a distancia que ele ocupada do 0.


->Na URL deve se editar ?x=4&y=4 vai imprimir no navegador 8

$v1 = $_GET["x"];
$v2 = $_GET["y"];
echo "<h2> Valores recebidos: $v1 e $v2 </h2>";
echo "O valor absoluto de $v2 e " . abs($v2);


    -pow () Potenciacao

echo "O valor de $v1 <sup> $v2</sup> e" .pow ($v1,$v2);


    -sqrt() Raiz Quadrada

echo "A raiz de $v1 e". sqrt($v1)


    -round() Arredondamento

echo "O valor de $v2 arredondado e ". round($v2); funciona para numeros inteiros.



    -intval() Valor inteiro da variavel


echo "A parte inteira de $v2 e ". intval($v2);

    -number_format() Formatacao

echo "O valor de $v1 em moeda e R$".number_format ($v1,2);  fica R$8,00



_______________________________________________________________________________________________________________________

            OPERADORES DE ATRIBUICAO

Adicao  $a = $a + $b  -> $a+=$b

Subtracao $a = $a - $b -> $a-=$b

Multiplicacao $a = $a * $b -> $a*=$b

Divisao $a = $a/$b -> $a/=$b

Modulo $a = $a % $b -> $a %= $b

Concatenacao $a = $a . $b -> $a .= $b

EX: 
$preco = $_GET["p"];
        echo "O preco do produto e R$ $preco";
        $preco += ($preco *10/100);
        echo "<br> O novo preco com 10% de aumento sera R$ $preco </br>";

 
            OPERADORES DE INCREMENTE

    Pre-incremento $a = $a + 1  -> ++ $a
    Incrementa antes de qualquer acao

    Pos-incremento $a = $a +1 $a++
    Primeiro uso da variavel depois vai incrementar.

    Pre-decremento $a = $a -1 -> --$a
    Diminuicao de uma unidade em uma variavel inteira

    Pos-decremento $a = $a -1    -> $a--

____________________________________________________________________________________________________ 
Como fazer referencia ENTRE VARIAVEIS

$a = 3;
$b = &$a;
$b += 5;
echo $a;
echo $b;
$a = 8 
$b = 8

Quando & estiver antes da variavel, vai ser referencia de $a ligando $a e $b por referencia.
$b vai ter mesmo valor de $a , quando for alterado $b automaticamente valor de $a tambem vai ser alterado porque esta referenciado.

______________________________________________________________________________________________________

VARIAVEIS DE VARIAVEIS

    Variaveis que sao criadas e utilizadas dinamicamente e o seu nome e o valor de outra variavel

$x = abc;
$$x = def;

echo "O conteudo da variavel X e $x";
echo "A variavel criada recebeu o valor $abc";

______________________________________________________________________________________________________

OPERADORES RELACIONAIS

Maior >
Menor <
Maior ou igual >=
Menor ou igual <=
Diferente <>
Igual ==
Identico ===

    OPERADOR UNARIO

expressao? verdadeiro : falso

$maior = $a>$b?$a:$b

$sit = $m < 7 ? "recuperacao" : "aprovado"
 

 Ex: Permitir que usuario escolha entre somar e multiplicar dois numeros:

 
$n1 =$_GET ["a"];
$n2 =$_GET ["b"];
$tipo =$_GET["op"];
echo Ös valores passados foram $n1 e $n2
$r = ($tipo =="s") ? $n1+$n2 : $n1 * $n2;
echo "O resultado sera $r";





        MOSTRAR SITUACAO ALUNO DE ACORDO COM MEDIA OBTIDA.

$nota1 = $_GET ["n1"];
$nota2 = $_GET ["n2"]
$m = ($nota1+$nota2)/2;
echo "a media entre $nota1 e $nota2 e $m";
echo "A situacao do aluno e ".(($m<6)? "REPROVADO" : "APROVADO");
 
________________________________________________________________________________________________

    OPERADORES LOGICOS

$a and $b -> E Verdadeiro TRUE se tanto a quanto b sao verdadeiros

$a or $b -> OU Verdadeiro se a ou b sao verdadeiros

$a xor $b -> XOR Verdadeiro se a ou b sao verdadeiros, mas nao ambos.

!$a -> NAO Verdadeiro se a nao e verdadeiro

$a && $b -> E Verdadeiro se tanto a quanto b sao verdadeiros

$a || $b -> OU Verdadeiro se a ou b sao veidadeiros.

EX:

$ano = $_GET["an"];
$idade = 2022 -$ano;
echo "Quem nasceu em $ano tem idade de $idade anos.";
$tipo = ($idade >=18 && $idade<65)?"OBRIGATORIO":"NAO OBRIGATORIO";
echo"E dessa forma seu voto e $tipo ";

________________________________________________________________________________________________
INTEGRACAO HTML + PHP
   
   
 FORMULARIO


No HTML indelx:

<form method ="get" action="02idade.php">
    Nome: <input type ="text" name="nome"/><br/>
    Ano de Nascimento: <Input type="number" name="ano"/><br/>
    <fieldset><legend>Sexo</legend>
        <input type="radio" name="sexo" id="masc" value="homem" checked/>
        <label for="masc">Masculino</label><br/>
        <input type="radio" name="sexo" id="fem" value="mulher"/>
        <label for="masc">Feminino</label>
        </fieldset><br/>  
    <input type="submit"value="Envia"/>
</form>

Arquivo PHP com nome 02idade.php

<?php
$nome = isset ($_GET["nome"])?$_GET["nome"]: "Nao informado";
$ano =$_GET["ano"];
$sexo = $GET["sexo"];
$idade = date ("Y") - $ano;
echo"$nome e $sexo e tem $idade anos";

<a href="02.exercicio.html">Voltar</a>


>


______________________________________________________________________________________________________________

ESTRUTURA CONDICIONAL

HTML
<body>
<div>
    <form method="get"action= "exercicio01.php">
    Ano de Nascimento:
    <input type="number"placeholder="4 digitos"name="ano"/>
    <input type="submit"value="Verificar" />
    </form>


</div>

<?php


$a = isset($_GET "ano")?$_GET "ano": 1900;
i$= date ("Y") - $a;

echo "Voce nasceu em $a e tera $i anos.
if ($i >=18){
    $v = "Ja pode votar";
    $d = "Ja pode dirigir";
}
else{
    $v ="Nao pode votar";
    $d ="Nao pode dirigir";
}
echo "Com essa idade voce $ v e tambem $d";


        CONDICOES ANINHADAS


<?php

$a = isset($_GET "ano")?$_GET "ano": 1900;
i$= date ("Y") - $a;

echo "Voce nasceu em $a e tera $i anos.
if ($i <16) {
    $tipoVoto = "Nao vota";
}
else {
    if (($i >=16 && $i <18) || ($i >65)){
        $tipoVoto= "Voto Opcional";
    }
    else{
        $tipoVoto="VOTO OBRIGATORIO";
    }
}
echo "Para essa idade, $tipoVoto";

?>

Diminuindo CODIGO com ELSEIF

 $a = isset($_GET "ano")?$_GET "ano": 1900;
i$= date ("Y") - $a;

echo "Voce nasceu em $a e tera $i anos.
if ($i <16) {
    $tipoVoto = "Nao vota";
}
elseif (($i >=16 && $i <18) || ($i >65)){
        $tipoVoto= "Voto Opcional";
    }
    else{
        $tipoVoto="VOTO OBRIGATORIO";
    }

echo "Para essa idade, $tipoVoto";

