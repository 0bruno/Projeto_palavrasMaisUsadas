const path = require('path');
const fn = require('./funcoes');
const caminho = path.join(__dirname, 'legendas');

const simbolos = [
  '.',
  '?',
  '-',
  ',',
  '"',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
  '♪',
];

fn.lerDiretorio(caminho)
  //filtandro terminados com srt.
  .then((arquivos) => fn.arquivosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => fn.lerArquivos(arquivosSRT))
  //juntando todos os conteudos com join no array.
  .then((conteudos) => conteudos.join('\n'))
  //quebrando todas as linhas de todos os arquivos separando o texto em varias linhas.
  .then((todosConteudos) => todosConteudos.split('\n'))
  //removendo linhas vazias com trim().
  .then((linhasVazias) => fn.removeSeVazio(linhasVazias))
  //removendo os tempos das legendas.
  .then((removeTempo) => fn.removeTime(removeTempo))

  .then(console.log)
  .catch((err) => console.log(err));
console.log('Executou primeiro');
