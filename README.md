# Daily Inspiration

Fitur "Daily Inspiration" untuk portal berbasis Node.js + Express yang menampilkan
9 kutipan motivasi secara random dari database MySQL setiap kali halaman dibuka.

## Struktur Proyek

```
daily-inspiration/
├── config/
│   └── db.js          # koneksi pool MySQL (pakai environment variables)
├── routes/
│   └── quotes.js       # GET /api/quotes dan GET /quotes
├── views/
│   └── quotes.ejs       # halaman tampilan quotes
├── public/
│   └── css/style.css
├── server.js
├── seed.sql             # membuat tabel quotes + data contoh
├── package.json
└── .env.example
```

## Endpoint

- `GET /api/quotes` → JSON berisi 9 quotes random
- `GET /quotes` → halaman web menampilkan 9 quotes random dalam bentuk kartu

## Menjalankan di Lokal

1. Install dependencies:
   ```bash
   npm install
   ```
2. Buat database MySQL lokal, lalu jalankan `seed.sql`:
   ```bash
   mysql -u root -p -e "CREATE DATABASE daily_inspiration"
   mysql -u root -p daily_inspiration < seed.sql
   ```
3. Salin `.env.example` menjadi `.env` dan sesuaikan kredensial database lokal Anda.
4. Jalankan server:
   ```bash
   npm start
   ```
5. Buka `http://localhost:3000/quotes`

## Deploy ke Railway (step by step)

### 1. Siapkan repository GitHub
- Push folder proyek ini ke repository GitHub baru (pastikan `.env` **tidak** ikut ter-push, sudah ada di `.gitignore`).

### 2. Buat project baru di Railway
- Login ke [railway.app](https://railway.app)
- Klik **New Project** → **Deploy from GitHub repo** → pilih repo Anda.

### 3. Tambahkan database MySQL
- Di dalam project yang sama, klik **New** → **Database** → **Add MySQL**.
- Railway akan otomatis membuat instance MySQL dan menyediakan variabel koneksi
  (`MYSQLHOST`, `MYSQLPORT`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`).

### 4. Atur Environment Variables di service Node.js Anda
- Buka service aplikasi Node.js (bukan service database) → tab **Variables** → tambahkan:
  | Key | Value |
  |---|---|
  | `DB_HOST` | `${{MySQL.MYSQLHOST}}` |
  | `DB_PORT` | `${{MySQL.MYSQLPORT}}` |
  | `DB_USER` | `${{MySQL.MYSQLUSER}}` |
  | `DB_PASSWORD` | `${{MySQL.MYSQLPASSWORD}}` |
  | `DB_NAME` | `${{MySQL.MYSQLDATABASE}}` |
  | `PORT` | `3000` |

  (Railway mendukung referensi variabel antar service dengan sintaks `${{ServiceName.VAR}}`;
  sesuaikan `MySQL` dengan nama service database Anda jika berbeda.)

### 5. Import struktur tabel & data awal
- Buka service MySQL di Railway → tab **Data** (atau **Connect** untuk mendapatkan connection string) → gunakan Query editor bawaan Railway atau MySQL client (mis. TablePlus/DBeaver) untuk menjalankan isi `seed.sql`.
- Alternatif dari terminal lokal, memakai connection string yang diberikan Railway:
  ```bash
  mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p<MYSQLPASSWORD> <MYSQLDATABASE> < seed.sql
  ```

### 6. Deploy
- Railway otomatis men-detect `package.json` dan menjalankan `npm install` lalu `npm start`.
- Tunggu build selesai, lalu buka domain publik yang diberikan Railway (tab **Settings** → **Networking** → **Generate Domain**).

### 7. Uji coba
- `https://<nama-app>.up.railway.app/quotes` → halaman Daily Inspiration
- `https://<nama-app>.up.railway.app/api/quotes` → JSON 9 quotes random

Setiap kali halaman `/quotes` di-refresh, 9 quotes yang ditampilkan akan berubah karena
query menggunakan `ORDER BY RAND()`.
