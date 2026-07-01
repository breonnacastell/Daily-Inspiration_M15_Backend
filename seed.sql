-- Jalankan file ini di database MySQL Anda (misalnya via Railway MySQL query console
-- atau `mysql -u user -p database_name < seed.sql`)

CREATE TABLE IF NOT EXISTS quotes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT NOT NULL,
  author VARCHAR(150) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quotes (text, author) VALUES
('Satu-satunya cara melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu kerjakan.', 'Steve Jobs'),
('Kegagalan adalah bumbu yang memberi cita rasa pada kesuksesan.', 'Truman Capote'),
('Jangan menunggu kesempatan, ciptakanlah.', 'George Bernard Shaw'),
('Masa depan adalah milik mereka yang percaya pada keindahan mimpi-mimpi mereka.', 'Eleanor Roosevelt'),
('Hidup bukan tentang menemukan diri sendiri, tapi tentang menciptakan diri sendiri.', 'George Bernard Shaw'),
('Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaanlah kunci kesuksesan.', 'Albert Schweitzer'),
('Apa pun yang bisa kamu bayangkan, bisa kamu wujudkan.', 'Napoleon Hill'),
('Cara terbaik untuk memprediksi masa depan adalah menciptakannya.', 'Peter Drucker'),
('Jangan takut gagal. Takutlah tidak mencoba.', 'Roy T. Bennett'),
('Kesempatan tidak terjadi begitu saja, kamu yang menciptakannya.', 'Chris Grosser'),
('Semua mimpi kita bisa menjadi nyata, jika kita punya keberanian untuk mengejarnya.', 'Walt Disney'),
('Percayalah kamu bisa, maka kamu sudah setengah jalan menuju sana.', 'Theodore Roosevelt'),
('Bertindaklah seolah apa yang kamu lakukan membuat perbedaan. Karena memang begitu.', 'William James'),
('Satu-satunya batasan bagi realisasi hari esok adalah keraguan kita hari ini.', 'Franklin D. Roosevelt'),
('Jangan hitung hari, buatlah hari-hari itu berarti.', 'Muhammad Ali'),
('Awali dengan penuh keyakinan, jalani dengan penuh semangat, akhiri dengan penuh kepuasan.', 'Ibnu Sina'),
('Ketekunan adalah kunci dari semua pintu kesuksesan.', 'Anonim'),
('Kamu tidak pernah terlalu tua untuk menetapkan tujuan baru atau bermimpi baru.', 'C.S. Lewis'),
('Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.', 'Tim Notke'),
('Optimisme adalah kepercayaan yang mengarah pada pencapaian.', 'Helen Keller');
