# Product Requirements Document

## IAEETA Digital Platform

Dokumen ini merangkum kebutuhan produk untuk website dan dashboard pengguna IAEETA berdasarkan implementasi prototype saat ini.

## 1. Product Overview

IAEETA Digital Platform adalah platform digital untuk menampilkan profil organisasi, event, sertifikasi, artikel, kontak, serta menyediakan area pengguna untuk mengelola aktivitas setelah registrasi akun.

Platform memiliki dua area utama:

- Public / Guest Area untuk pengunjung umum.
- Registered User Area untuk pengguna yang sudah memiliki akun.

## 2. Goals

- Menyediakan company profile IAEETA yang profesional dan mudah dipahami.
- Menampilkan daftar event dan sertifikasi yang tersedia.
- Memungkinkan pengunjung melakukan login dan register.
- Memberikan dashboard untuk pengguna terdaftar.
- Memungkinkan pengguna melihat event, sertifikasi, dokumen persyaratan, sertifikat digital, dan profil.
- Menyiapkan struktur halaman yang mudah dikembangkan menjadi aplikasi dinamis.

## 3. User Roles

### Guest

Pengunjung umum yang belum login.

Kemampuan utama:

- Melihat home page.
- Melihat profil organisasi.
- Melihat daftar event.
- Melihat daftar sertifikasi dan jadwal sertifikasi.
- Melihat artikel.
- Menghubungi IAEETA.
- Melakukan register atau login.

### Registered User

Pengguna yang sudah memiliki akun.

Kemampuan utama:

- Mengakses dashboard.
- Melihat event yang sudah didaftarkan.
- Melihat status sertifikasi.
- Mengelola dokumen persyaratan.
- Mengakses sertifikat digital.
- Mengelola profil akun.

### Admin

Admin operasional yang mengelola konten, verifikasi, dan monitoring platform.

Kemampuan utama:

- Mengelola konten company profile.
- Mengelola event.
- Mengelola sertifikasi dan jadwal.
- Memverifikasi dokumen pengguna.
- Menerbitkan sertifikat digital.
- Mengelola artikel dan publikasi.
- Melihat pesan kontak.

## 4. Scope

### In Scope

- Public website.
- Login page.
- Register page.
- User dashboard.
- User pages:
  - My Events
  - My Certifications
  - Requirements
  - Profile
- Admin dashboard.
- Static page tests.
- Responsive layout untuk desktop dan mobile.

### Out of Scope for Current Prototype

- Backend API.
- Database.
- Real authentication.
- Real file upload.
- Real payment flow.
- Dynamic certificate generation.
- Email notification.

## 5. Public / Guest Pages

### Home

File: `pages/public/index.html`

Konten utama:

- Hero IAEETA.
- Statistik:
  - Pengguna aktif
  - Seminar dan event
  - Program sertifikasi
  - Kemitraan
- Company profile preview.
- Quote direktur.
- Benefit program.
- Event preview.
- Certification preview.
- Article preview.
- Mitra dan perusahaan.
- FAQ.
- CTA register.

### About Us

File: `pages/public/about.html`

Konten utama:

- Profil IAEETA.
- Visi dan misi.
- Struktur organisasi.
- Nilai organisasi.
- Platform digital IAEETA.

### Events

File: `pages/public/events.html`

Konten utama:

- Hero events.
- Filter visual.
- Daftar event.
- Event registration flow.
- CTA login/register.

### Certifications

File: `pages/public/certifications.html`

Konten utama:

- Hero certifications.
- Daftar program sertifikasi.
- Certification flow.
- Jadwal sertifikasi berbentuk card horizontal.
- Status jadwal:
  - Masih Buka
  - Penuh Kuota
  - Sudah Close
- CTA daftar sertifikasi.

### Articles

File: `pages/public/articles.html`

Konten utama:

- Artikel unggulan.
- Daftar artikel dan publikasi.
- Link detail artikel.

### Contact

File: `pages/public/contact.html`

Konten utama:

- Informasi kontak.
- Form kontak.
- Lokasi dengan Google Maps embed.

### Login

File: `pages/auth/login.html`

Konten utama:

- Email.
- Password.
- Remember me.
- Forgot password link.
- Link register.

### Register

File: `pages/auth/register.html`

Konten utama:

