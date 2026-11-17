---
title: Experience
layout: timeline
description: Laura Rossi's experience — Senior Software Engineer at AerPrice, actuarial modelling at Deloitte Ireland, and earlier roles in consulting, research and teaching.
lead: Six-plus years in financial software and actuarial modelling — from Solvency II engines and catastrophe models at Deloitte to the core calculation engine of an aircraft leasing pricing platform.
actions:
  # To update the CV, replace public/downloads/Laura_Rossi_CV.pdf (keep the file name)
  - label: Download CV (PDF)
    href: /downloads/Laura_Rossi_CV.pdf
    primary: true
  - label: Print this page
    href: "#print"
    print: true
  - label: LinkedIn
    href: https://www.linkedin.com/in/laura-agustina-rossi/
---

<!--
How this page works: every "### " heading is one entry on the paw timeline.
An all-italic line straight after it becomes the grey date line.
"## " headings start a new section (and a new timeline).
-->

## Current

### Senior Software Engineer — [AerPrice](https://www.aerprice.com/)

*Aug 2025 – present · Dublin · Aircraft leasing pricing software*

A five-person startup building pricing software for aircraft leasing. Python, Flask, SQLAlchemy, SQL, JavaScript, HTML/CSS.

#### Reserves and calculation engine

- Lead and main maintainer of the maintenance reserves engine, the product's core and most complex calculation: monthly reserve accrual per aircraft component from utilisation (flight hours, cycles) and lease conditions, funding future maintenance, repair and inspection events.
- Refactored the engine end to end: extended it from single-lease to multi-lease scenarios, made it faster, and added limits, variability and new user-adjustable inputs.
- Designed and documented much of the database schema, including the reserves engine, multi-lease scenarios, defaults and customer configuration; review and approve all schema changes, and keep the schema in third normal form.

#### AI and LLM features

- Lead developer on the product's LLM features (OpenAI models, Azure AI Document Intelligence): extraction of structured data from complex, inconsistently formatted aircraft technical documents, with enforced human review; and a natural-language assistant that calls pricing-engine functions to answer questions on reserves and pricing.
- Took AI-prototyped features to production: code review, refactoring, testing and integration with the core calculation engine.
- Use AI coding agents daily to automate routine development work, reviewing all output in detail.

#### Engineering practice and delivery

- Built the testing framework from scratch (pytest for the backend, Playwright for frontend and integration tests); wrote most of the tests and trained the team to write them.
- Introduced CI with GitHub Actions, so tests must pass before any merge.
- Standardised PR templates in a shared format that also feeds the release notes; run deployments to all environments and write the release notes.
- Wrote and review most of the technical documentation.

#### Technical leadership

- Set technical direction, architecture and priorities for the pricing platform; sequence the backlog with leadership, balancing technical dependencies with client and commercial needs.
- Presented to the AerPrice board.
- Mentor the junior developer; set design, code review and documentation standards.
- Design solutions for prospective customers' proposals and turn requirements into logic, procedures and tests.

## Deloitte Ireland

### Assistant Manager — [Deloitte Ireland](https://www.deloitte.com/ie/en.html)

*Sep 2024 – Jul 2025 · Actuarial Modelling Centre (Actuarial, Rewards & Analytics) · Dublin*

Promoted twice in four years at Deloitte.

- Built new actuarial software on open-source tools for capital modelling, assumptions management and regulatory reporting; integrated it with existing actuarial models and databases through APIs; designed system architectures.
- Built data pipelines (cleaning, validation, ETL) for large insurance and reinsurance datasets, reconciled to prior systems within 1% or as required by materiality.
- Redesigned actuarial modelling processes as client needs and technology changed.
- Translated requirements and methods between actuarial and IT teams, so nothing was lost in translation.
- Set development standards for version control and code quality (Git, Jira, Azure DevOps); configured Azure DevOps policies, repos and organisations.
- Led technical training for developers and actuaries, in-house and for clients; mentored junior staff; ran performance reviews.
- Budget and deadline management; client solution advisory on technology stacks, system integration and budgeting builds.
- Actuarial modelling: reserving and capital models, Solvency II, internal models, liability projections.

**Tools:** Python (pandas, NumPy, Numba, multiprocessing, Flask, Tkinter), SQL, MG-ALFA, Tyche, Azure (DevOps, Databricks, Data Lake, Entra).

### Actuarial Consultant — Deloitte Ireland

*Sep 2022 – Aug 2024 · Dublin*

- Designed and built actuarial models for personal lines pricing, reinsurance liability modelling, general insurance reserving, assumptions management and data system optimisation.
- Reviewed and updated pricing and reserving models for personal and commercial lines, agreeing changes with key stakeholders.
- Reserve recalculations, model replications and data analysis for actuarial audits of non-life insurers and reinsurers; technical walkthroughs and audit queries.
- Prepared memos for partners and audit submissions that go to audit review boards.
- Worked directly with clients and presented results to them; built Power BI dashboards and Excel and Plotly/R visualisations of model results.
- Implemented database tables, queries and stored procedures behind user-facing interfaces, and statistical software for liability forecasting.
- Led knowledge-transfer sessions on programming practice, actuarial modelling and data ethics, and internal sessions on software development, Agile, object-oriented design and statistical methods.

