const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const config_secrets = require('./config_secrets.js')

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(config_secrets.appPort, config_secrets.appIP, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Dev server serving: ${config_secrets.appURL}`);
  console.log(`Connecting to Parse server: ${config_secrets.parseURL}`);
});
