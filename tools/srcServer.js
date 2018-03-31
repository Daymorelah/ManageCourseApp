import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3425;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  hot:true,
  noInfo: true,
  publicPath: config.output.publicPath,
  filename: 'bundle.js'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.resolve( __dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is listening on ${port}`);
  }
});