// ─── Service Icons (SVG paths — locale-agnostic) ─────────────────────────────
export const serviceIcons: React.ReactNode[] = [
  <path key="0" strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />,
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
]

// ─── Process Icons (SVG paths — locale-agnostic) ──────────────────────────────
export const processIcons: React.ReactNode[] = [
  <path key="0" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
]

// ─── Client Logos ─────────────────────────────────────────────────────────────
export const clientLogos = [
  { name: 'Chanel', src: '/clients/chanel.webp' },
  { name: 'Fnac Darty', src: '/clients/fnacdarty.webp' },
  { name: 'Prisma Media', src: '/clients/prismamedia.webp' },
  { name: 'Yves Rocher', src: '/clients/yvesrocher.webp' }
]

// ─── Projects Static Data (images, videos, links, tags) ───────────────────────
export const HOME_ORDER = [0, 1, 2, 3, 4, 5]
export const PROJECTS_SEE_ALL_HREF = '/projets'
export const LAB_HREF = '/lab'

export const projectsStaticData = [
  {
    tags: ['React', 'Framer Motion', 'Mobile-first'],
    video: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1776000915/chanel-cococrush_u70fyb.mov',
    images: [
      '/projects/coco-crush-tinder/chanel-cococrush-desk1.webp',
      '/projects/coco-crush-tinder/chanel-cococrush-desk2.webp'
    ],
    link: 'https://www.chanel.com/gb/fine-jewellery/find-your-crush/?previewdate=2024-02-02T20%3A38'
  },
  {
    tags: ['React', 'Framer Motion', 'Accessibilité'],
    video: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1776000956/chanel-chance_dcvzl0.mov',
    images: [
      '/projects/chance/chanel-chance-desk0.webp',
      '/projects/chance/chanel-chance-desk1.webp',
      '/projects/chance/chanel-chance-desk2.webp',
      '/projects/chance/chanel-chance-desk3.webp'
    ],
    link: 'https://www.chanel.com/fr/parfums/chance/eau-splendide/'
  },
  {
    tags: ['React', 'GSAP', 'SEO'],
    video: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1776000903/chanel-allure_zclgql.mov',
    images: ['/projects/allure-sport/chanel-allure-desk.webp'],
    link: 'https://www.chanel.com/fr/parfums/allure-homme-sport/'
  },
  {
    tags: ['React', 'Animation', 'SEO'],
    images: ['/projects/lookthisway/chanel-lookthisway-desk1.webp'],
    link: 'https://www.chanel.com/gb/makeup/look-this-way/genderless-beauty/'
  },
  {
    tags: ['React', 'Animation', 'Accessibilité'],
    images: [
      '/projects/sublimage/chanel-sublimage-desk1.webp',
      '/projects/sublimage/chanel-sublimage-desk2.webp'
    ],
    link: 'https://www.chanel.com/fr/soins/sublimage/'
  },
  {
    tags: ['React', 'Animation', 'Accessibilité'],
    images: ['/projects/manufacture/chanel-manufacture-desk1.webp'],
    link: 'https://www.chanel.com/fr/horlogerie/manufacture-horlogere/?previewdate=2025-08-27T08%3A01'
  },
  {
    tags: ['React', 'Animation', 'SEO'],
    images: ['/projects/n5/chanel-n5-desk1.webp'],
    link: 'https://www.chanel.com/fr/parfums/chanel-number-5/'
  },
  {
    tags: ['React', 'SEO', 'Accessibilité'],
    images: ['/projects/csr/chanel-csr-desk1.webp'],
    link: 'https://www.chanel.com/fr/developpement-durable/'
  },
  {
    tags: ['React', 'Animation', 'Accessibilité'],
    images: ['/projects/31lerouge/chanel-31lerouge-desk1.webp'],
    link: 'https://www.chanel.com/fr/maquillage/31-le-rouge/'
  }
]

// ─── Other Missions Static Data (tags, links) ─────────────────────────────────
export const otherMissionsStaticData = [
  {
    tags: ['React', 'FreeMarker', 'API Rest', 'tailwindcss'],
    link: 'https://www.darty.fr',
    site: 'darty.fr'
  },
  {
    tags: ['React', 'FreeMarker', 'Web Components', 'API Rest'],
    link: 'https://www.femmeactuelle.fr',
    site: 'femmeactuelle.fr'
  },
  {
    tags: ['A/B Testing', 'Quiz', 'E-commerce', 'ABTASTY'],
    link: 'https://www.yves-rocher.fr',
    site: 'yves-rocher.fr'
  }
]

// ─── Lab Static Data (status, images, videos, links, tags) ───────────────────
export type LabStatus = 'live' | 'wip' | 'archived'

export type LabStaticItem = {
  status: LabStatus
  tags: string[]
  link: string | null
  images?: string[]
  video?: string
  videoDesk?: string
  videoMob?: string
}

export const labStaticData: LabStaticItem[] = [
  {
    status: 'live',
    tags: ['React', 'TypeScript', 'Supabase', 'Google OAuth'],
    link: 'https://github.com/adrienvidal/fitness-app',
    images: [
      '/lab/fitnesspal/finesspal-mob1.webp',
      '/lab/fitnesspal/finesspal-mob2.webp',
      '/lab/fitnesspal/finesspal-mob3.webp'
    ]
  },
  {
    status: 'wip',
    tags: ['Next.js', 'Claude SDK', 'fal.ai', 'Instagram Graph API'],
    link: null,
    videoDesk: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1775905776/dripflowgif_jmifao.mp4',
    videoMob: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1775997385/dripflow-demo_n7uxsn.mov',
    images: [
      '/lab/dripflow/dripflow-mob1.webp',
      '/lab/dripflow/dripflow-mob2.webp',
      '/lab/dripflow/dripflow-mob3.webp',
      '/lab/dripflow/dripflow-mob4.webp',
      '/lab/dripflow/dripflow-mob5.webp',
      '/lab/dripflow/dripflow-mob6.webp'
    ]
  }
]
