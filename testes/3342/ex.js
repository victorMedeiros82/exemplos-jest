import  {readFileSync}  from 'fs'
const entrada = parseInt(readFileSync('./inp.txt', 'utf-8'))
let brancas = Math.round(entrada*entrada/2)
let pretas = Math.trunc(entrada*entrada/2)
console.log('brancas:',brancas)
console.log('pretas:',pretas)