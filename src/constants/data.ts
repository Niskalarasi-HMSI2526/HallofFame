export interface Member {
  name: string;
  nrp?: string;
  role: string;
  photo?: string;
}

export interface Department {
  id: string;
  name: string;
  members: Member[];
  /** IPMS performance score for this department (0-100) */
  performance?: number;
  /** Path to department logo image in /logos/ */
  logo?: string;
  /** Paths to gallery photos for carousel in /photos/{dept}/gallery/ */
  gallery?: string[];
}

export interface AchievementCategory {
  category: string;
  items: string[];
}

export interface FilosofiItem {
  syllable: string;
  word: string;
  description: string;
}

export interface LogoFilosofi {
  icon: string;
  title: string;
  description: string;
}

export const ROLE_ORDER: Record<string, number> = {
  "President": 0,
  "Vice President": 1,
  "General Secretary": 2,
  "General Treasurer": 3,
  "Head of Department": 0,
  "Deputy Head of Department": 1,
  "Department Secretary": 2,
  "Expert Staff": 3,
  "Staff": 4,
};

export const ROLE_COLORS: Record<string, string> = {
  "President": "bg-gold-light/20 text-amber-700 border-gold-light/40",
  "Vice President": "bg-accent-purple/15 text-secondary border-accent-purple/30",
  "General Secretary": "bg-primary/15 text-primary border-primary/30",
  "General Treasurer": "bg-gold/15 text-amber-700 border-gold/30",
  "Head of Department": "bg-gold-light/20 text-amber-700 border-gold-light/40",
  "Deputy Head of Department": "bg-accent-purple/15 text-secondary border-accent-purple/30",
  "Department Secretary": "bg-primary/15 text-primary border-primary/30",
  "Expert Staff": "bg-accent-pink/15 text-pink-600 border-accent-pink/30",
  "Staff": "bg-slate-100 text-slate-600 border-slate-200",
};

