# 2026-08-18 — Lab : Bookvox et Content Studio

## Réalisé

- Lu `docs/brief-alignement-portfolio-2026.md` (déjà commité par Adrien, `d196329`).
- Étape 1 du brief (§3.4) livrée en **variante sans visuels**, choix d'Adrien parmi trois options.
- Branche `lab-bookvox-content-studio`, commit `7514d9c`, PR #1 ouverte, en attente de revue.
- `fr.json` / `en.json` : items Bookvox et Content Studio ajoutés, ordre Bookvox → Content Studio → Dripflow → FitnessPal.
- `static.tsx` : mêmes entrées dans `labStaticData` (`status: 'live'`, tags, `link: null`), sans `images` ni `video`.
- Sous-titre du Lab corrigé (« projets perso » était faux, Bookvox tourne chez un client).
- Commentaire ajouté sur l'appariement par index entre les trois fichiers.
- `npm run build` au vert, contrôle visuel de `/lab` fait.

## Reste à faire

- **Fournir les captures Bookvox et Content Studio** → `public/lab/bookvox/` et `public/lab/content-studio/`, puis `node scripts/optimize-images.mjs`, puis renseigner `images` dans `labStaticData`. C'est le vrai déblocage de l'étape 1.
- Trancher l'alignement de la première rangée du Lab : Bookvox a 7 tags, la ligne wrappe et son titre descend par rapport à Content Studio. Retirer un tag, ou hauteur minimale sur `.lab__item-meta`.
- Étape 2 du brief : hero (`hero.title` / `hero.sub`) + métadonnées (`meta.home`, et `meta.lab` où « prototypes » doit devenir « outils et applications »).
- Étape 3 : services, remonter « Intégration IA » en 1er et ajouter la 4e carte « Applications métier sur mesure ». Contrôler la grille en 3 colonnes et en mobile.
- Étape 4 : `about.bio`.
- Étape 5 : `cvData`.
- Étape 6 : CRM cabinet comptable dans `otherMissionsStaticData`.

## Blockers

- **Visuels Bookvox / Content Studio manquants.** Tant qu'ils manquent, les deux cartes affichent un placeholder hachuré et forment une large zone vide en haut du Lab — exactement là où atterrit un visiteur venu du CV.
- **Étape 5 (`cvData`)** : l'option A du brief suppose de lire `administration/cv/cv-adrien-vidal-fullstack-ia-2026-08.md` dans le dépôt `webnrolls-viloris`. Accessibilité depuis cette machine non vérifiée.

## Décisions

- Variante « sans visuels » retenue plutôt que d'attendre les captures : le contenu texte est ce que le CV promet, il part maintenant.
- Tags repris tels quels du brief, y compris les 7 de Bookvox, malgré le wrap. Pas de tri unilatéral d'un choix éditorial.
- `link: null` pour les deux : dépôts privés.
- Pas de test automatisé : le projet n'a pas de `npm test`, et le lot est du contenu pur. `npm run build` + contrôle visuel suffisent.

## À ne jamais faire sur ce chantier (rappel du brief §3.5)

- Ne pas publier `crm-comptable.vercel.app`, ne pas nommer le cabinet d'expertise comptable, aucune capture contenant des données ressemblant à un fichier client.
