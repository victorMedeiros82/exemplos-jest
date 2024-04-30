test('teste subtração',()=>{
    let a = 10
    let b = 2
    let resultado = sub(a,b)
    expect(resultado).toBe(8)
})
function sub(a,b){
    return a-b
}