const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Déclaration des routes
app.get('/products', (req, res) => {
  res.send('Liste des produits');
});

app.listen(PORT, () => {
  console.log(`Service d'inventaire en cours d'exécution sur le port ${PORT}`);
});