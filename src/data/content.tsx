// ─── Nav ────────────────────────────────────────────────────────────────────
export const nav = {
  logo: 'Adrien Vidal',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#processus' },
    { label: 'Projets', href: '#projets' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Blog', href: '/blog', className: 'nav__page' },
    { label: 'Lab', href: '/lab', className: 'nav__lab' }
  ],
  cta: { label: 'Réserver un call', href: '#reservation' }
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const hero = {
  title: 'Un développeur qui comprend la conversion, pas juste le code.',
  sub: "J'aide les startups et équipes produit à construire des expériences web interactives, intégrer l'IA dans leurs interfaces et lancer des campagnes digitales premium — vite, bien, sans friction.",
  ctaPrimary: { label: 'Réserver un call', href: '#reservation' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
  avatarSrc: '/adrien-profil.webp',
  avatarAlt: "Portrait d'Adrien, développeur front-end freelance"
}

// ─── Clients ─────────────────────────────────────────────────────────────────
export const clients = {
  label: "Ils m'ont fait confiance",
  logos: [
    { name: 'Chanel', src: '/clients/chanel.webp' },
    { name: 'Fnac Darty', src: '/clients/fnacdarty.webp' },
    { name: 'Prisma Media', src: '/clients/prismamedia.webp' },
    { name: 'Yves Rocher', src: '/clients/yvesrocher.webp' }
  ]
}

// ─── Services ────────────────────────────────────────────────────────────────
export const services = {
  title: 'Ce que je fais pour vous',
  sub: 'Des interfaces qui vont plus loin que la page statique.',
  items: [
    {
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
        />
      ),
      title: 'Expériences web interactives',
      items: [
        'Quiz et diagnostics produit',
        'Expériences multi-vues et gamification',
        'Configurateurs et mécaniques de découverte',
        'Animations avancées (GSAP, Framer Motion)'
      ],
      proof: 'Quand une landing page classique ne suffit plus pour engager votre audience'
    },
    {
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      ),
      title: 'Intégration IA dans votre produit',
      items: [
        'Génération de contenu (Claude, OpenAI)',
        'Recommandation et personnalisation produit',
        "Pipeline IA avec workflow d'approbation humain",
        'Automatisation et publication via API (Meta, etc.)'
      ],
      proof: "Pour ajouter une feature IA concrète sans recruter un profil ML ou data"
    },
    {
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      ),
      title: 'Landing pages & campagnes premium',
      items: [
        "Structure pensée pour guider vers l'action",
        'Mobile irréprochable, chargement rapide',
        'Vidéos promotionnelles et animations',
        "Connecté à votre CRM, analytics ou tunnel e-commerce"
      ],
      proof: "Pages de campagne, lancements produit et pages d'acquisition au niveau des grandes marques"
    }
  ]
}

