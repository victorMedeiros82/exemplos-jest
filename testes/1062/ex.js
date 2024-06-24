import  {readFileSync}  from 'fs'
const entrada = readFileSync('./inp.md', 'utf-8').split('\n')
console.log(entrada)
let vagao = Number(entrada[0])
console.log(vagao)
let a =[]
let b = []
for (let i = 1; i < vagao; i++) {
    if (i==0) break
    else{
        vagao[i]==''
    }        
}