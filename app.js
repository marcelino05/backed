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
const conectDatabase = require('./src/conect')
conectDatabase()
require('./module/express')