function login(name, email, tipo) {
  const dados = {
    nome: name,
    email: email,
    tipo: tipo
  }

  if (!name || !email || !tipo) {
    console.log("Faça login para prosseguir")
    return
  }

  if (dados.tipo !== "vendedor") {
    console.log("logado como comprador")
    return
  }
  console.log("Logado com sucesso!",{
    nome: "Samsung",
    preco: 175000,
    modelo: "S24"
  })
}
login("mg", "mg@gmail.com", "vendedor")