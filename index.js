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

const mesclarConteudos = (conteudos) => conteudos.join(' ');
const separarPorLinhas = (todosConteudos) => todosConteudos.split('\n');
const separarPorPalavras = (todosConteudos) => todosConteudos.split(' ');

fn.lerDiretorio(caminho)
  //filtandro terminados com srt.
  .then((arquivos) => fn.arquivosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => fn.lerArquivos(arquivosSRT))
  //juntando todos os conteudos com join no array.
  .then(mesclarConteudos)
  //quebrando todas as linhas de todos os arquivos separando o texto em varias linhas.
  .then(separarPorLinhas)
  //removendo linhas vazias com trim().
  .then((linhasVazias) => fn.removeSeVazio(linhasVazias))
  //removendo se tiver algum padrao
  .then((removendoPadrao) => fn.removeSeTiver(removendoPadrao, '-->'))
  //removendo os numeros das legendas.
  .then((removeNumeros) => fn.removeNumero(removeNumeros))
  //removendo Caracteres
  .then((removeCaracteres) => fn.removeCaracteres(simbolos)(removeCaracteres))
  //juntando todos os conteudos com join no array.
  .then(mesclarConteudos)
  //separando por palavras com split em cima de um espaco em branco
  .then(separarPorPalavras)
  //removendo linhas vazias com trim().
  .then((linhasVazias) => fn.removeSeVazio(linhasVazias))
  //removendo os numeros das legendas.
  .then((removeNumeros) => fn.removeNumero(removeNumeros))
  //faz um agrupamento das palavras do array contando quantas vezes cada palavra aparece
  .then((palavras) => fn.agruparPalavras(palavras))

  .then(console.log)
  .catch((err) => console.log(err));

//continuar aula 58 agrupando palavras
