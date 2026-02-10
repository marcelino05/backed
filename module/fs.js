const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, "teste"), (error)=> {
  if (error) {
    return console.Error(error)
  }

  console.log('Pasta criada com sucesso.')
})