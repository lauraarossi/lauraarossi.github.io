---
title: Experiencia
layout: timeline
description: La experiencia de Laura Rossi — desarrolladora de software sénior en AerPrice, modelización actuarial en Deloitte Irlanda y puestos anteriores en consultoría, investigación y docencia.
lead: Más de siete años creando sistemas de tarificación, reservas y datos — desde motores de Solvencia II y modelos de catástrofes en Deloitte hasta el motor de cálculo central de una plataforma de tarificación para el arrendamiento de aeronaves.
actions:
  # Para un CV en español, sube public/downloads/Laura_Rossi_CV_es.pdf y cambia el enlace aquí
  - label: Descargar CV (PDF, en inglés)
    href: /downloads/Laura_Rossi_CV.pdf
    primary: true
  - label: Imprimir esta página
    href: "#print"
    print: true
  - label: LinkedIn
    href: https://www.linkedin.com/in/laura-agustina-rossi/
---

## Actualidad

### Desarrolladora de software sénior — [AerPrice](https://www.aerprice.com/)

*Ago 2025 – actualidad · Dublín · Software de tarificación para arrendamiento de aeronaves*

Una startup de cinco personas que desarrolla software de tarificación para el arrendamiento de aeronaves. Python, Flask, SQLAlchemy, SQL, JavaScript, HTML/CSS.

#### Motor de reservas y de cálculo

- Responsable y principal mantenedora del motor de reservas de mantenimiento, el cálculo central y más complejo del producto: la dotación mensual de reservas por componente de la aeronave a partir de la utilización (horas de vuelo, ciclos) y de las condiciones del arrendamiento, para financiar futuros eventos de mantenimiento, reparación e inspección.
- Rediseñé el motor de principio a fin: lo amplié de escenarios con un solo arrendamiento a escenarios con varios, lo hice más rápido y añadí límites, variabilidad y nuevos parámetros ajustables por el usuario.
- Diseñé y documenté gran parte del esquema de la base de datos, incluidos el motor de reservas, los escenarios con varios arrendamientos, los valores por defecto y la configuración de clientes; reviso y apruebo todos los cambios de esquema y lo mantengo en tercera forma normal.

#### Funcionalidades de IA y LLM

- Desarrolladora principal de las funcionalidades de LLM del producto (modelos de OpenAI, Azure AI Document Intelligence): extracción de datos estructurados de documentos técnicos de aeronaves complejos y con formatos poco homogéneos, con revisión humana obligatoria; y un asistente en lenguaje natural que llama a funciones del motor de tarificación para responder preguntas sobre reservas y precios.
- Llevé a producción funcionalidades prototipadas con IA: revisión de código, refactorización, pruebas e integración con el motor de cálculo central.
- Uso a diario agentes de programación con IA para automatizar el trabajo de desarrollo rutinario, revisando todo el resultado en detalle.

#### Prácticas de ingeniería y entregas

- Creé desde cero el marco de pruebas (pytest para el backend, Playwright para el frontend y las pruebas de integración); escribí la mayoría de las pruebas y enseñé al equipo a escribirlas.
- Introduje la integración continua con GitHub Actions, de modo que las pruebas deben pasar antes de cualquier fusión.
- Estandaricé las plantillas de pull request en un formato común que también alimenta las notas de versión; me encargo de los despliegues en todos los entornos y de redactar las notas de versión.
- Escribí y reviso la mayor parte de la documentación técnica.

#### Liderazgo técnico

- Defino la dirección técnica, la arquitectura y las prioridades de la plataforma; ordeno el backlog con la dirección, equilibrando las dependencias técnicas con las necesidades de clientes y comerciales.
- He presentado ante el consejo de administración de AerPrice.
- Mentora del desarrollador júnior; establezco estándares de diseño, revisión de código y documentación.
- Diseño soluciones para las propuestas a posibles clientes y traduzco los requisitos en lógica, procedimientos y pruebas.

## Deloitte Irlanda

### Assistant Manager — [Deloitte Irlanda](https://www.deloitte.com/ie/en.html)

*Sep 2024 – jul 2025 · Actuarial Modelling Centre (Actuarial, Rewards & Analytics) · Dublín*

Dos ascensos en cuatro años en Deloitte.

