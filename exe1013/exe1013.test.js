import { main } from "./exe1013.js";
describe('Cenários de Teste', () => {
    const cenarios=[
        {lines:"7 14 106",
        result:"eh o maior"},
        {lines:"217 14 6",
        result:"eh o maior"}
    ]
    cenarios.forEach((cenario,i)=>{
        test('Caso #' + i,()=>{
            let{ lines, result} = cenario;
            let output = main(lines)
            expect(output).toBe(result)
        })
    })
});