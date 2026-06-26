// Google Analytics Configuration
export const GA_CONFIG = {
  MEASUREMENT_ID: 'G-804K6B0VQN', // Replace with your actual GA4 Measurement ID
  ENABLED: true, // Set to false to disable analytics
  DEBUG_MODE: false, // Set to true for debugging
}

// Hero Configuration
export const HERO_CONFIG = {
  backgroundVideo: {
    videos: [
      {
        src: '/chiru-productions-website/chiru-logo.mp4',
        autoPlay: true,
        muted: true,
        loop: false,
        playsInline: true,
      }
    ]
  }
}

export const FRAME_CONTENT = [
  { title: 'KALAM MAARI', year: '2024' },
  { title: 'IRUL NEEDHI',  year: '2023' },
  { title: 'VAANAM',       year: '2023' },
  { title: 'THANDAVAM',    year: '2022' },
  { title: 'KAANAAMAL',    year: '2022' },
  { title: 'MARABU',       year: '2025' },
  { title: 'KADAL ORAM',   year: '2025' },
  { title: 'KUYIL',        year: '2025' },
]

export const TICKER_ITEMS = [
  'KALAM MAARI POCHCHU wins Best Picture at National Film Awards 2024',
  "IRUL NEEDHI selected for International Competition at Toronto 2024",
  'VAANAM KAAYNDHA earns Cannes Un Certain Regard official selection',
  "NENJAM PESUDHEY — Valentine's Day 2025 worldwide theatrical release",
  'SUTRUM ULAGAM confirmed for Pongal 2025 — record advance bookings',
  'Chiru Productions announces slate of 6 films for 2025–2026',
  'THANDAVAM crosses ₹100 Crore at box office globally',
]

