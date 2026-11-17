---
title: Projets
layout: timeline
description: "Les projets de Laura Rossi — Plan Away, Eevie, MTG Chicken Soup, logiciels actuariels développés chez Deloitte et recherches antérieures."
lead: "Ce que j'ai conçu et construit sur mon temps libre, les missions clients de mes années chez Deloitte, et des recherches antérieures."
---

## Projets personnels

Tout ce qui figure ici est un travail en solo : conçu, construit et déployé par moi.

### [Plan Away](https://plan-away.net/)

*En ligne · JavaScript, Cloudflare Workers, Firebase (Firestore)*

Une application web pour organiser des voyages à plusieurs sur une seule frise chronologique partagée, en glisser-déposer : séjours, excursions à la journée et trajets. Elle répartit les dépenses au sein du groupe, totalise une sélection d'éléments, marque les paiements et les tâches, résume les séjours de tout le voyage, zoome entre les vues et enregistre automatiquement. Disponible dans plus de 30 langues.

### [Eevie](https://github.com/lauraarossi/EV_platform)

*2026 · FastAPI, PostgreSQL, React 19, TypeScript · hors ligne pour le moment*

Compare le coût réel d'utilisation d'une voiture avec l'alternative — une électrique face à une essence ou un diesel — à partir des prix hebdomadaires réels des carburants.

- Importe et rapproche le Bulletin pétrolier hebdomadaire de l'UE, les données de suivi du CO2 de l'AEE et les catalogues evdb et VCA britannique, avec des heuristiques qui fusionnent un même modèle orthographié différemment selon les sources.
- Actualisations idempotentes qui conservent les prix saisis par les utilisateurs ; tâches d'actualisation en arrière-plan journalisées, qui résistent à une base de données en veille.
- Schéma PostgreSQL normalisé avec des tarifs d'électricité versionnés par date d'effet, y compris des plages qui passent minuit ; émissions comparées à périmètre égal ; conversion de devises.
- Connexion Google vérifiée côté serveur et console d'administration par rôles.
- FastAPI, SQLAlchemy, Alembic, PostgreSQL, React 19, TypeScript, Vite, Tailwind, Recharts et Docker, avec 337 tests automatisés côté backend.

### [MTG Chicken Soup](https://github.com/lauraarossi/MTG_chicken_soup)

*2026 · FastAPI, Next.js 14, PostgreSQL + pgvector · hors ligne pour le moment*

Un assistant IA pour construire des decks de Magic: The Gathering au format Commander.

- Réponses fondées sur les données réelles des cartes grâce à des embeddings OpenAI dans pgvector et à des requêtes Scryfall en direct, pour ne pas inventer de cartes, avec gestion des noms ambigus.
- Les instructions s'adaptent au format de jeu détecté ; fournisseurs de LLM interchangeables (Claude, compatibles OpenAI, Ollama) avec réponses en streaming.
- Chaîne de données depuis Scryfall et EDHREC, et une chaîne de fine-tuning LoRA pour Qwen2.5-7B (construite, pas encore lancée).
- Connexion Google, profils, sauvegarde, partage et modification de decks, import/export CSV et affichage mobile.

## Missions pour les clients de Deloitte

Projets anonymisés de mes années au sein de l'Actuarial Modelling Centre de Deloitte.

### Modélisation du capital — responsable technique

*2025 · Grand assureur vie et retraite britannique*

Reprise du rôle de responsable technique d'une solution complexe de capital en modèle interne.

### Moteur de calcul et de reporting Solvabilité II

*2024 · Grand assureur vie irlandais · Python, MG-ALFA*

Conception et développement en Python d'un moteur de calcul Solvabilité II et d'un générateur de rapports, intégrés aux modèles MG-ALFA du client, produisant des rapports de gestion et des données pour les traitements en aval.

### Système de gestion des hypothèses

*2024 · Grand assureur vie et retraite britannique · Python, Angular, Azure Functions*

Un système ETL en Python derrière une interface web Angular et Azure Functions. Arrivée comme développeuse, je suis devenue développeuse principale ; le système est en production et très apprécié de ses utilisateurs.

