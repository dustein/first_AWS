const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor AWS Express OnLine!')
})

app.get('/sucesso', (req, res) => {
  res.send('Acessando rota SUCESSO da app')
})

app.listen(3030, () => { console.log('Servidor na porta 3030')})