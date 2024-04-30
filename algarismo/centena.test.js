import { toStringDez} from "./algarismo";
describe('Transforme um algarismo em um texto', () => {
    test('Caso seja 0', () => {
        let algarismo = 0
        let texto = toStringDez(algarismo)
        expect(texto).toBe(" ")
    });
    test('Caso seja "0"', () => {
        let algarismo = "0"
        let texto = toStringDez(algarismo)
        expect(texto).toBe(" ")
    });
    test('Caso seja 10', () => {
        let algarismo = 10
        let texto = toStringDez(algarismo)
        expect(texto).toBe("dez")
    });
    test('Caso seja 10', () => {
        let algarismo = "10"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("dez")
    });
    test('Caso seja -10', () => {
        let algarismo = -10
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-10"', () => {
        let algarismo = "-10"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 20', () => {
        let algarismo = 20
        let texto = toStringDez(algarismo)
        expect(texto).toBe("vinte")
    });
    test('Caso seja 20', () => {
        let algarismo = "20"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("vinte")
    });
    test('Caso seja -20', () => {
        let algarismo = -20
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-20"', () => {
        let algarismo = "-20"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 30', () => {
        let algarismo = 30
        let texto = toStringDez(algarismo)
        expect(texto).toBe("trinta")
    });
    test('Caso seja 30', () => {
        let algarismo = "30"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("trinta")
    });
    test('Caso seja -30', () => {
        let algarismo = -30
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-30"', () => {
        let algarismo = "-30"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 40', () => {
        let algarismo = 40
        let texto = toStringDez(algarismo)
        expect(texto).toBe("quarenta")
    });
    test('Caso seja 40', () => {
        let algarismo = "40"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("quarenta")
    });
    test('Caso seja -40', () => {
        let algarismo = -40
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-40"', () => {
        let algarismo = "-40"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 50', () => {
        let algarismo = 50
        let texto = toStringDez(algarismo)
        expect(texto).toBe("cinquenta")
    });
    test('Caso seja 50', () => {
        let algarismo = "50"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("cinquenta")
    });
    test('Caso seja -50', () => {
        let algarismo = -50
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-50"', () => {
        let algarismo = "-50"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 60', () => {
        let algarismo = 60
        let texto = toStringDez(algarismo)
        expect(texto).toBe("sessenta")
    });
    test('Caso seja 60', () => {
        let algarismo = "60"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("sessenta")
    });
    test('Caso seja -60', () => {
        let algarismo = -60
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-60"', () => {
        let algarismo = "-60"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 70', () => {
        let algarismo = 70
        let texto = toStringDez(algarismo)
        expect(texto).toBe("setenta")
    });
    test('Caso seja 70', () => {
        let algarismo = "70"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("setenta")
    });
    test('Caso seja -70', () => {
        let algarismo = -70
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-70"', () => {
        let algarismo = "-70"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 80', () => {
        let algarismo = 80
        let texto = toStringDez(algarismo)
        expect(texto).toBe("oitenta")
    });
    test('Caso seja 80', () => {
        let algarismo = "80"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("oitenta")
    });
    test('Caso seja -80', () => {
        let algarismo = -80
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-80"', () => {
        let algarismo = "-80"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja 90', () => {
        let algarismo = 90
        let texto = toStringDez(algarismo)
        expect(texto).toBe("noventa")
    });
    test('Caso seja 90', () => {
        let algarismo = "90"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("noventa")
    });
    test('Caso seja -90', () => {
        let algarismo = -90
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "-90"', () => {
        let algarismo = "-90"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "ABC"', () => {
        let algarismo = "ABC"
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "true"', () => {
        let algarismo = true
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    test('Caso seja "false"', () => {
        let algarismo = false
        let texto = toStringDez(algarismo)
        expect(texto).toBe("não corresponde a uma dezena valida.")
    });
    
});