- Desarrollé nuevo software actuarial con herramientas de código abierto para modelización de capital, gestión de hipótesis e informes regulatorios; lo integré mediante APIs con los modelos actuariales y las bases de datos existentes; diseñé arquitecturas de sistemas.
- Construí flujos de datos (limpieza, validación, ETL) para grandes conjuntos de datos de seguros y reaseguros, conciliados con los sistemas anteriores con una diferencia inferior al 1 % o según la materialidad requerida.
- Rediseñé procesos de modelización actuarial a medida que cambiaban las necesidades de los clientes y la tecnología.
- Hice de puente entre los equipos actuariales y de TI en requisitos y métodos, para que nada se perdiera por el camino.
- Establecí estándares de desarrollo para el control de versiones y la calidad del código (Git, Jira, Azure DevOps); configuré políticas, repositorios y organizaciones de Azure DevOps.
- Dirigí formaciones técnicas para desarrolladores y actuarios, internas y para clientes; mentora de personal júnior; evaluaciones de desempeño.
- Gestión de presupuestos y plazos; asesoramiento a clientes sobre tecnologías, integración de sistemas y presupuestos de desarrollo.
- Modelización actuarial: modelos de reservas y de capital, Solvencia II, modelos internos, proyecciones de pasivos.

**Herramientas:** Python (pandas, NumPy, Numba, multiprocessing, Flask, Tkinter), SQL, MG-ALFA, Tyche, Azure (DevOps, Databricks, Data Lake, Entra).

### Consultora actuarial — Deloitte Irlanda

*Sep 2022 – ago 2024 · Dublín*

- Diseñé y construí modelos actuariales de tarificación de seguros de particulares, modelización de pasivos de reaseguro, reservas de seguros generales, gestión de hipótesis y optimización de sistemas de datos.
- Revisé y actualicé modelos de tarificación y de reservas para seguros de particulares y comerciales, acordando los cambios con las partes interesadas.
- Recálculo de reservas, réplica de modelos y análisis de datos para auditorías actuariales de aseguradoras y reaseguradoras de no vida; presentaciones técnicas y consultas de auditoría.
- Preparé memorandos para socios y documentación de auditoría para los comités de revisión.
- Trabajé directamente con clientes y les presenté resultados; creé cuadros de mando en Power BI y visualizaciones en Excel y Plotly/R de los resultados de los modelos.
- Implementé tablas, consultas y procedimientos almacenados de bases de datos detrás de interfaces de usuario, y software estadístico para la previsión de pasivos.
- Dirigí sesiones de transferencia de conocimiento sobre buenas prácticas de programación, modelización actuarial y ética de los datos, y sesiones internas sobre desarrollo de software, Agile, diseño orientado a objetos y métodos estadísticos.

### Analista actuarial — Deloitte Irlanda

*Sep 2021 – sep 2022 · Dublín*

- Construí interfaces y motores de cálculo como pruebas de concepto para aplicaciones actuariales y financieras.
- Réplica de modelos y validación de resultados para auditorías actuariales, conciliados con una diferencia inferior al 1 %.
- Automaticé en VBA trabajo de Excel y Access para los equipos actuariales, de auditoría y de valoraciones.

