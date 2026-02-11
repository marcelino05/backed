const fs = require('fs/promises')
const path = require('path')

//Criar pasta
async function criarPasta() {
  try {
    await fs.mkdir(path.join(__dirname, "texto"), {
      recursive: true
    })
    console.log("Pasta criada ou já existente")
  }catch(er) {
    console.Error(er)
  }
}

criarPasta()

//CRIAR ARQUIVO
fs.writeFile(path.join(__dirname, 'texto', 'texto.txt'), 'Hello mg welcome to node', (error)=> {
  if (error) {
    return console.log(error)
  }
  console.log('ARQUIVO Criado com sucesso')
})

//Adicionar a um ARQUIVO

fs.appendFile(path.join(__dirname, 'texto', 'texto.txt'), 'Hello marcelo welca', (error)=> {
  if (error) {
    return console.log(error)
  }
  console.log('ARQUIVO Criado com sucesso')
})

//LER CONTEUDO POR readFile

fs.readFile(path.join(__dirname, 'texto', 'texto.txt'), 'utf8', (error, date)=> {
  if (error) {
    console.log(error)
  }
  console.log(date)
})