- Nama lengkap.
- Email.
- Nomor telepon.
- Instansi / perusahaan.
- Kategori profesional.
- Minat layanan.
- Password.
- Konfirmasi password.
- Persetujuan penggunaan data.

## 6. Registered User Area

### Dashboard

File: `pages/user/dashboard.html`

Fungsi utama:

- Menampilkan ringkasan akun pengguna.
- Menampilkan statistik:
  - Event terdaftar
  - Sertifikasi aktif
  - Dokumen
  - Sertifikat digital
- Menampilkan agenda terdekat.
- Menampilkan status sertifikasi.
- Menampilkan status dokumen.
- Menampilkan sertifikat digital terbaru.

### My Events

File: `pages/user/user-events.html`

Fungsi utama:

- Menampilkan event yang sudah didaftarkan user.
- Menampilkan status:
  - Registered
  - Waiting Payment
  - Completed
- Menampilkan tanggal, format, lokasi, dan aksi detail.

### My Certifications

File: `pages/user/user-certifications.html`

Fungsi utama:

- Menampilkan sertifikasi yang diikuti user.
- Menampilkan progress sertifikasi.
- Menampilkan step proses sertifikasi.
- Menyediakan aksi melihat proses atau download sertifikat.

### Requirements

File: `pages/user/user-requirements.html`

Fungsi utama:

- Menampilkan form upload dokumen.
- Menampilkan checklist status dokumen.
- Status dokumen:
  - Verified
  - Review
  - Missing

### Certificates

File: `pages/user/user-certificates.html`

Fungsi utama:

- Menampilkan sertifikat digital user.
- Menampilkan nomor sertifikat.
- Menampilkan tanggal terbit.
- Menampilkan tanggal kedaluwarsa sertifikat.
- Menampilkan status sertifikat.
- Menyediakan aksi download.

### Profile

File: `pages/user/user-profile.html`

Fungsi utama:

- Menampilkan ringkasan profil user.
- Menampilkan form edit data profil:
  - Nama lengkap
  - Email
  - Nomor telepon
  - Instansi / perusahaan
  - Kategori profesional
  - Kota

## 7. Admin Area

### Admin Dashboard

File: `pages/admin/dashboard.html`

Fungsi utama:

- Menampilkan ringkasan operasional platform.
- Menampilkan total users, event registrations, dan certification requests.
- Menampilkan verification queue untuk requirement pengguna.
- Menampilkan certification pipeline.
- Menampilkan event management.
- Menampilkan article & publication CMS summary.
- Menampilkan contact messages.
- Menyediakan sidebar admin untuk modul:
  - Users
  - Events
  - Certifications
  - Requirements
  - Articles
  - Contact Messages
  - Settings

### Admin Users

File: `pages/admin/users.html`

Fungsi utama:

- Menampilkan daftar pengguna.
- Menampilkan email, kategori profesional, dan status akun.
- Menyediakan aksi view/review user.
- Menampilkan ringkasan total users, verified, pending, dan organizations.

### Admin Events

File: `pages/admin/events.html`

Fungsi utama:

- Menampilkan daftar event.
- Menampilkan tanggal event, jumlah registrant, status publikasi, dan aksi manage.
- Menyediakan CTA create event.
- Menampilkan ringkasan published events, registrants, waiting payment, dan closed events.

### Admin Certifications

File: `pages/admin/certifications.html`

Fungsi utama:

- Menampilkan certification pipeline.
- Menampilkan batch schedule dan status kuota.
- Menyediakan CTA create batch.
- Menampilkan status registered, admin verification, scheduling, dan completed.

### Admin Requirements

File: `pages/admin/requirements.html`

Fungsi utama:

- Menampilkan antrean verifikasi dokumen.
- Menampilkan user, document, program, status, dan action.
- Mendukung status verified, review, dan missing.
- Menyediakan aksi approve selected dan request update.

### Admin Articles

File: `pages/admin/articles.html`

Fungsi utama:

- Menampilkan daftar artikel dan publikasi.
- Menampilkan title, category, author, status, dan action.
- Mendukung status published, draft review, dan archived.
- Menyediakan CTA new article.

## 8. Core User Flows

### Guest Registration Flow

```text
Guest membuka website
→ Melihat event / sertifikasi
→ Register akun
→ Login
→ Masuk dashboard user
```

### Event Registration Flow

```text
User memilih event
→ Register event
→ Mengikuti instruksi event
→ Status event muncul di My Events
```

### Certification Flow

