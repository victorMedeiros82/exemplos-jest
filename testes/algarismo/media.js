export function verificaSituacao(n1,n2,n3,n4){
    let media = (-n1-n2-n3-n4)/4*-1
    console.log(media)
    if (media>=7.0) {
        return "Aprovado"
    }else{
        return "Reprovado"
    }
    
}
