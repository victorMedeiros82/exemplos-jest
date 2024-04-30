import { toString } from "./algarismo.js";

describe('Transforme um algarismo em um texto', () => {
    test('Caso seja 0', () => {
        let algarismo = 0
        let texto = toString(algarismo)
        expect(texto).toBe("zero")
    });
    test('Caso seja 1', () => {
        let algarismo = 1
        let texto = toString(algarismo)
        expect(texto).toBe("um")
    });
    test('Caso seja "1"', () => {
        let algarismo = '1'
        let texto = toString(algarismo)
        expect(texto).toBe("um")
    });
    test('Caso seja 2', () => {
        let algarismo = 2
        let texto = toString(algarismo)
        expect(texto).toBe("dois")
    });
    test('Caso seja 3', () => {
        let algarismo = 3
        let texto = toString(algarismo)
        expect(texto).toBe("tres")
    });
    test('Caso seja 4', () => {
        let algarismo = 4
        let texto = toString(algarismo)
        expect(texto).toBe("quatro")
    });
    test('Caso seja 5', () => {
        let algarismo = 5
        let texto = toString(algarismo)
        expect(texto).toBe("cinco")
    });
    test('Caso seja 6', () => {
        let algarismo = 6
        let texto = toString(algarismo)
        expect(texto).toBe("seis")
    });
    test('Caso seja 7', () => {
        let algarismo = 7
        let texto = toString(algarismo)
        expect(texto).toBe("sete")
    });
    test('Caso seja 8', () => {
        let algarismo = 8
        let texto = toString(algarismo)
        expect(texto).toBe("oito")
    });
    test('Caso seja 9', () => {
        let algarismo = 9
        let texto = toString(algarismo)
        expect(texto).toBe("nove")
    });
    test('Caso seja 50', () => {
        let algarismo = 50
        let texto = toString(algarismo)
        expect(texto).toBe("não corresponde a um algarismo entre 0 a 9.")
    });
    test('Caso seja 10', () => {
        let algarismo = 10
        let texto = toString(algarismo)
        expect(texto).toBe("não corresponde a um algarismo entre 0 a 9.")
    });
    test('Caso seja 100', () => {
        let algarismo = 100
        let texto = toString(algarismo)
        expect(texto).toBe("não corresponde a um algarismo entre 0 a 9.")
    });
    test('Caso seja "a"', () => {
        let algarismo = 'a'
        let texto = toString(algarismo)
        expect(texto).toBe("não corresponde a um algarismo entre 0 a 9.")
    });
});