```text
Register certification
→ Upload requirement
→ Admin verification
→ Certification scheduling
→ Certification completed
```

### Document Requirement Flow

```text
User membuka Requirements
→ Upload dokumen
→ Admin review
→ Status berubah menjadi Verified / Review / Missing
```

### Certificate Access Flow

```text
Sertifikasi selesai
→ Sertifikat digital generated
→ User membuka Certificates
→ Download sertifikat
```

### Admin Operational Flow

```text
Admin membuka dashboard
→ Review requirement queue
→ Approve / request update dokumen
→ Pantau certification pipeline
→ Kelola event, artikel, dan pesan kontak
```

## 9. Functional Requirements

### Public Website

- Website harus memiliki navigasi public yang konsisten.
- Website harus menampilkan konten utama sesuai halaman.
- Header harus tetap terlihat saat halaman discroll.
- Layout harus responsive untuk desktop dan mobile.
- Contact page harus menampilkan Google Maps.

### Authentication Pages

- Login page harus menyediakan input email dan password.
- Login page harus menyediakan link forgot password.
- Register page harus menyediakan form data pengguna.
- Register page harus menyediakan link login.

### User Dashboard

- User dashboard harus memiliki sidebar navigasi.
- Sidebar harus memiliki link ke semua halaman user.
- Dashboard harus menampilkan ringkasan aktivitas.
- Dashboard harus menampilkan status event, sertifikasi, dokumen, dan sertifikat.

### User Area

- My Events harus menampilkan daftar event user.
- My Certifications harus menampilkan progress sertifikasi.
- Requirements harus menampilkan upload form dan status dokumen.
- Certificates harus menampilkan daftar sertifikat digital.
- Certificates harus menampilkan certificate number, issue date, expired date, certificate status, dan aksi download.
- Profile harus menampilkan data profil pengguna.

### Admin Area

- Admin dashboard harus memiliki sidebar navigasi admin.
- Admin dashboard harus menampilkan operational summary.
- Admin dashboard harus menampilkan requirement review queue.
- Admin dashboard harus menampilkan certification pipeline.
- Admin dashboard harus menampilkan CMS artikel dan pesan kontak.

## 10. Non-Functional Requirements

- Tampilan harus profesional, rapi, dan konsisten dengan identitas IAEETA.
- UI harus responsive untuk mobile dan desktop.
- Card, spacing, dan CTA harus konsisten.
- Text tidak boleh saling tumpang tindih.
- Halaman harus dapat dibuka melalui static server.
- Struktur repository harus mudah dibaca.

## 11. Acceptance Criteria

- Semua halaman public dapat dibuka tanpa error.
- Semua halaman auth dapat dibuka tanpa error.
- Semua halaman user dashboard dapat dibuka tanpa error.
- Halaman admin dashboard dapat dibuka tanpa error.
- Sidebar user area menampilkan active menu sesuai halaman.
- Sidebar admin menampilkan modul operasional admin.
- Card jadwal sertifikasi tampil horizontal.
- CTA jadwal sertifikasi menggunakan teks "Daftar Sekarang".
- Contact page menampilkan map Google Maps.
- Test statis berjalan sukses dengan `npm test`.

## 12. Current Prototype Files

Public:

- `pages/public/index.html`
- `pages/public/about.html`
- `pages/public/events.html`
- `pages/public/certifications.html`
- `pages/public/articles.html`
- `pages/public/contact.html`
- `pages/auth/login.html`
- `pages/auth/register.html`

User:

- `pages/user/dashboard.html`
- `pages/user/user-events.html`
- `pages/user/user-certifications.html`
- `pages/user/user-requirements.html`
- `pages/user/user-certificates.html`
- `pages/user/user-profile.html`

Admin:

- `pages/admin/dashboard.html`
- `pages/admin/users.html`
- `pages/admin/events.html`
- `pages/admin/certifications.html`
- `pages/admin/requirements.html`
- `pages/admin/articles.html`

Shared:

- `assets/css/styles.css`
- `assets/js/app.js`
- `tests/static-pages.test.mjs`

Documentation:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/PRD.md`

## 13. Future Enhancements

- Backend API.
- Database schema.
- Real authentication and authorization.
- Event registration transaction flow.
- Certification payment and scheduling flow.
- Real document upload and admin verification.
- Certificate PDF generation.
- Email notification.
- Article CMS.
- Contact inquiry management.
