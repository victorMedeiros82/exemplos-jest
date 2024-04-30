import { solucao } from "./cedulas.js";

describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #1 VALOR 576 ', () => {
        let valor = 576
        let result = solucao(valor)
        expect(result).toEqual([5,1,1,0,1,0,1])
    });
});

describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #2 valor 11257', () => {
        let valor = 11257
        let result = solucao(valor)
        expect(result).toEqual([112,1,0,0,1,1,0])
    });
});

describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #3 valor 503', () => {
        let valor = 503
        let result = solucao(valor)
        expect(result).toEqual([5,0,0,0,0,1,1])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #4 valor 0', () => {
        let valor = 0
        let result = solucao(valor)
        expect(result).toEqual([0,0,0,0,0,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #5 valor 100', () => {
        let valor = 100
        let result = solucao(valor)
        expect(result).toEqual([1,0,0,0,0,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #6 valor 50', () => {
        let valor = 50
        let result = solucao(valor)
        expect(result).toEqual([0,1,0,0,0,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #7 valor 20', () => {
        let valor = 20
        let result = solucao(valor)
        expect(result).toEqual([0,0,1,0,0,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #8 valor 10', () => {
        let valor = 10
        let result = solucao(valor)
        expect(result).toEqual([0,0,0,1,0,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #9 valor 5', () => {
        let valor = 5
        let result = solucao(valor)
        expect(result).toEqual([0,0,0,0,1,0,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #10 valor 2', () => {
        let valor = 2
        let result = solucao(valor)
        expect(result).toEqual([0,0,0,0,0,1,0])
    });
});
describe('CENÁRIO DE TESTE', () => {
    test('caso de teste #11 valor 1', () => {
        let valor = 1
        let result = solucao(valor)
        expect(result).toEqual([0,0,0,0,0,0,1])
    });
});
