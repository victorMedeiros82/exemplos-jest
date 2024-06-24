const { processInput } = require('./index');

describe('processInput', () => {
    it('Caso de Teste #1', () => {
        const input = '1 500\n2 300\n1 400\n3 200\n0 0\n';
        const result = processInput(input);
        const expectedOutput = [500, 600, 400, 600];
        expect(result).toEqual(expectedOutput);
    });
    it('Caso de Teste #2', () => {
        const input = '3 900\n2 3500\n1 4789\n1 5432\n3 750\n3 1400\n0 0\n';
        const result = processInput(input);
        const expectedOutput = [2700, 7000, 4789, 5432, 2250, 4200];
        expect(result).toEqual(expectedOutput);
    });
    it('Caso de Teste #3', () => {
        const input = '3 900\n2 3500\n1 4789\n1 5432\n3 750\n3 1400\n1 5000\n2 3005\n1 4040\n3 2002\n0 23456\n';
        const result = processInput(input);
        const expectedOutput = [2700, 7000, 4789, 5432, 2250, 4200, 5000, 6010, 4040, 6006];
        expect(result).toEqual(expectedOutput);
    });
    it('Caso de Teste #4', () => {
        const input = '3 900\n2 3500\n1 4789\n1 5432\n3 750\n3 1400\n1 5000\n2 3005\n1 4040\n3 2002\n0 \n ';
        const result = processInput(input);
        const expectedOutput = [2700, 7000, 4789, 5432, 2250, 4200, 5000, 6010, 4040, 6006];
        expect(result).toEqual(expectedOutput);
    });
    it('Caso de Teste #5', () => {
        const input = '3 900\n2 3500\n1 4789\n1 5432\n3 750\n3 1400\n1 5000\n2 3005\n1 4040\n3 2002';
        const result = processInput(input);
        const expectedOutput = [2700, 7000, 4789, 5432, 2250, 4200, 5000, 6010, 4040,];
        expect(result).toEqual(expectedOutput);
    });
    
});
