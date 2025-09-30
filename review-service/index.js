const express = require('express');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Déclaration des routes
app.post('/reviews', (req, res) => {
  res.send('Avis soumis');
});

app.listen(PORT, () => {
  console.log(`Service d'avis en cours d'exécution sur le port ${PORT}`);
});