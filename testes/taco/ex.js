import  {readFileSync}  from 'fs'

const entrada = readFileSync('./in2388.md', 'utf-8')
const lines = entrada.split('\n');
const input = ()=> lines.shift()
const nextPair = ()=>input().split(' ')
const nextPairInt = ()=>nextPair.map(Number) 
const nextPairFloat = ()=>nextPair.map(parseFloat) 

const N = parseInt(input());
let total = 0;

for(let i=1; i<=N; i++) {
    let [v,t] = nextPairInt() 
    total += v * t;
}
console.log(total);