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
  /** Short tagline / role description */
  roleFunction?: string;
  /** List of agendas and initiatives */
  agendas?: string[];
  /** Goals & skills acquired description */
  goals?: string;
  /** Key achievement highlight */
  achievementHighlight?: string;
  /** YouTube video introduction link */
  youtubeLink?: string;
}

export interface AchievementCategory {
  category: string;
  items: string[];
}

export interface FilosofiItem {
  syllable: string;
  word: string;
  etymology: string;
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
    year: "2025/2026",
    tagline: "Unlimited Vision, Unlimited Creativity",
    vision:
      "To realize HMSI as a progressive, professional, and family-oriented platform for student development",
    missions: [
      "Escalating Information Systems students' resources to grow and establish a platform for academic and non-academic achievement",
      "Fostering a caring sense of solidarity that positively impacts the environment, upholds students' social values, patriotism, and harmony",
      "Initiating the development of a professional and highly dedicated organization that contributes to departments and the broader community in the field of information technology",
    ],
    ipms: {
      overall: 96.24,
      breakdown: {
        progressive: 98.87,
        professional: 90.92,
        solidarity: 99.11,
      },
    },
  },
  filosofi: [
    {
      syllable: "Nis~",
      word: "Niscaya",
      etymology:
        "Taken from the Indonesian word 'Niscaya', meaning certainty and belief",
      description:
        "Everything we do is destined to happen, reflecting HMSI's belief that each step leads to greater progress",
    },
    {
      syllable: "Kala~",
      word: "Kalibrasi",
      etymology:
        "Taken from the Indonesian word 'Kalibrasi', meaning calibration",
      description:
        "Recalibrating HMSI through the realignment of ideas and evaluation",
    },
    {
      syllable: "Ra~",
      word: "Akselerasi",
      etymology:
        "Taken from the Indonesian word 'Akselerasi', meaning acceleration",
      description:
        "Rapid change that reflects the movement and forward-thinking mindset of HMSI's outstanding members",
    },
    {
      syllable: "Si~",
      word: "Eskalasi",
      etymology:
        "Taken from the Indonesian word 'Eskalasi', meaning escalation",
      description:
        "Intensifying HMSI's dynamics to achieve greater excellence",
    },
  ] as FilosofiItem[],
  logoFilosofi: [
    {
      icon: "infinity",
      title: "Infinity",
      description:
        "Represents the trademark of the official Information Systems Department of Institut Teknologi Sepuluh Nopember (ITS) logo that oversees HMSI ITS, symbolizing our aspiration for limitless growth",
    },
    {
      icon: "cog",
      title: "Gear",
      description:
        "Symbolizes our identity as part of Institut Teknologi Sepuluh Nopember (ITS)",
    },
    {
      icon: "gauge",
      title: "Speedometer",
      description:
        "Signifies that we accelerate rapidly",
    },
    {
      icon: "star",
      title: "Star",
      description:
        "Signifies our aspiration to reach the stars in the vast sky",
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
        "Strategic Partnership with PT Inalum (Community Service)",
        "Industry Synergy with Telkomsel Surabaya (Company Visit 2025)",
      ],
    },
    {
      category: "External Networking",
      items: [
        "Ormawa Visit 2025: HIMASTA UNAIR & HMTG ITS",
        "Alumni Synergy Revitalization (IKASI) 2025-2030",
      ],
    },
  ] as AchievementCategory[],
  departments: [
    {
      id: "bph",
      name: "Executive Board (BPH)",
      performance: 96.24,
      logo: "/logos/bph.png",
      gallery: ["/photos/bph/EB 00.png", "/photos/bph/EB 0.png", "/photos/bph/EB 1.png", "/photos/bph/EB 2.png", "/photos/bph/EB 3.png", "/photos/bph/EB 4.png", "/photos/bph/EB 5.JPG", "/photos/bph/EB 6.JPG", "/photos/bph/EB 7.JPG", "/photos/bph/EB 8.JPG"],
      youtubeLink: "https://youtu.be/JjQtniAW2F0?si=PU5NIEStL_twvV-G",
      roleFunction: "The Core Command. The Executive Board—comprising the President, Vice President, General Secretary, and General Treasurer—serves as the strategic engine of HMSI Niskalarasi. We orchestrate the organization's overarching direction, manage bureaucracy, ensure financial accountability, and foster internal synergy.",
      agendas: ["Presidium Forums", "Cabinet Meetings", "Organizational Management Training (PMO)", "Internal Bonding", "HMSI Cashflow & Endowment Funds Management"],
      goals: "Cultivate high-level strategic leadership and administrative excellence. Members develop sharp decision-making skills, crisis management, financial transparency, and the ability to align diverse teams toward a unified vision.",
      achievementHighlight: "Successfully led the cabinet to an outstanding overall IPMS score of 96.24% and comprehensively finalized the end-of-year organizational report. Individual IPMS: President (95.32%), Vice President (98.00%), General Secretary (93.33%), General Treasurer (95.90%).",
      members: [
        { name: "Arkaan Hilmi Suharsoyo", nrp: "5026221140", role: "President", photo: "/photos/bph/Arkaan.png" },
        { name: "Anas Ghifari Kemaputra", nrp: "5026221155", role: "Vice President", photo: "/photos/bph/Anas.png" },
        { name: "Moehammad Fazle Mawla Sidiki", nrp: "5026221110", role: "Vice President", photo: "/photos/bph/Fazle.png" },
        { name: "Vania Aileen Tertiabudi", nrp: "5026221108", role: "General Secretary", photo: "/photos/bph/DSCF5212.JPG" },
        { name: "Binar Faisha Wijdan", nrp: "5026231080", role: "General Secretary", photo: "/photos/bph/Binar.JPG" },
        { name: "Alya Callysta Nugraha", nrp: "5026221018", role: "General Treasurer", photo: "/photos/bph/Alya.JPG" },
        { name: "Shaakira Nashwa Jessamine", nrp: "5051231029", role: "General Treasurer", photo: "/photos/bph/Shaakira.JPG" },
      ],
    },
    {
      id: "hrd",
      name: "Human Resource Development",
      performance: 96.07,
      logo: "/photos/hrd/Logo.png",
      gallery: ["/photos/hrd/HRD 0.png", "/photos/hrd/HRD 1.png", "/photos/hrd/HRD 2.png", "/photos/hrd/HRD 3.png", "/photos/hrd/HRD 4.png", "/photos/hrd/HRD 5.png", "/photos/hrd/HRD 6.JPG"],
      roleFunction: "The Talent Factory. HRD is the backbone of organizational sustainability, responsible for shaping the mindset, leadership, and professional readiness of the student body.",
      agendas: ["Freshman Orientation (OKKBK)", "Managerial Training (LKMM-TD)", "Career Preparation", "MANAGE", "Continuous Talent Mapping"],
      goals: "Build a resilient, highly competent, and adaptive generation of leaders. Members gain invaluable expertise in human capital management, leadership coaching, performance evaluation, and conflict mediation.",
      achievementHighlight: "Consistently produced top-tier organizational cadres, surpassing all leadership key performance indicators, and ensured a seamless cultural regeneration within HMSI.",
      youtubeLink: "https://youtu.be/l9utR-9183Y?si=GNRiRHoxhdU84GvV",
      members: [
        { name: "Febrian Abdan Husnan", nrp: "5026221117", role: "Head of Department", photo: "/photos/hrd/Febrian Abdan Husnan.JPG" },
        { name: "Muhammad Rafi Widya Danendra", nrp: "5026221088", role: "Deputy Head of Department", photo: "/photos/hrd/Muhamamd Rafi Widya Danendra.JPG" },
        { name: "Jasmine Fathina Hakim", nrp: "5026231017", role: "Department Secretary", photo: "/photos/hrd/Jasmine Fathina Hakim_Jasmine.jpg" },
        { name: "Rafief Chalvani", nrp: "5026221195", role: "Expert Staff", photo: "/photos/hrd/Rafief Chalvani_Rafief.JPG" },
        { name: "Dewi Maharani", nrp: "5026221046", role: "Expert Staff", photo: "/photos/hrd/Dewi Maharani _ Rani.jpg" },
        { name: "Nadia Ayula Assyaputri", role: "Staff", photo: "/photos/hrd/Ayula.JPG" },
        { name: "Nabila Rahadatul Aisy K.", role: "Staff", photo: "/photos/hrd/Nabila Rahadatul Aisy Koestriyaningrum_Nabila.JPG" },
        { name: "Vivi Alvianita", role: "Staff", photo: "/photos/hrd/Vivi Alvianita_Alvi.JPG" },
        { name: "Abrorus Shobah", role: "Staff", photo: "/photos/hrd/Abrorus Shobah_Abror.JPG" },
        { name: "Maulana Muhammad Ad-Dzikri", role: "Staff", photo: "/photos/hrd/Maulana Muhammad Ad-Dzikri_Jiko.JPG" },
        { name: "Gabriel Hadi Melvanto Sihaloho", role: "Staff", photo: "/photos/hrd/Gabriel Hadi Melvanto Sihaloho_Gabriel.JPG" },
        { name: "Kayla Putri Maharani", role: "Staff", photo: "/photos/hrd/Kayla Putri Maharani_Kayla..JPG" },
        { name: "Muhammad Abyansyah P.D", role: "Staff", photo: "/photos/hrd/Muhammad Abyansyah Putra Dewanto_ Aby.jpg" },
        { name: "Ananda Donelly Reksana", role: "Staff", photo: "/photos/hrd/Ananda Donelly Reksana_Donelly.jpg" },
        { name: "Azrul Afif Syafaturahman", role: "Staff", photo: "/photos/hrd/azrul afif syafaturahman_ahul.JPG" },
        { name: "Hisham Nafis Mahdavikia", role: "Staff", photo: "/photos/hrd/Hisyam.JPG" },
      ],
    },
    {
      id: "ia",
      name: "Internal Affairs",
      performance: 100,
      logo: "/logos/ia.png",
      gallery: ["/photos/ia/IA 0.png", "/photos/ia/IA 1.png", "/photos/ia/IA 2.png", "/photos/ia/IA 3.png", "/photos/ia/IA 4.png", "/photos/ia/IA 5.png", "/photos/ia/IA 6.png", "/photos/ia/IA 7.jpg", "/photos/ia/IA 8.jpg"],
      roleFunction: "The Vibe Keeper. IA ensures a balanced, dynamic, and closely-knit campus life by nurturing student interests and celebrating internal organizational milestones.",
      agendas: ["Graduations & Yudisium Celebrations", "HMSI Dies Natalis", "COMMEX", "TGIF", "Student Communities (E-Sports, Sports, Music)"],
      goals: "Maintain high retention, mitigate student burnout, and foster a strong sense of belonging. Members refine their skills in mega-event organizing, community building, talent curation, and dynamic internal communication.",
      achievementHighlight: "Achieved a flawless record by maintaining massive internal engagement rates and successfully executing a highly acclaimed HMSI Anniversary (Dies Natalis) celebration.",
      youtubeLink: "https://youtu.be/DCWl_Sv34H0?si=WwNdH420cx5LgyLh",
      members: [
        { name: "Hajid Alauddin Ramadhan", nrp: "5026221197", role: "Head of Department", photo: "/photos/ia/Hajid.JPG" },
        { name: "Shof Watun Niswah", nrp: "5026221043", role: "Deputy Head of Department", photo: "/photos/ia/Shofie.JPG" },
        { name: "Tahiyyah Mufhimah", nrp: "5026231170", role: "Department Secretary", photo: "/photos/ia/Tahiyyah Mufhimah_Tia_Internal.JPG" },
        { name: "Satria Dwi Nugraha", role: "Expert Staff", photo: "/photos/ia/Satria Dwi Nugraha_Satria_Staff Ahli.JPG" },
        { name: "Mochammad Afandi Wirawan", role: "Expert Staff", photo: "/photos/ia/Mochammad Afandi Wirawan_Afandi_Staff Ahli.JPG" },
        { name: "Kadek Mawar Kumala Dewi", role: "Expert Staff", photo: "/photos/ia/Kadek Mawar Kumala Dewi_Mawar_Internal.JPG" },
        { name: "R. Farel Danendra H. P.", role: "Expert Staff", photo: "/photos/ia/Farel Danendra_Farel_staff ahli.JPG" },
        { name: "Zaizafun Naura", role: "Expert Staff", photo: "/photos/ia/Zaizafun Naura_Naura_Staff Ahli.JPG" },
        { name: "Muhammad Hammam Aditama", role: "Staff", photo: "/photos/ia/Muhammad Hammam Aditama_Tama_Internal.jpg" },
        { name: "Muhammad Faiz Roihan", role: "Staff", photo: "/photos/ia/Muhammad Faiz Roihan_Roi_Internal.JPG" },
        { name: "Alisha Rafimalia", role: "Staff", photo: "/photos/ia/Alisha Rafimalia_Sasha_Internal-1 (2).jpg" },
        { name: "Izzuddin Hammadi Faiz", role: "Staff", photo: "/photos/ia/Izzuddin Hammadi Faiz_Izzud_Internal.JPG" },
        { name: "Muhammad Ikhwanul Hafidz", role: "Staff", photo: "/photos/ia/Muhammad Ikhwanul Hafidz_Ikhwan_Komunitas.jpg" },
        { name: "Ayesha Hana Azkiya", role: "Staff", photo: "/photos/ia/Ayesha Hana Azkiya_Ayesha_Komunitas.JPG" },
        { name: "Realasa Femmi Novelika", role: "Staff", photo: "/photos/ia/Realasa Femmi Novelika_Rea_Komunitas.JPG" },
        { name: "Rafael Dimas Khristianto", role: "Staff", photo: "/photos/ia/Rafael Dimas Khristianto_Samid_Komunitas.JPG" },
        { name: "Muhammad Zaky Al Khair", role: "Staff", photo: "/photos/ia/Muhammad Zaky Al Khair_Zaky_Komunitas.JPG" },
        { name: "Jeremy Anggi", role: "Staff", photo: "/photos/ia/Jeremy Anggi_Jeremy_Komunitas.JPG" },
      ],
    },
    {
      id: "swf",
      name: "Student Welfare",
      performance: 86.34,
      logo: "/logos/swf.png",
      gallery: ["/photos/swf/SWF 0.png", "/photos/swf/SWF 1.png", "/photos/swf/SWF 2.png", "/photos/swf/SWF 3.png", "/photos/swf/SWF 4.png", "/photos/swf/SWF 5.png", "/photos/swf/SWF 6.jpg", "/photos/swf/SWF 7.jpg"],
      youtubeLink: "https://youtu.be/q81j_xbHjKw?si=pTpj3SlGMnSLN1f7",
      roleFunction: "The Ultimate Support System. SWF is the frontline advocacy body dedicated to safeguarding students' academic, financial, and physical well-being.",
      agendas: ["Healthcare Seminars (GOSIP)", "Academic Tutoring (SWF Tutorial)", "Tuition Fee (UKT) Appeal Assistance", "Scholarship Mapping", "SWF Fund"],
      goals: "Ensure no student is left behind due to academic or financial barriers. Members build deep competencies in crisis advocacy, active listening, policy navigation, data-driven mapping, and peer-to-peer counseling.",
      achievementHighlight: "Proactively advocated for and resolved hundreds of tuition fee appeal cases, while accurately distributing scholarship databases and financial aids to students in need.",
      members: [
        { name: "Fajhri Ramadhan", nrp: "5026221030", role: "Head of Department", photo: "/photos/swf/Fajhri.JPG" },
        { name: "Muhammad Irsyad Fahmi", nrp: "5026221187", role: "Deputy Head of Department", photo: "/photos/swf/Irsyad.JPG" },
        { name: "Diva Nesia Putri", nrp: "5026231020", role: "Department Secretary", photo: "/photos/swf/Diva Nesia Putri_Diva.JPG" },
        { name: "Muhammad Viggo Fudail", role: "Expert Staff", photo: "/photos/swf/Muhammad Viggo Fudail_Viggo_Finansial.JPG" },
        { name: "Faiz Musyaffa Ramadhan", role: "Expert Staff", photo: "/photos/swf/Faiz Musyaffa Ramadhan_Faiz_Akademik.JPG" },
        { name: "Awwaliyah Aliyah", role: "Expert Staff", photo: "/photos/swf/Awwaliyah Aliyah_Aliyah_Kesehatan.JPG" },
        { name: "Erika Cahya Ningtyas", role: "Staff", photo: "/photos/swf/Erika.JPG" },
        { name: "Daniel Setiawan Yulius Putra", role: "Staff", photo: "/photos/swf/Daniel Setiawan Yulius Putra_Welt.JPG" },
        { name: "Defita Aulia Syarif", role: "Staff", photo: "/photos/swf/Defita Aulia Syarif_Defita.jpg" },
        { name: "Tsanita Shafa Hadinanda", role: "Staff", photo: "/photos/swf/Tsanita Shafa Hadinanda_Shafa.jpg" },
        { name: "Raffi Deva Anargya", role: "Staff", photo: "/photos/swf/Raffi Deva Anargya_Raffi.JPG" },
        { name: "Lailatul Fitaliqoh", role: "Staff", photo: "/photos/swf/Lailatul Fitaliqoh_Fika.JPG" },
        { name: "Yudhistira Armico Fidly", role: "Staff", photo: "/photos/swf/Yudhistira Armico Fidly_Yudhis_Akademik.jpg" },
        { name: "Diffa Adzra Anelya", role: "Staff", photo: "/photos/swf/Diffa Adzra Anelya_Diffa.jpg" },
        { name: "Alexander Allan", role: "Staff", photo: "/photos/swf/Alexander Allan_Allan.JPG" },
        { name: "Muhammad Abyan Tsabit Amani", role: "Staff", photo: "/photos/swf/Muhammad Abyan Tsabit Amani_Abyan.JPG" },
        { name: "Muhammad Gandhi Taqi Utomo", role: "Staff", photo: "/photos/swf/Muhammad Gandhi Taqi Utomo_Gandhi.jpg" },
      ],
    },
    {
      id: "rnd",
      name: "Research and Development",
      performance: 100,
      logo: "/logos/rnd.png",
      gallery: ["/photos/rnd/RND 0.png", "/photos/rnd/RnD 1.png", "/photos/rnd/RnD 2.png", "/photos/rnd/RnD 3.png", "/photos/rnd/RnD 4.png", "/photos/rnd/RND 5.png", "/photos/rnd/RND 6.jpg", "/photos/rnd/RND 7.jpg"],
      youtubeLink: "https://youtu.be/EZTEEWN54Ug?si=vrKq-o3MUD5Crryz",
      roleFunction: "The Think Tank. RnD is the incubator for academic excellence, technological innovation, and competitive achievement within the Information Systems department.",
      agendas: ["Scientific Writing Training (PKTI)", "IS Competitions", "Competency & Innovation Center (CIC)", "National Research Team Mentoring"],
      goals: "Foster a culture of analytical thinking and scientific problem-solving. Members acquire profound skills in research methodology, critical data analysis, academic writing, and project pitching.",
      achievementHighlight: "Achieved a flawless performance by propelling HMSI into the Top 10 Internal Selection of PPK ORMAWA ITS 2025 and significantly boosting student participation in national competitions (PKM & Gemastik).",
      members: [
        { name: "Muhammad Rafli Krishnadanu P. W.", nrp: "5026221099", role: "Head of Department", photo: "/photos/rnd/Rafli.JPG" },
        { name: "Achmad Fahmi Ainur Ridho", nrp: "5026221167", role: "Deputy Head of Department", photo: "/photos/rnd/Ridho.JPG" },
        { name: "Sinta Dewi Rahmawati", nrp: "5026231231", role: "Department Secretary", photo: "/photos/rnd/Sinta Dewi Rahmawati_Sinta.JPG" },
        { name: "Muhammad Ryan Rajata", role: "Expert Staff", photo: "/photos/rnd/Muhammad Ryan Rajata_Ryan.JPG" },
        { name: "Aliffia Isma Putri", role: "Expert Staff", photo: "/photos/rnd/Aliffia Isma Putri_Putri.JPG" },
        { name: "Andika Cahya Sutisna", role: "Expert Staff", photo: "/photos/rnd/Andika Cahya Sutisna_Andika.JPG" },
        { name: "Kautzar Randra Noor K.", role: "Expert Staff", photo: "/photos/rnd/Kautzar Randra Noor Khasyyatullah_Randra.JPG" },
        { name: "Bimo Rajendra Widyadhana", role: "Staff", photo: "/photos/rnd/Bimo Rajendra Widyadhana_Bimo.JPG" },
        { name: "Hafidz Putra Dermawan", role: "Staff", photo: "/photos/rnd/Hafidz Putra Dermawan_Hafidz.JPG" },
        { name: "Akhtar Zia Faizarrobbi", role: "Staff", photo: "/photos/rnd/Akhtar Zia Faizarrobbi_Akhtar.JPG" },
        { name: "Arsya Nueva Delavera", role: "Staff", photo: "/photos/rnd/Arsya Nueva Delavera_Arsya.JPG" },
        { name: "Firmansyah Adi Prasetyo", role: "Staff", photo: "/photos/rnd/Firmansyah Adi Prasetyo_Firman.JPG" },
        { name: "Ahmad Faiz Ramdhani", role: "Staff", photo: "/photos/rnd/Ahmad Faiz Ramdhani_Faiz.JPG" },
        { name: "Antony Purnamarasid A. R.", role: "Staff", photo: "/photos/rnd/Antony Purnamarasid August Ratulangi_Antony.JPG" },
        { name: "Eric Vincentius Jaolis", role: "Staff", photo: "/photos/rnd/Eric Vincentius Jaolis_Eric.JPG" },
        { name: "Al-Khiqmah Manzilatul Mukaromah", role: "Staff", photo: "/photos/rnd/Al-Khiqmah Manzilatul Mukaromah_Manzil.JPG" },
        { name: "Yusuf Acala Sadurjaya Sri Krisna", role: "Staff", photo: "/photos/rnd/Yusuf Acala Sadurjaya Sri Krisna_Yusuf.JPG" },
        { name: "Burju Ferdinand Harianja", role: "Staff", photo: "/photos/rnd/Burju Ferdinand Harianja_Burju.JPG" },
      ],
    },
    {
      id: "im",
      name: "Information Media",
      performance: 95.90,
      logo: "/logos/im.png",
      gallery: ["/photos/im/IM 0.png", "/photos/im/IM 1.png", "/photos/im/IM 2.png", "/photos/im/IM 3.png", "/photos/im/IM 4.png", "/photos/im/IM 5.png", "/photos/im/IM 6.png", "/photos/im/IM 7.jpg", "/photos/im/IM 8.jpg"],
      roleFunction: "The Creative Agency. IM acts as the visual and digital communication mastermind behind HMSI's public image, responsible for social media management, creative branding, and digital journalism.",
      agendas: ["GengSI Magazine", "Basic Media Schooling (BMS)", "OBSESI Podcast", "LayarHMSI", "Live Reporting", "Design Tutorials"],
      goals: "Deliver impactful visual storytelling and elevate the organization's digital presence. Members master digital marketing, graphic design, copywriting, and public relations, translating complex information into engaging content.",
      achievementHighlight: "Swept the KM ITS 2025 prestigious awards: Best Information Media (Overall), Best Social Media Management, and Best Visual Branding & Content Design.",
      youtubeLink: "https://youtu.be/6iO9umAiKUk?si=D4ZLtfECPCZ_nlts",
      members: [
        { name: "Diva Ardelia Alyadrus", nrp: "5026221029", role: "Head of Department", photo: "/photos/im/Diva.JPG" },
        { name: "Luthfan Aryananda Purwito", nrp: "5026221166", role: "Deputy Head of Department", photo: "/photos/im/Luthfan.JPG" },
        { name: "Nadine Azzadiena Farahdiansyah", nrp: "5051231020", role: "Department Secretary", photo: "/photos/im/Nadine Azzadiena Farahdiansyah_Nadine_OA_2.jpg" },
        { name: "Rayhan Lauzzadani", role: "Expert Staff", photo: "/photos/im/Rayhan Lauzzadani_Ilung_Vidpro_2.jpg" },
        { name: "Maulina Nur Laila", role: "Expert Staff", photo: "/photos/im/Maulina N L_Nana_CC_2.JPG" },
        { name: "Mohammad Geresidi Rachmadi", role: "Expert Staff", photo: "/photos/im/Mohammad Geresidi Rachmadi_Gery_CC_1.JPG" },
        { name: "Muhammad Hasan Kamal", role: "Expert Staff", photo: "/photos/im/Muhammad Hasan Kamal_Ikmal_Vidpro_2.JPG" },
        { name: "Edward Yosafat Sirait", role: "Expert Staff", photo: "/photos/im/Edward Yosafat Sirait_Edo_2.JPG" },
        { name: "Marcello Ezra Andilolo Lubis", role: "Expert Staff", photo: "/photos/im/Marcello Ezra Andilolo Lubis_Cello_Desain_2.JPG" },
        { name: "Dimas Fajar Ramadhan", role: "Expert Staff", photo: "/photos/im/Dimas Fajar Ramadhan_Dimas_Desain_1.jpg" },
        { name: "Rosdiani Adiningsih", role: "Expert Staff", photo: "/photos/im/Rosdiani Adiningsih_Ani_IM_2.jpg" },
        { name: "Rifqi Aufa Thufail", role: "Staff", photo: "/photos/im/Rifqi Aufa Thufail_Rifqi_1.JPG" },
        { name: "Shahnaz Ariqah Simanullang", role: "Staff", photo: "/photos/im/Shahnaz Ariqah Simanullang_Shahnaz_CC-1.jpg" },
        { name: "Ida Ayu Putu Rani Pradnyandari", role: "Staff", photo: "/photos/im/Ida Ayu Putu Rani Pradnyandari_Rani_CC.jpg" },
        { name: "Adityo Rafi Wardhana", role: "Staff", photo: "/photos/im/Adityo Rafi Wardhana_Tyo_CC_2.jpg" },
        { name: "Farrel Aditya Rosyidi", role: "Staff", photo: "/photos/im/Farrel Aditya Rosyidi_Farrel_1.JPG" },
        { name: "Muhammad Fawwaz Al-Amien", role: "Staff", photo: "/photos/im/Muhammad Fawwaz Al-Amien_Fawwaz_Design_1.jpg" },
        { name: "Beh Siu Li", role: "Staff", photo: "/photos/im/Beh Siu Li_Angel_Design_1.jpg" },
        { name: "Naufal Erwin", role: "Staff", photo: "/photos/im/Muhammad Naufal Erwin Effendi_Naufal_IM_1.jpg" },
        { name: "Tiara Aulia Azadirachta Indica", role: "Staff", photo: "/photos/im/Tiara Aulia Azadirachta Indica_Tiara_Desain_2.jpg" },
        { name: "Shifly Taysir Setiawan", role: "Staff", photo: "/photos/im/Shifly Taysir Setiawan_Shifly_IM_1.jpg" },
        { name: "Shafly Hidayatullah", role: "Staff", photo: "/photos/im/Shafly.JPG" },
        { name: "Felix Prajna Santoso", role: "Staff", photo: "/photos/im/Felix Prajna Santoso_Felix_VidPro_1.jpg" },
        { name: "Ida Bagus Adhiraga Yudhistira", role: "Staff", photo: "/photos/im/Ida Bagus Adhiraga Yudhistira_Adit_Vidpro.JPG" },
        { name: "Mirza Fathi Taufiqurrahman", role: "Staff", photo: "/photos/im/Mirza Fathi Taufiqurrahman_Mirza_Vidpro_2.jpg" },
        { name: "Hafizhan Yusra Sulistyo", role: "Staff", photo: "/photos/im/Hafizhan Yusra Sulistyo_Izhan_Information Media1.jpg" },
      ],
    },
    {
      id: "ea",
      name: "External Affair",
      performance: 98.97,
      logo: "/logos/ea.png",
      gallery: ["/photos/ea/EA 0.png", "/photos/ea/EA 1.png", "/photos/ea/EA 2.png", "/photos/ea/EA 3.png", "/photos/ea/EA 4.png", "/photos/ea/EA 5.jpg"],
      roleFunction: "The Diplomat. EA is the frontline of HMSI's diplomacy, establishing cross-institutional relationships, maintaining alumni networks, and preparing students for global opportunities.",
      agendas: ["Ormawa Visits", "Abroad Preparation Program (APP)", "Alumni Career Talks", "English Clinics", "HMSI Connect"],
      goals: "Build a robust professional network and bridge the gap between students, alumni, and the industrial world. Members hone their skills in stakeholder management, B2B negotiation, professional communication, and strategic partnership building.",
      achievementHighlight: "Successfully executed cross-disciplinary Ormawa Visits (HIMASTA UNAIR & HMTG ITS), revitalized the 2025-2030 IKASI alumni synergy, and partnered with Telkomsel Surabaya for an industrial visit.",
      youtubeLink: "https://youtu.be/4VQBCaywbIs?si=GwlfGncSXU8xZyL9",
      members: [
        { name: "Arjuna Putra Kharisma", nrp: "5026221210", role: "Head of Department", photo: "/photos/ea/Arjuna Putra.JPG" },
        { name: "Karina Filza Aafiyah", nrp: "5026221012", role: "Deputy Head of Department", photo: "/photos/ea/Karina.JPG" },
        { name: "Annisa Fadila Rahmawati", nrp: "5026221069", role: "Deputy Head of Department", photo: "/photos/ea/Annisa.JPG" },
        { name: "Nisrina Kamiliya Riswanto", nrp: "5026231111", role: "Department Secretary", photo: "/photos/ea/Nisrina Kamiliya Riswanto_Nisrina.JPG" },
        { name: "Natasha Yosefani Putri", role: "Expert Staff", photo: "/photos/ea/Natasha Yosefani Putri_Tasha.JPG" },
        { name: "Muhammad Fauzan", role: "Expert Staff", photo: "/photos/ea/Muhammad Fauzan_Fauzan-1.jpg" },
        { name: "Agung Budi Prasetya", role: "Expert Staff", photo: "/photos/ea/Agung Budi Prasetya_Agung_EA.jpg" },
        { name: "Arayzi Rayyansyah", role: "Expert Staff", photo: "/photos/ea/Aray_EA.JPG" },
        { name: "Devika Rahman", role: "Staff", photo: "/photos/ea/Devika Rahman_Vika-1.jpg" },
        { name: "Muhammad Dzaki Adfiz", role: "Staff", photo: "/photos/ea/Muhammad Dzaki Adfiz_Dzaki-1.jpg" },
        { name: "Rahmadhona Elokpribadi Kusmawan", role: "Staff", photo: "/photos/ea/Rahmadhona.JPG" },
        { name: "Muhammad Daniel Alfarisi", role: "Staff", photo: "/photos/ea/Muhammad Daniel Alfarisi_Daniel.jpg" },
        { name: "Irhab Faiz Hidayat", role: "Staff", photo: "/photos/ea/Irhab Faiz Hidayat_Faiz-1.jpg" },
        { name: "Auliya Malika Idi", role: "Staff", photo: "/photos/ea/Auliya Malika_Auliya_EA.jpg" },
        { name: "Mochammad Zhulmi D. H.", role: "Staff", photo: "/photos/ea/Juno.JPG" },
        { name: "Fadhiil Akmal Hamizan", role: "Staff", photo: "/photos/ea/Fadhiil Akmal Hamizan_Fadhiil.JPG" },
        { name: "Burhan Shidqi Arrasyid", role: "Staff", photo: "/photos/ea/Burhan Shidqi Arrasyid_Burhan.jpg" },
      ],
    },
    {
      id: "es",
      name: "Entrepreneurship",
      performance: 100,
      logo: "/logos/es.png",
      gallery: ["/photos/es/ES 0.png", "/photos/es/ES 1.png", "/photos/es/ES 2.png", "/photos/es/ES 3.png", "/photos/es/ES 4.png", "/photos/es/ES 5.png", "/photos/es/ES 6.jpg"],
      roleFunction: "The Business Hub. ES functions as the sociopreneurial incubator for students and the independent financial engine of the organization.",
      agendas: ["Entrepreneurship Workshops", "IS Store (Merchandise & F&B)", "Warunk ES (Student Marketplace)", "ES Spotlight"],
      goals: "Instill a robust entrepreneurial mindset. Members acquire practical, real-world skills in financial modeling, B2C sales, marketing strategy, supply chain basics, and sustainable business management.",
      achievementHighlight: "Delivered a flawless performance by securing a healthy independent cash flow via the IS Store and successfully empowering dozens of student SMEs through the Warunk ES ecosystem.",
      youtubeLink: "https://youtu.be/m0A6E3PvBbU?si=xQ92QAixBIFJC_9x",
      members: [
        { name: "Muhammad Alvin Fairuz Tsany", nrp: "5026221151", role: "Head of Department", photo: "/photos/es/Alvin.JPG" },
        { name: "Muhammad Maulana Mukti", nrp: "5026221201", role: "Deputy Head of Department", photo: "/photos/es/Maulana.JPG" },
        { name: "Faradita Syaharani Murdiyana", nrp: "5051231009", role: "Department Secretary", photo: "/photos/es/Faradita Syaharani Murdiyana_Dita_ES Academy.jpg" },
        { name: "Ferdiansyah Yusuf Muhammad", role: "Expert Staff", photo: "/photos/es/Ferdiansyah Yusuf Muhammad.JPG" },
        { name: "Dovy Adeeb Farizky", role: "Expert Staff", photo: "/photos/es/Dovy Adeeb Farizky_Dovy_IS Store.JPG" },
        { name: "Keysha Alivanno Pradipta Renjiro", role: "Expert Staff", photo: "/photos/es/Keysha Alivanno_Key_ES Academy.JPG" },
        { name: "Yanuar Audrey Sulistiyo", role: "Expert Staff", photo: "/photos/es/Yanuar Audrey Sulistiyo_Yanuar_ES Academy.JPG" },
        { name: "Hanin Nuha Hafizhah", role: "Expert Staff", photo: "/photos/es/Hanin Nuha Hafizhah.JPG" },
        { name: "Almer Fatih Ravedito", role: "Staff", photo: "/photos/es/Almer Fatih Ravedito_Almer_ES Workshop-1.jpg" },
        { name: "Muhammad Afiq Ridha Pratama", role: "Staff", photo: "/photos/es/Muhammad Afiq Ridha Pratama_Afiq_ES Academy.jpg" },
        { name: "Nathan Joel Widiyanto", role: "Staff", photo: "/photos/es/Nathan Joel Widyanto_Joel_ES Academy.jpg" },
        { name: "Keisha Adisti Athaillah", role: "Staff", photo: "/photos/es/Keisha Adisti Athaillah_Keisha_ES Academy.JPG" },
        { name: "Adhharul Haqqullah", role: "Staff", photo: "/photos/es/Adhharul Haqqullah_Harul_IS Store.jpg" },
        { name: "Mohammad Wahyu Dwi Nugroho", role: "Staff", photo: "/photos/es/Mohammad Wahyu Dwi Nugroho_Wahyu_IS Store.jpg" },
        { name: "Moch Ilham Ainul Yakin", role: "Staff", photo: "/photos/es/Moch Ilham Ainul Yakin_Ilham_IS Store.jpg" },
        { name: "Gerald Marcell Van Rayne", role: "Staff", photo: "/photos/es/Gerald Marcell Van Rayne_Gerald_IS Store _ ES Spotlight.JPG" },
        { name: "Muhammad Nabil Syarif Habibi", role: "Staff", photo: "/photos/es/Muhammad Nabil Syarif Habibi_Nabil_ES Academy.jpg" },
        { name: "Aqilah Ummu Al Nawswary", role: "Staff", photo: "/photos/es/Aqilah Ummu Al Nawiswary_Aqilah_ES Workshop.JPG" },
        { name: "Arfiandra Rahman Aziz", role: "Staff", photo: "/photos/es/Arfiandra Rahman Aziz_Arfi_ES Workshop.jpg" },
        { name: "Okky Priscila Putri", role: "Staff", photo: "/photos/es/Okky Priscila_cila_ES Workshop.jpg" },
      ],
    },
    {
      id: "socdev",
      name: "Social Development",
      performance: 99.78,
      logo: "/logos/socdev.png",
      gallery: ["/photos/socdev/SOCDEV 0.png", "/photos/socdev/SOCDEV 1.png", "/photos/socdev/SOCDEV 2.png", "/photos/socdev/SOCDEV 3.png", "/photos/socdev/SOPCDEV 4.png", "/photos/socdev/SOCDEV 5.png", "/photos/socdev/SOCDEV 6.jpg", "/photos/socdev/SOCDEV 7.jpg"],
      roleFunction: "The Impact Maker. SocDev channels the technological expertise of Information Systems students into tangible community empowerment and philanthropic activities.",
      agendas: ["IT Teaching in Schools (SIMETRI)", "Direct Community Service (SINERGI)", "Social Campaigns (AKSI)", "SocioTrip", "Disaster Relief Fundraising (SocioBank)"],
      goals: "Cultivate social empathy and utilize technology for the greater good. Members develop expertise in community project management, CSR mapping, empathetic leadership, and sustainable program execution.",
      achievementHighlight: "Successfully secured a strategic partnership and exclusive sponsorship with PT Inalum to fully fund and execute large-scale community service initiatives.",
      youtubeLink: "https://youtu.be/FKc86pLaO7k?si=d0f4H-NhK3Smhs6t",
      members: [
        { name: "Achmad Faiz", nrp: "5026221100", role: "Head of Department", photo: "/photos/socdev/Faiz.JPG" },
        { name: "Aulisa Rizki Amanda", nrp: "5026221024", role: "Deputy Head of Department", photo: "/photos/socdev/Aulisa.JPG" },
        { name: "Ni Kadek Adelia Paramita Putri", nrp: "5026231196", role: "Department Secretary", photo: "/photos/socdev/Ni Kadek Adelia Paramita Putri_Adel.JPG" },
        { name: "Salwa Iqlima Alifutri", role: "Expert Staff", photo: "/photos/socdev/Salwa Iqlima Alifutri_Salwa.JPG" },
        { name: "Tommy Gunawan", role: "Expert Staff", photo: "/photos/socdev/Tommy Gunawan_Tommy-1.jpg" },
        { name: "Darrell Athaya Refaldi", role: "Expert Staff", photo: "/photos/socdev/Darrell Athaya Refaldi_Darrel.JPG" },
        { name: "Imtiyaz Shafhal Afif", role: "Staff", photo: "/photos/socdev/Imtiyaz Shafhal Afif_Tiyaz.JPG" },
        { name: "Kurnia Yufi Satrio Laksono", role: "Staff", photo: "/photos/socdev/Kurnia Yufi Satrio Laksono_Tio.JPG" },
        { name: "Muhammad Ridho Utomo", role: "Staff", photo: "/photos/socdev/Muhammad Ridho Utomo_Mario.JPG" },
        { name: "Nafadiya Mumtaza", role: "Staff", photo: "/photos/socdev/Nafadiya Mumtaza_Nafa.JPG" },
        { name: "Amandea Chandiki Larasati", role: "Staff", photo: "/photos/socdev/Amandea Chandiki Larasati_Chandiki.JPG" },
        { name: "Zaskia Muazatun M", role: "Staff", photo: "/photos/socdev/Zaskia Muazatun M_Zaskia.JPG" },
        { name: "Nailah Adlina", role: "Staff", photo: "/photos/socdev/Nailah Adlina_Adlin.jpg" },
        { name: "Ayu Alfia Putri", role: "Staff", photo: "/photos/socdev/Ayu Alfia Putri_Alfi.JPG" },
        { name: "Lita Sari Banjarnahor", role: "Staff", photo: "/photos/socdev/Lita Sari Banjarnahor_Lita.JPG" },
        { name: "Nesha Shafwana", role: "Staff", photo: "/photos/socdev/Nesha Shafwana_Shafwa.jpg" },
        { name: "Harya Raditya Handoyo", role: "Staff", photo: "/photos/socdev/Harya Raditya Handoyo_Harya.JPG" },
      ],
    },
  ] as Department[],
};

