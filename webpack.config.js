const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css']
  },

  devServer: {
    contentBase: 'dist',
    port: 3000,
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'awesome-typescript-loader' },
          // { loader: 'babel-loader' }
        ]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      inject: true
    }),
  ]
}
