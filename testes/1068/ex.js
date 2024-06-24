Array.prototype.top = function(){return this[this.length-1]}
var input = require('fs').readFileSync('inp.md', 'utf8');
var lines = input.trim().split('\n');
for(let i = 0; i < lines.length; i++){
    let pilha = []
    let estouroPilha = false
    let linha = lines[i].trim()
    for(let k = 0; k < linha.length; k++){
        let caracter = linha[k]
        if(caracter == '('){
            pilha.push(caracter)
        }
        if(caracter == ')'){
            if(pilha.top()){
                pilha.pop()
            }else{
                estouroPilha = true
                break
            }
        }
    }
    if(pilha.length > 0 || estouroPilha){
        console.log('incorrect')
    }else{
        console.log('correct')
    }
}