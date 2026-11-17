---
title: Proyectos
layout: timeline
description: Proyectos de Laura Rossi — Plan Away, Eevie, MTG Chicken Soup, software actuarial desarrollado en Deloitte e investigación anterior.
lead: Lo que he diseñado y construido en mi tiempo libre, el trabajo con clientes de mis años en Deloitte e investigación anterior.
---

## Proyectos personales

Todo lo de esta sección es trabajo individual: lo he diseñado, construido y desplegado yo.

### [Plan Away](https://plan-away.net/)

*En línea · JavaScript, Cloudflare Workers, Firebase (Firestore)*

Una aplicación web para planificar viajes en grupo sobre una única línea de tiempo compartida en la que se arrastran y sueltan estancias, excursiones de un día y trayectos. Reparte los gastos entre el grupo, incluido el escaneo de tiques con OCR, suma elementos seleccionados, marca pagos y tareas pendientes, resume las estancias de todo el viaje, cambia de escala entre vistas y guarda automáticamente. Disponible en más de 30 idiomas. Próximamente: OCR para las confirmaciones de reserva.

### [Eevie](https://github.com/lauraarossi/EV_platform)

*Ago – sep 2026 · FastAPI, PostgreSQL, React 19, TypeScript · fuera de línea por ahora*

Compara lo que cuesta realmente usar un coche frente a la alternativa — un eléctrico frente a uno de gasolina o diésel — con los precios semanales reales del combustible.

- Importa y concilia el Boletín Petrolero semanal de la UE, los datos de seguimiento de CO2 de la AEMA y los catálogos de evdb y de la VCA británica, con heurísticas que fusionan el mismo coche escrito de forma distinta en cada fuente.
- Actualizaciones idempotentes que conservan los precios introducidos por los usuarios; tareas de actualización en segundo plano registradas que sobreviven a una base de datos en reposo.
- Esquema normalizado en PostgreSQL con tarifas eléctricas versionadas por fecha de vigencia, incluidos tramos que cruzan la medianoche; emisiones comparables en igualdad de condiciones; conversión de divisas.
- Inicio de sesión con Google verificado en el servidor y consola de administración basada en roles.
- FastAPI, SQLAlchemy, Alembic, PostgreSQL, React 19, TypeScript, Vite, Tailwind, Recharts y Docker, con 337 pruebas automatizadas en el backend.

### [MTG Chicken Soup](https://github.com/lauraarossi/MTG_chicken_soup)

*2026 · FastAPI, Next.js 14, PostgreSQL + pgvector · fuera de línea por ahora*

Un asistente con IA para construir mazos de Magic: The Gathering en formato Commander.

- Respuestas basadas en datos reales de las cartas mediante embeddings de OpenAI en pgvector y consultas en directo a Scryfall, para que no invente cartas, con gestión de nombres ambiguos.
- Las instrucciones se adaptan al formato de juego detectado; proveedores de LLM intercambiables (Claude, compatibles con OpenAI, Ollama) con respuestas en streaming.
- Flujo de datos desde Scryfall y EDHREC, y un flujo de ajuste fino con LoRA para Qwen2.5-7B (construido, aún sin ejecutar).
- Inicio de sesión con Google, perfiles, guardar, compartir y editar mazos, importación y exportación en CSV y diseño para móvil.

## Trabajo para clientes de Deloitte

Proyectos anonimizados de mi etapa en el Actuarial Modelling Centre de Deloitte.

### Modelización de capital — responsable técnica

*2025 · Gran compañía británica de vida y pensiones*

Asumí el liderazgo técnico de una compleja solución de capital con modelo interno.

### Motor de cálculo e informes de Solvencia II

*2024 · Gran aseguradora irlandesa de vida · Python, MG-ALFA*

Diseñé e implementé en Python un motor de cálculo de Solvencia II y un generador de informes que se integra con los modelos MG-ALFA del cliente y produce informes de gestión y datos para procesos posteriores.

### Sistema de gestión de hipótesis

*2024 · Gran compañía británica de vida y pensiones · Python, Angular, Azure Functions*

