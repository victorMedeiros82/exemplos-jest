let input = "12 1 5.30\n16 2 5.10";

function separaLinhas(entrada) {
  let linhas = entrada.split("\n")
  console.log(linhas)
  let linha1 = linhas[0].split(" ")
  let linha2 = linhas[1].split(" ")
  let numlinha1 = linha1.map((el)=>parseFloat(el))
  let numlinha2 = linha2.map((el)=>parseFloat(el))
  console.log(linha1)
  console.log(linha2)
  console.log(numlinha1)
  console.log(numlinha2)
}

separaLinhas(input)
