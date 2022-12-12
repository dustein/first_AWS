const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({status: 'Second Servidor AWS Express OnLine!'})
})

app.get('/sucesso', (req, res) => {
  res.status(200).json({acesso: 'Rota funcionando com Sucesso'})
})

app.listen(3333, () => { console.log('Servidor rodando na porta 3333')})