export const FILMS = [
  {
    id: 1,
    title: 'Hosa Jeevana',
    genre: 'Family Drama',
    year: '2026',
    director: 'MohanKumar Hanumaiah',
    duration: '2h 34m',
    rating: '9.1',
    featured: true,
    award: 'National Award',
    bgClass: 'film-bg-1',
    image: 'https://picsum.photos/seed/hosaj/800/1060',
    // Big Buck Bunny — Blender Foundation (public domain, sample placeholder)
    trailerId: 'aqz-KE-bpKQ',
  },
  {
    id: 2,
    title: 'Irul Needhi',
    genre: 'Thriller',
    year: '2023',
    duration: '2h 08m',
    rating: '8.6',
    bgClass: 'film-bg-2',
    image: 'https://picsum.photos/seed/irulneedhi/640/360',
    comingSoon: true,
  },
  {
    id: 3,
    title: 'Vaanam Kaayndha',
    genre: 'Romance',
    year: '2023',
    duration: '1h 52m',
    rating: '8.4',
    award: 'Cannes Selection',
    bgClass: 'film-bg-3',
    image: 'https://picsum.photos/seed/vaanamk/640/360',
    // Tears of Steel — Blender Foundation (cinematic sci-fi romance)
    trailerId: 'R6MlUcmOul8',
  },
  {
    id: 4,
    title: 'Thandavam',
    genre: 'Action',
    year: '2022',
    duration: '2h 20m',
    rating: '8.8',
    bgClass: 'film-bg-4',
    image: 'https://picsum.photos/seed/thandavam/640/360',
    // Cosmos Laundromat — Blender Foundation (dramatic, high-energy)
    trailerId: 'Y-rmzh0PI3c',
  },
  {
    id: 5,
    title: 'Kaanaamal',
    genre: 'Mystery',
    year: '2022',
    duration: '1h 58m',
    rating: '8.2',
    bgClass: 'film-bg-5',
    image: 'https://picsum.photos/seed/kaanaamal/640/360',
    trailerId: 'TNzDMOg_zsw',
  },
  // ── Additional films shown only on the All Films page ───────────
  {
    id: 6,
    title: 'Mara Mara',
    genre: 'Period Epic',
    year: '2021',
    director: 'MohanKumar Hanumaiah',
    duration: '3h 02m',
    rating: '9.0',
    award: 'Best Director — SIIMA',
    bgClass: 'film-bg-1',
    image: 'https://picsum.photos/seed/maramara/640/360',
    trailerId: 'aqz-KE-bpKQ',
  },
  {
    id: 7,
    title: 'Paasam',
    genre: 'Family',
    year: '2021',
    director: 'Megalatha Sankaraiya',
    duration: '2h 12m',
    rating: '8.5',
    bgClass: 'film-bg-3',
    image: 'https://picsum.photos/seed/paasam/640/360',
    trailerId: 'eRsGyueVLvQ',
  },
  {
    id: 8,
    title: 'Nambikkai',
    genre: 'Drama',
    year: '2020',
    director: 'Sathiyendren Rajendran',
    duration: '2h 05m',
    rating: '8.3',
    bgClass: 'film-bg-2',
    image: 'https://picsum.photos/seed/nambikkai/640/360',
    trailerId: 'R6MlUcmOul8',
  },
  {
    id: 9,
    title: 'Sollatha Kathai',
    genre: 'Anthology',
    year: '2020',
    director: 'MohanKumar Hanumaiah',
    duration: '2h 28m',
    rating: '8.7',
    award: 'Special Jury Prize',
    bgClass: 'film-bg-4',
    image: 'https://picsum.photos/seed/sollatha/640/360',
    trailerId: 'Y-rmzh0PI3c',
  },
  {
    id: 10,
    title: 'Mazhai Neram',
    genre: 'Romance',
    year: '2019',
    director: 'Megalatha Sankaraiya',
    duration: '1h 48m',
    rating: '8.1',
    bgClass: 'film-bg-5',
    image: 'https://picsum.photos/seed/mazhai/640/360',
    trailerId: 'TNzDMOg_zsw',
  },
  {
    id: 11,
    title: 'Uyir',
    genre: 'Action Thriller',
    year: '2019',
    director: 'Sathiyendren Rajendran',
    duration: '2h 18m',
    rating: '8.4',
    bgClass: 'film-bg-1',
    image: 'https://picsum.photos/seed/uyir2019/640/360',
    trailerId: 'eRsGyueVLvQ',
  },
  {
    id: 12,
    title: 'Kadavul Irukaan',
    genre: 'Spiritual Drama',
    year: '2018',
    director: 'MohanKumar Hanumaiah',
    duration: '2h 40m',
    rating: '8.9',
    award: 'National Award',
    bgClass: 'film-bg-3',
    image: 'https://picsum.photos/seed/kadavul/640/360',
    trailerId: 'R6MlUcmOul8',
  },
]

export const REELS = [
  {
    id: 1,
    type: 'Showreel',
    title: '2024 Official Showreel',
    duration: '04:32',
    bgClass: 'reel-bg-1',
    image: 'https://picsum.photos/seed/showreel24/640/400',
    trailerId: 'z4d3bNzFkLM',
  },
  {
    id: 2,
    type: 'Making Of',
    title: 'Hosa Jeevana — BTS',
    duration: '12:17',
    bgClass: 'reel-bg-2',
    image: 'https://picsum.photos/seed/hosabts/640/400',
    trailerId: 'SkVqJ1SGeL0',
  },
  {
    id: 3,
    type: 'DoP Reel',
    title: 'Cinematography Highlights',
    duration: '07:44',
    bgClass: 'reel-bg-3',
    image: 'https://picsum.photos/seed/dopreel/640/400',
    trailerId: 'pF5xBF5REIU',
  },
  {
    id: 4,
    type: 'VFX Breakdown',
    title: 'Visual Effects Reel 2024',
    duration: '09:02',
    bgClass: 'reel-bg-4',
    image: 'https://picsum.photos/seed/vfxreel/640/400',
    trailerId: 'UXqq0ZvbOnk',
  },
  // ── Additional reels shown only on the All Reels page ───────────
  {
    id: 5,
    type: 'Director\'s Cut',
    title: 'Mara Mara — Extended Teaser',
    duration: '05:14',
    bgClass: 'reel-bg-1',
    image: 'https://picsum.photos/seed/marabts/640/400',
    trailerId: 'aqz-KE-bpKQ',
  },
  {
    id: 6,
    type: 'Colour Grade',
    title: 'Irul Needhi — Grade Breakdown',
    duration: '06:30',
    bgClass: 'reel-bg-2',
    image: 'https://picsum.photos/seed/irulgrade/640/400',
    trailerId: 'eRsGyueVLvQ',
  },
  {
    id: 7,
    type: 'Score Featurette',
    title: 'A.R. Srinivas — Composing Kaanaamal',
    duration: '08:55',
    bgClass: 'reel-bg-3',
    image: 'https://picsum.photos/seed/arscore/640/400',
    trailerId: 'R6MlUcmOul8',
  },
  {
    id: 8,
    type: 'Making Of',
    title: 'Thandavam — Stunt Design',
    duration: '10:22',
    bgClass: 'reel-bg-4',
    image: 'https://picsum.photos/seed/thandstunt/640/400',
    trailerId: 'Y-rmzh0PI3c',
  },
  {
    id: 9,
    type: 'DoP Reel',
    title: 'Outdoor Cinematography 2023',
    duration: '04:48',
    bgClass: 'reel-bg-1',
    image: 'https://picsum.photos/seed/outdoordop/640/400',
    trailerId: 'TNzDMOg_zsw',
  },
  {
    id: 10,
    type: 'Showreel',
    title: '2022 Studio Showreel',
    duration: '03:58',
    bgClass: 'reel-bg-2',
    image: 'https://picsum.photos/seed/showreel22/640/400',
    trailerId: 'UXqq0ZvbOnk',
  },
]

