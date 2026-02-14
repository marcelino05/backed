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
const connectDatabase = require('./src/conect')
const app = require('./module/express')

connectDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch(err => console.log(err))
