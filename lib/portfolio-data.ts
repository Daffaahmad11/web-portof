export const profile = {
  name: "Daffa ' Ahmad Naufal",
  shortName: 'Daffa Ahmad',
  initials: 'DN',
  roles: ['Data Analyst', 'Data Scientist', 'Data Engineer', 'Machine Learning Enthusiast'],
  summary:
    'Lulusan Sains Data Institut Teknologi Sumatera dengan pengalaman sebagai Data Analyst Intern di PT MRT Jakarta (Perseroda), data collector pada riset kolaborasi ARIA x ITERA x UNPAD, serta Asisten Praktikum mata kuliah teknis tingkat lanjut.',
  location: 'Jakarta Barat, DKI Jakarta',
  email: 'ahmadnaufaldaffa11@gmail.com',
  linkedin: { label: 'daffaahmadnaufal', href: 'https://www.linkedin.com/in/daffaahmadnaufal' },
  github: { label: 'Daffaahmad11', href: 'https://github.com/Daffaahmad11' },
  cv: '/cv-daffa-ahmad-naufal.pdf',
  photo: '/profile-daffa.jpeg',
}

export const navItems = [
  { id: 'beranda', label: 'Beranda', href: '/' },
  { id: 'keahlian', label: 'Keahlian', href: '/keahlian' },
  { id: 'riwayat', label: 'Riwayat', href: '/riwayat' },
  { id: 'proyek', label: 'Proyek', href: '/proyek' },
  { id: 'galeri', label: 'Galeri', href: '/galeri' },
  { id: 'kontak', label: 'Kontak', href: '/kontak' },
] as const

export const stats = [
  { label: 'Proyek data', value: 11 },
  { label: 'Data responden diolah', value: 522 },
  { label: 'Program kerja dipimpin', value: 9 },
]

export const skillGroups = [
  { name: 'Bahasa', skills: ['Python', 'SQL', 'R'] },
  { name: 'BI & Visualisasi', skills: ['Tableau', 'Power BI', 'Excel'] },
  { name: 'Data Engineering', skills: ['Apache Spark', 'Data Warehouse', 'Docker'] },
  { name: 'Analisis & ML', skills: ['Statistika', 'Machine Learning', 'Deep Learning'] },
  { name: 'Pengumpulan Data', skills: ['KoboToolbox'] },
]

export const softSkills = [
  'Mudah beradaptasi di lingkungan baru',
  'Berani mencoba pengalaman baru',
  'Kolaboratif & kerja tim',
  'Berpikir kritis & problem-solving',
  'Kepemimpinan & koordinasi',
]

export type TimelineItem = {
  id: string
  period: string
  title: string
  org: string
  location?: string
  summary: string
  points: string[]
  tools?: string[]
  certificates?: { label: string; href: string }[]
}

