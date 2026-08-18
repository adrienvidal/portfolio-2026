---
target: landing page (accueil)
total_score: 23
p0_count: 2
p1_count: 2
timestamp: 2026-08-18T15-17-52Z
slug: src-app-locale-page-tsx
---
⚠️ DEGRADED: single-context (les instructions de session interdisent de lancer des sous-agents sans demande explicite — les deux évaluations ont été menées séquentiellement dans ce contexte)

Cible : `src/app/[locale]/page.tsx` (Hero → Clients → Services → Process → About → Projects → Testimonials → Reservation → Footer), inspectée en direct sur `localhost:3000` en 1440×900 et 390×844.

## Design Health Score

| # | Heuristique | Score | Problème clé |
|---|-----------|-------|--------------|
| 1 | Visibilité de l'état système | 3 | Le stepper 1-2-3 du formulaire et l'état d'envoi sont bons. Rien n'indique la section courante dans la nav pendant le scroll. |
| 2 | Correspondance système / monde réel | **1** | Le vocabulaire de la page contredit le titre. Le hero promet des applications IA, le Processus parle de « ce que doit produire la page », le placeholder du formulaire de « campagne paid », la bio de « développement front-end ». |
| 3 | Contrôle et liberté | 3 | Le formulaire a un « ← Retour ». `scroll-behavior: smooth` est global sans échappatoire `prefers-reduced-motion`. |
| 4 | Cohérence et standards | **2** | « Ils m'ont fait confiance » apparaît deux fois sur la même page (label Clients + titre Testimonials). Deux portraits circulaires différents, deux photos, deux ambiances. Aucun `scroll-margin-top` : chaque ancre de la nav atterrit 64 px trop bas, sous la barre collante. |
| 5 | Prévention des erreurs | 3 | Validation par étape, budget et délai en choix fermés. Rien à redire. |
| 6 | Reconnaissance plutôt que rappel | 3 | Libellés de nav clairs, mais aucun état actif. |
| 7 | Flexibilité et efficacité | **1** | `nav.links.cv` existe dans `fr.json` et `en.json` mais n'est jamais rendu : `Nav.tsx` ne le met pas dans son tableau `links`. La page `/cv` est injoignable depuis l'accueil. Pour l'audience n°1 du brief — un recruteur — c'est le lien qui manque. |
| 8 | Esthétique et design minimaliste | **1** | Palette Tailwind par défaut (slate + blue-500), Inter, zéro motion, hero à moitié vide. Rien ne distingue cette page d'un template. |
| 9 | Récupération d'erreur | 3 | `errorGeneric` propose le contact direct. Correct. |
| 10 | Aide et documentation | 3 | La section Processus fait le travail. |
| **Total** | | **23/40** | **Fonctionnel mais anonyme — le contenu porte le positionnement, le design non** |

## Verdict anti-patterns

**Est-ce que ça a l'air généré par une IA ?** Oui, sans hésitation, et c'est le problème central pour un développeur qui vend des interfaces exigeantes.

**Évaluation visuelle.** La page coche quatre marqueurs simultanément :

- **Palette Tailwind sortie de la boîte.** `_variables.scss` est intégralement la rampe slate de Tailwind (`#0f172a`, `#1e293b`, `#64748b`, `#94a3b8`, `#e2e8f0`, `#f8fafc`) plus `blue-500` / `blue-600` / `blue-50`. Aucune valeur n'a été choisie ; ce sont les défauts. Un visiteur technique les reconnaît au premier coup d'œil.
- **Grille de cartes identiques.** Les quatre services partagent la même structure icône-dans-un-carré-arrondi-bleu-pâle → titre → puces → filet → ligne en italique préfixée d'un `✦`. Le Processus répète le motif en cercles. C'est le patron le plus produit par les générateurs de landing pages.
- **Eyebrow minuscule en capitales espacées.** `.clients__label` : 12 px, `text-transform: uppercase`, `letter-spacing: 0.08em`, `--gray2`. Le marqueur d'échafaudage par excellence — et il échoue au contraste (2,57:1).
- **Double portrait circulaire.** Un dans le hero, un dans « À propos », deux photos différentes, deux ambiances différentes (café chaleureux vs bar sombre). Le rond centré est le réflexe du portfolio freelance ; le faire deux fois avec des images qui ne vont pas ensemble casse la cohérence.

