const path = require('path')

//Esse comando pega o nome do arquivo
console.log(path.basename(__filename))

//Esse pega o diretorio do arquivo
console.log(path.dirname(__filename))

//Esse pega a estensao do arquivo
console.log(path.extname(__filename))

//Esse cria uma função com varias informações
console.log(path.parse(__filename))

// Esse adiciona caminha no nosso diretorio atual
console.log(path.join(__dirname), "mgdant", 'beta.html')