const cedulas = [100,50,20,10,5,2,1]
export function solucao(v) {
    let valor = v
    let result = []
    for (let i = 0; i < cedulas.length; i++) {
        let cedula = cedulas[i]
        let resto = valor%cedula
        let dividendo = valor -resto
        let qtdNotas = dividendo/cedula
        result[i]=qtdNotas
        valor = resto
    }console.log(result)
    return result
}