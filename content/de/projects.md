---
title: Projekte
layout: timeline
description: "Projekte von Laura Rossi – Plan Away, Eevie, MTG Chicken Soup, aktuarielle Software bei Deloitte und frühere Forschung."
lead: "Was ich in meiner Freizeit entworfen und gebaut habe, die Kundenprojekte aus meinen Jahren bei Deloitte und frühere Forschung."
---

## Eigene Projekte

Alles hier ist Einzelarbeit: von mir entworfen, gebaut und veröffentlicht.

### [Plan Away](https://plan-away.net/)

*Online · JavaScript, Cloudflare Workers, Firebase (Firestore)*

Eine Web-App, um Reisen gemeinsam auf einer geteilten Zeitleiste per Drag-and-drop zu planen: Unterkünfte, Tagesausflüge und Fahrten. Sie teilt Kosten in der Gruppe auf, auch per OCR-Scan von Belegen, summiert ausgewählte Einträge, markiert Zahlungen und To-dos, fasst die Unterkünfte der ganzen Reise zusammen, zoomt zwischen Ansichten und speichert automatisch. In über 30 Sprachen verfügbar. Als Nächstes: OCR für Buchungsbestätigungen.

### [Eevie](https://github.com/lauraarossi/EV_platform)

*Aug. – Sep. 2026 · FastAPI, PostgreSQL, React 19, TypeScript · derzeit offline*

Vergleicht, was ein Auto im Betrieb wirklich kostet, mit der Alternative – ein Elektroauto gegenüber Benziner oder Diesel – anhand der tatsächlichen wöchentlichen Kraftstoffpreise.

- Importiert und gleicht das wöchentliche Ölbulletin der EU, die CO2-Überwachungsdaten der EUA sowie die Kataloge von evdb und der britischen VCA ab, mit Heuristiken, die dasselbe Auto mit unterschiedlicher Schreibweise in verschiedenen Quellen zusammenführen.
- Idempotente Aktualisierungen, die von Nutzern eingegebene Preise erhalten; protokollierte Hintergrundjobs, die auch eine ruhende Datenbank überstehen.
- Normalisiertes PostgreSQL-Schema mit Stromtarifen, die nach Gültigkeitsdatum versioniert sind, einschließlich Zeitfenstern über Mitternacht; Emissionen auf vergleichbarer Basis; Währungsumrechnung.
- Google-Anmeldung mit serverseitiger Prüfung und rollenbasierte Admin-Konsole.
- FastAPI, SQLAlchemy, Alembic, PostgreSQL, React 19, TypeScript, Vite, Tailwind, Recharts und Docker, mit 337 automatisierten Backend-Tests.

### [MTG Chicken Soup](https://github.com/lauraarossi/MTG_chicken_soup)

*2026 · FastAPI, Next.js 14, PostgreSQL + pgvector · derzeit offline*

Ein KI-Assistent zum Bauen von Decks für Magic: The Gathering im Commander-Format.

- Antworten auf Basis echter Kartendaten über OpenAI-Embeddings in pgvector und Live-Abfragen bei Scryfall, damit keine Karten erfunden werden, mit Behandlung mehrdeutiger Kartennamen.
- Die Prompts passen sich dem erkannten Spielformat an; austauschbare LLM-Anbieter (Claude, OpenAI-kompatibel, Ollama) mit gestreamten Antworten.
- Datenpipeline aus Scryfall und EDHREC sowie eine LoRA-Fine-Tuning-Pipeline für Qwen2.5-7B (gebaut, noch nicht ausgeführt).
- Google-Anmeldung, Profile, Decks speichern, teilen und bearbeiten, CSV-Import und -Export sowie mobile Ansicht.

## Kundenprojekte bei Deloitte

Anonymisierte Projekte aus meiner Zeit im Actuarial Modelling Centre von Deloitte.

### Kapitalmodellierung – technische Leitung

*2025 · Großer britischer Lebens- und Pensionsversicherer*

Übernahme der technischen Leitung einer komplexen Kapitallösung mit internem Modell.

### Solvency-II-Berechnungs- und Reporting-Engine

*2024 · Großer irischer Lebensversicherer · Python, MG-ALFA*

Entwurf und Umsetzung einer Solvency-II-Berechnungsengine mit Berichtsgenerator in Python, angebunden an die MG-ALFA-Modelle des Kunden, die Managementberichte und Daten für nachgelagerte Prozesse erzeugt.

### System für Annahmenmanagement

*2024 · Großer britischer Lebens- und Pensionsversicherer · Python, Angular, Azure Functions*

