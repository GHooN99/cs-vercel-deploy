const next = require('next');
const express = require('express');
const { startServer } = require('./startServer');
const { port } = require('./https-cert');

const nextApp = next({
  dev: true,
  hostname: 'local.careersync.site',
  port,
});
const expressApp = express();
const nextRequestHandler = nextApp.getRequestHandler();

expressApp.get('*', (req, res) => nextRequestHandler(req, res));

nextApp.prepare().then(() => startServer(expressApp));
