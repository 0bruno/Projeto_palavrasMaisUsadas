const path = require('path');
const fn = require('./funcoes');
const caminho = path.join(__dirname, 'legendas');

fn.lerDiretorio(caminho)
  //filtandro terminados com srt
  .then((arquivos) => fn.arquivosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => fn.lerArquivos(arquivosSRT))
  //juntando todos os conteudos com join no array
  .then((conteudos) => conteudos.join('\n'))
  //quebrando todas as linhas de todos os arquivos
  .then((todosConteudos) => todosConteudos.split('\n'))
  .then(console.log)
  .catch((err) => console.log(err));
console.log('Executou primeiro');
