---
title: Expérience
layout: timeline
description: "L'expérience de Laura Rossi — ingénieure logicielle senior chez AerPrice, modélisation actuarielle chez Deloitte Irlande, et postes antérieurs dans le conseil, la recherche et l'enseignement."
lead: "Plus de six ans en logiciels financiers et en modélisation actuarielle — des moteurs Solvabilité II et des modèles catastrophes chez Deloitte jusqu'au moteur de calcul central d'une plateforme de tarification pour la location d'avions."
actions:
  # Pour un CV en français, ajoutez public/downloads/Laura_Rossi_CV_fr.pdf et changez le lien ici
  - label: "Télécharger le CV (PDF, en anglais)"
    href: /downloads/Laura_Rossi_CV.pdf
    primary: true
  - label: Imprimer cette page
    href: "#print"
    print: true
  - label: LinkedIn
    href: https://www.linkedin.com/in/laura-agustina-rossi/
---

## Actuellement

### Ingénieure logicielle senior — [AerPrice](https://www.aerprice.com/)

*Août 2025 – aujourd'hui · Dublin · Logiciel de tarification pour la location d'avions*

Une start-up de cinq personnes qui développe un logiciel de tarification pour la location d'avions. Python, Flask, SQLAlchemy, SQL, JavaScript, HTML/CSS.

#### Moteur de réserves et de calcul

- Responsable et principale mainteneuse du moteur de réserves de maintenance, le calcul central et le plus complexe du produit : la constitution mensuelle des réserves par composant de l'avion à partir de l'utilisation (heures de vol, cycles) et des conditions du bail, pour financer les futurs événements de maintenance, de réparation et d'inspection.
- Refonte complète du moteur : passage de scénarios à un seul bail à des scénarios multi-baux, gains de performance, et ajout de plafonds, de variabilité et de nouveaux paramètres ajustables par l'utilisateur.
- Conception et documentation d'une grande partie du schéma de base de données, dont le moteur de réserves, les scénarios multi-baux, les valeurs par défaut et la configuration client ; je relis et valide toutes les modifications de schéma et le maintiens en troisième forme normale.

#### Fonctionnalités d'IA et de LLM

- Développeuse principale des fonctionnalités LLM du produit (modèles OpenAI, Azure AI Document Intelligence) : extraction de données structurées à partir de documents techniques d'avions complexes et hétérogènes, avec relecture humaine obligatoire ; et un assistant en langage naturel qui appelle les fonctions du moteur de tarification pour répondre aux questions sur les réserves et les prix.
- Mise en production de fonctionnalités prototypées avec l'IA : revue de code, refactorisation, tests et intégration au moteur de calcul central.
- J'utilise chaque jour des agents de programmation IA pour automatiser le travail de développement courant, en relisant tout leur travail en détail.

#### Pratiques d'ingénierie et livraison

