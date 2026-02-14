/*const {
Animal,
Insect
} = require('./main')*/
//require('./module/path')
//require('./module/fs')

//const animal = new Animal('Lion')
//const insect = new Insect('Cat')
//animal.noise()
//insect.noise()

//require('./module/http')
//

require('dotenv').config()
const connectDatabase = require('./src/conect') // corrigido o nome
const expressApp = require('./module/express')  // importar app

// Conecta ao Mongo
connectDatabase()
  .then(() => {
    // Aqui garante que o app só inicia depois do Mongo conectado
    const PORT = process.env.PORT || 3000
    expressApp.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch(err => console.log(err))