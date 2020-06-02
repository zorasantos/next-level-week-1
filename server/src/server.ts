import express from 'express'

const app = express();

app.get('/users', (req, res) => {
  console.log('Rota de usuarios');

  res.json([
    'Zora Santos',
    'Idade',
    'Cheira Toba'
  ])
});

app.listen(3333);