# Application Structure and Software Architecture

Dokumen ini menjelaskan struktur aplikasi IAEETA Digital Platform agar repository mudah dibaca, mudah dikembangkan, dan mudah dipindahkan ke framework/backend pada tahap berikutnya.

## 1. Tujuan Aplikasi

IAEETA Digital Platform memiliki tiga area utama:

1. Public / Guest Area
   Area untuk pengunjung umum melihat company profile, event, sertifikasi, artikel, kontak, login, dan register.

2. Registered User Area
   Area setelah user memiliki akun untuk mengelola event, sertifikasi, dokumen persyaratan, sertifikat digital, dan profil.

3. Admin Area
   Area operasional untuk admin mengelola users, events, certifications, requirements, articles, dan contact messages.

## 2. Current Repository Structure

```text
cgkieaatacodex/
├── index.html
├── pages/
│   ├── public/
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── events.html
│   │   ├── certifications.html
│   │   ├── articles.html
│   │   └── contact.html
│   ├── auth/
│   │   ├── login.html
│   │   └── register.html
│   ├── user/
│   │   ├── dashboard.html
│   │   ├── user-events.html
│   │   ├── user-certifications.html
│   │   ├── user-requirements.html
│   │   ├── user-certificates.html
│   │   └── user-profile.html
│   └── admin/
│       ├── dashboard.html
│       ├── users.html
│       ├── events.html
│       ├── certifications.html
│       ├── requirements.html
│       └── articles.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── package.json
├── README.md
├── docs/
│   ├── ARCHITECTURE.md
│   └── PRD.md
└── tests/
    └── static-pages.test.mjs
```

## 3. Page Grouping

### Public / Guest Pages

| File | Fungsi |
| --- | --- |
| `pages/public/index.html` | Home public, statistik, profil singkat, benefit, mitra, FAQ |
| `pages/public/about.html` | Profil organisasi, visi misi, struktur organisasi |
| `pages/public/events.html` | Listing event public |
| `pages/public/certifications.html` | Listing sertifikasi dan jadwal batch sertifikasi |
| `pages/public/articles.html` | Artikel, publikasi, dan pengumuman |
| `pages/public/contact.html` | Kontak, form pesan, lokasi Google Maps |
| `pages/auth/login.html` | Akses masuk user |
| `pages/auth/register.html` | Pendaftaran akun user |

### Registered User Pages

| File | Fungsi |
| --- | --- |
| `pages/user/dashboard.html` | Ringkasan akun, agenda, sertifikasi, dokumen, sertifikat |
| `pages/user/user-events.html` | Event yang sudah didaftarkan user |
| `pages/user/user-certifications.html` | Status proses sertifikasi user |
| `pages/user/user-requirements.html` | Upload dan status dokumen persyaratan |
| `pages/user/user-certificates.html` | Sertifikat digital yang bisa diunduh |
| `pages/user/user-profile.html` | Data profil user |

### Admin Pages

| File | Fungsi |
| --- | --- |
| `pages/admin/dashboard.html` | Monitoring operasional admin, verification queue, certification pipeline, event management, CMS artikel, dan pesan kontak |
| `pages/admin/users.html` | Pengelolaan pengguna, status akun, kategori profesional, dan instansi |
| `pages/admin/events.html` | Pengelolaan event, registrasi peserta, status publikasi, dan laporan |
| `pages/admin/certifications.html` | Pengelolaan program sertifikasi, batch jadwal, dan pipeline proses |
| `pages/admin/requirements.html` | Verifikasi dokumen persyaratan pengguna |
| `pages/admin/articles.html` | CMS artikel, publikasi, draft, dan status publish |

## 4. Navigation Architecture

### Public Navigation

```text
Home
├── About Us
├── Events
├── Certifications
├── Articles
├── Contact
├── Login
└── Register
```

### User Navigation

```text
Dashboard
├── My Events
├── My Certifications
├── Requirements
├── Certificates
└── Profile
```

User area memakai sidebar dashboard agar berbeda jelas dari header public.

### Admin Navigation

```text
Dashboard
├── Users
├── Events
├── Certifications
├── Requirements
├── Articles
├── Contact Messages
└── Settings
```

Admin area memakai sidebar console agar berbeda dari public dan user dashboard.

## 5. User Flow

### Guest to Registered User

