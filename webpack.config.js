const path = require('path');

module.exports = {
  // ... outras configurações do webpack ...

  module: {
    rules: [
      // ... outras regras ...

      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[Curriculo].[pdf]',
              outputPath: 'pdfs/', // ou o caminho desejado para seus arquivos PDF
            },
          },
        ],
      },
    ],
  },
};
