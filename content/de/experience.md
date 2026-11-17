---
title: Berufserfahrung
layout: timeline
description: "Die Berufserfahrung von Laura Rossi – Senior Software-Ingenieurin bei AerPrice, aktuarielle Modellierung bei Deloitte Irland und frühere Stationen in Beratung, Forschung und Lehre."
lead: "Über sechs Jahre Finanzsoftware und aktuarielle Modellierung – von Solvency-II-Engines und Katastrophenmodellen bei Deloitte bis zur zentralen Berechnungsengine einer Preisplattform für Flugzeugleasing."
actions:
  # Für einen deutschen Lebenslauf: public/downloads/Laura_Rossi_CV_de.pdf hochladen und den Link hier ändern
  - label: "Lebenslauf herunterladen (PDF, auf Englisch)"
    href: /downloads/Laura_Rossi_CV.pdf
    primary: true
  - label: Diese Seite drucken
    href: "#print"
    print: true
  - label: LinkedIn
    href: https://www.linkedin.com/in/laura-agustina-rossi/
---

## Aktuell

### Senior Software-Ingenieurin — [AerPrice](https://www.aerprice.com/)

*Aug. 2025 – heute · Dublin · Preissoftware für Flugzeugleasing*

Ein Start-up mit fünf Personen, das Preissoftware für Flugzeugleasing entwickelt. Python, Flask, SQLAlchemy, SQL, JavaScript, HTML/CSS.

#### Reserven- und Berechnungsengine

- Verantwortliche und Hauptmaintainerin der Engine für Instandhaltungsreserven, der zentralen und komplexesten Berechnung des Produkts: die monatliche Reservenbildung je Flugzeugkomponente aus der Nutzung (Flugstunden, Zyklen) und den Leasingbedingungen, zur Finanzierung künftiger Wartungs-, Reparatur- und Inspektionsereignisse.
- Vollständige Überarbeitung der Engine: Erweiterung von Szenarien mit einem Leasingvertrag auf Szenarien mit mehreren, höhere Geschwindigkeit sowie neue Obergrenzen, Variabilität und vom Nutzer anpassbare Parameter.
- Entwurf und Dokumentation eines Großteils des Datenbankschemas, darunter Reserven-Engine, Szenarien mit mehreren Leasingverträgen, Standardwerte und Kundenkonfiguration; ich prüfe und genehmige alle Schemaänderungen und halte das Schema in der dritten Normalform.

#### KI- und LLM-Funktionen

- Leitende Entwicklerin der LLM-Funktionen des Produkts (OpenAI-Modelle, Azure AI Document Intelligence): Extraktion strukturierter Daten aus komplexen, uneinheitlich formatierten technischen Flugzeugdokumenten mit verpflichtender menschlicher Prüfung sowie ein Assistent in natürlicher Sprache, der Funktionen der Preisengine aufruft, um Fragen zu Reserven und Preisen zu beantworten.
- Überführung KI-gestützter Prototypen in die Produktion: Code-Review, Refactoring, Tests und Integration in die zentrale Berechnungsengine.
- Täglicher Einsatz von KI-Coding-Agenten zur Automatisierung von Routineaufgaben in der Entwicklung, mit detaillierter Prüfung aller Ergebnisse.

#### Engineering-Praxis und Auslieferung

- Aufbau des Test-Frameworks von Grund auf (pytest für das Backend, Playwright für Frontend- und Integrationstests); Großteil der Tests selbst geschrieben und das Team darin geschult.
- Einführung von Continuous Integration mit GitHub Actions: Vor jedem Merge müssen die Tests bestehen.
- Vereinheitlichte Pull-Request-Vorlagen in einem gemeinsamen Format, das auch die Release Notes speist; ich verantworte die Deployments in alle Umgebungen und schreibe die Release Notes.
- Verfassen und Prüfen des Großteils der technischen Dokumentation.

#### Technische Leitung

- Festlegung von technischer Ausrichtung, Architektur und Prioritäten der Plattform; Planung des Backlogs mit der Geschäftsführung, abgestimmt zwischen technischen Abhängigkeiten und Kunden- sowie Vertriebsanforderungen.
- Präsentationen vor dem Board von AerPrice.
- Mentorin des Junior-Entwicklers; Standards für Design, Code-Review und Dokumentation.
- Lösungsentwürfe für Angebote an potenzielle Kunden; Übersetzung von Anforderungen in Logik, Abläufe und Tests.

## Deloitte Irland

### Assistant Manager — [Deloitte Irland](https://www.deloitte.com/ie/en.html)

*Sep. 2024 – Juli 2025 · Actuarial Modelling Centre (Actuarial, Rewards & Analytics) · Dublin*

Zweimal befördert in vier Jahren bei Deloitte.

