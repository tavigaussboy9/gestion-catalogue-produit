const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Déclaration des routes
app.post('/orders', (req, res) => {
  res.send('Commande créée');
});

app.listen(PORT, () => {
  console.log(`Service de commande en cours d'exécution sur le port ${PORT}`);
});