En [Proyectos](/projects/#trabajo-para-clientes-de-deloitte) está el trabajo con clientes detrás de estos puestos.

## Antes de Deloitte

### Profesora en línea y diseñadora de contenidos, Comunicación de Datos — [Purdue University](https://www.purdue.edu/)

*Ene 2020 – may 2021 · A tiempo parcial*

- Impartí en línea visualización de datos y storytelling (Data Communication and Research Ethics) a grupos de hasta 200 estudiantes con el profesor Sorin Matei.
- Elaboré el material del curso (programa, lecturas, explicaciones, guiones de vídeo) y las rúbricas de evaluación; tutorías y mentoría individual.

### Prácticas de compras globales — JBS USA

*Jun – ago 2020 · Greeley, Colorado*

- **Tarjetas bancarias:** analicé el gasto histórico por medio de pago y encontré 80 millones de dólares al año que podían pasar a medios con derecho a reembolso, por un valor de unos 1,2 millones de dólares anuales — unas cinco veces el objetivo de 260 000 dólares —, además de un ahorro adicional del 0,31 % en el gasto con tarjeta al ajustar los plazos de pago al WACC de la empresa.
- **Gasóleo:** con el responsable de compras de energía, identifiqué seis plantas con un ahorro medio del 20 % anual gracias a depósitos de gasóleo más grandes y precios OPIS competitivos, y un ahorro adicional del 30 al 80 % con unidades de refrigeración eléctricas.
- Hoja de ruta para convertir cuentas a pagar de un centro de costes en un centro de beneficios; automaticé en VBA los informes del departamento.

### Asistente de posgrado — [Purdue Foundry](https://purduefoundry.com/)

*Ago 2019 – may 2021 · West Lafayette, Indiana*

- Dirigí la transformación de los sistemas de datos, incluida la reimplantación del CRM y el rediseño del flujo de datos.
- Persona de referencia para tres startups: estudios de mercado, planes de negocio y contactos, incluidos modelos de salida al mercado para NutraMaize y SpeechVive e investigación de nuevos mercados para Predictive Wear.

### Consultora — [TruQua Enterprises](https://truqua.com/)

*Ago 2018 – jul 2019 · Chicago*

- Consultora de software en gestión de almacenes de datos y software de aprendizaje automático.
- Entregué componentes clave de una implantación de SAP FICO y HANA de 775 millones de dólares para un cliente de bienes de consumo; desarrollé herramientas en SAP HANA, Business Warehouse, Fiori y SuccessFactors.
- Análisis de negocio, documentación, modelado de datos y pruebas; pruebas de concepto de aprendizaje automático en Python para previsiones financieras.
- Trabajé en equipos, dirigí un equipo, llevé un proyecto con cliente en solitario y preparé demostraciones comerciales y formaciones.

### Asistente de investigación, Ciencia Política — [University of Chicago](https://www.uchicago.edu/)

*Ago 2016 – jun 2018 · Chicago*

- Desarrollé software de minería de textos para 15 millones de tuits en Python y R sobre Linux para la investigación del profesor John Brehm sobre la opinión política en las redes sociales: recopilación desde la API de Twitter durante un año, filtrado sobre las nominaciones al Tribunal Supremo de Merrick Garland y Neil Gorsuch, y preparación para el procesamiento del lenguaje natural y el análisis de sentimiento basado en diccionarios.
- Ponente en el congreso anual de la Midwest Political Science Association, 2017. El artículo está en la página de [Proyectos](/projects/#proyectos-anteriores-y-academicos).

### Investigadora independiente

*Jun – ago 2017 · Rabat (Marruecos) y Ciudad del Cabo (Sudáfrica)*

Investigación mediante entrevistas y análisis automatizado de textos sobre comisiones de la verdad y justicia transicional, que se convirtió en mi tesis de licenciatura.

### Prácticas de desarrollo — [Chicago Literacy Alliance](https://chicagoliteracyalliance.org/)

*Sep 2017 – ene 2018 · Chicago*

Investigación de donantes y socios para una alianza de 125 organizaciones sin ánimo de lucro dedicadas a la alfabetización; capté más de 100 patrocinadores y dirigí la recaudación de la campaña de primavera; creé un sistema de seguimiento de donaciones.

### Prácticas en programas alternativos — Departamento Penitenciario del Condado de Cook

*Jun – ago 2016 · Chicago*

Trabajé dentro de la cárcel del condado de Cook en servicios de educación y rehabilitación: revisaba más de 50 solicitudes de servicio al día, audité a un proveedor externo de orientación con un contrato multimillonario, realicé una evaluación de necesidades y creé una base de datos de asistencia y solicitudes.

### Externship — Immigration Center for Women and Children

*Dic 2015 · Oakland, California*

Entrevistas a clientes, traducción y revisión de documentos jurídicos y médicos, e investigación de recursos.

## Competencias

- **Actuariales:** tarificación, reservas, reaseguro, gestión de hipótesis, validación de modelos, auditoría actuarial, reservas de mantenimiento.
- **IA y aprendizaje automático:** desarrollo de aplicaciones con LLM (ingeniería de prompts, flujos de varios pasos, uso de herramientas, recuperación con embeddings, extracción de documentos), aprendizaje automático, explicabilidad (SHAP), flujos de ajuste fino con LoRA, agentes de programación con IA.
- **Programación:** Python (pandas, NumPy, Numba, Flask, FastAPI, SQLAlchemy), SQL, JavaScript/TypeScript, React, Next.js, HTML/CSS, R, C++, VBA, PowerShell.
- **Datos y nube:** Microsoft Azure (incluido Azure AI Document Intelligence), Google Cloud Platform, SQL Server / T-SQL, PostgreSQL y pgvector, Cosmos DB, Firestore, SAP HANA, Docker, ETL, diseño de esquemas y normalización.
- **Prácticas de ingeniería:** Git, GitHub Actions, Azure DevOps, Jira, pruebas automatizadas (pytest, Playwright), revisión de código, gestión de versiones, documentación, Agile, computación paralela, diseño orientado a objetos.
- **Visualización de datos:** Power BI, Tableau, Plotly, R, Recharts, Excel.
- **Gobernanza:** RGPD, Reglamento de IA de la UE, IA responsable, ética de los datos.
