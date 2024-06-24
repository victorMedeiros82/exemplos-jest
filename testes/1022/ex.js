import  {readFileSync}  from 'fs'

const entrada = readFileSync('./in1022.md', 'utf-8')
const lines = entrada.split('\n');
const input = ()=> lines.shift()
const nextPair = ()=>input().split(' ')
const nextPairInt = ()=>nextPair.map(Number) 
const nextPairFloat = ()=>nextPair.map(parseFloat)

const n = parseInt(input())
console.log(n)
// let n1,d1,n2,d2 = 0
for(let i=1; i<=n; i++){
    let [n1,bar,d1,op,n2,bar2,d2] = nextPair()
    console.log([n1,bar,d1,op,n2,bar2,d2])
}

