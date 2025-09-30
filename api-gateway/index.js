const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des proxys
app.use('/inventory', createProxyMiddleware({ target: 'http://inventory-service:3001', changeOrigin: true }));
app.use('/orders', createProxyMiddleware({ target: 'http://order-service:3002', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://review-service:3003', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${PORT}`);
});