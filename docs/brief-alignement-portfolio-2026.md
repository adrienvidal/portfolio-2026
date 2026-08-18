# Brief — Aligner adrienvidal.com sur le positionnement « Développeur Full-Stack IA »

**Dépôt cible :** `~/Workspace/apps/portfolio-2026`
**Origine :** session du 18/08/2026 dans `webnrolls-viloris`, rédaction du CV `administration/cv/cv-adrien-vidal-fullstack-ia-2026-08.md`
**Nature :** brief de contenu et de positionnement. Aucun changement d'architecture, aucun nouveau composant.

---

## 1. Contexte

Adrien candidate sur des postes et des missions de développeur full-stack IA (TypeScript, React, Next.js, LLM intégrés au produit), en prestation au forfait via Webnrolls, marque Viloris.io. Un CV a été rédigé dans ce sens. Il porte trois liens en en-tête : `adrienvidal.com`, `github.com/adrienvidal`, `viloris.io`.

Un audit des trois destinations a montré un écart de promesse.

| Destination | État | Problème |
|---|---|---|
| viloris.io | Aligné | Aucun. « Automatisations et agents IA sur-mesure », pile Anthropic, n8n, Next.js, Supabase affichée |
| adrienvidal.com | À moitié aligné | Le titre d'accueil annonce « Je construis des landing pages et campagnes qui convertissent ». Un lecteur venu d'un CV « Développeur Full-Stack IA » atterrit sur une offre d'intégrateur marketing. La matière IA existe (service 3, Dripflow au Lab) mais arrive au troisième clic |
| github.com/adrienvidal | Décalé | 30 dépôts publics actifs, mais aucun des trois projets cités au CV : Bookvox, Content Studio et le CRM client sont privés. Le visiteur tombe sur fitness-app, jdr-book, job-hunter |

Le site est donc le seul levier actionnable à court terme : c'est la page qu'Adrien maîtrise entièrement et vers laquelle le CV envoie.

**Contrainte à respecter.** Le site sert deux audiences, et la seconde ne doit pas être sacrifiée :

1. recruteurs et donneurs d'ordre cherchant un développeur full-stack IA ;
2. équipes marketing et startups cherchant des landing pages, qui restent une source réelle de missions.

L'objectif n'est pas de supprimer l'offre landing page, mais de cesser d'en faire la première et unique promesse.

---

## 2. Ce qui ne change pas

- L'architecture des routes, les composants, le système i18n.
- La section Clients (logos) et la page `/projets` : Chanel, Fnac Darty, Prisma Media, Yves Rocher sont la preuve d'exigence, elles portent le positionnement autant que l'IA.
- Le processus en trois étapes (`process`), valable pour les deux audiences.
- Le formulaire de réservation.

---

## 3. Changements à faire

### 3.1 Accueil, titre et sous-titre

**Fichier :** `src/messages/fr.json`, namespace `hero`. Miroir dans `en.json`.

Aujourd'hui :

```
"title": "Je construis des landing pages et campagnes qui convertissent"
"sub":   "En forfait, à périmètre défini, pour des équipes marketing et des startups qui veulent aller vite sans sacrifier la qualité."
```

Proposition :

```
"title": "Je construis des applications et des features IA qui tiennent en production"
"sub":   "Douze ans d'interfaces exigeantes, aujourd'hui de la base PostgreSQL à l'interface React. En forfait, à périmètre défini, tests et documentation compris."
```

Le mot « production » fait le travail : il sépare celui qui a branché une API de celui qui a livré, hébergé, testé et maintenu. Le forfait reste mentionné, il parle aux deux audiences.

Variante si le titre paraît trop restrictif pour l'acquisition marketing : « Je construis des applications web et des features IA, du back-end à l'interface ».

### 3.2 Métadonnées SEO

**Fichier :** `src/messages/fr.json`, namespace `meta.home`. Miroir dans `en.json`.

Aujourd'hui : « Adrien Vidal — Développeur Web Freelance » et une description centrée sur les landing pages React/Next.

Proposition :

```
"title":       "Adrien Vidal — Développeur Full-Stack IA (React, Next.js, TypeScript)"
"description": "Applications web et features IA livrées en production : React, Next.js, TypeScript, PostgreSQL, LLM intégrés au produit. Douze ans d'interfaces exigeantes, en forfait."
```

Vérifier au passage `meta.lab` : la description parle de « prototypes », alors que le Lab va accueillir des applications en service chez un client. Remplacer « prototypes » par « outils et applications ».

