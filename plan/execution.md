# 03: Execution

## Prinsip

```
SETIAP STEP:
1. Kirim prompt ke AI
2. Review output AI
3. Fix jika perlu
4. Lanjut step berikutnya
```

---

## RTCC-O Checklist (Per Prompt)

```
□ R — Role dispesifikasi?
□ T — Task konkret?
□ C — Context cukup?
□ C — Constraints jelas?
□ O — Output format ditentukan?
```

---

## Template

```markdown
# Execution — Muhammad Rozinul Mahrus

## Step 1: Muhammad Rozinul Mahrus

### Prompt
Tolong buatkan portofolio berdasarkan plan yang sudah dibuat

### RTCC-O Check
- R: ✅
- T: ✅
- C: ✅
- C: ✅
- O: ✅

### AI Response
Saya sudah menyusun Implementation Plan untuk pembangunan portofolio kamu. Rencana tersebut akan otomatis terbuka di layarmu.

Silakan baca dan periksa dua pertanyaan (Open Questions) yang ada di dalam dokumen tersebut, yaitu:

Pilihan antara JavaScript biasa atau TypeScript?
Ketersediaan assets gambar project?
Jika kamu sudah setuju dengan rencana tersebut dan sudah menentukan jawaban untuk pertanyaan di atas, silakan beri tahu saya agar saya bisa langsung mengeksekusi pembuatannya!

![Screenshot 1](/assets/ResponsePrompt1.png)
![Screenshot 2](/assets/ResponsePrompt2.png)


### Review
- [✅] Sesuai constraints?
- [✅] Format sesuai?
- [✅] Bisa dipahami?
- Changes: [jika ada]

---

## Step 2: Muhammad Rozinul Mahrus

### Prompt

Menggunakan Javascript

### RTCC-O Check
- R: ✅
- T: ✅
- C: ✅
- C: ✅
- O: ✅

### AI Response

Portofolio kamu sudah berhasil dibuat! Saya telah menulis semua kode React components dan Tailwind CSS berdasarkan spesifikasi RTCC-O yang kita sepakati: Mobile-first, komponen React terpisah, Semantic HTML5, dan tema Dark Mode Minimalist.

Semua detail hasil kerjanya bisa kamu lihat pada dokumen Walkthrough yang sudah saya siapkan.

Aplikasi ini sudah diuji dan berhasil di-build tanpa error. Untuk melihat hasilnya secara langsung di browser, kamu cukup melakukan langkah berikut di terminal/command prompt pada folder proyekmu:

Jalankan npm run dev
Buka link http://localhost:5173 yang muncul di terminal.
Selanjutnya, kamu bisa mulai mengganti teks/placeholder gambar yang ada di src/components/Projects.jsx atau src/components/Hero.jsx dengan data aslimu. Beri tahu saya jika kamu ingin menambahkan fitur lain atau mengubah gayanya!

### Review
- [✅] Sesuai constraints?
- [✅] Format sesuai?
- [✅] Bisa dipahami?
- Changes: [jika ada]

---

## Step 3: Muhammad Rozinul Mahrus

### Prompt

Coba buatkan hamburger button pada Navbar.jsx ketika responsive mobile

### RTCC-O Check
- R: ✅
- T: ✅
- C: ✅
- C: ✅
- O: ✅

### AI Response

Selesai! Saya sudah menambahkan hamburger button beserta fungsi dropdown menu yang responsif untuk versi mobile di komponen src/components/Navbar.jsx.

Berikut adalah fitur yang saya tambahkan ke dalamnya:

Tombol hamburger (hamburger icon) yang otomatis muncul di layar kecil (md:hidden) dan berubah menjadi ikon "silang" (X) saat menu terbuka.
Menggunakan useState dari React untuk mengatur status isOpen.
Menu dropdown dengan efek animasi smooth transition yang akan tertutup otomatis ketika salah satu link menu (About, Skills, dll) ditekan agar pengalaman navigasi di HP lebih nyaman.
Silakan jalankan kembali npm run dev dan buka di browser lalu perkecil ukuran layarmu (atau buka devtools mode mobile) untuk melihat hasilnya!

### Review
- [✅] Sesuai constraints?
- [✅] Format sesuai?
- [✅] Bisa dipahami?
- Changes: [jika ada]

```

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Prompt terlalu panjang | Pecah jadi step kecil |
| Skip review | Baca setiap baris output |
| Copy-paste tanpa paham | Tanya ke AI jika bingung |
| Lanjut tanpa fix | Fix sebelum next step |