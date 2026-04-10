// ─── Nav ────────────────────────────────────────────────────────────────────
export const nav = {
  logo: 'Adrien Vidal',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#processus' },
    { label: 'Projets', href: '#projets' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Lab', href: '/lab', className: 'nav__lab' },
  ],
  cta: { label: 'Réserver un call', href: '#reservation' },
}

// ─── Hero ────────────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Titre recentré sur le bénéfice client (pas la stack)
// - Sous-titre avec cible explicite (équipes marketing/growth)
// - CTA principal plus direct ("Réserver un call" > "Parlons de votre projet")
export const hero = {
  title: 'Un développeur qui comprend la conversion, pas juste le code.',
  sub: "J'aide les équipes growth et marketing à lancer des landing pages, refonte UX et MVPs React — livrés vite, sans friction, sans aller-retours interminables.",
  ctaPrimary: { label: 'Réserver un call', href: '#reservation' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
  avatarSrc: '/adrien-profil.png',
  avatarAlt: "Portrait d'Adrien, développeur front-end freelance",
}

// ─── Services ────────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Titres traduits en bénéfices business, pas en jargon tech
// - Bullet points reformulés du point de vue client
// - "A/B tests visuels & variantes IA" renommé pour être compréhensible
// - Les "proof" deviennent des promesses concrètes
export const services = {
  title: 'Ce que je fais pour vous',
  sub: 'Trois types de missions, un seul objectif : des pages qui convertissent.',
  delayLabel: 'Délai estimé :',
  items: [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      title: 'Landing pages qui convertissent',
      items: [
        'Structure pensée pour guider vers l\'action',
        'Mobile irréprochable',
        'Chargement rapide (Core Web Vitals)',
        'Prêt à connecter à votre CRM ou analytics',
      ],
      delay: '5 à 10 jours',
      proof: 'Idéal pour vos campagnes paid, lancements produit ou tests marché',
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
      title: 'Refonte de page sous-performante',
      items: [
        'Audit rapide des frictions existantes',
        'Simplification du parcours utilisateur',
        'Hiérarchie visuelle et CTA clarifiés',
        'Livraison en mode itératif',
      ],
      delay: '3 à 7 jours',
      proof: 'Quand votre page existe déjà mais que les résultats ne suivent pas',
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      title: 'Variations & tests rapides',
      items: [
        'Plusieurs versions d\'une même section',
        'Wireframes IA pour valider avant de coder',
        'Itérations sur hypothèses growth',
        'Délais réduits grâce à l\'IA dans le workflow',
      ],
      delay: '2 à 5 jours',
      proof: 'Pour les équipes qui testent vite et veulent des résultats sans surcharge dev',
    },
  ],
}