export const SITE_DATA = {
  cabinet: {
    name: "Niskalarasi",
    year: "2024/2025",
    tagline: "Unlimited Vision, Unlimited Creativity",
    vision:
      "Mewujudkan HMSI Sebagai Wadah Pengembangan Mahasiswa yang Progresif, Profesional, Kekeluargaan",
    missions: [
      "Mengeskalasi sumber daya mahasiswa sistem informasi untuk berkembang dan mewujudkan wadah pencapaian prestasi dibidang akademik dan non-akademik mahasiswa sistem informasi",
      "Meningkatkan rasa kekeluargaan yang peduli, berdampak baik pada lingkungan, menjunjung nilai sosial mahasiswa, cinta tanah air, dan harmonis",
      "Menginisiasi pengembangan aspek himpunan yang profesional dan berdedikasi tinggi serta dapat memberikan kontribusi dan manfaat ke departemen hingga masyarakat sosial sesuai dengan bidang ilmu teknologi dan informasi",
    ],
    ipms: {
      overall: 96.24,
      breakdown: {
        progresif: 98.87,
        professional: 90.92,
        kekeluargaan: 99.11,
      },
    },
  },
  filosofi: [
    {
      syllable: "Nis~",
      word: "Niscaya",
      description:
        "Segala sesuatu yang dilakukan pasti terjadi dan menggambarkan keyakinan HMSI akan langkah-langkahnya menjadi semakin baik",
    },
    {
      syllable: "Kala~",
      word: "Kalibrasi",
      description:
        "Pengaturan ulang HMSI dengan penyesuaian gagasan dan evaluasi",
    },
    {
      syllable: "Ra~",
      word: "Akselerasi",
      description:
        "Perubahan cepat yang menggambarkan pergerakan dan pemikiran fungsionaris HMSI yang unggul",
    },
    {
      syllable: "Si~",
      word: "Eskalasi",
      description:
        "Intensifikasi dinamika HMSI untuk menjadi lebih unggul",
    },
  ] as FilosofiItem[],
  logoFilosofi: [
    {
      icon: "infinity",
      title: "Infinity",
      description:
        "Menandakan trademark dari logo resmi Departemen Sistem Informasi ITS yang menaungi HMSI ITS, sekaligus menunjukkan nilai bahwa kita ingin berkembang menuju tak terbatas",
    },
    {
      icon: "cog",
      title: "Gerigi",
      description:
        "Melambangkan identitas kita sebagai bagian dari kampus ITS",
    },
    {
      icon: "gauge",
      title: "Speedometer",
      description:
        "Menandakan bahwa kita berakselerasi cepat",
    },
    {
      icon: "star",
      title: "Bintang",
      description:
        "Menandakan bahwa kita ingin menuju bintang di angkasa yang luas",
    },
  ] as LogoFilosofi[],
  achievements: [
    {
      category: "Achievement & Recognitions",
      items: [
        "Top 10 Internal Selection PPK ORMAWA ITS 2025",
        "Best Information Media (Medfo) KM ITS 2025 (Overall)",
        "Best Social Media Management KM ITS 2025",
        "Best Visual Branding & Content Design KM ITS 2025",
      ],
    },
    {
      category: "Strategic Partnership & Social Impact",
      items: [
        "Kemitraan Strategis PT Inalum (Bakti Sosial)",
        "Sinergi Industri Telkomsel Surabaya (Company Visit 2025)",
      ],
    },
    {
      category: "External Networking",
      items: [
        "Ormawa Visit 2025: HIMASTA UNAIR & HMTG ITS",
        "Revitalisasi Sinergi Alumni (IKASI) 2025-2030",
      ],
    },
  ] as AchievementCategory[],
  departments: [
    {
      id: "bph",
      name: "Badan Pengurus Harian (Executive Board)",
      performance: 96.24,
      logo: "/logos/bph.png",
      gallery: [],
      members: [
        { name: "Arkaan Hilmi Suharsoyo", nrp: "5026221140", role: "President", photo: "/photos/bph/5026221140.jpg" },
        { name: "Anas Ghifari Kemaputra", nrp: "5026221155", role: "Vice President", photo: "/photos/bph/5026221155.jpg" },
        { name: "Moehammad Fazle Mawla Sidiki", nrp: "5026221110", role: "Vice President", photo: "/photos/bph/5026221110.jpg" },
        { name: "Vania Aileen Tertiabudi", nrp: "5026221108", role: "General Secretary", photo: "/photos/bph/5026221108.jpg" },
        { name: "Binar Faisha Wijdan", nrp: "5026231080", role: "General Secretary", photo: "/photos/bph/5026231080.jpg" },
        { name: "Alya Callysta Nugraha", nrp: "5026221018", role: "General Treasurer", photo: "/photos/bph/5026221018.jpg" },
        { name: "Shaakira Nashwa Jessamine", nrp: "5051231029", role: "General Treasurer", photo: "/photos/bph/5051231029.jpg" },
      ],
    },
    {
      id: "hrd",
      name: "Human Resource Development",
      performance: 0,
      logo: "/logos/hrd.png",
      gallery: [],
      members: [
        { name: "Febrian Abdan Husnan", nrp: "5026221117", role: "Head of Department", photo: "/photos/hrd/5026221117.jpg" },
        { name: "Muhammad Rafi Widya Danendra", nrp: "5026221088", role: "Deputy Head of Department", photo: "/photos/hrd/5026221088.jpg" },
        { name: "Jasmine Fathina Hakim", nrp: "5026231017", role: "Department Secretary", photo: "/photos/hrd/5026231017.jpg" },
        { name: "Rafief Chalvani", nrp: "5026221195", role: "Expert Staff", photo: "/photos/hrd/5026221195.jpg" },
        { name: "Dewi Maharani", nrp: "5026221046", role: "Expert Staff", photo: "/photos/hrd/5026221046.jpg" },
        { name: "Nadia Ayula Assyaputri", role: "Staff" },
        { name: "Nabila Rahadatul Aisy K.", role: "Staff" },
        { name: "Vivi Alvianita", role: "Staff" },
        { name: "Abrorus Shobah", role: "Staff" },
        { name: "Maulana Muhammad Ad-Dzikri", role: "Staff" },
        { name: "Gabriel Hadi Melvanto Sihaloho", role: "Staff" },
        { name: "Kayla Putri Maharani", role: "Staff" },
        { name: "Muhammad Abyansyah P.D", role: "Staff" },
        { name: "Ananda Donelly Reksana", role: "Staff" },
        { name: "Azrul Afif Syafaturahman", role: "Staff" },
        { name: "Hisham Nafis Mahdavikia", role: "Staff" },
      ],
    },
    {
      id: "ia",
      name: "Internal Affair",
      performance: 0,
      logo: "/logos/ia.png",
      gallery: [],
      members: [
        { name: "Hajid Alauddin Ramadhan", nrp: "5026221197", role: "Head of Department", photo: "/photos/ia/5026221197.jpg" },
        { name: "Shof Watun Niswah", nrp: "5026221043", role: "Deputy Head of Department", photo: "/photos/ia/5026221043.jpg" },
        { name: "Tahiyyah Mufhimah", nrp: "5026231170", role: "Department Secretary", photo: "/photos/ia/5026231170.jpg" },
        { name: "Satria Dwi Nugraha", role: "Expert Staff" },
        { name: "Mochammad Afandi Wirawan", role: "Expert Staff" },
        { name: "Kadek Mawar Kumala Dewi", role: "Expert Staff" },
        { name: "R. Farel Danendra H. P.", role: "Expert Staff" },
        { name: "Zaizafun Naura", role: "Expert Staff" },
        { name: "Muhammad Hammam Aditama", role: "Staff" },
        { name: "Muhammad Faiz Roihan", role: "Staff" },
        { name: "Alisha Rafimalia", role: "Staff" },
        { name: "Izzuddin Hammadi Faiz", role: "Staff" },
        { name: "Muhammad Ikhwanul Hafidz", role: "Staff" },
        { name: "Ayesha Hana Azkiya", role: "Staff" },
        { name: "Realasa Femmi Novelika", role: "Staff" },
        { name: "Rafael Dimas Khristianto", role: "Staff" },
        { name: "Muhammad Zaky Al Khair", role: "Staff" },
        { name: "Jeremy Anggi", role: "Staff" },
      ],
    },
    {
      id: "swf",
      name: "Student Welfare",
      performance: 0,
      logo: "/logos/swf.png",
      gallery: [],
      members: [
        { name: "Fajhri Ramadhan", nrp: "5026221030", role: "Head of Department", photo: "/photos/swf/5026221030.jpg" },
        { name: "Muhammad Irsyad Fahmi", nrp: "5026221187", role: "Deputy Head of Department", photo: "/photos/swf/5026221187.jpg" },
        { name: "Diva Nesia Putri", nrp: "5026231020", role: "Department Secretary", photo: "/photos/swf/5026231020.jpg" },
        { name: "Muhammad Viggo Fudail", role: "Expert Staff" },
        { name: "Faiz Musyaffa Ramadhan", role: "Expert Staff" },
        { name: "Awwaliyah Aliyah", role: "Expert Staff" },
        { name: "Erika Cahya Ningtyas", role: "Staff" },
        { name: "Daniel Setiawan Yulius Putra", role: "Staff" },
        { name: "Defita Aulia Syarif", role: "Staff" },
        { name: "Tsanita Shafa Hadinanda", role: "Staff" },
        { name: "Raffi Deva Anargya", role: "Staff" },
        { name: "Lailatul Fitaliqoh", role: "Staff" },
        { name: "Yudhistira Armico Fidly", role: "Staff" },
        { name: "Diffa Adzra Anelya", role: "Staff" },
        { name: "Alexander Allan", role: "Staff" },
        { name: "Muhammad Abyan Tsabit Amani", role: "Staff" },
        { name: "Muhammad Gandhi Taqi Utomo", role: "Staff" },
      ],
    },
    {
      id: "rnd",
      name: "Research and Development",
      performance: 0,
      logo: "/logos/rnd.png",
      gallery: [],
      members: [
        { name: "Muhammad Rafli Krishnadanu P. W.", nrp: "5026221099", role: "Head of Department", photo: "/photos/rnd/5026221099.jpg" },
        { name: "Achmad Fahmi Ainur Ridho", nrp: "5026221167", role: "Deputy Head of Department", photo: "/photos/rnd/5026221167.jpg" },
        { name: "Sinta Dewi Rahmawati", nrp: "5026231231", role: "Department Secretary", photo: "/photos/rnd/5026231231.jpg" },
        { name: "Muhammad Ryan Rajata", role: "Expert Staff" },
        { name: "Aliffia Isma Putri", role: "Expert Staff" },
        { name: "Andika Cahya Sutisna", role: "Expert Staff" },
        { name: "Kautzar Randra Noor K.", role: "Expert Staff" },
        { name: "Bimo Rajendra Widyadhana", role: "Staff" },
        { name: "Hafidz Putra Dermawan", role: "Staff" },
        { name: "Akhtar Zia Faizarrobbi", role: "Staff" },
        { name: "Arsya Nueva Delavera", role: "Staff" },
        { name: "Firmansyah Adi Prasetyo", role: "Staff" },
        { name: "Ahmad Faiz Ramdhani", role: "Staff" },
        { name: "Antony Purnamarasid A. R.", role: "Staff" },
        { name: "Eric Vincentius Jaolis", role: "Staff" },
        { name: "Al-Khiqmah Manzilatul Mukaromah", role: "Staff" },
        { name: "Yusuf Acala Sadurjaya Sri Krisna", role: "Staff" },
        { name: "Burju Ferdinand Harianja", role: "Staff" },
      ],
    },
    {
      id: "im",
      name: "Information Media",
      performance: 0,
      logo: "/logos/im.png",
      gallery: [],
      members: [
        { name: "Diva Ardelia Alyadrus", nrp: "5026221029", role: "Head of Department", photo: "/photos/im/5026221029.jpg" },
        { name: "Luthfan Aryananda Purwito", nrp: "5026221166", role: "Deputy Head of Department", photo: "/photos/im/5026221166.jpg" },
        { name: "Nadine Azzadiena Farahdiansyah", nrp: "5051231020", role: "Department Secretary", photo: "/photos/im/5051231020.jpg" },
        { name: "Rayhan Lauzzadani", role: "Expert Staff" },
        { name: "Maulina Nur Laila", role: "Expert Staff" },
        { name: "Mohammad Geresidi Rachmadi", role: "Expert Staff" },
        { name: "Muhammad Hasan Kamal", role: "Expert Staff" },
        { name: "Edward Yosafat Sirait", role: "Expert Staff" },
        { name: "Marcello Ezra Andilolo Lubis", role: "Expert Staff" },
        { name: "Dimas Fajar Ramadhan", role: "Expert Staff" },
        { name: "Rosdiani Adiningsih", role: "Expert Staff" },
        { name: "Rifqi Aufa Thufail", role: "Staff" },
        { name: "Shahnaz Ariqah Simanullang", role: "Staff" },
        { name: "Ida Ayu Putu Rani Pradnyandari", role: "Staff" },
        { name: "Adityo Rafi Wardhana", role: "Staff" },
        { name: "Farrel Aditya Rosyidi", role: "Staff" },
        { name: "Muhammad Fawwaz Al-Amien", role: "Staff" },
        { name: "Beh Siu Li", role: "Staff" },
        { name: "Naufal Erwin", role: "Staff" },
        { name: "Tiara Aulia Azadirachta Indica", role: "Staff" },
        { name: "Shifly Taysir Setiawan", role: "Staff" },
        { name: "Shafly Hidayatullah", role: "Staff" },
        { name: "Felix Prajna Santoso", role: "Staff" },
        { name: "Ida Bagus Adhiraga Yudhistira", role: "Staff" },
        { name: "Mirza Fathi Taufiqurrahman", role: "Staff" },
        { name: "Hafizhan Yusra Sulistyo", role: "Staff" },
      ],
    },
    {
      id: "ea",
      name: "External Affair",
      performance: 0,
      logo: "/logos/ea.png",
      gallery: [],
      members: [
        { name: "Arjuna Putra Kharisma", nrp: "5026221210", role: "Head of Department", photo: "/photos/ea/5026221210.jpg" },
        { name: "Karina Filza Aafiyah", nrp: "5026221012", role: "Deputy Head of Department", photo: "/photos/ea/5026221012.jpg" },
        { name: "Annisa Fadila Rahmawati", nrp: "5026221069", role: "Deputy Head of Department", photo: "/photos/ea/5026221069.jpg" },
        { name: "Nisrina Kamiliya Riswanto", nrp: "5026231111", role: "Department Secretary", photo: "/photos/ea/5026231111.jpg" },
        { name: "Natasha Yosefani Putri", role: "Expert Staff" },
        { name: "Muhammad Fauzan", role: "Expert Staff" },
        { name: "Agung Budi Prasetya", role: "Expert Staff" },
        { name: "Arayzi Rayyansyah", role: "Expert Staff" },
        { name: "Devika Rahman", role: "Staff" },
        { name: "Muhammad Dzaki Adfiz", role: "Staff" },
        { name: "Rahmadhona Elokpribadi Kusmawan", role: "Staff" },
        { name: "Muhammad Daniel Alfarisi", role: "Staff" },
        { name: "Irhab Faiz Hidayat", role: "Staff" },
        { name: "Auliya Malika Idi", role: "Staff" },
        { name: "Mochammad Zhulmi D. H.", role: "Staff" },
        { name: "Fadhiil Akmal Hamizan", role: "Staff" },
        { name: "Burhan Shidqi Arrasyid", role: "Staff" },
      ],
    },
    {
      id: "es",
      name: "Entrepreneurship",
      performance: 0,
      logo: "/logos/es.png",
      gallery: [],
      members: [
        { name: "Muhammad Alvin Fairuz Tsany", nrp: "5026221151", role: "Head of Department", photo: "/photos/es/5026221151.jpg" },
        { name: "Muhammad Maulana Mukti", nrp: "5026221201", role: "Deputy Head of Department", photo: "/photos/es/5026221201.jpg" },
        { name: "Faradita Syaharani Murdiyana", nrp: "5051231009", role: "Department Secretary", photo: "/photos/es/5051231009.jpg" },
        { name: "Ferdiansyah Yusuf Muhammad", role: "Expert Staff" },
        { name: "Dovy Adeeb Farizky", role: "Expert Staff" },
        { name: "Keysha Alivanno Pradipta Renjiro", role: "Expert Staff" },
        { name: "Yanuar Audrey Sulistiyo", role: "Expert Staff" },
        { name: "Hanin Nuha Hafizhah", role: "Expert Staff" },
        { name: "Almer Fatih Ravedito", role: "Staff" },
        { name: "Muhammad Afiq Ridha Pratama", role: "Staff" },
        { name: "Nathan Joel Widiyanto", role: "Staff" },
        { name: "Keisha Adisti Athaillah", role: "Staff" },
        { name: "Adhharul Haqqullah", role: "Staff" },
        { name: "Mohammad Wahyu Dwi Nugroho", role: "Staff" },
        { name: "Moch Ilham Ainul Yakin", role: "Staff" },
        { name: "Gerald Marcell Van Rayne", role: "Staff" },
        { name: "Muhammad Nabil Syarif Habibi", role: "Staff" },
        { name: "Aqilah Ummu Al Nawswary", role: "Staff" },
        { name: "Arfiandra Rahman Aziz", role: "Staff" },
        { name: "Okky Priscila Putri", role: "Staff" },
      ],
    },
    {
      id: "socdev",
      name: "Social Development",
      performance: 0,
      logo: "/logos/socdev.png",
      gallery: [],
      members: [
        { name: "Achmad Faiz", nrp: "5026221100", role: "Head of Department", photo: "/photos/socdev/5026221100.jpg" },
        { name: "Aulisa Rizki Amanda", nrp: "5026221024", role: "Deputy Head of Department", photo: "/photos/socdev/5026221024.jpg" },
        { name: "Ni Kadek Adelia Paramita Putri", nrp: "5026231196", role: "Department Secretary", photo: "/photos/socdev/5026231196.jpg" },
        { name: "Salwa Iqlima Alifutri", role: "Expert Staff" },
        { name: "Tommy Gunawan", role: "Expert Staff" },
        { name: "Darrell Athaya Refaldi", role: "Expert Staff" },
        { name: "Imtiyaz Shafhal Afif", role: "Staff" },
        { name: "Kurnia Yufi Satrio Laksono", role: "Staff" },
        { name: "Muhammad Ridho Utomo", role: "Staff" },
        { name: "Nafadiya Mumtaza", role: "Staff" },
        { name: "Amandea Chandiki Larasati", role: "Staff" },
        { name: "Zaskia Muazatun M", role: "Staff" },
        { name: "Nailah Adlina", role: "Staff" },
        { name: "Ayu Alfia Putri", role: "Staff" },
        { name: "Lita Sari Banjarnahor", role: "Staff" },
        { name: "Nesha Shafwana", role: "Staff" },
        { name: "Harya Raditya Handoyo", role: "Staff" },
      ],
    },
  ] as Department[],
};
