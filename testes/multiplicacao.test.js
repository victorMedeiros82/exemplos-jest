test('Teste multiplicação ', () => {
    let a = 5
    let b = 3
    let resultado = multiplica(a,b)
    expect(resultado).toBe(15)
});
function multiplica(a,b){
    return a*b
}