Ein ETL-System in Python hinter einer Weboberfläche mit Angular und Azure Functions. Ich bin als Entwicklerin eingestiegen und wurde leitende Entwicklerin; das System ist produktiv und wird von seinen Nutzern sehr gut bewertet.

### Katastrophenmodellierung

*2023 · Großer britischer Schaden- und Unfallversicherer · Tyche, Python, SQL, JavaScript*

Ein neues System zur Modellierung von Schäden und Verbindlichkeiten, gebaut mit einem internationalen Team auf Basis von RMS- und AIR-Daten.

### Datenvalidierung und Analysis of Change für fondsgebundene Produkte

*2022 · Multinationaler Rückversicherer · Python*

Migration der Validierung und Vorverarbeitung des fondsgebundenen Geschäfts von Access (SQL und VBA) zu einem **100-mal schnelleren** Python-Programm sowie Schulung des Teams für Betrieb und Wartung.

### Proof of Concept für aktuarielles Reporting

*2022 · Python, Tkinter*

Eine Desktop-App, die Daten aus aktuariellen Modellen übernimmt und Kundenberichte als PDF und Excel erzeugt, mit automatischem E-Mail-Versand.

## Frühere und akademische Projekte

### Interviews mit Business Angels für die Foundry

*2021 · Purdue Foundry*

Interviews mit 16 potenziellen Investoren aus den USA und anderen Ländern aus dem Netzwerk der Foundry zu ihrem Interesse an einer Neugründung einer Business-Angel-Gruppe an der Purdue sowie zu ihren Investitionsgewohnheiten und Hürden, mit einem qualitativen Abschlussbericht.

### Analysen für Start-ups der Purdue Foundry

*2019 – 2020*

- **Adipo Therapeutics:** Zielgruppen unter Investoren und mögliche Unternehmenspartner für ein Biotech-Start-up.
- **Go-to-Market-Modelle:** Tabellenmodelle zu Markteinführungsstrategie, Umsatzpotenzial, Wachstumstreibern und Kosten für SpeechVive und NutraMaize.
- **Hydration und Hochschulsport:** Untersuchung, wie hochpräzises Hydrationsmonitoring Leistung und Einnahmen im Hochschulsport beeinflussen kann.
- **CRM-Bewertung:** Anforderungsanalyse und Bewertung des CRM der Foundry mit dem IT-Team der Purdue Research Foundation, mit Optimierungen und kostengünstigen neuen Funktionen.

### Bestandsanalyse für West Paw

*2020 · Unabhängige Studie bei Professorin Gemma Berenguer Falguera, Purdue*

Analyse der Lagerkosten und Bestände des Herstellers nachhaltiger Haustierprodukte West Paw, mit einer Empfehlung für eine neue Bestandspolitik und einer Analyse ihrer Auswirkungen. [Analyse herunterladen (auf Englisch)](/downloads/west-paw-analysis.docx)

### OEE-Datenbank

*2018 · Eigenes Projekt*

Eine Datenbank mit Berichtswerkzeug in MS Access, gebaut mit einem Chemiewerk in Chicago, die die Gesamtanlageneffektivität (OEE) mehrerer Standorte erfasst und zusammenfasst.

### Bachelorarbeit: Water under the bridge? Truth commissions' effectiveness in South Africa and Morocco

*2018 · University of Chicago*

Zur Wirksamkeit von Wahrheitskommissionen in Südafrika und Marokko, auf Basis von Feldinterviews und automatisierter Textanalyse in Rabat und Kapstadt. [Bachelorarbeit herunterladen (PDF, auf Englisch)](/downloads/water_under_the_bridge.pdf)

### Building community through sports in South African townships: playing towards substantive transition

*2018 · University of Chicago*

Südafrikas politischer Übergang nach der Apartheid war erfolgreich, doch rassistische Spannungen und extreme wirtschaftliche Ungleichheit bestehen fort. Die Arbeit schlägt Sporterziehung und direkte Investitionen in öffentlich finanzierte, von der Gemeinschaft verwaltete Sportstätten vor, um Versöhnung über ethnische Grenzen hinweg und die Entwicklung der Townships zu fördern. [Arbeit herunterladen (PDF, auf Englisch)](/downloads/community-and-sports-investment-in-south-african-townships.pdf)

### Is political messaging persuasive or manipulative? Twitter messages about the Supreme Court nominations

*2017 · Mit Professor John Brehm, University of Chicago*

Zu Twitter-Nachrichten über die Nominierungen für den US Supreme Court. Vorgestellt auf der Jahrestagung der Midwest Political Science Association 2017. [Paper herunterladen (PDF, auf Englisch)](/downloads/is_political_messaging_persuasive_or_manipulative.pdf)
