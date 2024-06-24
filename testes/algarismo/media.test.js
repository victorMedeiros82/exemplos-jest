import {verificaSituacao} from './mediaPond.js';
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1=6
        let n2=9
        let n3=5
        let n4=5
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Reprovado")
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8.5
        let n2=8
        let n3=7
        let n4=6.5
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1="7"
        let n2="8"
        let n3="9"
        let n4="10"
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1="1"
        let n2="1"
        let n3="1"
        let n4="10"
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Reprovado")
    });
});
