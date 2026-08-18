# 2026-08-18 — Alignement du portfolio sur le positionnement « Développeur Full-Stack IA »

Brief de référence : `docs/brief-alignement-portfolio-2026.md` (commité par Adrien, `d196329`).

## Réalisées

### Lot 1 — PR #1, fusionnée dans `main` le 18/08/2026

- Étape 1 du brief (§3.4) en **variante sans visuels**, choix d'Adrien parmi trois options.
- `fr.json` / `en.json` : Bookvox et Content Studio ajoutés, ordre Bookvox → Content Studio → Dripflow → FitnessPal.
- `static.tsx` : mêmes entrées dans `labStaticData` (`status: 'live'`, tags, `link: null`), sans `images` ni `video`.
- Sous-titre du Lab corrigé (« projets perso » était faux, Bookvox tourne chez un client).
- Commentaire ajouté sur l'appariement par index entre les trois fichiers.

### Lot 2 — PR #2, fusionnée dans `main` le 18/08/2026

Étapes 2 à 6 du brief, un commit par étape.

- **§3.1 / §3.2 — hero et métadonnées.** Nouveau titre « Je construis des applications et des features IA qui tiennent en production » (proposition principale du brief, pas la variante). `meta.home` et `meta.lab` alignés. `avatarAlt` corrigé de « front-end » en « full-stack ».
- **§3.3 — services.** Nouvel ordre : Applications métier sur mesure, Intégration IA, Landing pages, Expériences web interactives. Quatrième carte ajoutée. `serviceIcons` réordonné (apparié par index) et icône base de données ajoutée. La grille tombait en 3 + 1 orpheline sur une demi-largeur : `Services.tsx` bascule en 2×2 à partir de 4 items.
- **§3.6 — à propos.** Bio réécrite : douze ans, dont onze en indépendant, activité full-stack IA.
- **§3.7 — `cvData`, option A.** Le blocker est tombé : `webnrolls-viloris/administration/cv/cv-adrien-vidal-fullstack-ia-2026-08.md` est lisible depuis cette machine. `role` → « Développeur Full-Stack IA », Chanel re-daté « Avr. 2023 – Févr. 2026 », Viloris.io (Webnrolls) devient une expérience à part entière portant la mission CRM, `experienceNote` porte le cadre « indépendant depuis 2015, EURL Webnrolls depuis 2024 », compétences restructurées en cinq catégories, « Projets personnels » devient « Réalisations IA » (Bookvox, Content Studio, agents internes). `footer.subtitle` corrigé.
- **§3.5 — CRM dans les missions.** Entrée ajoutée en tête d'`otherMissionsStaticData` et des deux locales. `link` et `site` rendus optionnels, `OtherMissionItem` n'affiche le lien que s'il existe. Titre et sous-titre de la section revus (« interventions en équipe sur des sites existants » devenait faux).
- **Hors brief, corrigé au passage** : quatre dates tronquées dans `en.json` (Prisma Media, Fnac Darty, Yves Rocher, Shareweez — dates de fin manquantes).

`npm run build` au vert. Contrôle visuel fait sur `/`, `/lab`, `/cv/design`, `/cv/simple`.

### Lot 3 — visuels du Lab (dans PR #2)

- Adrien a déposé 8 captures dans `temp/`. Tri : 2 Bookvox (Générer, Valider), 6 Content Studio (Posts, Stratégie, Calendrier, Créer du contenu).
- Redimensionnées à 1800px puis converties via `scripts/optimize-images.mjs` → `public/lab/bookvox/` et `public/lab/content-studio/` (40 à 157 Ko par image).
- **Nouveau `coverLayout: 'single'`** sur `LabStaticItem` : le collage à trois colonnes est fait pour des captures mobiles en portrait, il découpait ces captures desktop 16:9 en bandes verticales illisibles. Le mode `single` affiche une capture pleine largeur ; la lightbox montre toujours la série complète.
- `min-height: 50px` sur `.lab__item-meta` : règle l'alignement des titres de la première rangée (les 7 tags de Bookvox passaient sur deux lignes).
- `temp/` ajouté au `.gitignore`.

## Reste à faire

Rien sur le brief : les six étapes sont livrées et fusionnées dans `main`.

Pistes ouvertes, hors périmètre du brief :

- Le CV du site et le PDF de `webnrolls-viloris` sont désormais alignés mais restent deux sources à maintenir en parallèle. L'option B du brief (réduire `/cv` à un téléchargement) n'a pas été tranchée.
- `github.com/adrienvidal` reste le maillon décalé du CV : les trois projets cités y sont privés, le visiteur tombe sur fitness-app, jdr-book, job-hunter. Le brief le constate sans le traiter.
- Le dépôt a des branches `dev` et `preprod` qui n'ont pas bougé depuis `41cc2ee` / `1aa13c1` — à vérifier si elles servent encore.

## Blockers

Aucun.