export const UPCOMING = [
  { id: 1, title: 'Nenjam Pesudhey',  date: '14 Feb 2025 — Valentine\'s Release', director: 'Meera Subramanian',    genre: 'Romance / Drama',    status: 'post',       statusLabel: 'Post Production' },
  { id: 2, title: 'Sutrum Ulagam',    date: 'Pongal 2025',                         director: 'Arun Vijay Kumar',     genre: 'Action / Adventure', status: 'complete',   statusLabel: 'Ready for Release' },
  { id: 3, title: 'Kadal Oram',       date: 'Summer 2025',                         director: 'Priya Chandrasekhar',  genre: 'Thriller',           status: 'production', statusLabel: 'In Production' },
  { id: 4, title: 'Marabu',           date: 'Diwali 2025',                         director: 'Rajesh Krishnamurthy', genre: 'Epic Drama',         status: 'production', statusLabel: 'In Production' },
  { id: 5, title: 'Kuyil',            date: 'TBA 2025',                            director: 'Divya Natarajan',      genre: 'Musical Drama',      status: 'announced',  statusLabel: 'Announced' },
  { id: 6, title: 'Vettai',           date: 'TBA 2026',                            director: 'Karthik Selvan',       genre: 'Action / Crime',     status: 'announced',  statusLabel: 'Announced' },
]

export const AWARDS = [
  'National Award — Best Picture 2024',
  'Filmfare South — Best Director 2024',
  'Toronto IFF — Official Selection 2024',
  'Cannes — Un Certain Regard 2023',
  'SIIMA — Best Film 2023',
  'Edison Awards — Grand Prix 2022',
  'Kerala Film Critics — Best Cinematography 2023',
  'Chennai IFF — Golden Peacock 2022',
]

export const TEAM = [
  {
    id: 1,
    initials: 'MH',
    name: 'MohanKumar Hanumaiah',
    role: 'Director / Founder / Producer',
    bio: "National Award-winning filmmaker with over two decades shaping Tamil cinema\u2019s narrative landscape.",
    genres: ['Epic Drama', 'Social Realism', 'Period Films', 'Romance', 'Family', 'Literary Adaptations', 'Horror', 'Thriller'],
  },
  {
    id: 2,
    initials: 'SR',
    name: 'Sathiyendren Rajendran',
    role: 'Founder / Writer / Producer',
    bio: 'Celebrated for her intimate character studies and lyrical visual storytelling across romance and family dramas.',
    genres: ['Romance', 'Family', 'Literary Adaptations', 'Horror', 'Thriller'],
  },
  {
    id: 3,
    initials: 'MS',
    name: 'Megalatha Sankaraiya',
    role: 'Founder / Writer / Producer',
    bio: 'Celebrated for her intimate character studies and lyrical visual storytelling across romance and family dramas.',
    genres: ['Romance', 'Family', 'Literary Adaptations', 'Horror', 'Thriller'],
  },
  {
    id: 4,
    initials: 'DN',
    name: 'Divya Natarajan',
    role: 'Executive Producer',
    bio: 'Oversees production strategy and international co-productions, having placed Chiru films in 23 countries.',
    genres: ['Production', 'International', 'Distribution'],
  },
]

