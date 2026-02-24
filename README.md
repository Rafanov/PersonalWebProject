# Minpro 1 — Portfolio Website

Website portofolio pribadi berbasis HTML, CSS, Bootstrap 5, dan Vue JS 3. Menampilkan informasi diri, skills, pengalaman, dan sertifikasi dalam tampilan dark/light theme yang bisa di-toggle.

---

## Live Preview

> Buka `index.html` langsung di browser, atau deploy ke GitHub Pages.

---

## Tampilan Website

### Navbar
Navigasi fixed di bagian atas halaman. Berisi link ke section **Home**, **About Me**, **Certificates**, dan **Contact**, serta tombol toggle tema di sisi kanan. Navbar otomatis collapse menjadi hamburger menu di layar kecil (mobile).

### Section Home (Hero)
Section pertama yang tampil saat membuka website. Berisi:
- Foto profil
- Nama dan role (`Rafanov / CyberSec`)
- Tagline singkat
- Terminal animatif yang menampilkan perintah `whoami` dan `cat skills.txt`
- Tombol shortcut ke Contact dan About Me

### Section About Me
Terbagi menjadi dua kolom:

**Kolom Kiri:**
- **About** — Deskripsi singkat tentang diri dan fokus studi
- **Projects** — Daftar proyek/organisasi yang pernah diikuti
- **Experience & Education** — Riwayat pengalaman dan pendidikan

**Kolom Kanan:**
- **Skills** — Daftar skill dengan progress bar yang menunjukkan persentase kemampuan
- **Contact** — Email, GitHub, dan LinkedIn

### Section Certificates
Menampilkan daftar sertifikasi dalam bentuk **card grid** (3 kolom di desktop, 2 di tablet, 1 di mobile). Setiap card berisi:
- Icon kategori
- Nama sertifikat
- Penerbit / Issuer
- Tahun perolehan
- Badge kategori

### Theme Toggle (Eva 01 ↔ Ayanami)
Tombol di navbar untuk mengganti tema antara:
- **Eva 01 Theme** — Dark mode dengan aksen hijau neon
- **Ayanami Theme** — Light mode dengan aksen biru

---

## Penjelasan Code Setiap Section

### `index.html`
File utama yang berisi struktur HTML website. Semua section dibungkus dalam `<div id="app">` agar bisa dikontrol oleh Vue JS.

```html
<!-- Navbar Bootstrap 5 dengan responsive collapse -->
<nav class="navbar navbar-expand-lg fixed-top" id="mainNavbar">
  ...
  <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
  ...
</nav>

<!-- Hero Section — foto, nama, terminal -->
<section id="home" class="hero-section"> ... </section>

<!-- About Me — grid 2 kolom, skills progress bar -->
<section id="about" class="py-5"> ... </section>

<!-- Certificates — card grid dengan v-for Vue -->
<section id="certificates" class="py-5"> ... </section>
```

Vue JS menggunakan **interpolation** `{{ }}` untuk menampilkan data, dan **`v-for`** untuk me-render list secara dinamis dari array di `data()`.

```html
<!-- Contoh interpolation -->
<h1>{{ name }} <span>/ {{ role }}</span></h1>

<!-- Contoh v-for untuk skills -->
<div v-for="skill in skills" :key="skill.name">
  <strong>{{ skill.name }}</strong>
  <div class="progress-bar" :style="{ width: skill.pct + '%' }"></div>
</div>

<!-- Contoh v-for untuk certificates -->
<div v-for="cert in certificates" :key="cert.title">
  <div class="cert-title">{{ cert.title }}</div>
  <div class="cert-issuer">{{ cert.issuer }}</div>
</div>
```

---

### `style.css`
File CSS yang mengatur seluruh tampilan website.

