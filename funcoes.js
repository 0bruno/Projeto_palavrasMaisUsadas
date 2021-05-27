const fs = require('fs');
const path = require('path');

//criar funcao responsavel por ler um diretorio.
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivos) => path.join(caminho, arquivos));
      resolve(arquivos);
    } catch (e) {
      reject('Ocorreu Erro');
    }
  });
}

//funcao ler arquivo de cada conteudo.
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(caminho, { encoding: 'utf-8' });
      resolve(content);
    } catch (e) {
      reject(e);
    }
  });
}

//funcao para ler todos os arquivos.
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

//apresentando a funcao endsWith "terminado com".
function arquivosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

//o trim() remove espacos vazios na string.
function removeSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removeSeTiver(array, padrao) {
  return array.filter((el) => !el.includes(padrao));
}

//removendo numero das legendas com inNAN().
function removeNumero(array) {
  return array.filter((el) => isNaN(el));
}

//removendo caracteres
function removeCaracteres(simbolos) {
  return function (array) {
    //dentro do map percorrer cada um dos simbolos
    return array.map((el) => {
      let textoSemSimbolos = el;
      //percorrendo cada um dos simbolos
      simbolos.forEach((simbolo) => {
        //para cada novo simbolo e feito um split em cima do texto atual
        //removendo todos os simbolos de todas as strings
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join('');
      });
      return textoSemSimbolos;
    });
  };
}

//criando funcao callback pro reduce
function callback(acc, palavra) {
  const p = palavra.toLowerCase();
  //verificar se o objeto  acumulador tem o atributo com com esse nome passado no array
  if (acc[p]) {
    acc[p] += 1;
  } else {
    acc[p] = 1;
  }
  return acc;
}

//criando objeto vazio pro reduce
const valorInicial = {};

//passando callback no reduce
function agruparPalavras(palavras) {
  return palavras.reduce(callback, valorInicial);
}

//assistindo aul teorica

module.exports = {
  //conjunto chave: valor
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  arquivosTerminadosCom,
  removeSeVazio,
  removeSeTiver,
  removeNumero,
  removeCaracteres,
  agruparPalavras,
};
