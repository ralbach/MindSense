const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/auth/google', {
      target: 'http://localhost:5000'
    })
  );
  app.use(
    createProxyMiddleware('/__', {
      target: 'http://localhost:4000'
    })
  );
}