### Actuarial Analyst — Deloitte Ireland

*Sep 2021 – Sep 2022 · Dublin*

- Built proof-of-concept UIs and calculation engines for actuarial and financial applications.
- Model replications and results validation for actuarial audits, reconciled to within 1%.
- Automated Excel and Access work for the actuarial, audit and valuations teams in VBA.

See [Projects](/projects/#deloitte-client-work) for the client work behind these roles.

## Before Deloitte

### Online Instructor and Content Designer, Data Communication — [Purdue University](https://www.purdue.edu/)

*Jan 2020 – May 2021 · Part-time*

- Taught data visualisation and storytelling (Data Communication and Research Ethics) online to classes of up to 200 students with Professor Sorin Matei.
- Built course material (syllabus, readings, explainers, video scripts) and assessment rubrics; office hours and one-to-one mentoring.

### Global Procurement Intern — JBS USA

*Jun – Aug 2020 · Greeley, Colorado*

- **Banking cards:** analysed historical spend by payment type and found $80m a year that could move to rebate-eligible payment methods, worth about $1.2m a year in rebates — roughly five times the $260k target — plus a further 0.31% saving on card spend by aligning payment days with the company's WACC.
- **Diesel fuel:** with the head of Energy Procurement, identified six plants with average savings of 20% a year from larger off-road diesel tanks and competitive OPIS pricing, and further savings of 30–80% from electric TRUs.
- Roadmap to turn accounts payable from a cost centre into a profit centre; automated department reporting in VBA.

### Graduate Assistant — [Purdue Foundry](https://purduefoundry.com/)

*Aug 2019 – May 2021 · West Lafayette, Indiana*

- Led the data systems transformation, including the CRM re-implementation and data flow redesign.
- Point person for three start-ups: market research, business planning and networking — including go-to-market models for NutraMaize and SpeechVive and new-market research for Predictive Wear.

### Consultant — [TruQua Enterprises](https://truqua.com/)

*Aug 2018 – Jul 2019 · Chicago*

- Software consultant in data warehouse management and machine learning software.
- Delivered key components of a $775m SAP FICO and HANA implementation for a consumer goods client; built tools on SAP HANA, Business Warehouse, Fiori and SuccessFactors.
- Business analysis, documentation, data modelling and testing; machine learning proofs of concept in Python for financial forecasting.
- Worked in teams, led a team, ran a solo client project, and produced sales demos and trainings.

### Research Assistant, Political Science — [University of Chicago](https://www.uchicago.edu/)

*Aug 2016 – Jun 2018 · Chicago*

- Built text-mining software for 15 million tweets in Python and R on Linux for Professor John Brehm's research on political opinion in social media: collection from Twitter's API over a year, cleaning to the Supreme Court nominations of Merrick Garland and Neil Gorsuch, and preparation for NLP and dictionary-based sentiment analysis.
- Panelist at the Midwest Political Science Association annual meeting, 2017. The paper is on the [Projects](/projects/#earlier-and-academic) page.

### Independent Researcher

*Jun – Aug 2017 · Rabat, Morocco and Cape Town, South Africa*

Interview and automated text analysis research on truth commissions and transitional justice, which became my BA thesis.

### Development Intern — [Chicago Literacy Alliance](https://chicagoliteracyalliance.org/)

*Sep 2017 – Jan 2018 · Chicago*

Donor and partner research for an alliance of 125 literacy non-profits; recruited 100+ sponsors and led fundraising for the spring campaign; built a donation tracking system.

### Alternative Programs Intern — Cook County Department of Corrections

*Jun – Aug 2016 · Chicago*

Worked inside Cook County Jail on education and rehabilitation services: reviewed 50+ daily service requests, audited a third-party counselling provider under a multi-million-dollar contract, ran a needs assessment and built an attendance and service-request database.

### Extern — Immigration Center for Women and Children

*Dec 2015 · Oakland, California*

Client interviews, translation and review of legal and medical documents, and resource research.

## Skills

- **Actuarial:** pricing, reserving, reinsurance, assumptions management, model validation, actuarial audit, maintenance reserves.
- **AI and machine learning:** LLM application development (prompt engineering, multi-step pipelines, tool use, retrieval with embeddings, document extraction), machine learning, explainability (SHAP), LoRA fine-tuning pipelines, AI coding agents.
- **Programming:** Python (pandas, NumPy, Numba, Flask, FastAPI, SQLAlchemy), SQL, JavaScript/TypeScript, React, Next.js, HTML/CSS, R, C++, VBA, PowerShell.
- **Data and cloud:** Microsoft Azure (including Azure AI Document Intelligence), Google Cloud Platform, SQL Server / T-SQL, PostgreSQL and pgvector, Cosmos DB, Firestore, SAP HANA, Docker, ETL, schema design and normalisation.
- **Engineering practice:** Git, GitHub Actions, Azure DevOps, Jira, automated testing (pytest, Playwright), code review, release management, documentation, Agile, parallel computing, object-oriented design.
- **Data visualisation:** Power BI, Tableau, Plotly, R, Recharts, Excel.
- **Governance:** GDPR, EU AI Act, responsible AI, data ethics.
