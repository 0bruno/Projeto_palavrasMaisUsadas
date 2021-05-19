const fs = require('fs');
const path = require('path');

//criar funcao responsavel por ler um diretorio
function lerDiretorio(caminho) {
  let arquivos = fs.readdirSync(caminho);
  return arquivos.map((arquivos) => path.join(caminho, arquivos));
}

module.exports = {
  lerDiretorio,
};
