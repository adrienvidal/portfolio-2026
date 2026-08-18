# Product

<!-- impeccable:product-schema 1 -->

> Établi le 2026-08-18 avec Adrien (entretien init v4). Sources : réponses d'Adrien,
> `docs/brief-alignement-portfolio-2026.md`, et le code de `adrienvidal.com`.

## Platform

web

## Users

**Audience principale, celle qui décide de la forme du site : recruteurs et donneurs d'ordre
cherchant un développeur full-stack IA.** Ils arrivent depuis le CV
(`cv-adrien-vidal-fullstack-ia-2026-08`), qui porte trois liens en en-tête : `adrienvidal.com`,
`github.com/adrienvidal`, `viloris.io`. Ils scannent les trois en quelques minutes, souvent avec
le CV sous les yeux, et cherchent à vérifier une seule chose : que ce candidat a livré et
maintenu des applications, pas seulement branché une API. Le site doit tenir en 90 secondes.

**Audience secondaire, réelle et conservée : équipes marketing et startups** cherchant une
landing page ou une campagne. Elle reste une source de missions et ne doit pas disparaître de
l'offre — mais elle ne pilote plus la structure ni la hiérarchie de la page.

Job du visiteur, dans les deux cas : décider si Adrien sait construire *sa* chose, et savoir
comment le contacter.

## Product Purpose

`adrienvidal.com` est le seul des trois liens du CV qu'Adrien maîtrise entièrement — GitHub
expose des dépôts qui ne sont pas ceux du CV, `viloris.io` porte la marque de prestation. Le site
doit donc porter seul la preuve du positionnement « Développeur Full-Stack IA » : applications
métier, features IA en service chez des clients, et un historique d'interfaces premium qui
atteste de l'exigence d'exécution.

Succès : un recruteur arrivé du CV reconnaît le même profil sur la page d'accueil, sans avoir à
descendre jusqu'au Lab au troisième clic.

## Positioning

**Douze ans d'exigence d'interfaces premium — Chanel, Fnac Darty, Prisma Media, Yves Rocher —
appliqués à un terrain où le soin d'exécution est rare : les produits IA.**

C'est la combinaison qu'un concurrent ne peut pas reprendre honnêtement. Les développeurs qui
intègrent des LLM sont nombreux ; ceux qui arrivent d'environnements où la qualité perçue et la
performance ne se négociaient pas le sont beaucoup moins. La preuve tient dans les noms, et ils
sont vérifiables.

## Operating Context

- Le site est évalué **en parallèle du CV et des deux autres liens**, pas isolément. Une
  contradiction entre le CV et la page (intitulé, dates, périmètre) se voit immédiatement.
- La lecture type est un scan rapide, souvent sur desktop en contexte de recrutement, parfois sur
  mobile.
- La prestation se vend **en forfait, à périmètre défini**, pas en régie. Le premier contact
  passe par un formulaire en trois étapes, puis un call de 30 min, puis une proposition chiffrée.
- Le site est bilingue FR/EN (`next-intl`, routes `/` et `/en`). Tout texte ajouté existe en deux
  versions.
- Les réalisations sont réparties entre `/` (missions), `/projets`, `/lab` (outils et
  applications) et `/cv`.

## Capabilities and Constraints

- Next.js App Router, React, TypeScript, SCSS, i18n `next-intl`. Déploiement Vercel.
- **Contenu du Lab apparié par index** entre `src/messages/fr.json`, `en.json` et
  `src/data/static.tsx`. Les trois tableaux doivent garder le même ordre et la même longueur ; un
  décalage attribue le texte d'un projet aux visuels d'un autre sans erreur au build.
- Les vidéos passent par Cloudinary, jamais de `.mp4` dans le dépôt. Les images vont dans
  `public/<section>/` en `.webp`, via `scripts/optimize-images.mjs`.
- **Interdits absolus (brief §3.5)** : ne jamais publier `crm-comptable.vercel.app`, ne jamais
  nommer le cabinet d'expertise comptable, aucune capture contenant des données ressemblant à un
  fichier client.
- La prestation est encadrée par l'EURL **Webnrolls**, marque **Viloris.io**. Ce que dit le site
  doit rester cohérent avec ce cadre.
- Le CV existe en deux sources parallèles (les pages `/cv` du site et le PDF du dépôt
  `webnrolls-viloris`). **Décision ouverte, non tranchée :** les maintenir toutes deux, ou réduire
  `/cv` à un téléchargement.
