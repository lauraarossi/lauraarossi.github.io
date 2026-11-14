---
title: Projects
layout: timeline
description: Projects by Laura Rossi — Plan Away, Eevie, MTG Chicken Soup, actuarial software built at Deloitte, and earlier research.
lead: Things I've designed and built on my own time, the client work behind my Deloitte years, and earlier research.
---

## Personal projects

Everything here is solo work: designed, built and deployed by me.

### [Plan Away](https://plan-away.net/)

*Live · JavaScript, Cloudflare Workers, Firebase (Firestore)*

A web app for planning trips together on one shared drag-and-drop timeline of stays, day trips and travel. It splits costs across the group, totals multi-select items, marks payments and to-dos, summarises stays across the whole trip, zooms between views and autosaves. Available in 30+ languages.

### [Eevie](https://github.com/lauraarossi/EV_platform)

*2026 · FastAPI, PostgreSQL, React 19, TypeScript · currently offline*

Compares what a car really costs to run with the alternative — an EV against petrol or diesel — using actual weekly fuel prices.

- Ingests and reconciles the EU Weekly Oil Bulletin, EEA CO2 monitoring data and the evdb and UK VCA catalogues, with heuristics that merge the same car spelled differently across sources.
- Idempotent refreshes that keep user-entered prices; logged background refresh jobs that survive a sleeping database.
- Normalised PostgreSQL schema with electricity tariffs versioned by effective date, including bands that cross midnight; emissions on a like-for-like basis; currency conversion.
- Google sign-in verified server-side and a role-based admin console.
- FastAPI, SQLAlchemy, Alembic, PostgreSQL, React 19, TypeScript, Vite, Tailwind, Recharts and Docker, with 337 automated backend tests.

### [MTG Chicken Soup](https://github.com/lauraarossi/MTG_chicken_soup)

*2026 · FastAPI, Next.js 14, PostgreSQL + pgvector · currently offline*

An AI deck builder for Magic: The Gathering Commander.

- Answers grounded in card data through OpenAI embeddings in pgvector and live Scryfall lookups, so it doesn't invent cards, with handling for ambiguous card names.
- Prompts adapt to the detected game format; swappable LLM providers (Claude, OpenAI-compatible, Ollama) with streamed responses.
- Data pipeline from Scryfall and EDHREC, and a LoRA fine-tuning pipeline for Qwen2.5-7B (built, not yet run).
- Google sign-in, profiles, deck saving, sharing and editing, CSV import/export and a mobile layout.

## Deloitte client work

Anonymised projects from my time in Deloitte's Actuarial Modelling Centre.

### Capital modelling — technical lead

*2025 · Large UK life and pensions provider*

Stepped in as technical lead on a complex internal-model capital solution.

### Solvency II calculation and reporting engine

*2024 · Large Irish life insurer · Python, MG-ALFA*

Designed and implemented a Python Solvency II calculation engine and report generator that integrates with the client's MG-ALFA models and produces management reports and data for downstream processing.

### Assumptions management system

*2024 · Large UK life and pensions provider · Python, Angular, Azure Functions*

An ETL system in Python behind an Angular and Azure Functions web UI. I joined as an individual contributor and became lead developer; the system is live and has had excellent feedback from its users.

### Catastrophe modelling

*2023 · Large UK general insurer · Tyche, Python, SQL, JavaScript*

A greenfield loss and liability modelling system built with an international team, taking in RMS and AIR data.

### Unit-linked data validation and analysis of change

*2022 · Multinational reinsurer · Python*

Migrated the validation and preprocessing for their unit-linked business from Access (SQL and VBA) to a Python program **100 times faster**, and trained their team to own and maintain it.

### Actuarial reporting proof of concept

*2022 · Python, Tkinter*

A desktop app that takes actuarial model data and generates customer reports as PDFs and Excel files, with automated emailing.

## Earlier and academic

### Foundry angel investor interviews

*2021 · Purdue Foundry*

Interviewed 16 potential US and international investors from the Foundry's network on interest in re-establishing a Purdue angel investor group and on their investment habits and hurdles, and compiled a qualitative report.

### Start-up research for the Purdue Foundry

*2019 – 2020*

- **Adipo Therapeutics:** target investor groups and possible corporate partners for a biotechnology start-up.
- **Go-to-market models:** spreadsheet models of go-to-market strategy, revenue potential, growth drivers and costs for SpeechVive and NutraMaize.
- **Hydration and college sports:** research on the impact of high-accuracy hydration monitoring on collegiate sports performance and revenue.
- **CRM evaluation:** requirements gathering and a fitness review of the Foundry's CRM with the Purdue Research Foundation's IT team, identifying optimisations and cost-effective new functionality.

### West Paw inventory analysis

*2020 · Independent study with Professor Gemma Berenguer Falguera, Purdue*

Analysis of holding costs and inventory levels for sustainable pet products manufacturer West Paw, leading to a new inventory policy recommendation and an analysis of its implications. [Download the analysis](/downloads/west-paw-analysis.docx)

### OEE database

*2018 · Personal project*

An MS Access database and reporting tool, built with a Chicago chemical production facility, that collects and summarises overall equipment effectiveness (OEE) across several facilities.

### BA thesis: Water under the bridge? Truth commissions' effectiveness in South Africa and Morocco

*2018 · University of Chicago*

Based on fieldwork interviews and automated text analysis in Rabat and Cape Town. [Download the thesis (PDF)](/downloads/water_under_the_bridge.pdf)

### Building community through sports in South African townships: playing towards substantive transition

*2018 · University of Chicago*

South Africa's political transition away from apartheid succeeded, but racial tensions and extreme economic inequality persist. The paper proposes sports education and direct investment in publicly financed, community-managed facilities to support reconciliation across racial lines and community development in the townships. [Download the paper (PDF)](/downloads/community-and-sports-investment-in-south-african-townships.pdf)

### Is political messaging persuasive or manipulative? Twitter messages about the Supreme Court nominations

*2017 · With Professor John Brehm, University of Chicago*

Presented at the Midwest Political Science Association annual meeting, 2017. [Download the paper (PDF)](/downloads/is_political_messaging_persuasive_or_manipulative.pdf)
