for(let i = 0; i < lines.length; i++){
    let pilha = []
    let deuRuim = false
    let linha = lines[i].trim()
    for(let k = 0; k < linha.length; k++){
        let simbolo = linha[k]
        if(simbolo == '('){
            pilha.push(simbolo)
        }
        if(simbolo == ')'){
            if(pilha.length > 0){
                pilha.pop()
            }else{
                deuRuim = true
                break
            }
        }
    }
    if(pilha.length > 0 || deuRuim){
        console.log('incorrect')
    }else{
        console.log('correct')
    }
}