- **Décision ouverte, non tranchée :** le plafond de la grille de budget du formulaire
  (« > 6 000 € » aujourd'hui) est calibré pour de la landing page et pas pour de l'applicatif.

## Brand Commitments

- Le nom **Adrien Vidal**, et la cohérence avec la marque **Viloris.io / Webnrolls**.
- **Les engagements chiffrés du site sont tenus et ne doivent pas être dilués en formules
  vagues** : « proposition sous 48h », « réponse sous 24h », « en forfait, à périmètre défini,
  tests et documentation compris ». La voix est factuelle, sans superlatif.
- **Aucune identité visuelle n'est figée.** Couleurs, typographie, portraits, mise en page : rien
  n'est engagé. L'état actuel (rampe slate de Tailwind, `blue-500`, Inter, portraits circulaires)
  est un héritage de scaffolding, pas une identité choisie — il ne doit pas être traité comme une
  contrainte à préserver.

## Evidence on Hand

Preuves réelles, disponibles, à utiliser :

- **Logos clients** — Chanel, Fnac Darty, Prisma Media, Yves Rocher (`public/`, section
  `Clients`). Classés non négociables par le brief §2.
- **Six réalisations Chanel** détaillées dans `projects.items` (Coco Crush, Chance, Allure Sport,
  Look This Way, Sublimage, Manufacture), avec vignettes.
- **Captures d'applications IA déjà optimisées et libres de publication** :
  `public/lab/bookvox/` (2 captures desktop) et `public/lab/content-studio/` (6 captures
  desktop). L'accord du client pour Bookvox est confirmé (18/08/2026). Aujourd'hui visibles
  seulement depuis `/lab`.
- **Trois témoignages nominatifs** avec fonction et entreprise : Marine Benoit-Jannin (Chanel),
  Quentin Vuong (Globalis), Aurélia Baudelaire (Yves Rocher).
- **Missions en équipe** listées dans `otherMissionsStaticData`, dont une mission CRM chez un
  cabinet comptable — anonymisée, voir les interdits ci-dessus.
- **Onze articles** dans `src/articles/`.

Absences à ne jamais combler par de l'invention :

- Aucune métrique de performance business (taux de conversion, revenus générés, gains de
  temps chiffrés) n'est disponible ni vérifiable. Ne pas en fabriquer.
- Aucun logo ni nom du cabinet comptable.
- Les dépôts publics `github.com/adrienvidal` ne contiennent aucun des trois projets cités au
  CV — ils sont privés. Ne pas y renvoyer comme si c'était une preuve.

## Product Principles

1. **La preuve avant la promesse.** Ce que le visiteur peut vérifier — un nom de client, une
   capture d'écran, un témoignage signé — pèse plus que n'importe quelle affirmation. Ces
   éléments arrivent tôt, pas au troisième clic.
2. **Montrer, pas annoncer.** « Applications IA en production » se démontre avec les captures de
   Bookvox et Content Studio, pas avec une puce dans une carte de service.
3. **Le site est l'échantillon de travail.** Il vend de l'exigence d'exécution ; il ne peut pas
   être livré aux réglages par défaut d'un framework. C'est le seul argument que le visiteur
   éprouve directement au lieu de le lire.
4. **Deux audiences, une hiérarchie assumée.** L'applicatif et l'IA en premier, la landing page
   ensuite. Jamais l'inverse, et jamais au prix de faire disparaître la seconde.
5. **Cohérence avec le CV.** Intitulé, dates, périmètre et réalisations doivent correspondre à ce
   que le visiteur a sous les yeux. Une divergence coûte davantage qu'une page moins jolie.

## Accessibility & Inclusion

WCAG 2.1 AA. Écarts mesurés le 2026-08-18, à corriger :

- `--gray2` `#94a3b8` sur blanc = 2,57:1 (Testimonials, Footer, Nav, label Clients, Lab).
- `--blue-text` `#3b82f6` sur blanc = 3,68:1, utilisé en 14 px (Projects, « Ce que ça a changé »).
- `--gray` `#64748b` = 4,76:1 sur `--bg`, 4,58:1 sur `--bg2` — passe de justesse.
- Aucune règle `prefers-reduced-motion` dans le projet ; `scroll-behavior: smooth` global sans
  garde.
- 25 déclarations `font-size` ≤ 13 px, et seulement deux règles de focus sur tout le site.