// ─── Process ─────────────────────────────────────────────────────────────────
export const process = {
  title: 'Comment ça marche',
  sub: 'Trois étapes. Pas de surprise, pas de tunnel sans nouvelles.',
  steps: [
    {
      label: 'Étape 1',
      title: 'Call découverte — 30 min',
      desc: 'On cadre ensemble votre objectif business, vos contraintes et ce que doit produire la page. Pas de brief écrit obligatoire.',
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
        />
      )
    },
    {
      label: 'Étape 2',
      title: 'Proposition & wireframe sous 48h',
      desc: 'Vous recevez une structure de page commentée et un chiffrage clair. Vous validez, on démarre.',
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
        />
      )
    },
    {
      label: 'Étape 3',
      title: 'Livraison + mise en ligne',
      desc: 'Développement, retours intégrés, mise en ligne. Vous récupérez un code propre, documenté et prêt à évoluer.',
      icon: (
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      )
    }
  ]
}

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = {
  title: 'Projets récents',
  roleLabel: 'Mission :',
  resultLabel: 'Ce que ça a changé :',
  linkLabel: 'Voir le projet →',
  seeAllLabel: 'Voir tous les projets →',
  seeAllHref: '/projets',
  allProjectsTitle: 'Tous les projets',
  backLabel: '← Accueil',
  homeOrder: [0, 1, 2, 3, 4, 5],
  labTeaser: {
    text: "En dehors des missions, je construis des outils pour des besoins réels — parfois les miens, parfois ceux que je n'ai pas trouvés ailleurs.",
    cta: 'Voir le Lab →',
    href: '/lab'
  },
  items: [
    {
      title: 'Chanel Coco Crush — expérience interactive bijoux',
      tags: ['React', 'Framer Motion', 'Mobile-first'],
      role: "Développement d'une expérience mobile gamifiée : quiz de profil bijoux, swipe à la Tinder pour constituer une liste de souhaits, génération d'un QR code personnel utilisé lors d'un événement physique Chanel",
      result: "Expérience phygitale complète livrée pour un événement éphémère — du diagnostic produit jusqu'à la liste de souhaits scannable en boutique",
      images: [
        '/projects/coco-crush-tinder/chanel-cococrush-desk1.webp',
        '/projects/coco-crush-tinder/chanel-cococrush-desk2.webp'
      ],
      link: 'https://www.chanel.com/gb/fine-jewellery/find-your-crush/?previewdate=2024-02-02T20%3A38'
    },
    {
      title: 'Chanel Chance — campagne interactive multi-vues',
      tags: ['React', 'Framer Motion', 'Accessibilité'],
      role: "Développement d'une campagne landing page multi-vues avec vidéos promotionnelles, et d'un quiz diagnostic permettant au visiteur d'identifier le parfum Chance correspondant à son profil",
      result: "Expérience de découverte produit personnalisée : chaque visiteur arrive sur une page résultat dédiée à son parfum, augmentant la pertinence et l'intention d'achat",
      images: [
        '/projects/chance/chanel-chance-desk0.webp',
        '/projects/chance/chanel-chance-desk1.webp',
        '/projects/chance/chanel-chance-desk2.webp',
        '/projects/chance/chanel-chance-desk3.webp'
      ],
      link: 'https://www.chanel.com/fr/parfums/chance/eau-splendide/'
    },
    {
      title: 'Chanel Allure Sport — campagne & tunnel produit',
      tags: ['React', 'GSAP', 'SEO'],
      role: "Développement d'une landing page campagne avec vidéos promotionnelles, animations GSAP et liste produit avec ajout au panier",
      result: "Campagne immersive connectée au tunnel e-commerce Chanel — de la découverte produit jusqu'à l'achat en une seule page",
      images: ['/projects/allure-sport/chanel-allure-desk.webp'],
      link: 'https://www.chanel.com/fr/parfums/allure-homme-sport/'
    },
    {
      title: 'Chanel N°5 — campagne landing page',
      tags: ['React', 'Animation', 'SEO'],
      role: 'Développement de la landing page campagne N°5 avec vidéos promotionnelles, animations CSS/JS et intégration des assets de la marque',
      result: "Rendu premium cohérent avec l'identité iconique du parfum, dans les contraintes techniques Chanel",
      images: ['/projects/n5/chanel-n5-desk1.webp'],
      link: 'https://www.chanel.com/fr/parfums/chanel-number-5/'
    },
    {
      title: 'Chanel Sublimage — campagne soin luxe',
      tags: ['React', 'Animation', 'Accessibilité'],
      role: 'Développement de la landing page campagne Sublimage avec animations de présentation et intégration des assets haute couture',
      result: 'Rendu premium aligné avec le positionnement luxe de la gamme soin Chanel',
      images: [
        '/projects/sublimage/chanel-sublimage-desk1.webp',
        '/projects/sublimage/chanel-sublimage-desk2.webp'
      ],
      link: 'https://www.chanel.com/fr/soins/sublimage/'
    },
    {
      title: 'Chanel Manufacture — page éditoriale',
      tags: ['React', 'Animation', 'Accessibilité'],
      role: "Développement d'une page éditoriale dédiée aux savoir-faire de la Manufacture Chanel",
      result: "Mise en valeur des métiers d'art Chanel, rendu soigné et adaptation mobile réussie",
      images: ['/projects/manufacture/chanel-manufacture-desk1.webp'],
      link: 'https://www.chanel.com/fr/horlogerie/manufacture-horlogere/?previewdate=2025-08-27T08%3A01'
    },
    {
      title: 'Chanel CSR — page engagements',
      tags: ['React', 'SEO', 'Accessibilité'],
      role: 'Développement de la page RSE Chanel, structuration du contenu éditorial et intégration des visuels institutionnels',
      result: 'Page institutionnelle claire et accessible, cohérente avec les standards de communication Chanel',
      images: ['/projects/csr/chanel-csr-desk1.webp'],
      link: 'https://www.chanel.com/fr/developpement-durable/'
    },
    {
      title: 'Chanel 31 Le Rouge — campagne maquillage',
      tags: ['React', 'Animation', 'Accessibilité'],
      role: 'Développement de la landing page campagne 31 Le Rouge, animations CSS/JS et cohérence desktop / mobile',
      result: 'Page campagne livrée dans les contraintes de la marque, rendu visuel irréprochable',
      images: ['/projects/31lerouge/chanel-31lerouge-desk1.webp'],
      link: 'https://www.chanel.com/fr/maquillage/31-le-rouge/'
    },
    {
      title: 'Chanel Look This Way — expérience éditoriale',
      tags: ['React', 'Animation', 'SEO'],
      role: "Développement d'une expérience éditoriale immersive pour la campagne Look This Way, desktop et mobile",
      result: "Expérience visuelle engageante livrée dans les délais, cohérente avec l'identité de la campagne",
      images: ['/projects/lookthisway/chanel-lookthisway-desk1.webp'],
      link: 'https://www.chanel.com/gb/makeup/look-this-way/genderless-beauty/'
    },
  ]
}