```css
/* CSS Variables untuk theming dinamis */
:root {
  --bg-color: #0a0a0a;
  --accent-green: #39ff14;
  --accent-purple: #5b2e8a;
  ...
}

/* Ayanami Theme override — diaktifkan via JS */
body.ayanami-theme {
  --bg-color: #f2f2f2;
  --accent-green: #6B8FB2;
  ...
}

/* Navbar fixed top dengan efek glassmorphism */
#mainNavbar {
  backdrop-filter: blur(12px);
  background: rgba(10, 10, 10, 0.85);
}

/* Progress bar skill dengan gradient */
.skill-bar {
  background: linear-gradient(90deg, var(--accent-green), var(--accent-purple));
}

/* Certificate card dengan hover effect */
.cert-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-green);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .logo { width: 120px; height: 150px; }
}
```

---

### `script.js`
File JavaScript yang menangani dua hal utama:

**1. Vue JS App** — Semua data portofolio disimpan di sini dalam `data()`, lalu ditampilkan di HTML via interpolasi.

```js
const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Rafanov',
      role: 'CyberSec',
      skills: [
        { name: 'Linux',               pct: 87 },
        { name: 'Penetration Testing', pct: 85 },
        ...
      ],
      certificates: [
        { title: 'Ethical Hacker Certificate', issuer: 'Cisco Networking Academy', ... },
        ...
      ]
    };
  }
}).mount('#app'); // Menghubungkan Vue ke elemen #app
```

**2. Theme Toggle** — Mengganti CSS variables secara dinamis saat tombol diklik.

```js
toggle.addEventListener('click', () => {
  const currentBg = getComputedStyle(document.documentElement)
                      .getPropertyValue('--bg-color').trim();

  if (currentBg === '#0a0a0a') {
    // Switch ke Ayanami (light)
    root.setProperty('--bg-color', '#f2f2f2');
    ...
  } else {
    // Switch ke Eva 01 (dark)
    root.setProperty('--bg-color', '#0a0a0a');
    ...
  }
});
```

---

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| **HTML5** | Struktur dan konten halaman web |
| **CSS3** | Styling, layout, animasi, CSS variables untuk theming |
| **Bootstrap 5** | Navbar, Grid System (row/col), Progress Bar, Button, Responsive Breakpoints |
| **Vue JS 3** | Interpolasi data `{{ }}`, `v-for`, `data()`, `.mount('#app')` |
| **Bootstrap Icons** | Icon pada certificate card dan navbar toggler |
| **Google Fonts** | Font `Fira Code` dan `Inter` |

---

## Cara Menjalankan Project

### Clone Repository

```bash
git clone https://github.com/Rafanov/portfolio.git
```

### Masuk ke Folder Project

```bash
cd portfolio
```

### Siapkan Foto Profil

Pastikan file foto profil bernama `AyanamiSeriusNjir.jpg` ada di dalam folder project (satu folder dengan `index.html`).

### Jalankan Website

Buka langsung file `index.html` di browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

> ✅ Tidak memerlukan server atau instalasi apapun. Website bersifat **statis** dan berjalan langsung di browser.

---

## Struktur File

```
portfolio/
├── index.html              # Struktur utama HTML
├── style.css               # Styling dan theming
├── script.js               # Vue JS app + theme toggle
├── AyanamiSeriusNjir.jpg   # Foto profil
└── README.md               # Dokumentasi project
```

---

## Checklist Fitur

### Fitur Wajib
- [x] Section Home (Hero Section) dengan perkenalan singkat
- [x] Section About Me dengan deskripsi, skills progress bar, dan pengalaman
- [x] Section Certificates dengan layout card grid
- [x] Navbar
- [x] Gambar profil
- [x] Struktur dasar HTML yang benar (`html`, `head`, `body`)
- [x] CSS untuk styling (warna, background, layout, font)
- [x] Tampilan responsif
- [x] Website statis

### Nilai Tambah
- [x] **Bootstrap 5** — Navbar, container, row/col Grid System, progress bar, button utilities, responsive breakpoints, spacing utilities
- [x] **Vue JS 3** — `data()`, interpolation `{{ }}`, `v-for`, `.mount('#app')`

---

## Author

**Raihan Fariz N** — Mulawarman University, Information System  
