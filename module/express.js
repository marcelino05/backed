const express = require('express')
const userModel = require("../src/module/user")

const app = express()

app.use(express.json()) // MUITO IMPORTANTE

app.get("/home", (req, res) => {
  res.status(200).send("<h1>O servidor está rodando com sucesso</h1>")
})

app.get("/users", (req, res) => {
  const data = [
    { nome: "marcelino", email: "marcelino@gmail.com" },
    { nome: "MG", email: "mg@gmail.com" }
  ]
  res.status(200).json(data)
})

app.post("/user", async (req, res) => {
  try {
    const user = await userModel.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

const porta = 3000
app.listen(porta, () => 
  console.log(`Rodando na porta ${porta}`)
)