- Création de zéro du cadre de tests (pytest pour le backend, Playwright pour le frontend et les tests d'intégration) ; j'ai écrit la plupart des tests et formé l'équipe à en écrire.
- Mise en place de l'intégration continue avec GitHub Actions : les tests doivent passer avant toute fusion.
- Standardisation des modèles de pull request dans un format commun qui alimente aussi les notes de version ; je gère les déploiements dans tous les environnements et rédige les notes de version.
- Rédaction et relecture de la majeure partie de la documentation technique.

#### Leadership technique

- Je définis l'orientation technique, l'architecture et les priorités de la plateforme ; j'ordonne le backlog avec la direction, en équilibrant dépendances techniques et besoins clients et commerciaux.
- Présentations devant le conseil d'administration d'AerPrice.
- Mentorat du développeur junior ; définition des standards de conception, de revue de code et de documentation.
- Conception de solutions pour les propositions aux prospects ; traduction des besoins en logique, procédures et tests.

## Deloitte Irlande

### Assistant Manager — [Deloitte Irlande](https://www.deloitte.com/ie/en.html)

*Sept. 2024 – juil. 2025 · Actuarial Modelling Centre (Actuarial, Rewards & Analytics) · Dublin*

Deux promotions en quatre ans chez Deloitte.

- Développement de nouveaux logiciels actuariels sur des outils open source pour la modélisation du capital, la gestion des hypothèses et le reporting réglementaire ; intégration aux modèles actuariels et bases de données existants via des API ; conception d'architectures.
- Construction de chaînes de traitement de données (nettoyage, validation, ETL) pour de grands jeux de données d'assurance et de réassurance, rapprochées des anciens systèmes à moins de 1 % près ou selon le seuil de matérialité requis.
- Refonte de processus de modélisation actuarielle au gré de l'évolution des besoins clients et des technologies.
- Interface entre les équipes actuarielles et informatiques sur les besoins et les méthodes, pour que rien ne se perde en route.
- Définition de standards de développement pour le contrôle de version et la qualité du code (Git, Jira, Azure DevOps) ; configuration des politiques, dépôts et organisations Azure DevOps.
- Animation de formations techniques pour développeurs et actuaires, en interne et chez les clients ; mentorat de collaborateurs juniors ; entretiens d'évaluation.
- Gestion des budgets et des délais ; conseil aux clients sur le choix des technologies, l'intégration des systèmes et le budget des développements.
- Modélisation actuarielle : modèles de provisionnement et de capital, Solvabilité II, modèles internes, projections du passif.

**Outils :** Python (pandas, NumPy, Numba, multiprocessing, Flask, Tkinter), SQL, MG-ALFA, Tyche, Azure (DevOps, Databricks, Data Lake, Entra).

### Consultante actuarielle — Deloitte Irlande

*Sept. 2022 – août 2024 · Dublin*

- Conception et construction de modèles actuariels pour la tarification en assurance de particuliers, la modélisation du passif de réassurance, le provisionnement en assurance non-vie, la gestion des hypothèses et l'optimisation de systèmes de données.
- Revue et mise à jour de modèles de tarification et de provisionnement pour l'assurance de particuliers et d'entreprises, en validant les changements avec les parties prenantes.
- Recalculs de provisions, réplications de modèles et analyses de données pour des audits actuariels d'assureurs et de réassureurs non-vie ; présentations techniques et réponses aux questions d'audit.
- Rédaction de notes pour les associés et de dossiers d'audit destinés aux comités de revue.
- Travail en direct avec les clients et présentation des résultats ; tableaux de bord Power BI et visualisations Excel et Plotly/R des résultats des modèles.
- Mise en œuvre de tables, requêtes et procédures stockées derrière des interfaces utilisateur, et de logiciels statistiques de prévision du passif.
- Animation de sessions de transfert de connaissances sur les bonnes pratiques de programmation, la modélisation actuarielle et l'éthique des données, et de sessions internes sur le développement logiciel, Agile, la conception orientée objet et les méthodes statistiques.

### Analyste actuarielle — Deloitte Irlande

*Sept. 2021 – sept. 2022 · Dublin*

- Développement d'interfaces et de moteurs de calcul en preuve de concept pour des applications actuarielles et financières.
- Réplications de modèles et validation des résultats pour des audits actuariels, rapprochés à moins de 1 % près.
- Automatisation en VBA de travaux Excel et Access pour les équipes actuariat, audit et évaluation.

Voir [Projets](/projects/#missions-pour-les-clients-de-deloitte) pour les missions derrière ces postes.

## Avant Deloitte

### Enseignante en ligne et conceptrice de contenus, Communication des données — [Purdue University](https://www.purdue.edu/)

*Janv. 2020 – mai 2021 · Temps partiel*

- Enseignement en ligne de la visualisation de données et du storytelling (Data Communication and Research Ethics) à des classes de jusqu'à 200 étudiants avec le professeur Sorin Matei.
- Création des supports de cours (programme, lectures, fiches explicatives, scripts vidéo) et des grilles d'évaluation ; permanences et accompagnement individuel.

### Stagiaire achats globaux — JBS USA

*Juin – août 2020 · Greeley, Colorado*

- **Cartes bancaires :** analyse des dépenses historiques par moyen de paiement ; j'ai identifié 80 M$ par an pouvant passer à des moyens de paiement ouvrant droit à des remises, soit environ 1,2 M$ de remises par an — environ cinq fois l'objectif de 260 000 $ —, plus une économie supplémentaire de 0,31 % sur les dépenses par carte en alignant les délais de paiement sur le WACC de l'entreprise.
- **Gazole :** avec le responsable des achats d'énergie, identification de six sites pouvant économiser en moyenne 20 % par an grâce à de plus grandes cuves de gazole et à des prix OPIS compétitifs, et de 30 à 80 % supplémentaires grâce à des groupes frigorifiques électriques.
- Feuille de route pour transformer la comptabilité fournisseurs de centre de coûts en centre de profit ; automatisation en VBA des rapports du service.

### Assistante de troisième cycle — [Purdue Foundry](https://purduefoundry.com/)

*Août 2019 – mai 2021 · West Lafayette, Indiana*

- Pilotage de la transformation des systèmes de données, dont la réimplémentation du CRM et la refonte des flux de données.
- Interlocutrice de trois start-up : études de marché, business plans et mise en relation — dont des modèles de mise sur le marché pour NutraMaize et SpeechVive et une étude de nouveaux marchés pour Predictive Wear.

### Consultante — [TruQua Enterprises](https://truqua.com/)

*Août 2018 – juil. 2019 · Chicago*

- Consultante en entrepôts de données et en logiciels d'apprentissage automatique.
- Livraison de composants clés d'une implémentation SAP FICO et HANA de 775 M$ pour un client des biens de consommation ; outils développés sur SAP HANA, Business Warehouse, Fiori et SuccessFactors.
- Analyse métier, documentation, modélisation des données et tests ; preuves de concept d'apprentissage automatique en Python pour la prévision financière.
- Travail en équipe, encadrement d'une équipe, conduite d'une mission client en autonomie, et préparation de démonstrations commerciales et de formations.

### Assistante de recherche, science politique — [University of Chicago](https://www.uchicago.edu/)

*Août 2016 – juin 2018 · Chicago*

- Développement d'un logiciel de fouille de textes pour 15 millions de tweets en Python et R sous Linux, pour les recherches du professeur John Brehm sur l'opinion politique sur les réseaux sociaux : collecte via l'API de Twitter pendant un an, filtrage sur les nominations à la Cour suprême de Merrick Garland et Neil Gorsuch, et préparation pour le traitement automatique du langage et l'analyse de sentiment par dictionnaire.
- Intervenante au congrès annuel de la Midwest Political Science Association, 2017. L'article se trouve sur la page [Projets](/projects/#projets-anterieurs-et-universitaires).

### Chercheuse indépendante

*Juin – août 2017 · Rabat (Maroc) et Le Cap (Afrique du Sud)*

Recherche par entretiens et analyse automatisée de textes sur les commissions de vérité et la justice transitionnelle, devenue mon mémoire de licence.

### Stagiaire développement — [Chicago Literacy Alliance](https://chicagoliteracyalliance.org/)

*Sept. 2017 – janv. 2018 · Chicago*

Recherche de donateurs et de partenaires pour une alliance de 125 associations d'alphabétisation ; recrutement de plus de 100 sponsors et pilotage de la collecte de la campagne de printemps ; création d'un système de suivi des dons.

### Stagiaire programmes alternatifs — Département pénitentiaire du comté de Cook

*Juin – août 2016 · Chicago*

Travail au sein de la prison du comté de Cook sur les services d'éducation et de réinsertion : examen de plus de 50 demandes de service par jour, audit d'un prestataire externe d'accompagnement sous contrat de plusieurs millions de dollars, évaluation des besoins et création d'une base de données de présence et de demandes.

### Externat — Immigration Center for Women and Children

*Déc. 2015 · Oakland, Californie*

Entretiens avec les usagers, traduction et relecture de documents juridiques et médicaux, et recherche de ressources.

## Compétences

- **Actuariat :** tarification, provisionnement, réassurance, gestion des hypothèses, validation de modèles, audit actuariel, réserves de maintenance.
- **IA et apprentissage automatique :** développement d'applications LLM (prompt engineering, chaînes de traitement multi-étapes, utilisation d'outils, recherche par embeddings, extraction de documents), apprentissage automatique, explicabilité (SHAP), chaînes de fine-tuning LoRA, agents de programmation IA.
- **Programmation :** Python (pandas, NumPy, Numba, Flask, FastAPI, SQLAlchemy), SQL, JavaScript/TypeScript, React, Next.js, HTML/CSS, R, C++, VBA, PowerShell.
- **Données et cloud :** Microsoft Azure (dont Azure AI Document Intelligence), Google Cloud Platform, SQL Server / T-SQL, PostgreSQL et pgvector, Cosmos DB, Firestore, SAP HANA, Docker, ETL, conception de schémas et normalisation.
- **Pratiques d'ingénierie :** Git, GitHub Actions, Azure DevOps, Jira, tests automatisés (pytest, Playwright), revue de code, gestion des versions, documentation, Agile, calcul parallèle, conception orientée objet.
- **Visualisation de données :** Power BI, Tableau, Plotly, R, Recharts, Excel.
- **Gouvernance :** RGPD, règlement européen sur l'IA, IA responsable, éthique des données.
