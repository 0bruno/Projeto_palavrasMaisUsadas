const fs = require('fs');
const path = require('path');

//criar funcao responsavel por ler um diretorio
function lerDiretorio(caminho) {
  let arquivos = fs.readdirSync(caminho);
  let pegarArquivos = arquivos.map((arquivos) => path.join(caminho, arquivos));

  return new Promise((resolve, reject) => {
    resolve(pegarArquivos);
  });
}

module.exports = {
  lerDiretorio,
};