export const timeline: Record<'kerja' | 'organisasi' | 'pendidikan', TimelineItem[]> = {
  kerja: [
    {
      id: 'asisten',
      period: 'Sep 2025 - May 2026',
      title: 'Asisten Praktikum',
      org: 'Institut Teknologi Sumatera',
      location: 'Lampung Selatan',
      summary: 'Asisten Praktikum mata kuliah Pemodelan Stokastik dan Analisis Big Data.',
      points: ['Mendampingi praktikum Pemodelan Stokastik.', 'Mendampingi praktikum Analisis Big Data.'],
      tools: ['Python', 'R', 'Apache Spark', 'Statistika'],
      certificates: [
        { label: 'Sertifikat Pemodelan Stokastik', href: '/certificates/sertifikat-pemodelan-stokastik.pdf' },
        { label: 'Sertifikat Analisis Big Data', href: '/certificates/sertifikat-analisis-big-data.pdf' },
      ],
    },
    {
      id: 'mrt',
      period: 'Jun 2025 - Jul 2025',
      title: 'Data Analyst Intern',
      org: 'PT MRT Jakarta (Perseroda)',
      location: 'DKI Jakarta',
      summary:
        'BUMD milik Pemprov DKI Jakarta yang bergerak dalam penyediaan dan pengelolaan transportasi publik berbasis kereta api perkotaan.',
      points: [
        'Data preparation & preprocessing dengan Excel dan Python: pemeriksaan missing values, perhitungan rata-rata tiap variabel, serta uji normalitas Shapiro-Wilk.',
        'Analisis kinerja perusahaan berdasarkan KPI melalui uji korelasi Spearman untuk mengidentifikasi hubungan antarvariabel.',
        'Mengolah dan menganalisis data kepegawaian untuk menghasilkan informasi statistik dan insight pendukung keputusan.',
        'Mengembangkan dashboard interaktif dengan PivotTable, PivotChart, Slicer, dan Tableau untuk profil pegawai dan ringkasan KPI.',
      ],
      tools: ['Python', 'Excel', 'Tableau', 'Statistika'],
      certificates: [{ label: 'Sertifikat Magang', href: '/certificates/sertifikat-magang-mrt.pdf' }],
    },
    {
      id: 'aria',
      period: 'Aug 2023 - Mar 2024',
      title: 'Data Collector & Data Entry',
      org: 'Kolaborasi Penelitian ARIA x ITERA x UNPAD',
      location: 'Lampung Tengah',
      summary:
        'Perwakilan ITERA dalam riset gabungan, bertanggung jawab pada pengumpulan data lapangan dan entri data.',
      points: [
        'Survei lapangan terhadap petani singkong dan kunjungan ke pabrik singkong, total 50 kegiatan survei selama 3-4 bulan.',
        'Input dan digitalisasi 522 data responden ke KoboToolbox agar terdokumentasi sistematis.',
        'Memeriksa kelengkapan dan konsistensi data survei untuk meminimalkan kesalahan pencatatan.',
      ],
      tools: ['KoboToolbox', 'Excel'],
    },
  ],
  organisasi: [
    {
      id: 'minat-bakat',
      period: 'Feb 2025 - Dec 2025',
      title: 'Kepala Divisi Manajemen Minat dan Bakat',
      org: 'HMSD Adyatama - ITERA',
      summary:
        'Divisi wadah pengembangan minat dan bakat mahasiswa Sains Data di bidang olahraga, kesenian, dan esports.',
      points: [
        'Memimpin divisi dalam merancang serta menjalankan 9 program kerja.',
        'Mengantarkan divisi meraih juara pada kompetisi antar mahasiswa melalui pembinaan program.',
        'Koordinasi lintas divisi dan evaluasi program kerja untuk peningkatan kualitas kegiatan.',
      ],
    },
    {
      id: 'pemira',
      period: 'Nov 2024 - Dec 2024',
      title: 'Ketua Pelaksana PEMIRA',
      org: 'HMSD Adyatama - ITERA',
      summary: 'Pesta demokrasi tahunan untuk memilih Ketua Himpunan Mahasiswa Sains Data yang baru.',
      points: [
        'Menyusun timeline dan mekanisme pemilihan dari pendaftaran hingga pengumuman.',
        'Menjaga netralitas dan menyelesaikan permasalahan teknis maupun non-teknis.',
        'Mengevaluasi jalannya PEMIRA untuk perbaikan periode berikutnya.',
      ],
    },
    {
      id: 'komdis',
      period: 'Sep 2024 - Nov 2024',
      title: 'Divisi Komisi Disiplin - CEO HMSD',
      org: 'HMSD Adyatama - ITERA',
      summary: 'Kegiatan kaderisasi untuk memperkenalkan dan membimbing anggota baru himpunan.',
      points: [
        'Memantau sikap, etika, dan kedisiplinan peserta selama kegiatan.',
        'Melakukan evaluasi berkala dan melaporkan pelanggaran kepada panitia utama.',
      ],
    },
    {
      id: 'first-gathering',
      period: 'Feb 2024',
      title: 'Divisi Acara (Games) - First Gathering',
      org: 'Sains Data ITERA',
      summary:
        'Acara untuk menyatukan seluruh angkatan dan mengenalkan Prodi Sains Data kepada angkatan baru.',
      points: ['Merancang, menyiapkan peralatan, dan memperagakan games yang dimainkan.'],
    },
    {
      id: 'liga-ilmiah',
      period: 'Sep 2023 - Dec 2023',
      title: 'Divisi Operasional',
      org: 'Liga Ilmiah ITERA',
      summary: 'Kompetisi sains tingkat universitas untuk mahasiswa ITERA.',
      points: ['Merencanakan, meminjam, dan memelihara peralatan yang dibutuhkan selama acara.'],
    },
  ],
  pendidikan: [
    {
      id: 'itera',
      period: 'Aug 2022 - Oct 2026',
      title: 'S1 Sains Data',
      org: 'Institut Teknologi Sumatera',
      location: 'Lampung Selatan',
      summary:
        'Mata kuliah relevan: statistika, algoritma pemrograman, struktur data, machine learning, dan big data. Tugas akhir: klasifikasi multikelas SVM dengan pendekatan hibrida DAG OvO dan RvR.',
      points: [],
    },
    {
      id: 'sma',
      period: 'SMA',
      title: 'Jurusan IPA',
      org: 'SMA Negeri 57 Jakarta',
      location: 'DKI Jakarta',
      summary: 'Peringkat 10 besar setiap semester dan peringkat 20 besar paralel sekolah.',
      points: [],
    },
  ],
}

