const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8005
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const erro = path.join(__dirname, 'pages/404.html')
//qual informação eu tenho?

const server = http.createServer((Req, res) => {
  const urlTratada = new URL(Req.url, `http://${Req.headers.host}`)
    const recurso = urlTratada.pathname

 if (recurso === '/') {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(home, 'utf-8'))

 } if (recurso === '/sobre') {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(sobre, 'utf-8'))
  } 
  if (recurso === '/erro') {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(erro, 'utf-8'))
  }else {
    res.setHeader('Content-typer', 'text/html; charset=utf-8')
    res.statusCode = 401
    res.end('<h3>401 Não Autorizado!</h3>')
  }

})

server.listen(porta, () => {
  console.log(`servidor rodando na porta ${porta}`)
})