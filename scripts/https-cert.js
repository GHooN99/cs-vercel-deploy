const path = require('path');
const fs = require('fs');

const keyPath = path.resolve(__dirname, '..', '.cert', 'key.pem');
const certPath = path.resolve(__dirname, '..', '.cert', 'cert.pem');

const isHttps =
  process.env.NEXT_PUBLIC_USE_PROXY !== 'Y' && fs.existsSync(keyPath) && fs.existsSync(certPath);

const port = isHttps ? 443 : 80;

module.exports = { isHttps, port, keyPath, certPath };