export const timelineTabs = [
  { key: 'kerja', label: 'Pengalaman Kerja' },
  { key: 'organisasi', label: 'Organisasi' },
  { key: 'pendidikan', label: 'Pendidikan' },
] as const

export type ProjectCategory = 'Data Analyst' | 'Data Engineer' | 'Machine Learning' | 'Pemrograman'

export type Project = {
  id: string
  year: number
  course: string
  title: string
  category: ProjectCategory
  description: string
  tools: string[]
  repo: string
}

const repoBase = 'https://github.com/Daffaahmad11/projek-kuliah/tree'
const mainCommit = '5c2c7b194c1235ac7437fb942417cba4500512fb'
const dwhCommit = '9200eb129501b7807b7e63b6b4062520739936fc'
const repoUrl = (folder: string, commit = mainCommit) => `${repoBase}/${commit}/${encodeURIComponent(folder)}`

export const projectCategories: ProjectCategory[] = [
  'Data Analyst',
  'Data Engineer',
  'Machine Learning',
  'Pemrograman',
]

export const projects: Project[] = [
  {
    id: 'medallion',
    year: 2025,
    course: 'Proyek Analisis Big Data',
    title: 'Medallion Architecture untuk Pengelompokan Produk Transaksi E-Commerce',
    category: 'Data Engineer',
    description:
      'Membangun pipeline bronze-silver-gold dengan Apache Spark untuk membersihkan dan memperkaya data transaksi e-commerce, lalu mengelompokkan produk dengan algoritma clustering.',
    tools: ['Apache Spark', 'Python', 'Machine Learning'],
    repo: repoUrl(
      'Implementasi Medallion Architecture untuk Pengelompokan Produk pada Transaksi E-Commerce menggunakan',
    ),
  },
  {
    id: 'dwh-kendaraan',
    year: 2025,
    course: 'Proyek Pergudangan Data',
    title: 'Data Warehouse Analisis Preferensi Konsumen Kendaraan',
    category: 'Data Engineer',
    description:
      'Merancang skema bintang dan proses ETL untuk data preferensi konsumen kendaraan, kemudian menyajikan insight melalui dashboard Power BI.',
    tools: ['Data Warehouse', 'SQL', 'Power BI'],
    repo: repoUrl(
      'Perancangan Data Warehouse untuk Analisis Preferensi Konsumen Kendaraan di Industri Otomotif',
      dwhCommit,
    ),
  },
  {
    id: 'telco',
    year: 2025,
    course: 'Proyek Sains Data',
    title: 'Rekomendasi Produk Telekomunikasi dengan Random Forest & KNN',
    category: 'Machine Learning',
    description:
      'Membandingkan Random Forest dan K-Nearest Neighbors untuk merekomendasikan produk telekomunikasi berdasarkan perilaku penggunaan pelanggan.',
    tools: ['Python', 'Machine Learning'],
    repo: repoUrl(
      'Penerapan Klasifikasi Random Forest pada Sistem Rekomendasi Produk Telekomunikasi Berbasis Preferensi',
    ),
  },
  {
    id: 'modul-praktikum',
    year: 2025,
    course: 'Proyek Machine Learning Operations',
    title: 'Repository Modul Praktikum Sains Data',
    category: 'Data Engineer',
    description:
      'Menyusun repository modul praktikum yang terkontainerisasi dengan Docker sehingga lingkungan belajar konsisten dan mudah direproduksi.',
    tools: ['Python', 'Docker', 'Machine Learning'],
    repo: repoUrl('Repository Modul Praktikum Sains Data'),
  },
  {
    id: 'bat-algorithm',
    year: 2025,
    course: 'Proyek Swarm Intelligence',
    title: 'Bat Algorithm untuk Klasifikasi Kanker Payudara',
    category: 'Machine Learning',
    description:
      'Menerapkan Bat Algorithm sebagai metode optimasi seleksi fitur dan parameter untuk meningkatkan akurasi klasifikasi kanker payudara.',
    tools: ['Python', 'Machine Learning'],
    repo: repoUrl('Penerapan Bat Algorithm untuk Klasifikasi Kanker Payudara'),
  },
  {
    id: 'resnet-cbam',
    year: 2025,
    course: 'Proyek Deep Learning',
    title: 'Klasifikasi Sampah Organik & Daur Ulang dengan ResNet + CBAM',
    category: 'Machine Learning',
    description:
      'Melatih arsitektur ResNet yang dipadukan dengan Convolutional Block Attention Module untuk mengklasifikasikan citra sampah organik dan daur ulang.',
    tools: ['Python', 'Deep Learning'],
    repo: repoUrl(
      'Klasifikasi Sampah Organik & Daur Ulang Menggunakan Arsitektur Residual Network dengan Integrasi CBAM',
    ),
  },
  {
    id: 'pengunjung-wisata',
    year: 2024,
    course: 'Proyek Visualisasi Data dan Informasi',
    title: 'Analisis Pergerakan Pengunjung di Area Wisata',
    category: 'Data Analyst',
    description:
      'Menganalisis pola pergerakan pengunjung di area wisata dan menyajikannya dalam visualisasi interaktif Tableau untuk mendukung perencanaan area.',
    tools: ['Python', 'Tableau'],
    repo: repoUrl('Analisis Pergerakan Pengunjung dan Hubungan antar Lokasi di Area Wisata'),
  },
  {
    id: 'rumah-lampung',
    year: 2024,
    course: 'Proyek Statistika Sains Data',
    title: 'Klasifikasi Rumah di Daerah Lampung dengan KNN',
    category: 'Machine Learning',
    description:
      'Mengklasifikasikan karakteristik rumah di wilayah Lampung menggunakan K-Nearest Neighbors dengan bahasa R dan pendekatan statistika.',
    tools: ['R', 'Statistika', 'Machine Learning'],
    repo: repoUrl('Klasifikasi Rumah di Daerah Lampung dengan Menggunakan KNN'),
  },
  {
    id: 'groundwater',
    year: 2023,
    course: 'Proyek Analisis Data Statistika',
    title: 'Pengaruh Suhu terhadap Groundwater Level di Provinsi Riau',
    category: 'Data Analyst',
    description:
      'Menguji hubungan suhu dan ketinggian muka air tanah di Provinsi Riau menggunakan analisis regresi dan uji statistik di R.',
    tools: ['R', 'Statistika'],
    repo: repoUrl(
      'Analisis Pengaruh Suhu terhadap Groundwater Level di Provinsi Riau Menggunakan Metode Uji Regresi Linear',
    ),
  },
  {
    id: 'linked-list',
    year: 2023,
    course: 'Proyek Struktur Data',
    title: 'Implementasi Single Linked List pada Data Travel',
    category: 'Pemrograman',
    description:
      'Mengimplementasikan struktur data single linked list untuk mengelola data perjalanan: tambah, hapus, cari, dan urutkan.',
    tools: ['Python'],
    repo: repoUrl('Implementasi Single Linked List pada Data Travel'),
  },
  {
    id: 'stress-me-out',
    year: 2023,
    course: 'Proyek Algoritma Pemrograman',
    title: 'Web App Kondisi Kesehatan Mental \u201cStress Me Out\u201d',
    category: 'Pemrograman',
    description:
      'Aplikasi web sederhana untuk mengukur tingkat stres pengguna melalui kuesioner dan memberikan rekomendasi berdasarkan skor.',
    tools: ['Python'],
    repo: repoUrl('Create Mental Health Condition Web App \u201cStress Me Out\u201d'),
  },
]

