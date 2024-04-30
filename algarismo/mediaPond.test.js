import {calcMedia, verificaSituacao} from './mediaPond.js';
describe('TEST DE MÉDIA > 7.0', () => {
    test('TESTE #1 - MÉDIA > 7.0 - PESO DEFINIDO', () => {
        let notas=[8,8,8,8]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(8)
    });
    test('TESTE #2 - MÉDIA > 7.0 (STRING) - PESO DEFINIDO', () => {
        let notas=["8","8","8","8"]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(8)
    });
    test('TESTE #3 - MÉDIA > 7.0 - PESO DEFINIDO (STRING)', () => {
        let notas=[8,8,8,8]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(8)
    });
    test('TESTE #4 - MÉDIA > 7.0  (STRING) - PESO DEFINIDO (STRING)', () => {
        let notas=["8","8","8","8"]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(8)
    });
    test('TESTE #5 - MÉDIA > 7.0 - SEM PESO DEFINIDO', () => {
        let notas=[8,8,8,8]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(8)
    });
    test('TESTE #6 - MÉDIA > 7.0 (STRING) - SEM PESO DEFINIDO', () => {
        let notas=["8","8","8","8"]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(8)
    });
});
//--------------------------------------------------------------------------------
describe('TEST DE MÉDIA < 7.0', () => {
    test('TESTE #1 - MÉDIA < 7.0 - PESO DEFINIDO', () => {
        let notas=[5,7,6,4]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(5.3)
    });
    test('TESTE #2 - MÉDIA < 7.0 (STRING) - PESO DEFINIDO', () => {
        let notas=["5","7","6","4"]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(5.3)
    });
    test('TESTE #3 - MÉDIA < 7.0 - PESO DEFINIDO (STRING)', () => {
        let notas=[5,7,6,4]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(5.3)
    });
    test('TESTE #4 - MÉDIA < 7.0  (STRING) - PESO DEFINIDO (STRING)', () => {
        let notas=["5","7","6","4"]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(5.3)
    });
    test('TESTE #5 - MÉDIA < 7.0 - SEM PESO DEFINIDO', () => {
        let notas=[5,7,6,4]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(5.5)
    });
    test('TESTE #6 - MÉDIA < 7.0 (STRING) - SEM PESO DEFINIDO', () => {
        let notas=["5","7","6","4"]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(5.5)
    });
});
//----------------------------------------------------------------------------------
describe('TEST DE MÉDIA = 7.0', () => {
    test('TESTE #1 - MÉDIA = 7.0 - PESO DEFINIDO', () => {
        let notas=[7,7,7,7]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(7)
    });
    test('TESTE #2 - MÉDIA = 7.0 (STRING) - PESO DEFINIDO', () => {
        let notas=["7","7","7","7"]
        let pesos=[1,2,3,4]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(7)
    });
    test('TESTE #3 - MÉDIA = 7.0 - PESO DEFINIDO (STRING)', () => {
        let notas=[7,7,7,7]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(7)
    });
    test('TESTE #4 - MÉDIA = 7.0  (STRING) - PESO DEFINIDO (STRING)', () => {
        let notas=["7","7","7","7"]
        let pesos=["1","2","3","4"]
        let mediaPond = calcMedia(...notas,...pesos)
        expect(mediaPond).toBe(7)
    });
    test('TESTE #5 - MÉDIA = 7.0 - SEM PESO DEFINIDO', () => {
        let notas=[7,7,7,7]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(7)
    });
    test('TESTE #6 - MÉDIA = 7.0 (STRING) - SEM PESO DEFINIDO', () => {
        let notas=["7","7","7","7"]
        let mediaPond = calcMedia(...notas)
        expect(mediaPond).toBe(7)
    });
});
//--------------------------------------------------------------------------------------
describe('TEST DE APROVAÇÃO', () => {
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=[8,8,8,8]
        let pesos=[1,2,3,4]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,...pesos,presenca)
        expect(situacao).toBe("Aprovado")
    });
});
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 (STRING) - PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=["8","8","8","8"]
        let pesos=[1,2,3,4]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,...pesos,presenca)
        expect(situacao).toBe("Aprovado")
    });
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - PESO DEFINIDO (STRING) - PRESENÇA: > 75% ', () => {
        let notas=[8,8,8,8]
        let pesos=["1","2","3","4"]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,...pesos,presenca)
        expect(situacao).toBe("Aprovado")
    });
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - PESO DEFINIDO - PRESENÇA: > 75% (STRING) ', () => {
        let notas=[8,8,8,8]
        let pesos=[1,2,3,4]
        let presenca= "0.80"
        let result = verificaSituacao(...notas,...pesos,presenca)
        expect(result).toBe("Aprovado")
    });
//--------------------------------------------------------------------------------------
describe('TEST DE APROVAÇÃO SEM PESO DEFINIDO', () => {
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - SEM PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=[8,8,8,8]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,presenca)
        expect(situacao).toBe("Aprovado")
    });
});
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 (STRING) - SEM PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=["8","8","8","8"]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,presenca)
        expect(situacao).toBe("Aprovado")
    });
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - SEM PESO DEFINIDO - PRESENÇA: > 75% (STRING) ', () => {
        let notas=[8,8,8,8]
        let presenca= "0.80"
        let result = verificaSituacao(...notas,presenca)
        expect(result).toBe("Aprovado")
    });
//----------------------------------------------------------------------------------------
describe('TEST DE APROVAÇÃO SEM PRESENÇA DEFINIDO', () => {
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - SEM PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=[8,8,8,8]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,presenca)
        expect(situacao).toBe("Aprovado")
    });
});
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 (STRING) - SEM PESO DEFINIDO - PRESENÇA: > 75% ', () => {
        let notas=["8","8","8","8"]
        let presenca= 0.80
        let situacao = verificaSituacao(...notas,presenca)
        expect(situacao).toBe("Aprovado")
    });
    test('TESTE - SITUAÇÃO: "APROVADO" - MÉDIA: > 7 - SEM PESO DEFINIDO - PRESENÇA: > 75% (STRING) ', () => {
        let notas=[8,8,8,8]
        let presenca= "0.80"
        let result = verificaSituacao(...notas,presenca)
        expect(result).toBe("Aprovado")
    });
//----------------------------------------------------------------------------------------