export const PORTFOLIO_DATA = {
  header: {
    title: "Board of Milestones",
    subtitle: "Integrated Performance & Impact Portfolio of HMSI Niskalarasi Cabinet."
  },
  vision_mission: {
    vision: "To realize HMSI as a progressive, professional, and family-oriented platform for student development.",
    missions: [
      { id: "M1", title: "Progressive", desc: "Escalating Information Systems students' resources to grow and establish a platform for academic and non-academic achievement.", achievement: "96.71%" },
      { id: "M2", title: "Solidarity", desc: "Fostering a caring sense of solidarity that positively impacts the environment, upholds students' social values, patriotism, and harmony.", achievement: "100%" },
      { id: "M3", title: "Professional", desc: "Initiating the development of a professional and highly dedicated organization that contributes to departments and the broader community in the field of information technology.", achievement: "100%" }
    ]
  },
  bento_cards: [
    {
      id: "executive_summary",
      category: "1. Executive Summary",
      previewTitle: "Cabinet Performance Index",
      previewNumber: "96.71%",
      previewSubtitle: "Overall IPMS Score",
      size: "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2",
      icon: "TrendingUp",
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
      image: "",
      modalContent: {
        heading: "The Executive Summary (Numbers Speak Louder)",
        body: "In this section, we showcase the true power of the management scale we handled.\n- **Total Human Capital Managed:** Led and supervised a dynamic team comprising **150+ talented functionaries**.\n- **Overall Organizational KPI:** Successfully achieved an average work program completion rate of **96.71%** across all operational lines.\n- **Revenue Generation:** Managed an independent business cycle with total profit reaching **Rp8.000.000** (achieving **133%** of the initial target).\n- **Digital Branding Authority:** Awarded **1st Place at Media Excellence Summit** and recognized as the **Most Published Student Organization**, establishing HMSI as the highest standard for digital publication within the university.\n- **Public Reach & Growth:** Successfully increased digital content engagement by **800%** above target through social campaigns and profile features."
      }
    },
    {
      id: "corporate_mapping",
      category: "2. Corporate Mapping",
      previewTitle: "The Core Engine",
      previewNumber: "8 + 1",
      previewSubtitle: "Depts & BPH",
      size: "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1 lg:col-start-3",
      icon: "Users",
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
      image: "",
      modalContent: {
        heading: "Corporate-Style Organizational Mapping",
        body: "Shifting the perspective on HMSI's structure into integrated corporate functions:\n- **Executive Leadership (C-Suite):** President (Strategic Vision), VP (Operations), Gen. Treas (Finance), Gen. Sec (Regulations/SOP).\n- **Business Development & Revenue (ES):** Responsible for the organization's *retail operations* and *revenue streams*.\n- **Corporate Communications & Creative Agency (IM):** Manages *branding*, multimedia, and *social media presence*.\n- **Talent Management & People Ops (HRD):** Focuses on *onboarding*, performance evaluation, and *career preparation*.\n- **Strategic Partnerships & External Relations (EA):** Manages B2B relationships with industry, alumni, and external institutions.\n- **Research, Innovation, & Technical Training (RnD):** The center for technical *hard-skill* development and scientific paper production.\n- **Corporate Social Responsibility (CSR) & Community Engagement (SocDev):** Manages community service programs and social impact.\n- **Student Affairs & Customer Success (SWF):** Ensures the welfare, advocacy, and satisfaction of our main constituents.\n- **Workplace Culture & Employee Engagement (IA):** Builds an inclusive, harmonious, and productive work environment."
      }
    },
    {
      id: "star_revenue",
      category: "3. Revenue & Operational Scale",
      previewTitle: "IS Store",
      previewNumber: "Rp8M",
      previewSubtitle: "Financial Independence",
      size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
      icon: "Briefcase",
      color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
      image: "",
      modalContent: {
        heading: "STAR Method: Revenue & Operational Scale (ES & VP)",
        body: "**Situation/Task:** The organization required strong independent funding to support large-scale programs without relying entirely on campus bureaucracy.\n- **Action:** Optimized the **IS Store** business unit by increasing restock frequency up to **4x a month** and diversifying products. Managerially, the Vice President executed strict control over the business department's KPIs to ensure targets were met.\n- **Result:** Generated a total profit of **Rp8.000.000**, surpassing the target by **133%**, and built a disciplined internal supply chain system."
      }
    },
    {
      id: "star_virality",
      category: "4. Digital Virality",
      previewTitle: "National Brand",
      previewNumber: "1st",
      previewSubtitle: "Brand Excellence",
      size: "col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1",
      icon: "Globe",
      color: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
      image: "",
      modalContent: {
        heading: "STAR Method: National Brand Excellence (IM & SocDev)",
        body: "**Situation/Task:** Elevate the organization's visibility and educate the public through high-quality digital content.\n- **Action:** Implemented an *omnichannel* strategy across YouTube, Instagram, and TikTok, and participated in media excellence competitions to validate quality.\n- **Result:** Achieved **1st Place at the National Level** in student organization publication and hit a content view count reaching **10,293 views** (shattering the initial target of 500 views)."
      }
    },
    {
      id: "star_event",
      category: "5. External Validation",
      previewTitle: "B2B Synergy",
      previewNumber: "310%",
      previewSubtitle: "Strategic Networking",
      size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 lg:col-start-4",
      icon: "Zap",
      color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
      image: "",
      modalContent: {
        heading: "External Validation & Strategic Networking (EA & RnD)",
        body: "Proving that this organization has strong connections with the professional world:\n- **Corporate Partners:** Successfully conducted *B2B pitching* and industry visits with participant turnout skyrocketing to **310% of the target**.\n- **Scientific Recognition:** The RnD Department successfully catalyzed the production of **16 scientific papers**, demonstrating the organization's intellectual quality well above average standards.\n- **Stakeholder Trust:** Maintained Student Service Satisfaction (CSAT) levels at **96-99%**, proving high trust from constituents."
      }
    },
    {
      id: "compliance",
      category: "6. Audit & Compliance",
      previewTitle: "Financial Integrity",
      previewNumber: "100%",
      previewSubtitle: "Internal Control",
      size: "col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 lg:col-start-1",
      icon: "Target",
      color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
      image: "",
      modalContent: {
        heading: "Governance, Audit, & Compliance (GenTre & GenSec)",
        body: "Showcasing that HMSI's internal management is highly organized and transparent:\n- **Financial Integrity:** Achieved a financial administration compliance rate (**SPJ**) of **100%** and periodically published financial reports to the public via 'HMSI Treasure'.\n- **Internal Control:** Managed the organizational asset database with a security level of **100% (zero loss/damage)** and ensured all correspondence was digitally documented in real-time.\n- **Performance Tracking:** Implemented a **'Functionary Report Card'** system to quantitatively evaluate **150+ members**, producing accurate data for leadership promotion."
      }
    },
    {
      id: "legacy",
      category: "7. Sustainability",
      previewTitle: "Sustainable Systems",
      previewNumber: "Legacy",
      previewSubtitle: "Proof of Good Management",
      size: "col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1",
      icon: "ShieldCheck",
      color: "bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400",
      image: "",
      modalContent: {
        heading: "Legacy & Sustainability",
        body: "HMSI Niskalarasi is not just about a single term; it is about sustainability:\n- **Standard Operating Procedures (SOP):** Left a legacy of comprehensive **HMSI SOPs** for administration, finance, and inventory management to guide the next cabinet.\n- **Leadership Pipeline:** Successfully conducted succession planning through the **'EB Internship'** and **'Niskalarasi Relay'** programs, ensuring future leaders already possess standard skill-sets.\n- **Institutional Memory:** Built the **HMSI Docs** system and the **EA-Connect** alumni database reaching **60% data completeness**, a valuable asset for long-term organizational development."
      }
    }
  ]
};