export const TRACKS = [
  { id: 1, title: 'Mazhaikkaalam',     film: 'Kalam Maari Pochchu', duration: '4:07', youtubeId: 'JGwWNGJdvx8' },
  { id: 2, title: 'Iravin Vizhi',      film: 'Irul Needhi',         duration: '3:52', youtubeId: 'pRpeEdMmmQ0' },
  { id: 3, title: 'Vaanam Thodum',     film: 'Vaanam Kaayndha',     duration: '5:18', youtubeId: 'aqz-KE-bpKQ' },
  { id: 4, title: 'Thandava Natanam',  film: 'Thandavam',           duration: '3:34', youtubeId: 'eRsGyueVLvQ' },
  { id: 5, title: 'Kaattil Oru Kuyil', film: 'Kaanaamal',           duration: '4:43', youtubeId: 'R6MlUcmOul8' },
  { id: 6, title: 'Uyirin Isaiyae',    film: 'Kalam Maari Pochchu', duration: '6:02', youtubeId: 'z4d3bNzFkLM' },
  { id: 7, title: 'Nila Paarthen',     film: 'Vaanam Kaayndha',     duration: '3:28', youtubeId: 'SkVqJ1SGeL0' },
  { id: 8, title: 'Sutrum Vizhi',      film: 'Thandavam',           duration: '4:55', youtubeId: 'TNzDMOg_zsw' },
]

export const WAVE_HEIGHTS = [20,60,40,80,30,90,50,70,35,75,55,45,85,25,65,95,15,100,40,60]
export const WAVE_ANIMS   = ['wave1','wave2','wave3','wave4','wave5']
export const BAR_HEIGHTS  = [30,50,70,90,60,40,80,100,55,75,45,85,35,65,95,20,70,50,60,40,80,30,90,55,75]

