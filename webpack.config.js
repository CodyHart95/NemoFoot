const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = env => {
    env = env || {};
   
    return {
        entry: './src/index.js',
        output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
        
    ],
    devServer:{
        historyApiFallback: true
    }
    };
   
};