### Modélisation des catastrophes

*2023 · Grand assureur non-vie britannique · Tyche, Python, SQL, JavaScript*

Un nouveau système de modélisation des sinistres et du passif, construit avec une équipe internationale à partir de données RMS et AIR.

### Validation des données et analyse des écarts en unités de compte

*2022 · Réassureur multinational · Python*

Migration de la validation et du prétraitement de leurs contrats en unités de compte depuis Access (SQL et VBA) vers un programme Python **100 fois plus rapide**, et formation de leur équipe pour en assurer la maintenance.

### Preuve de concept de reporting actuariel

*2022 · Python, Tkinter*

Une application de bureau qui prend des données de modèles actuariels et génère des rapports clients en PDF et Excel, avec envoi automatique par e-mail.

## Projets antérieurs et universitaires

### Entretiens avec des business angels pour la Foundry

*2021 · Purdue Foundry*

Entretiens avec 16 investisseurs potentiels, américains et internationaux, du réseau de la Foundry sur leur intérêt pour la relance d'un groupe de business angels à Purdue et sur leurs habitudes et freins à l'investissement, puis rédaction d'un rapport qualitatif.

### Études pour des start-up de la Purdue Foundry

*2019 – 2020*

- **Adipo Therapeutics :** groupes d'investisseurs cibles et partenaires industriels potentiels pour une start-up de biotechnologie.
- **Modèles de mise sur le marché :** modèles sur tableur de stratégie de lancement, de potentiel de revenus, de leviers de croissance et de coûts pour SpeechVive et NutraMaize.
- **Hydratation et sport universitaire :** étude de l'impact d'un suivi de l'hydratation de haute précision sur les performances et les revenus du sport universitaire.
- **Évaluation du CRM :** recueil des besoins et revue du CRM de la Foundry avec l'équipe informatique de la Purdue Research Foundation, identifiant des optimisations et de nouvelles fonctionnalités rentables.

### Analyse des stocks de West Paw

*2020 · Étude indépendante avec la professeure Gemma Berenguer Falguera, Purdue*

Analyse des coûts de stockage et des niveaux de stock du fabricant de produits durables pour animaux West Paw, aboutissant à une nouvelle politique de stocks recommandée et à l'analyse de ses implications. [Télécharger l'analyse (en anglais)](/downloads/west-paw-analysis.docx)

### Base de données OEE

*2018 · Projet personnel*

Une base de données et un outil de reporting sous MS Access, conçus avec un site de production chimique de Chicago, qui collectent et synthétisent le taux de rendement global (OEE) de plusieurs sites.

### Mémoire de licence : Water under the bridge? Truth commissions' effectiveness in South Africa and Morocco

*2018 · University of Chicago*

Sur l'efficacité des commissions de vérité en Afrique du Sud et au Maroc, à partir d'entretiens de terrain et d'une analyse automatisée de textes à Rabat et au Cap. [Télécharger le mémoire (PDF, en anglais)](/downloads/water_under_the_bridge.pdf)

### Building community through sports in South African townships: playing towards substantive transition

*2018 · University of Chicago*

La transition politique de l'Afrique du Sud après l'apartheid a réussi, mais les tensions raciales et une extrême inégalité économique persistent. Le travail propose l'éducation par le sport et l'investissement direct dans des équipements financés par l'État et gérés par les communautés, pour favoriser la réconciliation entre groupes raciaux et le développement des townships. [Télécharger le travail (PDF, en anglais)](/downloads/community-and-sports-investment-in-south-african-townships.pdf)

### Is political messaging persuasive or manipulative? Twitter messages about the Supreme Court nominations

*2017 · Avec le professeur John Brehm, University of Chicago*

Sur les messages publiés sur Twitter au sujet des nominations à la Cour suprême des États-Unis. Présenté au congrès annuel de la Midwest Political Science Association, 2017. [Télécharger l'article (PDF, en anglais)](/downloads/is_political_messaging_persuasive_or_manipulative.pdf)