- Le blocker `cvData` est levé (dépôt `webnrolls-viloris` accessible depuis cette machine).
- Le blocker « visuels du Lab » est levé (lot 3).

## Décisions

- Variante « sans visuels » retenue pour le Lab plutôt que d'attendre les captures.
- Titre du hero : proposition principale du brief retenue, pas la variante « du back-end à l'interface ». À rediscuter si l'acquisition landing page baisse.
- Tags du Lab repris tels quels du brief, y compris les 7 de Bookvox : le wrap est absorbé par la hauteur minimale sur `.lab__item-meta` plutôt qu'en retirant un tag.
- **Captures Bookvox publiées telles quelles**, avec le compte « LeHussardDePierre », ses chiffres d'engagement et les noms d'assets de l'univers du client. Adrien a confirmé avoir l'accord du client (question posée le 18/08/2026 avant le push, dépôt et site publics).
- Ligne CRM des missions : nom raccourci en « Cabinet comptable » et quatre tags — le nom complet décalait la colonne description et six tags débordaient sur la colonne du lien.
- Pas de test automatisé : le projet n'a pas de `npm test`, les six étapes sont du contenu. `npm run build` + contrôle visuel.
- Deux branches empilées plutôt qu'une seule PR géante, pour garder l'étape 1 revuable seule. **Piège rencontré à la fusion** : `gh pr merge 1 --delete-branch` supprime la branche qui sert de base à la PR #2, ce qui ferme #2 au lieu de la recibler. Il a fallu recréer la branche de base, rouvrir #2, la recibler sur `main`, puis supprimer la branche. Pour une prochaine pile de PR : recibler la PR enfant sur `main` **avant** de fusionner la parente.

## À ne jamais faire sur ce chantier (brief §3.5)

- Ne pas publier `crm-comptable.vercel.app`, ne pas nommer le cabinet d'expertise comptable, aucune capture contenant des données ressemblant à un fichier client.

---

# 2026-08-18 (suite) — Audits, alignement de l'accueil, et directions d'identité visuelle

Session enchaînée après la clôture ci-dessus. Trois PR fusionnées, deux audits, et un travail de direction visuelle non tranché.

## Réalisé

### Outillage

- **Skill Impeccable mis à jour v3.9.1 → v4.1.1.** Le schéma de `PRODUCT.md` a changé au passage (`Platform`, `Positioning`, `Operating Context`, `Evidence on Hand`…), et la v4 sépare strictement produit et monde visuel : `PRODUCT.md` n'a plus le droit de contenir de direction esthétique.
- **`PRODUCT.md` créé, puis refait proprement en v4** après un entretien réel avec Adrien. Décisions enregistrées : audience principale = recruteurs et donneurs d'ordre IA ; positionnement = « douze ans d'exigence d'interfaces premium appliqués aux produits IA » ; **aucune identité visuelle n'est figée** (la rampe Tailwind et Inter sont un héritage de scaffolding, pas une contrainte) ; WCAG 2.1 AA.
- `.impeccable/live/config.json` écrit (Next.js App Router, ancre `</body>` dans `src/app/layout.tsx`, aucun CSP détecté).

### Audit visuel de la landing page — 23/40

Archivé dans `.impeccable/critique/2026-08-18T15-17-52Z__src-app-locale-page-tsx.md`. Constat central : le contenu portait le positionnement, l'habillage non. Six cartes Chanel comme seule preuve visuelle, palette Tailwind par défaut, Inter, zéro motion.

### Lot 4 — PR #3, fusionnée (`6b1c28d`)

Bookvox et Content Studio remontés **en tête de `#projets`**, en lignes alternées plutôt qu'en cartes (les captures desktop 16:9 meurent à un tiers de largeur). Nouveau composant `HomeApps` + `AppRow`, visuels et tags lus depuis `labStaticData` via `HOME_APPS_ORDER` — pas de duplication. La grille Chanel devient « Interfaces et campagnes premium ». Token `--blue-ink` ajouté — **retiré au lot 6**, fondu dans `--blue-text` dont la valeur a été corrigée.

**Bug attrapé** : `visualsLabel` est une chaîne ICU ; `t()` sans la variable `count` levait un `FORMATTING_ERROR` côté serveur.

### Lot 5 — PR #4, fusionnée (`06e8bc2`)

Sept chaînes purgées du vocabulaire « landing page », miroir EN. La bio ouvrait toujours sur « développement front-end » alors que la session précédente la notait comme réécrite — contradiction directe avec le titre du site et l'intitulé du CV. Corrigée en « développement web », suivie de « j'ai **commencé** par des interfaces… » pour poser l'arc vers l'applicatif.

### Audit technique responsive & accessibilité — 10/20

Déclenché par Adrien (« le responsive est cassé »). Le vrai point de rupture n'était pas le mobile mais **la bande 901–935px** : le site n'a que deux breakpoints (900 et 400), donc au-dessus de 900 la nav desktop revenait alors qu'elle demande ~1000px — logo coupé en deux, « EN » chevauchant « Services », texte du CTA sortant de sa pilule.

