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
