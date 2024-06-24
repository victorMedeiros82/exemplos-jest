## Realizando a leitura do arquivo:

```
Caso de teste #1
Entrada = 1 500 | Saída Esperada = 500
Entrada = 2 300 | Saída Esperada = 600
Entrada = 1 400 | Saída Esperada = 400
Entrada = 3 200 | Saída Esperada = 600
0 0

Caso de teste #2
Entrada = 3 900     | Saída Esperada = 2700
Entrada = 2 3500    | Saída Esperada = 7000 
Entrada = 1 4789    | Saída Esperada = 4789
Entrada = 1 5432    | Saída Esperada = 5432
Entrada = 3 750     | Saída Esperada = 2250
Entrada = 3 1400    | Saída Esperada = 4200
0 0

Caso de test #3
Entrada = 3 900     | Saída Esperada = 2700
Entrada = 2 3500    | Saída Esperada = 7000
Entrada = 1 4789    | Saída Esperada = 4789
Entrada = 1 5432    | Saída Esperada = 5432
Entrada = 3 750     | Saída Esperada = 2250
Entrada = 3 1400    | Saída Esperada = 4200
Entrada = 1 5000    | Saída Esperada = 5000
Entrada = 2 3005    | Saída Esperada = 6010
Entrada = 1 4040    | Saída Esperada = 4040
Entrada = 3 2002    | Saída Esperada = 6006
0 23456   

Caso de teste #4
Entrada = 3 900     | Saída Esperada = 2700
Entrada = 2 3500    | Saída Esperada = 7000   
Entrada = 1 4789    | Saída Esperada = 4789
Entrada = 1 5432    | Saída Esperada = 5432
Entrada = 3 750     | Saída Esperada = 2250
Entrada = 3 1400    | Saída Esperada = 4200
Entrada = 1 5000    | Saída Esperada = 5000
Entrada = 2 3005    | Saída Esperada = 6010
Entrada = 1 4040    | Saída Esperada = 4040
Entrada = 3 2002    | Saída Esperada = 6006
0

Caso de teste #5
3 900
2 3500
1 4789
1 5432
3 750
3 1400
1 5000
2 3005
1 4040
3 2002
```

```js
const input = require('fs').readFileSync('in2172', 'utf-8')
```

Vamos assumir que input agora contém a string: "1 500\n2 300\n1 400\n3 200"

## Dividindo o conteudo em linhas:

## codigo:

```js
const lines = input.split('\n').slice(0, -1)
```

## Explicação do codigo:

`input.split('\n')` divide a string em um array de linhas: `["2 3", "4 5 6", "7 8 9", ""]
.slice(0, -1)` remove o último elemento (uma linha vazia): `["2 3", "4 5 6", "7 8 9"]`

## Função para converter cada linha em um array de numeros

## codigo:

```js
const getpar = (linha) => linha.trim().split(' ').map(Number)
```

## explicação de cada parte do codigo:

`linha.trim()` remove espaços em branco no início e no final da linha (não há espaços extras aqui).
`linha.split(' ')` divide a linha em partes baseadas em espaços.
map(Number) converte cada parte de string para número.

## Aplicar a Função a Cada Linha e Calcular o Produto dos Elementos:

## codigo:

```js
lines.map(getpar).forEach(par => console.log(par.reduce((a, b) => a * b, 1)))
```

## Explicação de cada parte:

`lines.map(getpar)`:

"2 3" se torna [2, 3]<br>
"4 5 6" se torna [4, 5, 6]<br>
"7 8 9" se torna [7, 8, 9]

```js
forEach(par => console.log(par.reduce((a, b) => a * b, 1))):
```

Para [2, 3]:<br>
Passo 1: a = 1, b = 2, a * b = 1 * 2 = 2<br>
Passo 2: a = 2, b = 3, a * b = 2 * 3 = 6<br>
Resultado: 6

Para [4, 5, 6]:<br>
Passo 1: a = 1, b = 4, a * b = 1 * 4 = 4<br>
Passo 2: a = 4, b = 5, a * b = 4 * 5 = 20<br>
Passo 3: a = 20, b = 6, a * b = 20 * 6 = 120<br>
Resultado: 120

Para [7, 8, 9]:<br>
Passo 1: a = 1, b = 7, a * b = 1 * 7 = 7<br>
Passo 2: a = 7, b = 8, a * b = 7 * 8 = 56<br>
Passo 3: a = 56, b = 9, a * b = 56 * 9 = 504<br>
Resultado: 504