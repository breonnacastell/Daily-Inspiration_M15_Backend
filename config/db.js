const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool koneksi ke MySQL, semua kredensial diambil dari environment variables
// supaya bisa dikonfigurasi berbeda di local vs hosting (Railway, dll)
if (process.env.MYSQLURL){
  pool = mysql.createPool(process.env.MYSQLURL);
} else{
  pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT || 3306,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
};

module.exports = pool;
