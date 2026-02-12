const mongoose = require('mongoose')

async function conectDatabase() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cursonodejs.1lbgonq.mongodb.net/?appName=CursoNodeJs`)
    console.log(`Conexão ao banco de dados realizada com sucesso`)
  }catch(erro) {
    return console.log(erro)
  }
}

module.exports = conectDatabase