### 3.3 Services, ordre et contenu

**Fichier :** `src/messages/fr.json`, namespace `services.items` (tableau de 3). Miroir dans `en.json`.

Deux gestes.

**Remonter « Intégration IA dans votre produit » en première position.** Le contenu actuel est bon, il ne change pas. Seul l'ordre du tableau bouge.

**Ajouter un quatrième service, aujourd'hui absent alors que c'est le mieux prouvé.** Vérifier que la grille tient en quatre cartes (le composant `Services` boucle sur le tableau, il n'y a a priori rien à changer, à contrôler visuellement en 3 colonnes et en mobile).

```json
{
  "title": "Applications métier sur mesure",
  "items": [
    "Base PostgreSQL, droits par profil, historique des modifications",
    "Authentification, rôles, tâches planifiées",
    "Tests unitaires, d'intégration et de bout en bout",
    "Hébergement en Union européenne, conformité RGPD"
  ],
  "proof": "Quand un fichier Excel partagé ne suffit plus et qu'un logiciel du marché ne colle pas"
}
```

Ordre final visé : Applications métier sur mesure, Intégration IA, Landing pages et campagnes, Expériences web interactives. L'ordre exact se discute, la seule règle est que « landing pages » ne soit plus la première carte.

### 3.4 Lab, ajouter Bookvox et Content Studio

C'est le changement le plus rentable : il rend consultables les trois réalisations citées au CV.

**Mécanique à connaître.** Un item du Lab vit dans deux tableaux parallèles, appariés par index :

- `src/messages/fr.json` et `en.json`, `lab.items[]` : `title` et `description` ;
- `src/data/static.tsx`, `labStaticData[]` : `status`, `tags`, `link`, `images` ou `video` / `videoDesk` / `videoMob`.

**Les deux tableaux doivent garder le même ordre et la même longueur, dans les trois fichiers.** Un décalage d'index attribue le texte d'un projet aux visuels d'un autre, sans erreur au build.

Les visuels vont dans `public/lab/<projet>/*.webp`. Les vidéos passent par Cloudinary, jamais de `.mp4` dans le dépôt.

**Item à ajouter, Bookvox** (`lab.items`) :

```json
{
  "title": "Bookvox",
  "description": "Application de génération de contenu social pour auteurs de roman, en ligne chez un premier client. L'auteur dépose ses visuels et ses documents de référence, l'application décrit automatiquement les images avec Claude Haiku, indexe les documents en recherche vectorielle (embeddings Cohere multilingues, pgvector) et génère des publications avec Claude Sonnet en respectant la voix de l'auteur. Validation humaine avant publication, calendrier éditorial en glisser-déposer, publication OAuth sur cinq réseaux avec jetons chiffrés en AES-256-GCM. Multi-tenant isolé par espace de travail en row level security."
}
```

`labStaticData` correspondant :

```ts
{
  status: 'live',
  tags: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Claude', 'Cohere', 'n8n'],
  link: null,
  images: ['/lab/bookvox/...']
}
```

**Item à ajouter, Content Studio** (`lab.items`) :

```json
{
  "title": "Content Studio",
  "description": "Chaîne de production de publications LinkedIn pilotée par trois agents LLM spécialisés : un stratège qui cadre la demande et propose des angles, un rédacteur qui écrit le post, un directeur artistique qui juge et fait itérer les visuels. Les prompts système sont assemblés en TypeScript et versionnés avec le code, le contexte de marque vit en base plutôt qu'en fichiers, les sorties sont validées par schéma avant d'atteindre l'interface. Diffusion en flux via l'AI SDK Vercel, génération d'images par fal.ai, persistance Prisma sur PostgreSQL."
}
```

`labStaticData` correspondant :

```ts
{
  status: 'live',
  tags: ['Next.js', 'AI SDK Vercel', 'Claude', 'fal.ai', 'Prisma', 'zod'],
  link: null,
  images: ['/lab/content-studio/...']
}
```

**Ordre d'affichage recommandé :** Bookvox, Content Studio, Dripflow, FitnessPal. Les deux plus démonstratifs en tête, et le nouveau visiteur voit d'abord ce que le CV promet.

**Sous-titre du Lab à ajuster.** Il dit « Projets perso, outils, expérimentations ». Bookvox tourne chez un client, l'étiquette est fausse. Proposition : « Ce que je construis en dehors des missions : outils, applications et expérimentations, dont certaines tournent chez de vrais utilisateurs. »

### 3.5 Le CRM client, dans les missions et non au Lab

Le CRM du cabinet d'expertise comptable n'est pas un projet perso, il n'a pas sa place au Lab. Il rejoint `otherMissionsStaticData` dans `src/data/static.tsx` avec Fnac Darty, Prisma Media et Yves Rocher, texte traduit dans `otherMissions`.

Formulation, client non nommé :

> **CRM sur mesure pour un cabinet d'expertise comptable.** 500 dossiers clients, 20 utilisateurs, en remplacement d'un fichier Excel partagé. Conçu, développé et mis en production seul : PostgreSQL sur Supabase, droits par profil, historique des modifications, relances d'échéances automatiques, tests à quatre niveaux, hébergement en Union européenne.

**Interdits sur ce projet.** Ne jamais publier le lien `crm-comptable.vercel.app` : la démonstration porte des comptes de test dont les mots de passe ont circulé en clair par email, le sujet est ouvert dans le backlog `webnrolls-viloris`. Ne pas nommer le cabinet. Ne pas publier de capture contenant des données, même fictives, qui ressemblerait à un fichier client.

### 3.6 Section « À propos »

**Fichier :** `src/messages/fr.json`, namespace `about.bio`. Miroir dans `en.json`.

Le texte actuel dit « développeur front-end depuis 10 ans » et décrit une activité freelance orientée interfaces. Trois faits l'ont périmé : Adrien est indépendant depuis 2015 (micro-entreprise, puis EURL Webnrolls en 2024), la mission Chanel s'est terminée en février 2026, et l'activité est full-stack et orientée IA depuis 2026.

Proposition :

> Douze ans de développement front-end, dont onze en indépendant. J'ai travaillé sur des environnements où la qualité perçue et la performance ne se négocient pas : Chanel, Fnac Darty, Prisma Media.
>
> Aujourd'hui je construis des applications complètes, de la base PostgreSQL à l'interface React, avec des modèles de langage intégrés au produit plutôt que posés par-dessus. Je livre en forfait, à périmètre défini, avec tests et documentation.
>
> Je travaille à distance. Un brief en deux paragraphes suffit pour démarrer.

### 3.7 Pages CV du site

`/cv/design` et `/cv/simple` lisent le namespace `cvData`, resté orienté front-end pur. Trois écarts avec le CV du dépôt `webnrolls-viloris` :

- Chanel y figure en « Avr. 2023 – Présent », la mission s'est terminée en **février 2026** ;
- Viloris y est daté de 2025, l'EURL Webnrolls a été créée en **2024** et l'activité indépendante démarre en **2015** ;
- aucune trace de Bookvox, Content Studio ni du CRM.

Deux options.

**Option A, recommandée à court terme :** aligner `cvData` sur `administration/cv/cv-adrien-vidal-fullstack-ia-2026-08.md` du dépôt `webnrolls-viloris`, qui fait foi. Reprendre ses dates, sa ligne de cadre sur l'indépendance depuis 2015, sa section Réalisations IA.

**Option B :** faire de `/cv` un simple point de téléchargement du PDF et retirer les deux pages rendues. Moins de contenu à maintenir en double, mais on perd le référencement et la lecture sans téléchargement.

Ne pas laisser l'état actuel : un recruteur qui compare le PDF reçu et la page en ligne verra deux CV qui se contredisent sur les dates.

---

## 4. Ordre d'exécution suggéré

1. Lab, Bookvox et Content Studio (le plus rentable, et indépendant du reste).
2. Hero et métadonnées.
3. Services, ordre et quatrième carte.
4. À propos.
5. `cvData`.
6. CRM dans les missions.

Les étapes 1 à 5 sont du contenu pur. Seule l'étape 3 peut demander un ajustement de grille.

---

## 5. Points de vigilance

- **Trois fichiers à tenir synchronisés** pour le Lab : `fr.json`, `en.json`, `static.tsx`. Même ordre, même longueur.
- **`en.json` n'est pas optionnel.** Le site est bilingue, une clé oubliée casse la version anglaise, et c'est précisément la version que liront les recruteurs internationaux.
- **Ne pas surpromettre.** Bookvox est « en ligne chez un premier client, développement continu », pas « en production à l'échelle ». Content Studio est un outil interne en service. Le CRM est livré en première version et en cours de développement, pas terminé.
- **Aucune donnée client** dans les captures, aucun nom de cabinet, aucun lien vers la démonstration du CRM.
- **Ne pas jeter l'offre landing page.** Elle finance l'activité et parle à une audience réelle. On la déplace, on ne la supprime pas.