### Lot 6 — PR #5, fusionnée (`f707ee7`)

Deux [P0] et cinq [P1] :

- Palier de nav 901–1080px + `white-space: nowrap` sur logo et CTA (garde-fou structurel).
- Les 7 radios du formulaire étaient en `display: none` → hors ordre de tabulation **et** de l'arbre d'accessibilité. Budget et délai étaient impossibles à renseigner au clavier (**WCAG 2.1.1, niveau A**). Masquage focusable + `role="radiogroup"`.
- **Échec de contraste non relevé à l'audit** : `--blue` en fond de texte blanc = 3,68:1 — le bouton principal, le bouton d'envoi et la pastille d'étape échouaient tous. Fonds passés à `--blue-dark` (5,17:1), textes à `--blue-text` (6,70:1), `--gray2` à `#5b6a80` (5,50:1).
- 40px de scroll horizontal sous 340px (`flex-shrink: 0` sur `.other-missions__tags`), verrou de défilement du tiroir mobile, cibles tactiles, champs à 16px (zoom iOS), `prefers-reduced-motion`, `scroll-margin-top`.

Balayage automatisé sur 16 largeurs : **aucune anomalie**. Contraste : **0 échec** (6 avant le lot).

### Directions d'identité visuelle — six maquettes, aucune retenue

Trois sages (Signalétique / Tableau d'exploitation / Dossier), puis trois audacieuses après qu'Adrien ait demandé plus de risque, en s'appuyant sur une veille Awwwards et tendances 2026. Le tirage `concept-seed` a été utilisé pour casser le réflexe de classement, en registre normal puis `--register bolder`.

**Retenue : direction F « Vue éclatée »** — la pile applicative s'écarte sous le pointeur, quatre plaques nommées (Données / Back-end / IA / Interface React), la vraie capture posée sur celle du dessus. La démonstration technique *est* la proposition de valeur.

Home complète produite avec le contenu et les visuels réels, conservée dans **`docs/previews/home-direction-f.html`** (41 Ko, chemins relatifs vers `public/`, s'ouvre directement dans un navigateur).

## Reste à faire

- **Trancher l'identité visuelle.** La direction F est maquettée mais **rien n'est codé dans l'application**. Décider si on la déroule, et à quel niveau (CSS 3D comme la maquette, ou WebGL avec le budget de performance que ça implique).
- **Le portrait** : quatre fichiers `adrien-profil*.webp` dans `public/`, deux ambiances différentes utilisées aujourd'hui sur le hero et « À propos ». Non tranché.
- **`public/clients/prismamedia.webp` n'a pas de canal alpha** (fond blanc incrusté) — invisible sur tout fond sombre. À réexporter avec transparence quelle que soit la direction retenue.
- **Lien CV absent** de la nav et du footer : `nav.links.cv` existe dans les deux locales mais n'est jamais rendu dans `Nav.tsx`. La page `/cv` reste injoignable depuis l'accueil.
- « Ils m'ont fait confiance » apparaît deux fois sur la page (`clients.label` + `testimonials.title`).
- Titres du Lab désalignés vers 905px (les 7 tags de Bookvox passent sur deux lignes).
- **Plafond de la grille de budget** à « > 6 000 € » — décision commerciale, posée deux fois, jamais tranchée.
- Reliquats du brief initial : double source du CV (site + PDF), décalage `github.com/adrienvidal`, branches `dev` et `preprod` mortes.

## Blockers

Aucun.

## Décisions

- **Direction F retenue** parmi six. Motif : c'est la seule où la prouesse technique démontre la promesse du hero au lieu de l'illustrer.
- **Registre audacieux assumé** : chez un développeur front-end, la prouesse technique est le message. Garde-fou tenu, tiré de la veille Awwwards — la 3D ne doit jamais écraser le travail qu'elle encadre ; logos clients et captures restent lisibles.
- **Terminal à phosphore vert écarté** alors que le tirage le proposait : c'est le réflexe de catégorie « portfolio de dev », et il ne prouve rien.
- Le fond sombre de F est un choix assumé malgré des captures claires : elles sont serties dans un châssis clair et deviennent la source lumineuse de la page.
- Maquettes conservées **en HTML autonome, hors application** : pas de branche de refonte ouverte tant que la direction n'est pas validée.
- **Piège de la pile de PR évité** cette fois : #4 reciblée sur `main` **avant** la fusion de #3, conformément à la note de la session précédente. À refaire ainsi.

## Limite rencontrée

L'outil Artifact **ne sait pas supprimer** un artifact publié. Les maquettes A/B/C et D/E/F restent en ligne (privées) ; leur suppression passe par la galerie `claude.ai/code/artifacts`. Les fichiers locaux correspondants ont été supprimés.