export type GalleryItem = {
  id: string
  title: string
  description: string
  type: 'dokumentasi' | 'sertifikat'
  src: string
  format: 'image' | 'pdf'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'mrt',
    title: 'Dokumentasi Magang di MRT Jakarta',
    description: 'Pengalaman magang sebagai Data Analyst Intern di PT MRT Jakarta (Perseroda).',
    type: 'dokumentasi',
    src: '/certificates/foto%20mrt_@.jpeg',
    format: 'image',
  },
  {
    id: 'aria',
    title: 'Survei Lapangan ARIA x ITERA x UNPAD',
    description: 'Dokumentasi kegiatan pengumpulan data lapangan di Lampung Tengah.',
    type: 'dokumentasi',
    src: '/certificates/aria_1.jpeg',
    format: 'image',
  },
  {
    id: 'manjakat',
    title: 'Manajemen Minat dan Bakat HMSD',
    description: 'Dokumentasi bersama tim Divisi Manajemen Minat dan Bakat HMSD Adyatama ITERA.',
    type: 'dokumentasi',
    src: '/certificates/kadiv%20manjakat.jpeg',
    format: 'image',
  },
  {
    id: 'pemira',
    title: 'Sambutan PEMIRA HMSD',
    description: 'Dokumentasi saat menyampaikan sambutan pada kegiatan PEMIRA HMSD Adyatama.',
    type: 'dokumentasi',
    src: '/certificates/sambutan%20pemira.jpeg',
    format: 'image',
  },
  {
    id: 'praktikum',
    title: 'Asisten Praktikum',
    description: 'Mendampingi mahasiswa dalam kegiatan praktikum Sains Data ITERA.',
    type: 'dokumentasi',
    src: '/certificates/prak%20abd.jpeg',
    format: 'image',
  },
  {
    id: 'sertifikat-pemira',
    title: 'Ketua Pelaksana PEMIRA HMSD 2024',
    description: 'Sertifikat apresiasi atas peran sebagai Ketua Pelaksana PEMIRA HMSD Adyatama 2024.',
    type: 'sertifikat',
    src: '/certificates/sertif%20ketuplak%20pemira.png',
    format: 'image',
  },
  {
    id: 'sertifikat-mrt',
    title: 'Sertifikat Magang MRT Jakarta',
    description: 'Sertifikat pengalaman magang di PT MRT Jakarta (Perseroda).',
    type: 'sertifikat',
    src: '/certificates/sertifikat-magang-mrt_page-0001.jpg',
    format: 'image',
  },
  {
    id: 'sertifikat-big-data',
    title: 'Sertifikat Asisten Praktikum Analisis Big Data',
    description: 'Sertifikat sebagai Asisten Praktikum mata kuliah Analisis Big Data.',
    type: 'sertifikat',
    src: '/certificates/sertifikat-analisis-big-data_page-0001.jpg',
    format: 'image',
  },
  {
    id: 'sertifikat-stokastik',
    title: 'Sertifikat Asisten Praktikum Pemodelan Stokastik',
    description: 'Sertifikat sebagai Asisten Praktikum mata kuliah Pemodelan Stokastik.',
    type: 'sertifikat',
    src: '/certificates/sertifikat-pemodelan-stokastik_page-0001.jpg',
    format: 'image',
  },
]

export function getSkillUsage(skill: string) {
  const experiences = [...timeline.kerja, ...timeline.organisasi]
    .filter((item) => item.tools?.includes(skill))
    .map((item) => `${item.title} \u00b7 ${item.org}`)
  const projectList = projects
    .filter((project) => project.tools.includes(skill))
    .map((project) => `${project.title} (${project.year})`)
  return { experiences, projects: projectList, total: experiences.length + projectList.length }
}
