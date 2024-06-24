const fs = require('fs')
var input = fs.readFileSync('in.md', 'utf8').split(" ").map(Number)

let numerosCres = [...input].sort(function(a,b){
    return a-b
})  

for(let i = 0; i<numerosCres.length; i++){
    console.log(`${numerosCres[i]}`)
}
console.log()
for(let i = 0; i<numerosCres.length; i++){
    console.log(`${input[i]}`)
}