// ─── Other Missions ───────────────────────────────────────────────────────────
export const otherMissions = {
  title: 'Contributions',
  subtitle: 'Interventions en équipe sur des sites existants à fort trafic',
  items: [
    {
      name: 'Fnac Darty',
      description:
        "Développement front-end au sein de l'équipe Darty Commercialité — refonte de la page produit, liste produit et pages push. Conception des composants de mise en avant cross-sell : assurances, garanties, services associés. Intégration de la page marque.",
      tags: ['React', 'FreeMarker', 'API Rest', 'tailwindcss'],
      site: 'darty.fr',
      link: 'https://www.darty.fr'
    },
    {
      name: 'Prisma Media',
      description:
        "Développement front-end au sein du pôle Féminin (femmeactuelle.fr, cuisineactuelle.fr) — refonte des pages Home, Article, Auteur et Carnet de recettes. Développement de web components sur mesure : module de gestion des avis et étoiles sur les pages recettes, module d'authentification. Extension Chrome interne pour la gestion des code reviews GitLab via webhooks Google Chat.",
      tags: ['React', 'FreeMarker', 'Web Components', 'API Rest'],
      site: 'femmeactuelle.fr',
      link: 'https://www.femmeactuelle.fr'
    },
    {
      name: 'Yves Rocher',
      description:
        "Landing pages campagnes pour les gammes Lifting Végétal et Parfum. Développement d'un quiz de diagnostic pour orienter le visiteur vers le fond de teint adapté à son profil. Refonte e-commerce, intégration de la recommandation produit Target2Sell et création d'A/B tests via ABTASTY.",
      tags: ['A/B Testing', 'Quiz', 'E-commerce', 'ABTASTY'],
      site: 'yves-rocher.fr',
      link: 'https://www.yves-rocher.fr'
    }
  ]
}

