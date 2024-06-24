const fs = require('fs');

const processInput = (input) => {
    const lines = input.split('\n').slice(0, -1);
    const getpar = (linha) => linha.trim().split(' ').map(Number);
    return lines.map(getpar).map(par => par.reduce((a, b) => a * b, 1));
};

// Exportando a função para ser testada
module.exports = { processInput };

// Se você quiser usar isso diretamente com a leitura de um arquivo
if (require.main === module) {
    const input = fs.readFileSync('in2172', 'utf-8');
    const results = processInput(input);
    results.forEach(result => console.log(result));
}

// const input = require('fs').readFileSync('in2172', 'utf-8')
// const lines = input.split('\n').slice(0, -1)
// const getpar= (linha) => linha.trim().split(' ').map(Number)
// lines.map(getpar).forEach(par => console.log(par.reduce((a,b) => a*b , 1 )))