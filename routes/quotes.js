const express = require('express');
const router = express.Router();
const pool = require('../config/db');

/**
 * Helper: ambil 9 quotes secara random dari database
 * ORDER BY RAND() cukup untuk skala tabel kecil-menengah seperti kasus ini.
 */
async function getRandomQuotes(limit = 9) {
  const [rows] = await pool.query(
    'SELECT id, text, author, created_at FROM quotes ORDER BY RAND() LIMIT ?',
    [limit]
  );
  return rows;
}

// GET /api/quotes -> mengembalikan 9 quotes random dalam format JSON
router.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await getRandomQuotes(9);
    res.json({
      success: true,
      count: quotes.length,
      data: quotes
    });
  } catch (err) {
    console.error('Gagal mengambil quotes (API):', err);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mengambil data quotes'
    });
  }
});

// GET /quotes -> menampilkan halaman web berisi 9 quotes random
router.get('/quotes', async (req, res) => {
  try {
    const quotes = await getRandomQuotes(9);
    res.render('quotes', {
      title: 'Daily Inspiration',
      quotes
    });
  } catch (err) {
    console.error('Gagal mengambil quotes (halaman):', err);
    res.status(500).render('quotes', {
      title: 'Daily Inspiration',
      quotes: [],
      error: 'Terjadi kesalahan saat memuat quotes. Coba refresh halaman.'
    });
  }
});

module.exports = router;