**Scan déterministe.** Le détecteur remonte 6 occurrences, toutes de la même famille : `overused-font` sur `Inter` dans `_reset.scss:12`, `main.scss:41`, `main.scss:61`, `Reservation.scss:90`, `:124`, `:197`. Pas de faux positif : Inter est bien la seule famille du site, chargée via `next/font/google` dans `src/app/layout.tsx`.

Le détecteur rate en revanche tout ce qui est ci-dessus — palette par défaut, cartes clonées, eyebrow, portraits — parce que ce sont des choix de composition, pas des motifs de code. C'est l'inspection visuelle qui les attrape.

**Overlays visuels.** Non injectés : aucune tentative d'injection en page n'a été faite sur cette exécution. Le signal utilisé est la sortie JSON de `detect.mjs` plus les captures navigateur.

## Impression générale

Le contenu a été aligné sur le positionnement full-stack IA ; l'habillage est resté celui de l'ancienne promesse. Le titre du hero annonce des applications qui tiennent en production, et tout ce que l'œil rencontre ensuite raconte une autre histoire : quatre cartes de service interchangeables, six vignettes Chanel de campagnes marketing, deux portraits ronds, aucune capture de produit, aucun écran d'application.

La plus grosse opportunité est aussi la plus simple : **les captures de Bookvox et Content Studio existent déjà dans `public/lab/`, en 1800 px, optimisées — et elles sont enterrées au troisième clic.** Un recruteur venu du CV voit six landing pages de parfum avant de voir une seule interface applicative. C'est exactement l'écart que le brief §1 voulait refermer, et le lot précédent l'a refermé dans les textes sans le refermer dans les images.

## Ce qui fonctionne

- **La voix écrite.** « En forfait, à périmètre défini, tests et documentation compris », « proposition sous 48h », « pas de tunnel sans nouvelles ». Pas un superlatif, que des engagements vérifiables. C'est rare et c'est un vrai actif — le design devrait s'aligner sur cette voix, pas l'inverse.
- **Le formulaire de réservation en trois étapes.** Un seul champ à la première étape, une question ouverte, un bouton. C'est la bonne façon de baisser le coût d'entrée d'un premier contact, et l'état de succès est soigné.
- **Les logos clients placés tôt.** Chanel, Fnac Darty, Prisma Media, Yves Rocher juste sous le hero : la preuve d'exigence arrive avant l'argumentaire. Le placement est juste ; c'est le traitement (48 px de haut, grisé, opacité 0,6, coincé dans une bande de 28 px) qui les sous-exploite.

## Problèmes prioritaires

### [P0] La preuve visuelle contredit la promesse écrite

**Quoi.** Le seul contenu visuel de la page, hors portraits, est la grille `Projects` : six cartes Chanel (Coco Crush, Chance, Allure Sport, Look This Way, Sublimage, Manufacture), toutes des landing pages et campagnes parfum. Bookvox et Content Studio — les deux applications IA citées au CV, avec 8 captures déjà optimisées dans `public/lab/` — n'apparaissent nulle part sur l'accueil, sauf sous forme d'un encart texte discret vers le Lab.

**Pourquoi c'est grave.** L'audience n°1 du brief scanne trois liens en deux minutes. Elle lit un titre « applications et features IA en production », puis voit six campagnes de parfum. L'image gagne toujours contre le texte : la conclusion sera « intégrateur marketing », soit précisément le diagnostic que le brief §1 posait sur l'ancienne version. Les textes ont bougé, la conclusion du visiteur non.

**Correction.** Faire remonter Bookvox et Content Studio sur l'accueil, en haut de la section Projets, avec leurs captures — pas un encart texte. Les six Chanel restent, en dessous, regroupées sous un intitulé qui assume ce qu'elles sont (interfaces premium, campagnes) plutôt que de les laisser tenir lieu de démonstration IA.

**Commande suggérée.** `$impeccable shape section projets — deux registres, applicatif d'abord`

### [P0] Le vocabulaire résiduel de l'ancienne promesse

**Quoi.** Quatre endroits parlent encore la langue « landing page » :

| Emplacement | Texte actuel |
|---|---|
| `about.bio` | « Douze ans de **développement front-end**, dont onze en indépendant » |
| `process.steps[0].desc` | « ce que doit produire **la page** » |
| `process.steps[1].desc` | « une **structure de page** commentée » |
| `reservation.form.besoinPlaceholder` | « on lance une **campagne paid** dans 3 semaines et notre **landing page** actuelle ne convertit pas… » |
| `services.sub` | « Des interfaces qui vont plus loin que **la page statique** » |
| `testimonials.sub` | « Des équipes **marketing, e-commerce et médias** » |

