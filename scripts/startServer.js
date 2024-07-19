const fs = require('fs');

const { createServer } = require('https');
const { isHttps, port, keyPath, certPath } = require('./https-cert');

const startServer = (expressApp) => {
  isHttps ? startHttpsServer(expressApp) : startHttpServer(expressApp);
};

function startHttpsServer(expressApp) {
  const server = createServer(
    {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    expressApp
  );
  server.listen(port, serverListeningListener);

  const http = require('http');
  http
    .createServer((req, res) => {
      res.statusCode = 307;
      res.setHeader('Location', `https://${req.headers.host}${req.url}`);
      return res.end();
    })
    .listen(80);
}

function startHttpServer(expressApp) {
  expressApp.listen(port, serverListeningListener);
}

function serverListeningListener() {
  console.log('go https://local.careersync.site');
  console.log(`Server is running`);
}

module.exports = { startServer };
