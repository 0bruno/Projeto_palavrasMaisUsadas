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

//apresentando a funcao endsWith "terminado com"
function arquivosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

module.exports = {
  //conjunto chave: valor
  lerDiretorio,
  arquivosTerminadosCom,
};