S'y ajoute `reservation.form.budgetOptions`, qui plafonne à « > 6 000 € ». Pour une application métier avec base PostgreSQL, authentification, rôles et tests, ce plafond signale un ticket de landing page — et il est lu par un donneur d'ordre au moment exact où il évalue si Adrien joue dans sa catégorie.

**Pourquoi c'est grave.** La bio est le point le plus visible : elle ouvre sur « front-end » trois écrans après un titre qui promet du full-stack. Le brief §3.6 demandait cette réécriture, la session du 18/08 la note comme faite ; le texte livré commence toujours par « développement front-end ». C'est une contradiction directe, pas une nuance.

**Correction.** Réécrire les six chaînes (et leurs miroirs `en.json`) dans la langue du nouveau positionnement, et relever la grille de budget. Le processus décrit doit valoir pour une application, pas seulement pour une page.

**Commande suggérée.** `$impeccable clarify copy home — résidus landing page dans about, process, reservation, services, testimonials`

### [P1] L'identité visuelle est celle du framework, pas celle d'Adrien

**Quoi.** `src/styles/_variables.scss` est la rampe slate de Tailwind plus `blue-500`, sans une seule valeur choisie. Inter en famille unique. Aucun `@keyframes` en dehors d'un seul, aucune règle `prefers-reduced-motion`, trois `clamp()` sur tout le projet — l'échelle typographique est faite de valeurs fixes avec bascule à 900 px.

**Pourquoi c'est grave.** Le premier argument de vente d'un développeur d'interfaces, c'est son interface. Un CTO qui reconnaît `#3b82f6` et Inter conclut que le site a été assemblé, pas conçu — et il en déduit ce que sera le produit livré. C'est le principe « practice what you preach » du `PRODUCT.md` qui tombe.

**Correction.** Choisir une couleur de marque en OKLCH qui ne soit pas `blue-500`, tinter les neutres vers cette teinte (chroma 0,005–0,015), passer les titres en `clamp()` fluide, et sortir d'Inter — une seule famille avec un vrai contraste de graisses suffit si elle est choisie. Le geste est peu coûteux : tout passe par `_variables.scss` et `_reset.scss`.

**Commande suggérée.** `$impeccable colorize` puis `$impeccable typeset`

### [P1] Le hero gaspille son écran

**Quoi.** `min-height: calc(100vh - 64px)` avec `align-items: center` et 80 px de padding : en 1440×900, le contenu occupe la bande 260-700 px et laisse ~200 px de vide en haut et ~200 px en bas. Le titre tombe sur quatre lignes sans `text-wrap: balance`, avec des coupes malheureuses (« des / applications et des / features IA qui tiennent en / production »). En 390 px, il passe à six lignes et les deux boutons s'empilent en escalier centré.

Le hero ne contient aucune preuve : ni pile technique, ni logo, ni capture, ni chiffre. Le premier écran demande au visiteur de croire sur parole.

**Pourquoi c'est grave.** C'est l'écran que voit un recruteur arrivé du CV, et il ne contient rien qu'il puisse vérifier. Les logos clients sont juste en dessous, hors champ.

