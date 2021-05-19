const path = require('path');
const fn = require('./funcoes');
const caminho = path.join(__dirname, 'legendas');

fn.lerDiretorio(caminho)
  .then(console.log)
  .catch((err) => console.log(err));
console.log('Executou primeiro');