// Sorted latest-first by isoDate
export const ANNOUNCEMENTS = [
  {
    id: 1,
    isoDate: '2026-06-15',
    displayDate: '15 June 2026',
    tag: 'Production Update',
    title: 'Hosa Jeevana Begins Principal Photography in Mysuru',
    image: 'https://picsum.photos/seed/ann-hosaj/900/500',
    description: `Chiru Productions is thrilled to announce that the principal photography of our flagship family drama Hosa Jeevana has officially commenced in the historic city of Mysuru, Karnataka. Director MohanKumar Hanumaiah leads a stellar cast and crew across 42 days of scheduled shooting at heritage locations including the Mysore Palace grounds and Brindavan Gardens. The film marks the production house's first major Kannada-language feature and is expected to wrap primary shooting by August 2026.`,
  },
  {
    id: 2,
    isoDate: '2026-05-22',
    displayDate: '22 May 2026',
    tag: 'Award',
    title: 'Chiru Productions Receives Karnataka State Film Award',
    image: 'https://picsum.photos/seed/ann-award26/900/500',
    description: `We are honoured to announce that Chiru Productions has been recognised with the Karnataka State Film Award for Outstanding Contribution to Regional Cinema at the 63rd State Film Awards ceremony held in Bengaluru. The award was received by co-founders MohanKumar Hanumaiah and Sathiyendren Rajendran on behalf of the entire team. This recognition reflects the dedication of our cast, crew, and creative partners who have worked tirelessly to bring authentic Karnataka stories to the screen.`,
  },
  {
    id: 3,
    isoDate: '2026-04-10',
    displayDate: '10 April 2026',
    tag: 'New Project',
    title: 'Chiru Productions Announces Its First Bilingual Thriller',
    image: 'https://picsum.photos/seed/ann-bilingual/900/500',
    description: `Chiru Productions is proud to announce its first bilingual thriller — a Kannada–Tamil co-production tentatively titled Nija, set to go into production in early 2027. The film is written by Megalatha Sankaraiya and will explore the psychological aftermath of a missing-persons case set across the Western Ghats. We are currently in advanced casting discussions and will reveal the full cast lineup at a dedicated press event later this year.`,
  },
  {
    id: 4,
    isoDate: '2026-03-01',
    displayDate: '1 March 2026',
    tag: 'Festival',
    title: 'Irul Needhi Selected for IFFK 2026 Competition Section',
    image: 'https://picsum.photos/seed/ann-iffk/900/500',
    description: `Our critically acclaimed thriller Irul Needhi has been officially selected for the International Competition section of the International Film Festival of Kerala (IFFK) 2026. The film will screen in the Golden Crow Pheasant competition against entries from 22 countries. Director MohanKumar Hanumaiah and lead actor will attend the screening and participate in the post-film Q&A. Tickets for the public screening are available through the IFFK official website.`,
  },
  {
    id: 5,
    isoDate: '2026-01-14',
    displayDate: '14 January 2026',
    tag: 'Release',
    title: 'Vaanam Kaayndha Streaming Exclusively on ZEE5 from Pongal',
    image: 'https://picsum.photos/seed/ann-zee5/900/500',
    description: `Following its successful theatrical run, Vaanam Kaayndha is now streaming exclusively on ZEE5 from Pongal day, 14 January 2026. The film, which earned the Cannes Un Certain Regard selection and collected ₹62 crore at the worldwide box office, is now available in Tamil, Kannada, Telugu, and Malayalam dubbed versions. Subscribers in India, Sri Lanka, Singapore, Malaysia, and the UAE can access the film on the ZEE5 app and website.`,
  },
  {
    id: 6,
    isoDate: '2025-11-03',
    displayDate: '3 November 2025',
    tag: 'Team',
    title: 'Oscar-Winning DOP Joins Hosa Jeevana as Director of Photography',
    image: 'https://picsum.photos/seed/ann-dop/900/500',
    description: `Chiru Productions is delighted to welcome acclaimed cinematographer Prakash Venkataraman as Director of Photography for Hosa Jeevana. Prakash, a three-time Filmfare Award winner known for his mastery of natural light and intimate handheld work, brings a visual language perfectly suited to the warmth and authenticity at the heart of the story. This marks his fourth collaboration with director MohanKumar Hanumaiah following their celebrated work on Thandavam.`,
  },
  {
    id: 7,
    isoDate: '2025-09-18',
    displayDate: '18 September 2025',
    tag: 'Milestone',
    title: 'Thandavam Crosses ₹100 Crore Worldwide — A Chiru First',
    image: 'https://picsum.photos/seed/ann-100cr/900/500',
    description: `Thandavam has become the first Chiru Productions title to cross the ₹100 crore mark at the worldwide box office, achieving the milestone in its 21st day of release. The action drama, which opened to standing ovations across Karnataka and Tamil Nadu, has been particularly strong in overseas markets including the UAE, USA, and UK. The entire team gathered at our Bengaluru studio for a celebration, and director MohanKumar Hanumaiah thanked audiences for making this milestone possible.`,
  },
  {
    id: 8,
    isoDate: '2025-07-04',
    displayDate: '4 July 2025',
    tag: 'Production Update',
    title: 'Kaanaamal Wraps Shooting — Post-Production Begins',
    image: 'https://picsum.photos/seed/ann-kaana/900/500',
    description: `We are pleased to announce that Kaanaamal has successfully completed its 55-day shoot schedule and has entered post-production. The mystery thriller, shot entirely on location across the Nilgiri hills and the heritage quarters of Ooty, is currently undergoing colour grading at Post House Bengaluru. Music director A.R. Srinivas has completed the background score and the film is on track for its planned Diwali 2025 theatrical release.`,
  },
]
