# IAEETA Digital Platform

Prototype static HTML untuk website public dan user dashboard IAEETA.

Project ini sementara memakai HTML, CSS, dan JavaScript murni agar desain, struktur halaman, dan alur pengguna bisa divalidasi cepat sebelum masuk ke tahap integrasi backend.

## Quick Start

```bash
npm test
```

Untuk membuka lokal dengan static server:

```bash
python3 -m http.server 8001
```

Lalu buka:

```text
http://localhost:8001/pages/public/index.html
```

## Halaman Utama

Public / Guest:

- `pages/public/index.html` - Home public IAEETA
- `pages/public/about.html` - Company profile, visi misi, struktur organisasi
- `pages/public/events.html` - Daftar event public
- `pages/public/certifications.html` - Daftar sertifikasi dan jadwal sertifikasi
- `pages/public/articles.html` - Artikel dan publikasi
- `pages/public/contact.html` - Kontak dan lokasi
- `pages/auth/login.html` - Login pengguna
- `pages/auth/register.html` - Register pengguna

Registered User:

- `pages/user/dashboard.html` - Ringkasan aktivitas user
- `pages/user/user-events.html` - Event yang didaftarkan user
- `pages/user/user-certifications.html` - Sertifikasi user
- `pages/user/user-requirements.html` - Upload dan status dokumen persyaratan
- `pages/user/user-certificates.html` - Sertifikat digital user
- `pages/user/user-profile.html` - Profil akun user

Admin:

- `pages/admin/dashboard.html` - Dashboard operasional admin untuk users, events, certifications, requirements, articles, dan contact messages
- `pages/admin/users.html` - Kelola data pengguna dan status akun
- `pages/admin/events.html` - Kelola event dan registrasi peserta
- `pages/admin/certifications.html` - Kelola program, batch, dan pipeline sertifikasi
- `pages/admin/requirements.html` - Review dokumen persyaratan pengguna
- `pages/admin/articles.html` - CMS artikel dan publikasi

## File Pendukung

- `assets/css/styles.css` - Semua styling visual dan responsive layout
- `assets/js/app.js` - Interaksi ringan: mobile nav, form dummy submit, reveal animation
- `tests/static-pages.test.mjs` - Test statis untuk menjaga struktur halaman
- `docs/ARCHITECTURE.md` - Dokumentasi struktur aplikasi dan arsitektur

## Prinsip Struktur

- Halaman public dan user area dipisah secara jelas dari sisi nama file.
- Public pages berada di `pages/public`.
- Auth pages berada di `pages/auth`.
- User pages berada di `pages/user`.
- Admin pages berada di `pages/admin`.
- Semua halaman user menggunakan prefix `user-`, kecuali `dashboard.html` sebagai landing setelah login.
- Styling dashboard dan public site tetap di satu file untuk prototype, tetapi sudah dipisahkan per blok class.
- Test statis wajib dijalankan setelah menambah atau mengubah halaman.

Lihat detail di [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