Un sistema ETL en Python detrás de una interfaz web con Angular y Azure Functions. Entré como desarrolladora y acabé como desarrolladora principal; el sistema está en producción y sus usuarios lo valoran muy bien.

### Modelización de catástrofes

*2023 · Gran aseguradora británica de seguros generales · Tyche, Python, SQL, JavaScript*

Un sistema nuevo de modelización de pérdidas y pasivos, construido con un equipo internacional, que utiliza datos de RMS y AIR.

### Validación de datos y análisis de cambios en unit-linked

*2022 · Reaseguradora multinacional · Python*

Migré la validación y el preprocesamiento de su negocio unit-linked de Access (SQL y VBA) a un programa en Python **100 veces más rápido**, y formé a su equipo para que lo mantuviera.

### Prueba de concepto de informes actuariales

*2022 · Python, Tkinter*

Una aplicación de escritorio que toma datos de modelos actuariales y genera informes para clientes en PDF y Excel, con envío automático por correo.

## Proyectos anteriores y académicos

### Entrevistas a inversores ángel para la Foundry

*2021 · Purdue Foundry*

Entrevisté a 16 posibles inversores de EE. UU. y de otros países de la red de la Foundry sobre su interés en refundar un grupo de inversores ángel de Purdue y sobre sus hábitos y obstáculos a la hora de invertir, y elaboré un informe cualitativo.

### Investigación para startups de la Purdue Foundry

*2019 – 2020*

- **Adipo Therapeutics:** grupos de inversores objetivo y posibles socios corporativos para una startup de biotecnología.
- **Modelos de salida al mercado:** modelos en hoja de cálculo de estrategia de lanzamiento, potencial de ingresos, motores de crecimiento y costes para SpeechVive y NutraMaize.
- **Hidratación y deporte universitario:** investigación sobre el impacto de la monitorización de la hidratación de alta precisión en el rendimiento y los ingresos del deporte universitario.
- **Evaluación del CRM:** recopilación de requisitos y revisión del CRM de la Foundry con el equipo de TI de la Purdue Research Foundation, identificando optimizaciones y nuevas funciones rentables.

### Análisis de inventario de West Paw

*2020 · Estudio independiente con la profesora Gemma Berenguer Falguera, Purdue*

Análisis de los costes de almacenamiento y los niveles de inventario del fabricante de productos sostenibles para mascotas West Paw, con una recomendación de nueva política de inventario y un análisis de sus implicaciones. [Descargar el análisis (en inglés)](/downloads/west-paw-analysis.docx)

### Base de datos OEE

*2018 · Proyecto personal*

Una base de datos y herramienta de informes en MS Access, creada con una planta química de Chicago, que recopila y resume la eficiencia general de los equipos (OEE) en varias instalaciones.

### Tesis de licenciatura: Water under the bridge? Truth commissions' effectiveness in South Africa and Morocco

*2018 · University of Chicago*

Sobre la eficacia de las comisiones de la verdad en Sudáfrica y Marruecos, basada en entrevistas de campo y análisis automatizado de textos en Rabat y Ciudad del Cabo. [Descargar la tesis (PDF, en inglés)](/downloads/water_under_the_bridge.pdf)

### Building community through sports in South African townships: playing towards substantive transition

*2018 · University of Chicago*

La transición política de Sudáfrica tras el apartheid tuvo éxito, pero persisten las tensiones raciales y una desigualdad económica extrema. El trabajo propone la educación deportiva y la inversión directa en instalaciones de financiación pública y gestión comunitaria para favorecer la reconciliación entre grupos raciales y el desarrollo comunitario en los townships. [Descargar el trabajo (PDF, en inglés)](/downloads/community-and-sports-investment-in-south-african-townships.pdf)

### Is political messaging persuasive or manipulative? Twitter messages about the Supreme Court nominations

*2017 · Con el profesor John Brehm, University of Chicago*

Sobre los mensajes en Twitter acerca de las nominaciones al Tribunal Supremo de EE. UU. Presentado en el congreso anual de la Midwest Political Science Association, 2017. [Descargar el artículo (PDF, en inglés)](/downloads/is_political_messaging_persuasive_or_manipulative.pdf)
