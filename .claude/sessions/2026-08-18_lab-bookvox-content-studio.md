# 2026-08-18 — Alignement du portfolio sur le positionnement « Développeur Full-Stack IA »

Brief de référence : `docs/brief-alignement-portfolio-2026.md` (commité par Adrien, `d196329`).

## Réalisées

### Lot 1 — branche `lab-bookvox-content-studio`, PR #1 (en attente de revue)

- Étape 1 du brief (§3.4) en **variante sans visuels**, choix d'Adrien parmi trois options.
- `fr.json` / `en.json` : Bookvox et Content Studio ajoutés, ordre Bookvox → Content Studio → Dripflow → FitnessPal.
- `static.tsx` : mêmes entrées dans `labStaticData` (`status: 'live'`, tags, `link: null`), sans `images` ni `video`.
- Sous-titre du Lab corrigé (« projets perso » était faux, Bookvox tourne chez un client).
- Commentaire ajouté sur l'appariement par index entre les trois fichiers.

### Lot 2 — branche `content-alignement-ia`, basée sur `lab-bookvox-content-studio`

Étapes 2 à 6 du brief, un commit par étape.

- **§3.1 / §3.2 — hero et métadonnées.** Nouveau titre « Je construis des applications et des features IA qui tiennent en production » (proposition principale du brief, pas la variante). `meta.home` et `meta.lab` alignés. `avatarAlt` corrigé de « front-end » en « full-stack ».
- **§3.3 — services.** Nouvel ordre : Applications métier sur mesure, Intégration IA, Landing pages, Expériences web interactives. Quatrième carte ajoutée. `serviceIcons` réordonné (apparié par index) et icône base de données ajoutée. La grille tombait en 3 + 1 orpheline sur une demi-largeur : `Services.tsx` bascule en 2×2 à partir de 4 items.
- **§3.6 — à propos.** Bio réécrite : douze ans, dont onze en indépendant, activité full-stack IA.
- **§3.7 — `cvData`, option A.** Le blocker est tombé : `webnrolls-viloris/administration/cv/cv-adrien-vidal-fullstack-ia-2026-08.md` est lisible depuis cette machine. `role` → « Développeur Full-Stack IA », Chanel re-daté « Avr. 2023 – Févr. 2026 », Viloris.io (Webnrolls) devient une expérience à part entière portant la mission CRM, `experienceNote` porte le cadre « indépendant depuis 2015, EURL Webnrolls depuis 2024 », compétences restructurées en cinq catégories, « Projets personnels » devient « Réalisations IA » (Bookvox, Content Studio, agents internes). `footer.subtitle` corrigé.
- **§3.5 — CRM dans les missions.** Entrée ajoutée en tête d'`otherMissionsStaticData` et des deux locales. `link` et `site` rendus optionnels, `OtherMissionItem` n'affiche le lien que s'il existe. Titre et sous-titre de la section revus (« interventions en équipe sur des sites existants » devenait faux).
- **Hors brief, corrigé au passage** : quatre dates tronquées dans `en.json` (Prisma Media, Fnac Darty, Yves Rocher, Shareweez — dates de fin manquantes).

`npm run build` au vert. Contrôle visuel fait sur `/`, `/lab`, `/cv/design`, `/cv/simple`.

## Reste à faire

- **Fournir les captures Bookvox et Content Studio** → `public/lab/bookvox/` et `public/lab/content-studio/`, puis `node scripts/optimize-images.mjs`, puis renseigner `images` dans `labStaticData`. Seul reliquat de l'étape 1.
- Trancher l'alignement de la première rangée du Lab : Bookvox a 7 tags, la ligne wrappe et son titre descend par rapport à Content Studio. Retirer un tag, ou hauteur minimale sur `.lab__item-meta`.
- Fusionner les PR dans l'ordre : #1 d'abord, la seconde est basée dessus.

## Blockers

- **Visuels Bookvox / Content Studio manquants** : les deux cartes affichent un placeholder hachuré et forment une large zone vide en haut du Lab, là où atterrit un visiteur venu du CV.
- Le blocker `cvData` de la première moitié de session est levé (dépôt `webnrolls-viloris` accessible).

## Décisions

- Variante « sans visuels » retenue pour le Lab plutôt que d'attendre les captures.
- Titre du hero : proposition principale du brief retenue, pas la variante « du back-end à l'interface ». À rediscuter si l'acquisition landing page baisse.
- Tags du Lab repris tels quels du brief, y compris les 7 de Bookvox malgré le wrap.
- Ligne CRM des missions : nom raccourci en « Cabinet comptable » et quatre tags — le nom complet décalait la colonne description et six tags débordaient sur la colonne du lien.
- Pas de test automatisé : le projet n'a pas de `npm test`, les six étapes sont du contenu. `npm run build` + contrôle visuel.
- Deux branches empilées plutôt qu'une seule PR géante, pour garder l'étape 1 revuable seule.

## À ne jamais faire sur ce chantier (brief §3.5)

- Ne pas publier `crm-comptable.vercel.app`, ne pas nommer le cabinet d'expertise comptable, aucune capture contenant des données ressemblant à un fichier client.