// ─── About ───────────────────────────────────────────────────────────────────
export const about = {
  title: 'À propos',
  avatarLetter: 'A',
  bio: "Je suis développeur front-end depuis 10 ans, spécialisé React et TypeScript. J'ai travaillé sur des environnements exigeants — Chanel, Fnac Darty, Prisma — où la qualité perçue et la performance ne sont pas négociables.\n\nAujourd'hui je travaille en freelance avec des équipes marketing et growth qui ont besoin d'un développeur qui comprend leurs objectifs business, pas seulement leurs specs techniques. Je n'attends pas un Jira parfait pour démarrer : un brief en deux paragraphes suffit.\n\nJe travaille à distance, en flux tendu, avec un workflow IA qui me permet de livrer vite sans sacrifier la qualité."
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
// INSTRUCTION : Remplacer par de vraies recommandations LinkedIn dès que possible.
export const testimonials = {
  title: "Ils m'ont fait confiance",
  sub: "Des équipes marketing, e-commerce et médias avec qui j'ai travaillé.",
  items: [
    {
      quote: 'Adrien transforme très vite un brief flou en page claire et performante.',
      name: 'Responsable acquisition',
      role: 'E-commerce — mode premium'
    },
    {
      quote: 'Excellente rigueur front, très fort sur la qualité perçue mobile.',
      name: 'Head of Product',
      role: 'Groupe média digital'
    },
    {
      quote: 'Une vraie capacité à relier marketing, UX et exécution technique.',
      name: 'Growth Manager',
      role: 'SaaS B2B'
    }
  ]
}

// ─── CTA Final ───────────────────────────────────────────────────────────────
export const ctaFinal = {
  title: 'Un brief, un call, une proposition sous 48h.',
  sub: 'Pas de processus lourd. Réservez 30 minutes et voyons si je peux vous aider.',
  cta: { label: 'Réserver un call gratuit', href: '#reservation' }
}

// ─── Reservation ─────────────────────────────────────────────────────────────
export const reservation = {
  title: 'Réservons 30 minutes',
  sub: 'Choisissez un créneau. Je reviens vers vous dans la journée pour confirmer.',
  stepLabels: ['Date', 'Créneau', 'Infos'],
  success: {
    check: '✓',
    title: "C'est dans l'agenda !",
    sub: 'Merci. Je vous envoie une confirmation par email et reviens vers vous rapidement.'
  },
  nav: {
    next: 'Suivant →',
    back: '← Retour',
    submit: 'Envoyer ma demande'
  },
  calendar: {
    months: [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ],
    weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
  },
  timeSlots: {
    title: 'Choisissez un horaire',
    slots: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00']
  },
  form: {
    nom: { label: 'Votre nom', placeholder: 'Prénom Nom' },
    email: { label: 'Votre email', placeholder: 'vous@entreprise.com' },
    entreprise: {
      label: 'Votre entreprise',
      optional: '(optionnel)',
      placeholder: 'Nom de votre entreprise'
    },
    besoin: {
      label: 'De quoi avez-vous besoin ?',
      placeholder: "Ex : on lance une campagne paid dans 3 semaines et notre landing page actuelle ne convertit pas…"
    },
    budget: {
      label: 'Budget envisagé',
      options: ['< 1 000 €', '1 000 – 3 000 €', '3 000 – 6 000 €', '> 6 000 €']
    },
    delai: {
      label: 'Délai souhaité',
      options: ['Urgent (< 2 semaines)', '2 à 4 semaines', 'Pas de contrainte']
    }
  }
}

// ─── Lab ─────────────────────────────────────────────────────────────────────
export const lab = {
  title: 'Lab',
  sub: 'Projets perso — outils, expérimentations, trucs construits pour un besoin réel ou juste pour voir.',
  backLabel: '← Retour',
  statusLabels: {
    live: 'Live',
    wip: 'En cours',
    archived: 'Archivé'
  },
  items: [
    {
      title: 'FitnessPal',
      description:
        "App de suivi d'entraînement complète, construite en live coding assisté par IA. Programme PPL/Cardio sur 4 jours, fiches exercice avec illustrations musculaires, saisie du poids, historique des séances par calendrier, thème clair/sombre, authentification Google. Un exemple concret de ce qu'un workflow IA permet de livrer vite sans sacrifier la qualité.",
      tags: ['React', 'TypeScript', 'Supabase', 'Google OAuth'],
      status: 'live' as const,
      link: 'https://github.com/adrienvidal/fitness-app',
      images: [
        '/lab/fitnesspal/finesspal-mob1.webp',
        '/lab/fitnesspal/finesspal-mob2.webp',
        '/lab/fitnesspal/finesspal-mob3.webp'
      ]
    },
    {
      title: 'Dripflow',
      description:
        "Pipeline de contenu Instagram automatisé propulsé par l'IA. Upload d'une image de référence → Claude Sonnet génère des prompts Midjourney optimisés → workflow d'approbation humain → génération d'images via fal.ai → sélection des visuels → génération de captions en 3 tons (mystérieux, décontracté, artistique) → assemblage du carousel → publication automatique sur Instagram via l'Instagram Graph API (Meta). Conçu pour gérer le compte d'un influenceur/influenceuse virtuelle.",
      tags: ['Next.js', 'Claude SDK', 'fal.ai', 'Instagram Graph API'],
      status: 'wip' as const,
      link: null,
      video: 'https://res.cloudinary.com/dewqbg9at/video/upload/v1775905776/dripflowgif_jmifao.mp4',
      images: [
        '/lab/dripflow/dripflow-desk1.webp',
        '/lab/dripflow/dripflow-desk2.webp',
        '/lab/dripflow/dripflow-desk3.webp',
        '/lab/dripflow/dripflow-desk4.webp',
        '/lab/dripflow/dripflow-desk5.webp'
      ]
    }
  ]
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footer = {
  left: '© 2026 Adrien Vidal — Développeur React & TypeScript freelance',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrien-vidal-308b4864/' },
    { label: 'GitHub', href: 'https://github.com/adrienvidal' }
  ]
}
