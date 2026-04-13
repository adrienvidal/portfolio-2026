export interface ArticleMeta {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

// Ajouter chaque nouvel article ici — du plus ancien (début) au plus récent (fin)
export const articles: ArticleMeta[] = [
  {
    slug: 'influenceur-instagram-ia-ce-que-jai-appris',
    title: "J'ai construit un influenceur Instagram avec de l'IA — voilà ce que j'ai appris",
    date: '2025-11-14',
    description: "Retour honnête sur Dripflow, mon projet de pipeline IA complet pour Instagram — Next.js, Claude SDK, fal.ai, Instagram Graph API. Les trucs qui ont marché, et les galères.",
    tags: ['ia', 'side-project', 'next.js', 'instagram'],
  },
  {
    slug: 'un-quiz-peut-il-vraiment-vendre-un-parfum',
    title: "Un quiz peut-il vraiment vendre un parfum ? L'expérience Chanel Chance",
    date: '2025-11-28',
    description: "Décryptage du mécanisme quiz → page personnalisée → intention d'achat. Entre UX et psychologie de la conversion, ce que j'ai appris en construisant l'expérience Chanel Chance.",
    tags: ['conversion', 'ux', 'interactivite', 'chanel'],
  },
  {
    slug: 'construire-app-fitness-avec-claude-code',
    title: "Ce que j'ai découvert en construisant une app fitness avec Claude Code en live",
    date: '2025-12-12',
    description: "Retour honnête sur la construction de FitnessPal avec Claude Code — React, TypeScript, Supabase, Google OAuth. Ce qui a bluffé, ce qui a résisté, et le workflow qui a émergé.",
    tags: ['claude-code', 'react', 'typescript', 'supabase', 'workflow'],
  },
  {
    slug: 'freelance-nomade-outils-concrets',
    title: 'Freelance et nomade — les outils qui rendent ça possible concrètement',
    date: '2025-12-26',
    description: "Pas un article de lifestyle. La liste réelle des outils, setups et réflexes qui permettent à un développeur freelance de travailler vraiment bien depuis n'importe où.",
    tags: ['freelance', 'remote', 'nomade', 'outils', 'organisation'],
  },
  {
    slug: 'freelance-vs-agence-comment-choisir',
    title: 'Freelance vs agence — comment choisir pour votre projet web',
    date: '2026-01-09',
    description: 'Une comparaison honnête entre agence web et développeur freelance senior, pour choisir le bon profil selon votre projet et votre budget.',
    tags: ['freelance', 'strategie', 'conseils'],
  },
  {
    slug: 'landing-page-vs-experience-interactive',
    title: "Landing page vs expérience interactive — quand l'une est mieux que l'autre",
    date: '2026-01-23',
    description: "Un guide pratique pour choisir entre une landing page classique et une expérience interactive. Les vrais critères, les erreurs fréquentes, et une règle simple pour trancher.",
    tags: ['conversion', 'ux', 'landing-page', 'strategie'],
  },
  {
    slug: 'utiliser-claude-comme-co-developpeur',
    title: "Comment j'utilise Claude comme co-développeur au quotidien (pas juste pour générer du code)",
    date: '2026-02-06',
    description: "La vraie différence entre générer du code et orchestrer avec l'IA — comment j'ai structuré mes prompts avec aText pour que ça devienne un vrai workflow, pas juste un outil ponctuel.",
    tags: ['ia', 'workflow', 'productivite', 'prompts'],
  },
  {
    slug: 'lia-va-t-elle-remplacer-les-developpeurs',
    title: "Je suis développeur front-end. L'IA va-t-elle me remplacer ? Ma réponse honnête",
    date: '2026-02-20',
    description: "Ni panique ni optimisme naïf. Ce qui change vraiment, ce qui reste, et comment je me repositionne face aux outils IA qui transforment le métier de développeur.",
    tags: ['ia', 'metier', 'freelance', 'reflexion'],
  },
  {
    slug: 'pourquoi-vos-landing-pages-ne-convertissent-pas',
    title: 'Pourquoi vos landing pages ne convertissent pas',
    date: '2026-03-06',
    description: 'Les erreurs techniques les plus courantes sur les landing pages marketing, et comment les corriger avec des exemples concrets.',
    tags: ['conversion', 'performance', 'marketing'],
  },
  {
    slug: 'comment-j-utilise-l-ia-pour-livrer-plus-vite',
    title: "Comment j'utilise l'IA pour livrer des projets front-end 2x plus vite",
    date: '2026-03-20',
    description: "Transparence totale sur mon workflow avec Claude et Claude Code en 2025 — ce que ça change, ce que ça ne remplace pas, et pourquoi c'est une bonne nouvelle pour vous.",
    tags: ['ia', 'workflow', 'react', 'freelance'],
  },
  {
    slug: 'ce-que-chanel-ma-appris-sur-les-interfaces-premium',
    title: "Ce que Chanel m'a appris sur les interfaces premium",
    date: '2026-04-03',
    description: "Travailler sur les interfaces digitales de Chanel m'a recalibré sur ce que \"qualité perçue\" veut vraiment dire techniquement. Voilà ce que j'ai rapporté sur tous mes projets depuis.",
    tags: ['qualite', 'frontend', 'luxe', 'animation'],
  },
]