```text
Guest membuka website
→ Melihat event / certification
→ Register akun
→ Login
→ Masuk dashboard
→ Kelola event, sertifikasi, dokumen, sertifikat, profil
```

### Certification Flow

```text
Register certification
→ Upload requirement
→ Admin verification
→ Certification scheduling
→ Digital certificate generated
```

Flow ini tercermin pada:

- `pages/public/certifications.html`
- `pages/user/dashboard.html`
- `pages/user/user-certifications.html`
- `pages/user/user-requirements.html`
- `pages/user/user-certificates.html`

## 6. Styling Architecture

Saat ini semua CSS berada di `assets/css/styles.css` karena project masih prototype statis. Agar tetap mudah dibaca, class dibagi berdasarkan area:

```text
Global tokens
├── Header, nav, button, brand
├── Public home sections
├── Internal public pages
├── Auth pages
├── Dashboard layout
├── User area pages
├── Admin area pages
└── Responsive breakpoints
```

Pola class yang dipakai:

- `site-*` untuk layout public umum
- `home-*` untuk home page
- `page-*` untuk page hero public
- `auth-*` untuk login/register
- `dashboard-*` untuk layout user dashboard
- `user-*` untuk halaman detail user area
- `admin-*` untuk dashboard dan panel operasional admin

## 7. JavaScript Architecture

`assets/js/app.js` menangani interaksi ringan:

- Toggle menu mobile
- Close menu saat link diklik
- Submit dummy untuk form auth dan signup
- Reveal animation saat section masuk viewport

Belum ada integrasi API, state management, authentication session, atau backend.

## 8. Testing Architecture

Test berada di:

```text
tests/static-pages.test.mjs
```

Test ini memastikan:

- File halaman penting ada dan bisa dibaca
- Judul halaman benar
- Navigasi aktif benar
- Section utama ada
- Jumlah card penting sesuai ekspektasi
- CSS dan JS memuat class/fungsi yang dibutuhkan

Jalankan:

```bash
npm test
```

## 9. Recommended Future Structure

Jika project masuk tahap production atau dipindah ke framework seperti Laravel, Next.js, React, atau Vue, struktur disarankan menjadi:

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── public/
│   │   ├── Header
│   │   ├── Footer
│   │   └── PageHero
│   ├── auth/
│   │   ├── LoginForm
│   │   └── RegisterForm
│   └── dashboard/
│       ├── Sidebar
│       ├── Topbar
│       ├── StatCard
│       ├── RecordCard
│       └── CertificateCard
├── pages/
│   ├── public/
│   ├── auth/
│   ├── user/
│   └── admin/
├── services/
│   ├── auth.service
│   ├── events.service
│   ├── certifications.service
│   └── documents.service
├── styles/
│   ├── tokens
│   ├── public
│   ├── auth
│   └── dashboard
└── tests/
```

## 10. Backend Domain Modules

Untuk backend, domain yang paling natural dari PRD adalah:

| Module | Tanggung jawab |
| --- | --- |
| Auth | Login, register, forgot password, session |
| Users | Profil user, kategori profesional, instansi |
| Events | Data event, registrasi event, status pembayaran/kehadiran |
| Certifications | Program sertifikasi, jadwal, registrasi, status proses |
| Requirements | Upload dokumen, status verifikasi admin |
| Articles | Artikel dan publikasi |
| Contact | Pesan kontak dan inquiry |
| Admin CMS | Pengelolaan konten public dan data transaksi |

## 11. Naming Rules

Gunakan pola berikut untuk menjaga repository tetap rapi:

- Halaman public: nama langsung, contoh `events.html`
- Halaman user: prefix `user-`, contoh `user-events.html`
- Halaman admin: folder `pages/admin`, contoh `dashboard.html`
- Class public shared: prefix `site-`
- Class auth: prefix `auth-`
- Class dashboard: prefix `dashboard-`
- Class halaman user: prefix `user-`
- Class admin: prefix `admin-`
- Test: tambahkan assertion setiap kali halaman baru dibuat

## 12. Development Notes

- Jangan memindahkan file HTML ke folder baru sebelum semua link relatif diperbarui.
- Jika CSS mulai terlalu panjang, pecah ke beberapa file hanya saat build tool sudah tersedia.
- Untuk tahap prototype, menjaga semua halaman dapat dibuka langsung oleh static server lebih penting daripada abstraksi kompleks.
- Saat backend sudah ada, form login/register/upload perlu diganti dari dummy submit menjadi request API.
