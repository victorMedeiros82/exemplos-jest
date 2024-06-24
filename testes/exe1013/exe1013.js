export function main(lines){
    let l = lines[0].split()
    let a = Number(l[0])
    let b = Number(l[1])
    let c = Number(l[2])
    let maior = Math.max(a,b)
    maior = Math.max(maior,c)
    return maior+"eh o maior"
}