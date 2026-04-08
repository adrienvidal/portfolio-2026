// ─── Nav ────────────────────────────────────────────────────────────────────
export const nav = {
  logo: 'Adrien Vidal - Développeur Web Freelance',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#processus' },
    { label: 'Projets', href: '#projets' },
    { label: 'À propos', href: '#a-propos' },
  ],
  cta: { label: 'Parlons de votre projet', href: '#reservation' },
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const hero = {
  title: 'Développeur React & TypeScript Fullstack',
  sub: 'Refonte, Landing, MVP, intégrations complexes, je vous accompagne dans la réalisation de votre projet digital.',
  ctaPrimary: { label: 'Parlons de votre projet', href: '#reservation' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
  avatarSrc: '/adrien-profil.png',
  avatarAlt: "Portrait d'Adrien, développeur front-end freelance",
}

// ─── Services ────────────────────────────────────────────────────────────────
export const services = {
  title: 'Services',
  sub: "Des prestations ciblées pour maximiser l'impact de votre front-end.",
  delayLabel: 'Délai :',
  items: [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      title: 'Landing pages premium',
      items: ['Structure optimisée conversion', 'Composants réutilisables', 'Responsive mobile premium', 'Performance Core Web Vitals'],
      delay: '5 à 10 jours',
      proof: 'Pages pensées pour acquisition et ROAS',
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
      title: 'Refonte UX orientée conversion',
      items: ['Audit rapide', 'Simplification du parcours', 'Hiérarchie visuelle', 'Optimisation CTA'],
      delay: '3 à 7 jours',
      proof: 'Meilleure lisibilité et friction réduite',
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      title: 'A/B tests visuels & variantes IA',
      items: ['Variantes de sections', 'Wireframes IA', 'Hypothèses UX', 'Tests rapides'],
      delay: '2 à 5 jours',
      proof: 'Itérations accélérées sans surcharge produit',
    },
  ],
}

// ─── Process ─────────────────────────────────────────────────────────────────
export const process = {
  title: 'Comment ça marche',
  sub: 'Un processus simple en 3 étapes pour aller vite et bien.',
  steps: [
    {
      label: 'Étape 1',
      title: 'Call découverte',
      desc: 'Compréhension du brief, des objectifs business et des contraintes produit.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Étape 2',
      title: 'Prototype & proposition simple',
      desc: 'Structure de page, wireframe IA, composants et roadmap.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    },
    {
      label: 'Étape 3',
      title: 'Production & itérations rapides',
      desc: 'Développement front, optimisations UX, retours et mise en ligne.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
  ],
}

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = {
  title: 'Projets & Résultats',
  roleLabel: 'Rôle :',
  resultLabel: 'Résultat :',
  items: [
    {
      title: 'Landing e-commerce premium',
      role: 'Refonte front + optimisation CTA',
      result: 'Parcours plus fluide et expérience mobile premium',
    },
    {
      title: 'Tunnel média éditorial',
      role: 'Composants headless + performance',
      result: 'Meilleure vitesse et production plus rapide',
    },
    {
      title: 'Page acquisition React / Next',
      role: 'Wireframe IA + intégration front',
      result: 'Itérations marketing accélérées',
    },
  ],
}

// ─── About ───────────────────────────────────────────────────────────────────
export const about = {
  title: 'À propos',
  avatarLetter: 'A',
  bio: "Adrien aide les marques, e-commerces et médias à concevoir des expériences web plus performantes grâce à un front-end premium, une UX claire et l'accélération IA. Son expertise combine intégration React / Next, optimisation des parcours, composants réutilisables et vision produit. Fort d'expériences sur des environnements exigeants comme Chanel, Fnac Darty ou Prisma, il transforme des briefs marketing en pages rapides, élégantes et conçues pour convertir. Son approche relie technologie, business et exécution rapide pour offrir des livrables fiables à fort impact.",
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = {
  title: "Ce qu'on dit de moi",
  sub: 'À remplacer par vos recommandations LinkedIn',
  items: [
    {
      quote: 'Adrien transforme très vite un brief flou en page claire et performante.',
      name: 'Client 1',
      role: 'À remplacer par recommandation LinkedIn',
    },
    {
      quote: 'Excellente rigueur front, très fort sur la qualité perçue mobile.',
      name: 'Client 2',
      role: 'À remplacer par recommandation LinkedIn',
    },
    {
      quote: 'Une vraie capacité à relier marketing, UX et exécution technique.',
      name: 'Client 3',
      role: 'À remplacer par recommandation LinkedIn',
    },
  ],
}

// ─── CTA Final ───────────────────────────────────────────────────────────────
export const ctaFinal = {
  title: 'Transformons vos briefs marketing en pages qui performent.',
  sub: "React, Next, UX premium, IA et rapidité d'exécution pour des pages conçues pour convertir.",
  cta: { label: 'Parlons de votre projet', href: '#reservation' },
}

// ─── Reservation ─────────────────────────────────────────────────────────────
export const reservation = {
  title: 'Réservez un créneau',
  sub: 'Choisissez une date, un créneau, puis répondez à quelques questions.',
  stepLabels: ['Date', 'Créneau', 'Infos'],
  success: {
    check: '✓',
    title: 'Demande envoyée !',
    sub: 'Merci, on revient vers vous rapidement pour confirmer le créneau choisi.',
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
    besoin: { label: 'En deux lignes, de quoi avez-vous besoin ?', placeholder: 'Ex : refonte de notre landing page…' },
    budget: {
      label: 'Budget',
      options: ['< 1 000 €', '1 000 – 3 000 €', '3 000 – 6 000 €', '> 6 000 €'],
    },
    delai: {
      label: 'Délai souhaité',
      options: ['Immédiat', '2 à 4 semaines', '> 1 mois'],
    },
  },
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footer = {
  left: '© 2026 Adrien — Développeur front-end freelance',
  right: { label: 'Créez votre site avec Lovable →', href: '#' },
}
