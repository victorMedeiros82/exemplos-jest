describe('soma()',()=>{
    describe("A soma de dois números inteiros deverá resultar em um inteiro.",()=>{
    });
        test('Caso 01: Quando a = 2 e b = 2, deve retornar 4',()=>{
            expect(soma(2,2)).toBe(4)
        });
        test('Caso 02: Quando a = 10 e b = 2, deve retornar 12',()=>{
            expect(soma(10,2)).toBe(12)
        });
        test('Caso 03: Quando a = 0 e b = 0, deve retornar 0',()=>{
            expect(soma(0,0)).toBe(0)
        });
    describe("A soma de dois números literais deverá resultar em um inteiro.",()=>{
    });
        test('Caso 4: Quando a = "2" e b = "2", deve retornar 4',()=>{
            expect(soma("2","2")).toBe(4)
        });
        test('Caso 5: Quando a = "10" e b = "2", deve retornar 12',()=>{
            expect(soma("10","2")).toBe(12)
        });
        test('Caso 6: Quando a = "0" e b = "0", deve retornar 0',()=>{
            expect(soma(0,0)).toBe(0)
        });
    describe("A soma de um número literal e um número inteiro deverá resultar em um inteiro.",()=>{
    });
        test('Caso 7: Quando a = "2" e b = 2, deve retornar 4',()=>{
            expect(soma("2",2)).toBe(4)
        });
        test('Caso 8: Quando a = "10" e b = 2, deve retornar 12',()=>{
            expect(soma("10",2)).toBe(12)
        });
        test('Caso 9: Quando a = "0" e b = 0, deve retornar 0',()=>{
            expect(soma("0",0)).toBe(0)
        });
        test('Caso 10: Quando a = 2 e b = "2", deve retornar 4',()=>{
            expect(soma(2,"2")).toBe(4)
        });
        test('Caso 11: Quando a = 10 e b = "2", deve retornar 12',()=>{
            expect(soma(10,"2")).toBe(12)
        });
        test('Caso 12: Quando a = 0 e b = "0", deve retornar 0',()=>{
            expect(soma(0,"0")).toBe(0)
        });
    describe("A soma de duas strings deve gerar uma mensagem de erro.",()=>{
    });
        test('Caso 13: Quando a = "abc" e b = "2", deve retornar "Erro: um ou mais parâmetros com tipo(s) não suportado(s)',()=>{
            expect(()=>soma("abc","2")).toThrow(Error)
        });
        test('Caso 14: Quando a = "10" e b = "cde", deve retornar "Erro: um ou mais parâmetros com tipo(s) não suportado(s)',()=>{
            expect(()=>soma("10","cde")).toThrow(Error)
        });
        test('Caso 15: Quando a = "ijk" e b = "xyz", deve retornar "Erro: um ou mais parâmetros com tipo(s) não suportado(s)',()=>{
            expect(()=>soma("ijk","xyz")).toThrow(Error)
        });
        
})


function soma(a,b){
    let errorMsg = 'Erro: um ou mais parâmetros com tipo(s) não suportado(s)'
    let [x,y] = [Number(a),Number(b)]
    if(isNaN(x)||(isNaN(y))){
        throw Error(errorMsg)
    }
    return x+y
}