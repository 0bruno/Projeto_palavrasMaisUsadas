const path = require('path');
const fn = require('./funcoes');
const caminho = path.join(__dirname, 'legendas');

fn.lerDiretorio(caminho)
  //filtandro terminados com srt
  .then((arquivos) => fn.arquivosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => fn.lerArquivos(arquivosSRT))
  .then(console.log)
  .catch((err) => console.log(err));
console.log('Executou primeiro');
