import { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry:'./src/app.js',
    // mode:'production',
    output:{
        // filename:'main.js',
        path: `${__dirname}/output/main.js`
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              }
            ]
          }
        ]


      } ,
      /* plugin */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns:[
        {from :`./data/img`,to: `${__dirname}/output/main.js/data/img`}
      ]
    })
  ],
  devServer:{
    static:{
      directory: `${__dirname}/output/main.js`
    },
    open:true,
    port:9000,
  }   
}