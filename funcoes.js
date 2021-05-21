const fs = require('fs');
const path = require('path');

//criar funcao responsavel por ler um diretorio
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

//funcao ler arquivo de cada conteudo
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

//funcao para ler todos os arquivos
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

//apresentando a funcao endsWith "terminado com"
function arquivosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

//o trim() remove espacos vazioa na string
function removeSeVazio(array) {
  return array.filter((el) => el.trim());
}

module.exports = {
  //conjunto chave: valor
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  arquivosTerminadosCom,
  removeSeVazio,
};
