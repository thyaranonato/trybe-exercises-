const fs = require('fs');

function escreveArquivo(nomeArquivo, conteudoArquivo) {
  fs.writeFileSync(`${__dirname}/${nomeArquivo}`, conteudoArquivo);

  return 'ok';
};

module.exports = escreveArquivo;