**Correction.** Supprimer le `100vh` forcé et laisser le contenu définir la hauteur ; `text-wrap: balance` sur le `h1` et passage en `clamp()` ; remonter la preuve dans le premier écran (les logos clients, ou une capture d'application, ou les deux). Sur mobile, deux boutons pleine largeur empilés plutôt que centrés en escalier.

**Commande suggérée.** `$impeccable layout hero`

### [P2] Trois défauts d'accessibilité mesurés

| Variable | Usage | Contraste sur blanc | Verdict |
|---|---|---|---|
| `--gray2` `#94a3b8` | Testimonials (rôle), Footer, Nav, Clients (label), Lab | **2,57:1** | Échec net, y compris pour du texte large |
| `--blue-text` `#3b82f6` | Projects, « Ce que ça a changé » en 14 px | **3,68:1** | Échec pour du corps de texte |
| `--gray` `#64748b` | Corps de texte général | 4,76:1 sur `--bg`, **4,58:1** sur `--bg2` | Passe de justesse |

S'ajoutent : aucune règle `prefers-reduced-motion` dans le projet, `scroll-behavior: smooth` global sans garde, 25 déclarations `font-size` ≤ 13 px, et deux règles de focus seulement sur tout le site.

**Pourquoi c'est grave.** Le `--blue-text` porte la ligne « Ce que ça a changé » — c'est-à-dire le résultat business de chaque projet, l'information la plus persuasive de la page, servie en 14 px à 3,68:1.

**Correction.** Assombrir `--gray2` et `--blue-text` d'un cran, ajouter le bloc `prefers-reduced-motion`, monter le plancher typographique à 14 px.

**Commande suggérée.** `$impeccable audit accessibilité` puis `$impeccable polish`

### [P2] Deux défauts structurels qui se corrigent en une ligne chacun

- **Aucun `scroll-margin-top`.** La nav est `position: sticky` sur 64 px. Chaque clic sur Services, Processus, À propos ou Projets fait atterrir le titre de section sous la barre. Visible sur la capture de la section Clients, dont le label passe derrière la nav. Correctif : `scroll-margin-top: 80px` sur les cibles d'ancre.
- **`nav.links.cv` défini mais jamais rendu.** La clé existe en français et en anglais ; `Nav.tsx` ne la met pas dans son tableau `links`. La page `/cv`, refaite au lot précédent et alignée sur le CV PDF, est inaccessible depuis l'accueil. Le footer ne la propose pas non plus — il n'offre que LinkedIn et GitHub, ce dernier étant justement le maillon décalé identifié au brief §1.

**Commande suggérée.** `$impeccable polish nav + ancres`

## Signaux par persona

**Camille (recruteuse tech, arrivée du CV, 90 secondes).** Cherche le lien CV dans la nav : absent. Cherche une application : trouve six campagnes parfum. Cherche la pile technique : elle est en puces à l'intérieur d'une carte, sous la ligne de flottaison. Lit la bio et y trouve « front-end », ce qui contredit l'intitulé du CV qu'elle a sous les yeux. Elle repart sur le lien GitHub, où les trois projets cités sont privés. Le parcours entier confirme le doute au lieu de le lever.

**Marc (CTO, évalue une prestation applicative).** Reconnaît Inter et `#3b82f6` en trois secondes et en tire une conclusion sur la rigueur du livrable. Cherche des preuves d'exploitation : « tests unitaires, d'intégration et de bout en bout » et « hébergement en Union européenne » sont là — mais en puce n°3 et n°4 d'une carte, au même poids visuel que « base PostgreSQL ». Arrive au formulaire, voit un budget plafonné à 6 000 €, et en déduit qu'il n'est pas au bon endroit pour un projet applicatif.

**Sophie (responsable marketing, audience n°2).** Elle, elle est bien servie : les six Chanel, le processus en trois étapes, le placeholder « campagne paid », le budget à 6 000 €. Rien à corriger de son côté — l'enjeu est de la garder tout en cessant de lui donner toute la surface.

## Observations mineures

- « Ils m'ont fait confiance » est utilisé deux fois sur la même page : `clients.label` et `testimonials.title`. En choisir un.
- Le portrait du hero a un `object-position: center -109px` codé en dur, dupliqué en `-78px` sous 400 px. Fragile au moindre changement de photo.
- `services-grid` et `services-row2` sont deux conteneurs grid séparés pour afficher un 2×2. Une seule grille `repeat(auto-fit, minmax(280px, 1fr))` ferait le travail sans logique de découpage en JSX.
- La bande Clients fait 28 px de padding vertical pour des logos de 50 px : les marques les plus fortes du dossier sont traitées comme une note de bas de page.
- Le `✦` en pseudo-élément devant chaque ligne « proof » est décoratif et sera lu par certains lecteurs d'écran.
- Le portrait « À propos » (bar sombre, verre à la main) et celui du hero (café clair, MacBook) ne racontent pas le même métier ni la même personne.

## Questions à se poser

- La page essaie de vendre deux choses à deux audiences dans un seul flux linéaire. Et si le premier écran laissait le visiteur se déclarer — « je cherche une application » / « je cherche une landing page » — au lieu de faire un compromis qui dessert les deux ?
- Les captures de Bookvox et Content Studio sont déjà en ligne, optimisées, dans `public/lab/`. Qu'est-ce qui justifie qu'elles restent à trois clics de l'accueil ?
- Le site vend de la rigueur d'exécution. À quoi ressemblerait une home qui *démontre* cette rigueur au lieu de l'affirmer — un état de chargement soigné, une transition juste, une typographie tenue ?