export const GALLERY_ITEMS = [
    {
        title: "ORMAWA VISIT - UNAIR",
        description: "ORMAWA VISIT is a flagship initiative by the External Affairs Department of the Information Systems Student Association (HMSI) ITS. It aims to build and strengthen collaborative networks and communication between student organizations. Functioning as a platform for knowledge exchange and experience sharing, this program is vital for supporting organizational goals through external synergy. This year, the program will be held offline, featuring a visit to the Statistics Student Association (HIMASTA) at Universitas Airlangga to foster deeper mutual cooperation.",
        photos: [
            "/photos/HOF/ORVIS HIMASTA 1.JPG",
            "/photos/HOF/ORVIS HIMASTA 2.JPG"
        ]
    },
    {
        title: "AKSELERASI - Actualization of Skills and Information Systems Exploration",
        description: "AKSELERASI is a foundational training program within the Manage 2025 series, designed to provide fundamental insights into managerial science and the Information Systems Department. Covering essential topics like leadership, time management, and organizational structure from expert speakers, participants are guided to grasp the essence of management holistically. The learning approach is highly practical, requiring participants to complete a Post-Training Activity (KPP) as an evaluation. This program is projected to optimally prepare participants for active contribution within the Information Systems Department.",
        photos: [
            "/photos/HOF/AKSELERASI 1.JPG",
            "/photos/HOF/AKSELERASI 2.JPG",
            "/photos/HOF/AKSELERASI 3.JPG"
        ]
    },
    {
        title: "BMS - Basic Media Schooling",
        description: "BMS is a journalistic training program initiated by the Information Media Department of HMSI ITS to channel students' interests and talents in literacy and information processing. In an era of rapid technological advancement, BMS aims to develop competent individuals capable of effective information blasting while understanding the strategic role of journalism in publication, marketing, and branding. Through this training, students are equipped with professional reading, writing, and processing skills to optimize information flow within the department and contribute positively to society through journalism.",
        photos: [
            "/photos/HOF/BMS 1.png",
            "/photos/HOF/BMS 2.png",
            "/photos/HOF/BMS 3.png"
        ]
    },
    {
        title: "Career Talk",
        description: "Career Talk, organized by the External Affairs Department of HMSI ITS, serves as an interactive bridge between students and alumni (IKASI) to provide realistic insights into the professional world. With the theme \"Exploring Outer Space,\" this program responds to the high demand for deep insights into diverse career paths in the dynamic digital era. Through sharing sessions and interactive discussions, Career Talk acts as a catalyst for students to understand challenges, opportunities, and effective career strategies, empowering them to pursue their professional goals with confidence.",
        photos: [
            "/photos/HOF/CAREER TALK 1.JPG",
            "/photos/HOF/CAREER TALK 2.JPG"
        ]
    },
    {
        title: "Company Visit - Telkomsel Surabaya",
        description: "The 2025 HMSI Company Visit is a strategic program designed to bridge the gap between academic theory and digital industry reality. Themed “Calibrating Knowledge, Accelerating Growth: A Future with Telkomsel,” this event invites students to Telkomsel Landmark Surabaya to witness the implementation of cutting-edge technologies like AI, Big Data, and IoT at scale. Beyond technical insights, participants will gain an understanding of professional work culture and project management. In line with the Niskalarasi cabinet spirit, this activity serves as an accelerator for students in planning realistic career paths toward Indonesia Emas 2045.",
        photos: [
            "/photos/HOF/COMPANY VISIT 1.JPG",
            "/photos/HOF/COMPANY VISIT 2.JPG",
            "/photos/HOF/COMPANY VISIT 3.JPG"
        ]
    },
    {
        title: "Healthcare",
        description: "Health Care 2025, a project by the Student Welfare Department, is designed to raise awareness about the critical importance of oral and dental health as a foundation for quality of life. Recognizing the link between oral conditions and chronic diseases, this program aims to shift the perception that dental care is only necessary when pain occurs. It offers free dental check-ups and direct consultations with FKG Unair students, encouraging early detection and a more comprehensive healthy lifestyle as part of overall well-being.",
        photos: [
            "/photos/HOF/HEALTHCARE 1.JPG",
            "/photos/HOF/HEALTHCARE 3.JPG",
            "/photos/HOF/HEALTHCARE.JPG"
        ]
    },
    {
        title: "OKKBK",
        description: "OKKBK (Curriculum-Based Professional and Competency Orientation) is an essential campus orientation program designed to facilitate the transition of new students from high school to university life. Managed by the HRD Department, it aims to accelerate the adaptation of 2025 Information Systems and Digital Innovation students to a complex academic environment. The program includes briefings on curriculum, academic management, and professional guest lectures, ensuring new students are mentally prepared and competent to contribute to the department and the nation.",
        photos: [
            "/photos/HOF/OKKBK.JPG"
        ]
    },
    {
        title: "ORMAWA Visit - HMTG",
        description: "ORMAWA VISIT is an initiative by the External Affairs Department of HMSI ITS aimed at strengthening internal and external collaborative ties. It serves as a medium for exchanging information and experiences to tighten communication networks between student organizations. This year’s offline visit to the Geophysics Engineering Student Association (HMTG) ITS is a concrete step toward building synergy and expanding connections across various departments on campus.",
        photos: [
            "/photos/HOF/ORVIS HMTG 0.JPG",
            "/photos/HOF/ORVIS HMTG 1.JPG",
            "/photos/HOF/ORVIS HMTG 2.JPG"
        ]
    },
    {
        title: "PMO - Organizational Management Training",
        description: "The 2025 HMSI Organizational Management Training (PMO) is a strategic program to mold functionaries into \"agents of change\" who balance technical proficiency with managerial soft skills. Under the philosophical theme “Path of Shinobi HMSI,” the program focuses on self-development, organizational values, and effective project management. Using an interactive approach—including cross-generational mentoring and simulations—PMO 2025 instills loyalty and determination (the \"ninja way\") in every functionary to ensure the organization's sustainability and progress.",
        photos: [
            "/photos/HOF/PMO 1.JPG",
            "/photos/HOF/PMO 2.JPG",
            "/photos/HOF/PMO 3.JPG",
            "/photos/HOF/PMO 4.JPG"
        ]
    },
    {
        title: "Information Systems Graduation (Wisuda)",
        description: "Graduation is a ceremonial agenda held to honor students' success in completing their studies and earning their academic degrees. More than just a ceremony, it is a tribute to parents and a moment to strengthen the bonds between faculty, staff, students, and alumni. The department aims to foster a sense of pride and lasting connection to the alma mater, while also motivating active students to persevere and complete their studies on time.",
        photos: [
            "/photos/HOF/WISUDA 1.jpg",
            "/photos/HOF/WISUDA 2.JPG",
            "/photos/HOF/WISUDA 3.JPG",
            "/photos/HOF/WISUDA 4.JPG"
        ]
    },
    {
        title: "SOCIOTRIP",
        description: "Socio Trip is an outreach program that encourages Information Systems students to engage in social activities beyond the campus, such as teaching and collaborating with external social communities. The goal is to enhance students' social sensitivity and provide real-world experience. Typically, Socio Trip involves learning and playing with children in orphanages or foster homes, as well as environmental conservation activities, allowing students to contribute directly to the community and nature.",
        photos: [
            "/photos/HOF/SOCIOTRIP 1.JPG",
            "/photos/HOF/SOCIOTRIP 2.JPG",
            "/photos/HOF/SOCIOTRIP 3.JPG",
            "/photos/HOF/SOCIOTRIP 4.JPG",
            "/photos/HOF/SOCIOTRIP 5.JPG"
        ]
    }
];
