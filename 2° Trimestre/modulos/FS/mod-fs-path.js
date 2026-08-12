const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default
try{
    const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'),'utf-8')
chalk.green(console.log('Arquivo carregado com sucesso'))
    console.log(arquivo)
}catch (erro) {
   chalk.red(console.log("Deu Merda:"))
    console.log(erro.message)
}



