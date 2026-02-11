const http = require('http')
const porta = 3000;
const server = http.createServer((req, res)=> {
  if (req.url === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.end("<h1>O servidor está rodando com sucesso</h1>")
  }

  if (req.url === "/users") {
    const data = [{
      nome: "marcelino",
      email: "marcelino@gmail.com"
    },
      {
        nome: "Andre",
        email: "andre@gmail.com"
      },
      {
        nome: "Rosa",
        email: "rosa@gmail.com"
      },
      {
        nome: "MG",
        email: "mg@gmail.com"
      }]

    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(JSON.stringify(data))
  }

})

server.listen(porta, () => console.log(`Rodando na porta ${porta}!`))