- Entwicklung neuer aktuarieller Software auf Open-Source-Basis für Kapitalmodellierung, Annahmenmanagement und aufsichtsrechtliches Reporting; Anbindung an bestehende aktuarielle Modelle und Datenbanken über APIs; Entwurf von Systemarchitekturen.
- Aufbau von Datenpipelines (Bereinigung, Validierung, ETL) für große Versicherungs- und Rückversicherungsdatensätze, abgestimmt mit den Vorgängersystemen auf unter 1 % oder gemäß Wesentlichkeitsgrenze.
- Neugestaltung aktuarieller Modellierungsprozesse, wenn sich Kundenbedürfnisse und Technologie änderten.
- Vermittlung von Anforderungen und Methoden zwischen Aktuariats- und IT-Teams, damit nichts in der Übersetzung verloren ging.
- Entwicklungsstandards für Versionskontrolle und Codequalität (Git, Jira, Azure DevOps); Konfiguration von Azure-DevOps-Richtlinien, -Repositories und -Organisationen.
- Leitung technischer Schulungen für Entwickler und Aktuare, intern und bei Kunden; Mentoring von Nachwuchskräften; Leistungsbeurteilungen.
- Budget- und Terminverantwortung; Beratung von Kunden zu Technologieauswahl, Systemintegration und Entwicklungsbudgets.
- Aktuarielle Modellierung: Reserve- und Kapitalmodelle, Solvency II, interne Modelle, Projektionen von Verbindlichkeiten.

**Werkzeuge:** Python (pandas, NumPy, Numba, multiprocessing, Flask, Tkinter), SQL, MG-ALFA, Tyche, Azure (DevOps, Databricks, Data Lake, Entra).

### Aktuarielle Beraterin — Deloitte Irland

*Sep. 2022 – Aug. 2024 · Dublin*

- Entwurf und Aufbau aktuarieller Modelle für die Tarifierung im Privatkundengeschäft, die Modellierung von Rückversicherungsverbindlichkeiten, die Reservierung in der Schaden- und Unfallversicherung, das Annahmenmanagement und die Optimierung von Datensystemen.
- Prüfung und Aktualisierung von Tarifierungs- und Reservierungsmodellen für Privat- und Firmenkunden, mit Abstimmung der Änderungen mit den wichtigsten Beteiligten.
- Neuberechnung von Reserven, Modellreplikationen und Datenanalysen für aktuarielle Prüfungen von Schaden- und Rückversicherern; technische Walkthroughs und Prüfungsanfragen.
- Memos für Partner und Prüfungsunterlagen für die Prüfungsgremien.
- Direkte Zusammenarbeit mit Kunden und Präsentation der Ergebnisse; Power-BI-Dashboards sowie Visualisierungen der Modellergebnisse in Excel und Plotly/R.
- Umsetzung von Datenbanktabellen, Abfragen und Stored Procedures hinter Benutzeroberflächen sowie statistischer Software zur Prognose von Verbindlichkeiten.
- Wissenstransfer-Sessions zu Programmierpraxis, aktuarieller Modellierung und Datenethik sowie interne Sessions zu Softwareentwicklung, Agile, objektorientiertem Design und statistischen Methoden.

### Aktuarielle Analystin — Deloitte Irland

*Sep. 2021 – Sep. 2022 · Dublin*

- Benutzeroberflächen und Berechnungsengines als Proof of Concept für aktuarielle und finanzielle Anwendungen.
- Modellreplikationen und Ergebnisvalidierung für aktuarielle Prüfungen, abgestimmt auf unter 1 %.
- Automatisierung von Excel- und Access-Arbeiten in VBA für die Teams Aktuariat, Prüfung und Bewertung.

