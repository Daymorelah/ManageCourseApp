
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), //optimize order files r bundled for optimal minification.
    //new webpack.DefinePlugin(GLOBALS), //hep define variable that r made avail to libraries webpack is bundling
    new ExtractTextPlugin('style.css'), //helps extract css/anyoda file into a separate file, 'style.css'.
    new UglifyJSPlugin({  //minifies js script
      parallel: 4,
      sourceMap: true,
      uglifyOptions: {
        compress: true,
        mangle: false,
        ecma: 6,
        comments: false,
        beautify: false,
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        include: path.join(__dirname, 'src'), 
        loaders: ['babel-loader'], 
        exclude: /node_modules/ 
      },
      {
        test: /(\.css)$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'] //, 'sass-loader'
        })
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};