const express = require('express')
const userModel = require("../src/module/user")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/home", (req, res) => {
  res.status(200).send("<h1>O servidor está rodando com sucesso</h1>")
})

app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = app