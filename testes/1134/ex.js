import  {readFileSync}  from 'fs'
const entrada = readFileSync('./inp.txt', 'utf-8')
let linhas = entrada.trim().split('\n').map(Number)
let combustivel = linhas.shift()
console.log(combustivel)
