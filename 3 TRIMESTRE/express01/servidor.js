//importação moderna com ESM (IMPORT)
import express from 'express'

const app = express() // Instanciar Express

app.get('/',(req,res) => {
    res.send(`<h3>Página Inicial</h3\n
    <p>Loja Especializada em Roupas</p>`)
})

app.get('/',(req,res) => {
    res.send('Fala Chefe!')
})

app.listen(3000, ()=> {console.log('Servidorn está vivo!')})

