
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
}

export default {
  devtool: 'source-map',
  watch: true,
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '/dist'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), //optimize order files r bundled for optimal minification.
    new webpack.DefinePlugin(GLOBALS), //hep define variable that r made avail to libraries webpack is bundling
    new ExtractTextPlugin('style.css'), //helps extract css/anyoda file into a separate file, 'style.css'. 
    new webpack.optimize.DedupePlugin(), //
    new webpack.optimize.UglifyJsPlugin(), //minifies js script
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
        loader: ExtractTextPlugin.extract("css?sourceMap")
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