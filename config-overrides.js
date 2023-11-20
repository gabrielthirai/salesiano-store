const path = require("path");

module.exports = function override(config, env) {
  // Adiciona polyfills para módulos do Node.js
  config.resolve.fallback = {
    zlib: require.resolve('browserify-zlib'),
    querystring: require.resolve('querystring-es3'),
    crypto: require.resolve('crypto-browserify'),
    fs: false, // ou require.resolve('fs'),
    stream: require.resolve('stream-browserify'),
    path: require.resolve('path-browserify'),
    http: require.resolve('stream-http'),
    url: require.resolve('url/'),
    util: require.resolve('util/'),
    buffer: require.resolve('buffer/'),
    assert: require.resolve('assert/'),
    "net": false,
    "tls": false,
    "timers": require.resolve("timers-browserify")
  };

  return config;
};