Die Kundenprojekte hinter diesen Positionen stehen unter [Projekte](/projects/#kundenprojekte-bei-deloitte).

## Vor Deloitte

### Online-Dozentin und Inhaltsentwicklerin, Datenkommunikation — [Purdue University](https://www.purdue.edu/)

*Jan. 2020 – Mai 2021 · Teilzeit*

- Online-Lehre zu Datenvisualisierung und Storytelling (Data Communication and Research Ethics) für Kurse mit bis zu 200 Studierenden, gemeinsam mit Professor Sorin Matei.
- Erstellung von Kursmaterial (Lehrplan, Lektüre, Erklärtexte, Videoskripte) und Bewertungsrastern; Sprechstunden und Einzelbetreuung.

### Praktikantin im globalen Einkauf — JBS USA

*Juni – Aug. 2020 · Greeley, Colorado*

- **Bankkarten:** Analyse der historischen Ausgaben nach Zahlungsart; ich fand 80 Mio. US-Dollar pro Jahr, die auf rabattfähige Zahlungsmittel umgestellt werden konnten – rund 1,2 Mio. US-Dollar Rückvergütung pro Jahr, etwa das Fünffache des Ziels von 260.000 US-Dollar –, dazu weitere 0,31 % Ersparnis bei Kartenzahlungen durch Anpassung der Zahlungsfristen an die WACC des Unternehmens.
- **Diesel:** Mit dem Leiter des Energieeinkaufs identifizierte ich sechs Werke mit durchschnittlich 20 % jährlicher Einsparung durch größere Dieseltanks und wettbewerbsfähige OPIS-Preise sowie weitere 30–80 % durch elektrische Kühlaggregate.
- Roadmap, um die Kreditorenbuchhaltung von einem Kosten- zu einem Profitcenter zu machen; Automatisierung des Abteilungsreportings in VBA.

### Wissenschaftliche Hilfskraft — [Purdue Foundry](https://purduefoundry.com/)

*Aug. 2019 – Mai 2021 · West Lafayette, Indiana*

- Leitung der Transformation der Datensysteme, einschließlich der Neueinführung des CRM und der Neugestaltung der Datenflüsse.
- Ansprechpartnerin für drei Start-ups: Marktforschung, Businesspläne und Networking – darunter Go-to-Market-Modelle für NutraMaize und SpeechVive und Marktanalysen für Predictive Wear.

### Beraterin — [TruQua Enterprises](https://truqua.com/)

*Aug. 2018 – Juli 2019 · Chicago*

- Softwareberaterin für Data-Warehouse-Management und Machine-Learning-Software.
- Lieferung zentraler Komponenten einer SAP-FICO- und HANA-Einführung im Wert von 775 Mio. US-Dollar für einen Konsumgüterkunden; Tools auf SAP HANA, Business Warehouse, Fiori und SuccessFactors.
- Business-Analyse, Dokumentation, Datenmodellierung und Tests; Machine-Learning-Proofs-of-Concept in Python für Finanzprognosen.
- Arbeit im Team, Leitung eines Teams, ein Kundenprojekt in Eigenverantwortung sowie Vertriebsdemos und Schulungen.

### Wissenschaftliche Hilfskraft, Politikwissenschaft — [University of Chicago](https://www.uchicago.edu/)

*Aug. 2016 – Juni 2018 · Chicago*

- Entwicklung von Text-Mining-Software für 15 Millionen Tweets in Python und R unter Linux für die Forschung von Professor John Brehm zur politischen Meinung in sozialen Medien: Erhebung über die Twitter-API über ein Jahr, Filterung auf die Nominierungen von Merrick Garland und Neil Gorsuch für den Supreme Court und Aufbereitung für Sprachverarbeitung und wörterbuchbasierte Sentimentanalyse.
- Referentin auf der Jahrestagung der Midwest Political Science Association 2017. Das Paper steht auf der Seite [Projekte](/projects/#fruhere-und-akademische-projekte).

### Unabhängige Forscherin

*Juni – Aug. 2017 · Rabat (Marokko) und Kapstadt (Südafrika)*

Interviewforschung und automatisierte Textanalyse zu Wahrheitskommissionen und Übergangsjustiz, aus der meine Bachelorarbeit wurde.

### Praktikantin im Fundraising — [Chicago Literacy Alliance](https://chicagoliteracyalliance.org/)

*Sep. 2017 – Jan. 2018 · Chicago*

Recherche zu Spendern und Partnern für einen Verbund von 125 gemeinnützigen Organisationen zur Leseförderung; Gewinnung von über 100 Sponsoren und Leitung des Fundraisings der Frühjahrskampagne; Aufbau eines Systems zur Spendenverfolgung.

### Praktikantin für alternative Programme — Strafvollzugsbehörde des Cook County

*Juni – Aug. 2016 · Chicago*

Arbeit im Gefängnis des Cook County an Bildungs- und Resozialisierungsangeboten: Prüfung von über 50 Serviceanfragen pro Tag, Prüfung eines externen Beratungsanbieters mit einem Millionenvertrag, Bedarfsanalyse und Aufbau einer Datenbank für Anwesenheit und Anfragen.

### Externship — Immigration Center for Women and Children

*Dez. 2015 · Oakland, Kalifornien*

Gespräche mit Klientinnen und Klienten, Übersetzung und Prüfung juristischer und medizinischer Dokumente sowie Recherche zu Hilfsangeboten.

## Kompetenzen

- **Aktuariat:** Tarifierung, Reservierung, Rückversicherung, Annahmenmanagement, Modellvalidierung, aktuarielle Prüfung, Instandhaltungsreserven.
- **KI und maschinelles Lernen:** Entwicklung von LLM-Anwendungen (Prompt Engineering, mehrstufige Pipelines, Tool-Nutzung, Retrieval mit Embeddings, Dokumentenextraktion), maschinelles Lernen, Erklärbarkeit (SHAP), LoRA-Fine-Tuning-Pipelines, KI-Coding-Agenten.
- **Programmierung:** Python (pandas, NumPy, Numba, Flask, FastAPI, SQLAlchemy), SQL, JavaScript/TypeScript, React, Next.js, HTML/CSS, R, C++, VBA, PowerShell.
- **Daten und Cloud:** Microsoft Azure (einschließlich Azure AI Document Intelligence), Google Cloud Platform, SQL Server / T-SQL, PostgreSQL und pgvector, Cosmos DB, Firestore, SAP HANA, Docker, ETL, Schemaentwurf und Normalisierung.
- **Engineering-Praxis:** Git, GitHub Actions, Azure DevOps, Jira, automatisierte Tests (pytest, Playwright), Code-Review, Release-Management, Dokumentation, Agile, paralleles Rechnen, objektorientiertes Design.
- **Datenvisualisierung:** Power BI, Tableau, Plotly, R, Recharts, Excel.
- **Governance:** DSGVO, KI-Verordnung der EU, verantwortungsvolle KI, Datenethik.
