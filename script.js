// ===================================================
// NILAI TAMBAH: Vue JS 3 - struktur dasar Vue dengan data()
// dan penghubungan Vue ke elemen menggunakan .mount('#app')
// ===================================================
const { createApp } = Vue;

createApp({
  // NILAI TAMBAH: data() Vue JS - menyimpan data statis portofolio
  data() {
    return {
      // NILAI TAMBAH: interpolation {{ }} untuk hero section
      name: 'Rafanov',
      role: 'CyberSec',
      tagline: 'Cybersecurity enthusiast',
      skillLine: 'Python · Linux · Network/Cisco · Java · Penetration Testing · HTML/CSS',
      about: 'Raihan Fariz N - Mulawarman University Undergraduate Student on Information System, Focused on Cybersecurity.',
      footerText: 'Rafanov',

      // NILAI TAMBAH: Vue data array untuk projects (di-render dengan v-for)
      projects: [
        {
          name: '2Sec Organization',
          desc: 'Mulawarman University Organization Focused on Cybersecurity and CTF'
        },
        {
          name: 'Firdaus Academy',
          desc: 'Small Information System Organization Focused on Learning together'
        }
      ],

      // NILAI TAMBAH: Vue data array untuk experiences (di-render dengan v-for)
      experiences: [
        {
          title: 'CTF player',
          period: '2024 - Present',
          desc: 'Always join the CTF game but never being Finalist lol'
        },
        {
          title: 'Mulawarman University - Information System',
          period: '2024 - Present',
          desc: 'Focused on Cybersecurity'
        }
      ],

      // FITUR WAJIB: Skills dengan progress bar
      // NILAI TAMBAH: Vue data array untuk skills + Bootstrap progress bar (di-render dengan v-for)
      skills: [
        { name: 'Python',              pct: 65 },
        { name: 'Linux',               pct: 87 },
        { name: 'Cisco',               pct: 45 },
        { name: 'Java',                pct: 40 },
        { name: 'Penetration Testing', pct: 85 },
        { name: 'HTML/CSS',            pct: 80 }
      ],

      // NILAI TAMBAH: Vue data array untuk contacts (di-render dengan v-for)
      contacts: [
        { label: 'Email',    href: 'mailto:raihanfariznovanto@gmail.com', display: 'raihanfariznovanto@gmail.com' },
        { label: 'GitHub',   href: 'https://github.com/Rafanov',          display: 'github.com/Rafanov' },
        { label: 'LinkedIn', href: 'https://id.linkedin.com/in/raihan-fariz-novanto-b03559340', display: 'raihan-fariz-novanto' }
      ],

      // FITUR WAJIB: Section Certificates berisi daftar sertifikat dalam bentuk card
      // NILAI TAMBAH: Vue data array untuk certificates (di-render dengan v-for + Bootstrap card grid)
      certificates: [
        {
          title: 'HCIA Networking',
          issuer: 'Huawei',
          year: '2024',
          category: 'Network',
          icon: 'bi-hdd-network'
        },
        {
          title: 'Ethical Hacker Certificate',
          issuer: 'Cisco Networking Academy',
          year: '2026',
          category: 'CyberSec',
          icon: 'bi-shield-lock'
        },
        {
          title: 'Linux Unhatched',
          issuer: 'Cisco Networking Academy',
          year: '2026',
          category: 'Linux',
          icon: 'bi-terminal'
        },
        {
          title: 'Cisco CCNA: Introduction to Networks',
          issuer: 'Cisco Networking Academy',
          year: '2025',
          category: 'Cisco',
          icon: 'bi-diagram-3'
        },
        {
          title: 'Linux Fundamentals',
          issuer: 'TryHackMe',
          year: '2025',
          category: 'Linux',
          icon: 'bi-cpu'
        },
        {
          title: 'CTF Participant Certificate',
          issuer: 'All of Nasional CTF',
          year: '2024',
          category: 'CTF',
          icon: 'bi-flag'
        }
      ]
    };
  }
// NILAI TAMBAH: .mount('#app') - penghubungan Vue ke elemen HTML
}).mount('#app');


// ===================================================
// THEME TOGGLE - Eva 01 ↔ Ayanami
// (sama persis dengan script original, tidak diubah)
// ===================================================
const toggle = document.getElementById('toggleA');

toggle.addEventListener('click', () => {
  const root = document.documentElement.style;
  const currentBg = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();

  if (currentBg === '#0a0a0a') {
    // Eva 01 → Ayanami
    root.setProperty('--bg-color', '#f2f2f2');
    root.setProperty('--text-color', '#2b3a55');
    root.setProperty('--muted', '#6b8fb2');
    root.setProperty('--accent-green', '#3a6cf6');
    root.setProperty('--accent-purple', '#ff7b3d');
    root.setProperty('--accent-color', '#3a6cf6');
    root.setProperty('--whoami-color', '#6B8FB2');
    root.setProperty('--contact-color', '#2b3a55');
    toggle.textContent = 'Eva 01 Theme';
  } else {
    // Ayanami → Eva 01
    root.setProperty('--bg-color', '#0a0a0a');
    root.setProperty('--text-color', '#e0e0e0');
    root.setProperty('--muted', '#999');
    root.setProperty('--accent-green', '#39ff14');
    root.setProperty('--accent-purple', '#5b2e8a');
    root.setProperty('--accent-color', '#39ff14');
    root.setProperty('--whoami-color', '#e0e0e0');
    root.setProperty('--contact-color', '#ffffff');
    toggle.textContent = 'Ayanami Theme';
  }
});