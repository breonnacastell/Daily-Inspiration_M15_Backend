const express = require('express');
require('dotenv').config();

const quotesRouter = require('./routes/quotes');

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Static assets (CSS, dll)
app.use(express.static(__dirname + '/public'));

// Halaman utama sederhana yang mengarahkan ke fitur Daily Inspiration
app.get('/', (req, res) => {
  res.redirect('/quotes');
});

// Routes fitur Daily Inspiration (mencakup /api/quotes dan /quotes)
app.use('/', quotesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 - Halaman tidak ditemukan');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port http://localhost:${PORT}`);
});
