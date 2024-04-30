test('Teste divisão', () => {
    let a = 10
    let b = 5
    let resultado = div(a,b)
    expect(resultado).toBe(2)
});

function div(a,b){
    return a/b
}