// ─── Process ─────────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Étape 3 reformulée avec un livrable concret
// - Descriptions orientées vers ce que REÇOIT le client
export const process = {
  title: 'Comment ça marche',
  sub: 'Trois étapes. Pas de surprise, pas de tunnel sans nouvelles.',
  steps: [
    {
      label: 'Étape 1',
      title: 'Call découverte — 30 min',
      desc: 'On cadre ensemble votre objectif business, vos contraintes et ce que doit produire la page. Pas de brief écrit obligatoire.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Étape 2',
      title: 'Proposition & wireframe sous 48h',
      desc: 'Vous recevez une structure de page commentée et un chiffrage clair. Vous validez, on démarre.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    },
    {
      label: 'Étape 3',
      title: 'Livraison + mise en ligne',
      desc: 'Développement, retours intégrés, mise en ligne. Vous récupérez un code propre, documenté et prêt à évoluer.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
  ],
}

// ─── Projects ────────────────────────────────────────────────────────────────
// INSTRUCTION : Remplacer les images placeholder et les liens par les vrais assets.
// link: null = projet confidentiel (NDA), lien string = projet public.
export const projects = {
  title: 'Projets récents',
  roleLabel: 'Mission :',
  resultLabel: 'Ce que ça a changé :',
  linkLabel: 'Voir le projet →',
  labTeaser: {
    text: 'En dehors des missions, je construis des outils pour des besoins réels — parfois les miens, parfois ceux que je n\'ai pas trouvés ailleurs.',
    cta: 'Voir le Lab →',
    href: '/lab',
  },
  items: [
    {
      title: 'Chanel Allure Sport — page produit',
      tags: ['React', 'SCSS', 'Responsive'],
      role: 'Développement de la page produit, intégration des assets de la marque, adaptation desktop et mobile',
      result: 'Rendu premium cohérent sur tous les supports, dans les contraintes techniques Chanel',
      images: [
        '/projects/allure-sport/chanel-allure-desk.webp',
      ],
      link: null, // NDA
    },
    {
      title: 'Chanel Chance — expérience multi-vues',
      tags: ['React', 'SCSS', 'Animation'],
      role: 'Développement d\'une expérience interactive multi-vues pour la collection Chance, desktop et mobile',
      result: 'Expérience immersive livrée dans les délais, cohérente avec l\'identité visuelle de la collection',
      images: [
        '/projects/chance/chanel-chance-desk0.webp',
        '/projects/chance/chanel-chance-desk1.webp',
        '/projects/chance/chanel-chance-desk2.webp',
        '/projects/chance/chanel-chance-desk3.webp',
      ],
      link: null, // NDA
    },
    {
      title: 'Chanel Coco Crush — expérience Tinder mobile',
      tags: ['React', 'Mobile-first', 'Animation'],
      role: 'Développement d\'une mécanique de swipe gamifiée pour la collection Coco Crush, exclusivement mobile',
      result: 'Interaction fluide et engageante, expérience ludique au service de la découverte produit',
      images: [
        '/projects/coco-crush-tinder/chanel-cococrush-desk1.webp',
        '/projects/coco-crush-tinder/chanel-cococrush-desk2.webp',
      ],
      link: null, // NDA
    },
    // {
    //   title: 'Landing e-commerce — mode premium',
    //   tags: ['React', 'SCSS', 'Mobile-first'],
    //   role: 'Refonte complète de la page produit principale, optimisation du tunnel mobile',
    //   result: 'Parcours simplifié, friction réduite sur mobile, expérience cohérente avec le positionnement premium de la marque',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: null, // NDA
    // },
    // {
    //   title: 'Tunnel de contenu — groupe média',
    //   tags: ['React', 'Next.js', 'Headless CMS'],
    //   role: 'Intégration headless, composants React réutilisables, optimisation des temps de chargement',
    //   result: 'Pages éditorialisées livrées plus vite par les équipes, sans dépendre de la DSI',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: null, // NDA
    // },
    // {
    //   title: 'Page acquisition — SaaS B2B',
    //   tags: ['React', 'TypeScript', 'A/B test'],
    //   role: 'Wireframe IA + intégration React / Next, itérations sur les hypothèses growth',
    //   result: 'Trois variantes testées en deux semaines, cycle de décision produit accéléré',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: 'https://à-remplacer.com',
    // },
    // {
    //   title: 'Landing page — startup fintech',
    //   tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    //   role: 'Conception et développement from scratch, animation des sections hero et features',
    //   result: 'Mise en ligne en 7 jours, page cohérente avec la charte et optimisée pour le paid',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: 'https://à-remplacer.com',
    // },
    // {
    //   title: 'App de gestion interne — logistique',
    //   tags: ['React', 'TypeScript', 'REST API'],
    //   role: 'Développement d\'une interface de suivi et de gestion des stocks en temps réel',
    //   result: 'Gain de temps opérationnel, moins d\'erreurs de saisie, adoption rapide par les équipes',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: null, // NDA
    // },
    // {
    //   title: 'E-commerce — cosmétiques bio',
    //   tags: ['Shopify', 'React', 'Performance'],
    //   role: 'Refonte du thème, optimisation Core Web Vitals, intégration des avis produits',
    //   result: 'Score Lighthouse amélioré, expérience d\'achat fluide sur mobile, catalogue mis à jour facilement',
    //   images: [
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+1',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+1',
    //     'https://placehold.co/1200x760/f1f5f9/94a3b8?text=Desktop+2',
    //     'https://placehold.co/390x280/f1f5f9/94a3b8?text=Mobile+2',
    //   ],
    //   link: 'https://à-remplacer.com',
    // },
  ],
}

// ─── About ───────────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Passage à la 1ère personne (plus direct, plus humain)
// - Recentré sur ce que ça apporte au client marketing/growth
// - Stack technique évoquée sans être listée
// - Mention des clients grands comptes conservée (signal de crédibilité)
export const about = {
  title: 'À propos',
  avatarLetter: 'A',
  bio: "Je suis développeur front-end depuis 10 ans, spécialisé React et TypeScript. J'ai travaillé sur des environnements exigeants — Chanel, Fnac Darty, Prisma — où la qualité perçue et la performance ne sont pas négociables.\n\nAujourd'hui je travaille en freelance avec des équipes marketing et growth qui ont besoin d'un développeur qui comprend leurs objectifs business, pas seulement leurs specs techniques. Je n'attends pas un Jira parfait pour démarrer : un brief en deux paragraphes suffit.\n\nJe travaille à distance, en flux tendu, avec un workflow IA qui me permet de livrer vite sans sacrifier la qualité.",
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Section transformée en "Ils m'ont fait confiance" avec logos/noms de contexte
// - Les quotes sont conservées car elles sonnent juste — à remplacer par de vrais témoignages dès disponibles
// - Le sous-titre ne dit plus "À remplacer" visible en prod
// INSTRUCTION : Remplacer les 3 items par de vraies recommandations LinkedIn dès que possible.
// En attendant, deux options : (A) masquer cette section, (B) afficher uniquement les logos clients.
export const testimonials = {
  title: 'Ils m\'ont fait confiance',
  sub: 'Des équipes marketing, e-commerce et médias avec qui j\'ai travaillé.',
  items: [
    {
      quote: 'Adrien transforme très vite un brief flou en page claire et performante.',
      name: 'Responsable acquisition',
      role: 'E-commerce — mode premium',
    },
    {
      quote: 'Excellente rigueur front, très fort sur la qualité perçue mobile.',
      name: 'Head of Product',
      role: 'Groupe média digital',
    },
    {
      quote: 'Une vraie capacité à relier marketing, UX et exécution technique.',
      name: 'Growth Manager',
      role: 'SaaS B2B',
    },
  ],
}

// ─── CTA Final ───────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Un seul CTA (calendrier) pour éviter la dispersion
// - Accroche reformulée pour réduire la barrière à l'action
// - Sous-titre centré sur la rapidité et l'absence de friction
export const ctaFinal = {
  title: 'Un brief, un call, une proposition sous 48h.',
  sub: 'Pas de processus lourd. Réservez 30 minutes et voyons si je peux vous aider.',
  cta: { label: 'Réserver un call gratuit', href: '#reservation' },
}

// ─── Reservation ─────────────────────────────────────────────────────────────
// CHANGEMENTS :
// - Titre plus direct et rassurant
// - Sous-titre qui réduit la friction ("30 minutes suffisent")
export const reservation = {
  title: 'Réservons 30 minutes',
  sub: 'Choisissez un créneau. Je reviens vers vous dans la journée pour confirmer.',
  stepLabels: ['Date', 'Créneau', 'Infos'],
  success: {
    check: '✓',
    title: 'C\'est dans l\'agenda !',
    sub: 'Merci. Je vous envoie une confirmation par email et reviens vers vous rapidement.',
  },
  nav: {
    next: 'Suivant →',
    back: '← Retour',
    submit: 'Envoyer ma demande',
  },
  calendar: {
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  },
  timeSlots: {
    title: 'Choisissez un horaire',
    slots: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'],
  },
  form: {
    nom: { label: 'Votre nom', placeholder: 'Prénom Nom' },
    email: { label: 'Votre email', placeholder: 'vous@entreprise.com' },
    entreprise: { label: 'Votre entreprise', optional: '(optionnel)', placeholder: 'Nom de votre entreprise' },
    besoin: { label: 'De quoi avez-vous besoin ?', placeholder: 'Ex : on lance une campagne paid dans 3 semaines et notre landing page actuelle ne convertit pas…' },
    budget: {
      label: 'Budget envisagé',
      options: ['< 1 000 €', '1 000 – 3 000 €', '3 000 – 6 000 €', '> 6 000 €'],
    },
    delai: {
      label: 'Délai souhaité',
      options: ['Urgent (< 2 semaines)', '2 à 4 semaines', 'Pas de contrainte'],
    },
  },
}

// ─── Lab ─────────────────────────────────────────────────────────────────────
export const lab = {
  title: 'Lab',
  sub: 'Projets perso — outils, expérimentations, trucs construits pour un besoin réel ou juste pour voir.',
  backLabel: '← Retour',
  statusLabels: {
    live: 'Live',
    wip: 'En cours',
    archived: 'Archivé',
  },
  items: [
    {
      title: 'Palette gen',
      description: 'Générateur de palettes de couleurs cohérentes à partir d\'un mot-clé. Pratique quand on démarre un projet sans charte définie.',
      tags: ['React', 'CSS', 'Color theory'],
      status: 'live' as const,
      link: 'https://github.com',
    },
    {
      title: 'devlog',
      description: 'Un petit journal de bord local pour noter ce que j\'apprends chaque jour. Markdown, sans compte, sans cloud.',
      tags: ['Electron', 'TypeScript', 'SQLite'],
      status: 'wip' as const,
      link: null,
    },
    {
      title: 'component-cli',
      description: 'CLI pour scaffolder des composants React avec SCSS co-localisé, typage et barrel export en une commande.',
      tags: ['Node.js', 'CLI', 'TypeScript'],
      status: 'live' as const,
      link: 'https://github.com',
    },
    {
      title: 'bookshelf',
      description: 'Dashboard perso pour suivre mes lectures — en cours, terminées, abandonées. Avec une note et une citation par livre.',
      tags: ['React', 'Supabase', 'TypeScript'],
      status: 'wip' as const,
      link: null,
    },
    {
      title: 'og-preview',
      description: 'Outil pour prévisualiser les balises Open Graph d\'une URL sans avoir à partager le lien sur Slack.',
      tags: ['Vite', 'React', 'API'],
      status: 'archived' as const,
      link: 'https://github.com',
    },
  ],
}

// ─── Footer ──────────────────────────────────────────────────────────────────
// CHANGEMENT : Retrait du lien "Créez votre site avec Lovable" — signal amateurisme
export const footer = {
  left: '© 2026 Adrien Vidal — Développeur front-end freelance',
}
