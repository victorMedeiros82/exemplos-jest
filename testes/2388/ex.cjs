const fs = require('fs')
var input = fs.readFileSync('in.md', 'utf8').split("\n")
let N = input[0]

let vt = 0
for (let i = 1; i<=N;i++){
    let t = input[i].split(' ').map(Number)
    let x = t[0]
    let y = t[1]
    vt = x*y+vt
}
console.log(vt)