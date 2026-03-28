(function () {
  'use strict';

  var LANG_KEY = 'homepage-lang';

  var i18n = {
    ru: {
      page_title: 'Alexander — QA Fullstack · Резюме',
      link_itmo_title: 'ИТМО',
      link_tbank_title: 'Т-Банк',
      itmo_logo_alt: 'ИТМО',
      tbank_logo_alt: 'Т-Банк',
      hero_subtitle: 'QA Fullstack · Java / Kotlin · Автотесты в бэкенде',
      hero_tagline: '4 года в финтехе · Бакалавр · Готов к менторству и новым вызовам',
      nav_roadmaps: 'Путь',
      nav_skills: 'Навыки',
      nav_about: 'Обо мне',
      nav_contact: 'Контакты',
      section_two_paths: 'Два пути',
      education_heading: 'Образование',
      career_heading: 'Карьера',
      year_extra: 'Доп. образование',
      year_career: '2022–н.в.',
      bachelor_heading: 'Бакалавриат',
      timeline_meta_itmo: 'Университет ИТМО · Факультет программной инженерии и компьютерной техники',
      program_link: 'Программная инженерия',
      timeline_courses_paragraph:
        'Ключевые курсы: базы данных, Java, системное программирование, изучение операционных систем, ML. На учёбе получил широкий кругозор, занимался всем — от программирования на машинных кодах до обучения моделей машинного обучения; имею глубокое системное понимание компьютерной техники.',
      study_projects_heading: 'Учебные проекты',
      diploma_title:
        'Дипломная работа: «Разработка средства оценки планируемой нагрузки СУБД PostgreSQL на систему ввода-вывода»',
      grade_excellent: 'Оценка — отлично.',
      repo: 'Репозиторий',
      pdf: 'PDF',
      coursework_title:
        'Курсовая работа: «Разработка информационной системы и базы данных процессов получения предметов в Minecraft»',
      soa_course_title: 'Курс «Сервисно-ориентированная архитектура»',
      soa_course_body:
        'REST (OpenAPI/Swagger), JAX-RS и Spring MVC, HTTPS; микросервисы — EJB, Consul, Spring Cloud; SOAP, Mule ESB.',
      courses_certs_heading: 'Курсы, сертификаты',
      courses_certs_meta: 'Stepik и др.',
      courses_certs_body:
        'Прохожу курсы на Stepik; отдельных «крутых» пока сертификатов нет — упор на практику в работе и учёбе.',
      career_qa_title: 'QA Fullstack (Java/Kotlin)',
      career_tbank_meta: 'Т-Банк',
      career_growth: 'Рост от стажёра до Senior QA Fullstack.',
      work_projects_heading: 'Рабочие проекты',
      project_team_title: 'Проектная команда',
      project_team_body:
        'Организовывал кросс-командные сценарии, улучшал процессы и уровень зрелости в командах, влияющих на качество продукта. Прорабатывал тестирование на всех уровнях продукта — проводил e2e на 20+ команд и сервисов, курировал и ревьюил интеграционные тесты между критическими узлами, разрабатывал подход и тестовые стратегии компонентного тестирования в ключевых для проекта командах.',
      monolith_title: 'Большой платежный монолит',
      monolith_body:
        'Занимался ручным тестированием. Разрабатывал и поддерживал автотесты новых фичей, участвовал в масштабном переписывании e2e тестов для повышения стабильности. Менторил стажёров.',
      microservices_title: 'Команда платежных микросервисов',
      microservices_body:
        'Автоматизировал регрессы для 20+ микросервисов. Делал рефакторинг автотестов с большой кодовой базой. Разрабатывал и реализовывал НТ, проводил замеры покрытия кода. Сопровождал и поддерживал тесты в CI/CD. Менторил стажёров. Участвовал в ревью кода и проектировании новых фич.',
      tutor_title: 'Частный репетитор',
      tutor_meta: 'Самозанятость',
      tutor_intro: 'Подготовка к олимпиадам, повышение технической грамотности',
      oly_title: 'Олимпиадное программирование',
      oly_body: 'Программирование и алгоритмы для школьников, базовая дискретная математика',
      arduino_title: 'Arduino, робототехника, электроника',
      arduino_body: 'Помогал ученикам строить роботов, электронные схемы, программировать Arduino',
      math_title: 'Олимпиадная математика',
      math_body: 'Помогал ученикам подготовиться к олимпиадам по математике',
      skills_title: 'Навыки и инструменты',
      skills_lead:
        'Около четырёх лет автоматизирую тестирование в одном из крупных технологичных финтехов: бэкенд, API и интеграции в высоконагруженной среде. Ниже — стек и практики из реальной работы. Нажми на навык — откроется краткое описание опыта.',
      group_languages: 'Языки и тест-стеки',
      group_infra: 'Инфраструктура и процесс',
      group_domain: 'Домен и практики',
      level_confident: 'уверенно',
      level_daily: 'ежедневно',
      level_experience: 'опыт есть',
      level_deep: 'глубоко',
      level_nt: 'Scala, CI, Kubernetes',
      level_regularly: 'регулярно',
      level_sql: 'продвинуто · PostgreSQL, Oracle, Cassandra',
      skill_java_detail:
        'Основной язык для автотестов бэкенда около четырёх лет: сервисные и интеграционные сценарии, собственные и командные фреймворки. Умею поддерживать читаемую структуру тестов и переиспользуемые фикстуры. Могу проводить ревью/исследования/замеры покрытия продуктового кода в проектах любой сложности.',
      skill_kotlin_detail:
        'Пишу и сопровождаю тесты на Kotlin там, где это принято в команде: совместимость с Java-стеком, лаконичный синтаксис для DSL и билдеров данных. По необходимости — корутины в асинхронных сценариях, единый стиль с продакшен-кодом.',
      skill_junit_detail: 'Постоянное использование',
      skill_kotest_detail:
        'Использовал в Kotlin-проектах: стиль describe/behavior, матчеры и property-based подходы где уместно. Умею соседствовать с JUnit в одном репозитории и мигрировать постепенно, без ломки пайплайнов.',
      skill_api_detail:
        'REST и внутренние HTTP API: контракты, негативные сценарии, идемпотентность и ошибки. REST Assured и «ручные» клиенты; проверка схем и статусов, несколько окружений и стендов. gRPC — вызовы по сгенерированным клиентам, метаданные и дедлайны, статусы и негативные кейсы; при необходимости ручная проверка через <code>grpcurl</code> и отладка совместимости proto.',
      skill_gatling_detail:
        'Сценарии на Gatling (Scala): профили нагрузки, SLA и отчёты. Встраивал в разные виды CI — по коммитам, по расписанию, отдельные ночные/релизные прогоны; запуск против выделенных стендов и в оркестрации Kubernetes, где генератор нагрузки и целевой сервис живут в кластере. Согласование с DevOps по ресурсам и изоляции окружений.',
      skill_cicd_detail:
        'Участвую в настройке и поддержке пайплайнов: запуск автотестов на пуш и по расписанию, артефакты отчётов, параллелизация по модулям, уведомления в мессенджеры. В том числе отдельные джобы под нагрузочные прогоны (Gatling) и их артефакты. Jenkins, GitLab CI и GitHub Actions — в зависимости от репозитория; тесная работа с DevOps на сложных шагах.',
      skill_docker_detail:
        'Поднимаю БД, брокеры и зависимости в изолированных тестах; кастомные образы и compose там, где нужно. Слежу за временем прогона и стабильностью — типичная картина для интеграционных тестов в финтехе.',
      skill_kafka_detail:
        'Сценарии с продюсерами и консьюмерами: тестовые топики, проверка порядка и идемпотентности обработки, embedded/контейнерный Kafka в тестах. Не ядро каждого дня, но уверенно закрываю задачи с асинхронными потоками.',
      skill_mock_detail:
        'Виртуализация зависимостей: поднимаю импостеры для HTTP(S), при необходимости TCP и других протоколов, задаю предикаты и ответы, прокси на реальные стенды. Использую, когда нужен единый инструмент для нескольких типов заглушек и сценариев с подстановкой; встраивание в CI и локальные прогоны, согласование портов и конфигов с контейнерами.',
      skill_sql_detail:
        'PL/SQL, Продвинутый SQL: сложные выборки, оконные функции, планы запросов там, где важна производительность проверок; агрегаты и сверка инвариантов после операций. Тестовые данные, изоляция сценариев, миграции в контексте автотестов. PostgreSQL и H2 для быстрых прогонов; опыт с <strong>Apache Cassandra</strong> — моделирование под запросы, consistency, проверка данных в распределённом хранилище в e2e и сервисных тестах.',
      skill_fintech_detail:
        'Контекст высоконагруженных платёжных и расчётных сервисов: деньги, лимиты, отчётность, интеграции с внешними системами. Понимаю приоритеты по рискам, регламентам и SLA; умею переводить требования в проверяемые автосценарии.',
      skill_e2e_detail:
        'Организация крупных сквозных сценариев, когда в цепочке участвуют десятки команд: договорённости по контрактам и тестовым данным, зоны ответственности, стабильные стенды и очередь на слоты прогона. Снижение флейкинесса, прозрачные критерии «зелёного» прогона, эскалации и приоритизация при инцидентах; умение балансировать скорость поставки и покрытие end-to-end на уровне продукта.',
      skill_review_detail:
        'Ревью автотестов и смежного кода: читаемость, стабильность, отсутствие дублирования. Онбординг QA от стажёров до мидлов. Менторство внутри компании: подготовка к повышениям или смене специализации, внедрение практик и инструментов в команду.',
      skill_qa_mgmt_detail:
        'Курировал внедрение QA-практик в команды: договорённости по качеству, единые ожидания по тест-дизайну и автоматизации, развитие зрелости. Помогал настраивать сбор и интерпретацию метрик по качеству и поставке. Вводил и настраивал процессы аудитов и квартального планирования: приоритизация улучшений, согласование целей с продуктом и инженерией.',
      skill_fintech_level: 'платёжные/кредитные системы, расчёты, регулярные и шаблонные операции',
      skill_e2e_level: 'организовывал на 20+ команд',
      skill_review_level: 'регулярно',
      skill_qa_mgmt_level: 'внедрение, метрики, планирование',
      about_title: 'Увлечения и обо мне',
      about_lead: 'Чем живу вне работы и почему со мной интересно работать или учиться.',
      about_body:
        '<strong>Не только код:</strong> кидаю смешные мемы в чаты. В универе занимался картингом, яхтингом и греблей; призёр чемпионата вуза по армрестлингу в ковидный год (никого не было).',
      contact_title: 'Связаться',
      contact_lead: 'Работодателям и тем, кто ищет ментора — добро пожаловать.',
      contact_cta: 'Хочешь обсудить проект, вакансию или менторство — напиши, с радостью отвечу.',
      footer_line: '© 2025 Alexander · QA Fullstack · Навайбкожено с вниманием к деталям',
      lang_toggle_aria: 'Переключить язык: русский или английский',
      lang_ru_short: 'RU',
      lang_en_short: 'EN',
      skill_row_api: 'REST, gRPC / API-тесты',
      skill_row_gatling: 'Нагрузочное тестирование (Gatling)',
      skill_row_kafka: 'Kafka, очереди',
      skill_row_mock: 'Мокирование',
      skill_row_sql: 'SQL, БД',
      skill_row_fintech: 'Финтех',
      skill_row_e2e: 'Кросс-командные E2E',
      skill_row_review: 'Code review, менторство',
      skill_row_qa_mgmt: 'QA-Менеджмент, практики и процессы'
    },
    en: {
      page_title: 'Alexander — QA Fullstack · Résumé',
      link_itmo_title: 'ITMO University',
      link_tbank_title: 'T-Bank',
      itmo_logo_alt: 'ITMO University',
      tbank_logo_alt: 'T-Bank',
      hero_subtitle: 'QA Fullstack · Java / Kotlin · Backend test automation',
      hero_tagline: '4 years in fintech · Bachelor’s · Open to mentoring and new challenges',
      nav_roadmaps: 'Path',
      nav_skills: 'Skills',
      nav_about: 'About',
      nav_contact: 'Contact',
      section_two_paths: 'Two paths',
      education_heading: 'Education',
      career_heading: 'Career',
      year_extra: 'Further education',
      year_career: '2022–present',
      bachelor_heading: 'Bachelor’s degree',
      timeline_meta_itmo:
        'ITMO University · Faculty of Software Engineering and Computer Technology',
      program_link: 'Software engineering',
      timeline_courses_paragraph:
        'Key courses: databases, Java, systems programming, operating systems, ML. At university I gained a broad perspective and worked on everything from machine-code programming to training ML models; I have a deep systems-level understanding of computer technology.',
      study_projects_heading: 'Academic projects',
      diploma_title:
        'Thesis: «A tool to estimate planned PostgreSQL load on the I/O subsystem»',
      grade_excellent: 'Grade: excellent.',
      repo: 'Repository',
      pdf: 'PDF',
      coursework_title:
        'Term project: «An information system and database for obtaining items in Minecraft»',
      soa_course_title: 'Course «Service-oriented architecture»',
      soa_course_body:
        'REST (OpenAPI/Swagger), JAX-RS and Spring MVC, HTTPS; microservices — EJB, Consul, Spring Cloud; SOAP, Mule ESB.',
      courses_certs_heading: 'Courses and certificates',
      courses_certs_meta: 'Stepik, etc.',
      courses_certs_body:
        'I take courses on Stepik; no flashy certificates yet — the focus is hands-on practice at work and in my studies.',
      career_qa_title: 'QA Fullstack (Java/Kotlin)',
      career_tbank_meta: 'T-Bank',
      career_growth: 'Growth from intern to Senior QA Fullstack.',
      work_projects_heading: 'Work projects',
      project_team_title: 'Project team',
      project_team_body:
        'I organised cross-team scenarios, improved processes and maturity in teams that affect product quality. I drove testing across the whole product stack — e2e across 20+ teams and services, coordinated and reviewed integration tests between critical nodes, and designed approaches and strategies for component testing in key project teams.',
      monolith_title: 'Large payment monolith',
      monolith_body:
        'Manual testing, developing and maintaining automated tests for new features, and taking part in a large-scale rewrite of e2e tests for stability. Mentored interns.',
      microservices_title: 'Payment microservices team',
      microservices_body:
        'Automated regression for 20+ microservices. Refactored tests in a large codebase. Designed and ran load tests and measured code coverage. Maintained tests in CI/CD. Mentored interns. Took part in code review and feature design.',
      tutor_title: 'Private tutor',
      tutor_meta: 'Self-employed',
      tutor_intro: 'Olympiad preparation and improving technical literacy',
      oly_title: 'Competitive programming',
      oly_body: 'Programming and algorithms for school students, basic discrete mathematics',
      arduino_title: 'Arduino, robotics, electronics',
      arduino_body: 'Helped students build robots, circuits, and program Arduino',
      math_title: 'Competition mathematics',
      math_body: 'Helped students prepare for maths olympiads',
      skills_title: 'Skills and tools',
      skills_lead:
        'For about four years I have automated testing at a major tech-forward fintech: backend, APIs, and integrations under high load. Below is the stack and practices from real work. Click a skill for a short note on my experience.',
      group_languages: 'Languages and test stacks',
      group_infra: 'Infrastructure and process',
      group_domain: 'Domain and practices',
      level_confident: 'confident',
      level_daily: 'daily',
      level_experience: 'hands-on',
      level_deep: 'deep',
      level_nt: 'Scala, CI, Kubernetes',
      level_regularly: 'regularly',
      level_sql: 'advanced · PostgreSQL, Oracle, Cassandra',
      skill_java_detail:
        'My main language for backend test automation for about four years: service and integration scenarios, custom and team frameworks. I keep tests readable with reusable fixtures. I can review, research, and measure coverage of product code in projects of any complexity.',
      skill_kotlin_detail:
        'I write and maintain Kotlin tests where the team uses it: interoperability with the Java stack, concise syntax for DSLs and data builders. Coroutines in async scenarios when needed, aligned with production style.',
      skill_junit_detail: 'Used every day',
      skill_kotest_detail:
        'Used in Kotlin projects: describe/behavior style, matchers, and property-based tests where it fits. I can coexist with JUnit in one repo and migrate gradually without breaking pipelines.',
      skill_api_detail:
        'REST and internal HTTP APIs: contracts, negative cases, idempotency and errors. REST Assured and hand-written clients; schema and status checks, multiple environments and stands. gRPC — calls via generated clients, metadata and deadlines, status and negative cases; when needed, manual checks with <code>grpcurl</code> and proto compatibility debugging.',
      skill_gatling_detail:
        'Gatling (Scala) scenarios: load profiles, SLAs, and reports. Integrated into various CI flows — on commit, on schedule, separate nightly/release runs; runs against dedicated stands and in Kubernetes where the load generator and target service run in-cluster. Coordination with DevOps on resources and environment isolation.',
      skill_cicd_detail:
        'I help configure and maintain pipelines: running automated tests on push and on a schedule, report artifacts, parallelisation by modules, notifications to chat. Including separate jobs for load runs (Gatling) and their artifacts. Jenkins, GitLab CI, and GitHub Actions depending on the repo; close work with DevOps on complex steps.',
      skill_docker_detail:
        'I spin up databases, brokers, and dependencies in isolated tests; custom images and compose where needed. I watch runtime and stability — typical for integration tests in fintech.',
      skill_kafka_detail:
        'Scenarios with producers and consumers: test topics, ordering and idempotent processing, embedded/container Kafka in tests. Not every day, but I handle async flows confidently.',
      skill_mock_detail:
        'Dependency virtualisation: HTTP(S) impostors, TCP and other protocols when needed, predicates and responses, proxying to real stands. I use this when one tool should cover several stub types and substitution scenarios; CI and local runs, aligning ports and configs with containers.',
      skill_sql_detail:
        'PL/SQL and advanced SQL: complex queries, window functions, query plans where the performance of checks matters; aggregates and invariant checks after operations. Test data, scenario isolation, migrations in the test context. PostgreSQL and H2 for fast runs; experience with <strong>Apache Cassandra</strong> — query-driven modelling, consistency, data checks in distributed storage in e2e and service tests.',
      skill_fintech_detail:
        'Context of high-load payment and settlement services: money, limits, reporting, integrations with external systems. I understand risk, regulatory, and SLA priorities and turn requirements into automated checks.',
      skill_e2e_detail:
        'Organising large end-to-end chains with dozens of teams: contracts and test data, ownership, stable stands and run slots. Reducing flakiness, clear “green” criteria, escalations and prioritisation during incidents; balancing delivery speed with end-to-end coverage at product level.',
      skill_review_detail:
        'Review of automated tests and related code: readability, stability, no duplication. Onboarding QA from interns to mid-level. In-house mentoring: promotions or role changes, rolling out practices and tools in teams.',
      skill_qa_mgmt_detail:
        'I led rolling out QA practices across teams: quality agreements, shared expectations for test design and automation, maturity growth. I helped set up collecting and interpreting quality and delivery metrics. I introduced and tuned audit and quarterly planning: prioritising improvements and aligning goals with product and engineering.',
      skill_fintech_level: 'payment/credit systems, settlements, recurring and template operations',
      skill_e2e_level: 'organised across 20+ teams',
      skill_review_level: 'regularly',
      skill_qa_mgmt_level: 'rollout, metrics, planning',
      about_title: 'Interests and about me',
      about_lead: 'What I do outside work and why it is interesting to work or learn with me.',
      about_body:
        '<strong>Not only code:</strong> I share memes in chats. At university I did karting, sailing, and rowing; I placed at the university arm-wrestling championship in the covid year (almost no competitors).',
      contact_title: 'Get in touch',
      contact_lead: 'Employers and anyone looking for a mentor — welcome.',
      contact_cta: 'Want to discuss a project, a role, or mentoring — write me, I will be glad to reply.',
      footer_line: '© 2025 Alexander · QA Fullstack · Crafted with attention to detail',
      lang_toggle_aria: 'Switch language: Russian or English',
      lang_ru_short: 'RU',
      lang_en_short: 'EN',
      skill_row_api: 'REST, gRPC / API testing',
      skill_row_gatling: 'Load testing (Gatling)',
      skill_row_kafka: 'Kafka, queues',
      skill_row_mock: 'Mocking',
      skill_row_sql: 'SQL, databases',
      skill_row_fintech: 'Fintech',
      skill_row_e2e: 'Cross-team E2E',
      skill_row_review: 'Code review, mentoring',
      skill_row_qa_mgmt: 'QA management, practices and processes'
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ru';
    } catch (e) {
      return 'ru';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang === 'en' ? 'en' : 'ru');
    } catch (e) {
      /* ignore */
    }
    applyLang(lang === 'en' ? 'en' : 'ru');
  }

  function applyLang(lang) {
    var dict = i18n[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'en' ? 'en' : 'ru';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    var titleEl = document.querySelector('title');
    if (titleEl && dict.page_title) {
      titleEl.textContent = dict.page_title;
    }

    var itmoLink = document.querySelector('[data-logo-link="itmo"]');
    if (itmoLink && dict.link_itmo_title) itmoLink.setAttribute('title', dict.link_itmo_title);
    var tbankLink = document.querySelector('[data-logo-link="tbank"]');
    if (tbankLink && dict.link_tbank_title) tbankLink.setAttribute('title', dict.link_tbank_title);

    document.querySelectorAll('[data-logo-alt="itmo"]').forEach(function (img) {
      if (dict.itmo_logo_alt) img.setAttribute('alt', dict.itmo_logo_alt);
    });
    document.querySelectorAll('[data-logo-alt="tbank"]').forEach(function (img) {
      if (dict.tbank_logo_alt) img.setAttribute('alt', dict.tbank_logo_alt);
    });

    document.querySelectorAll('[data-year-i18n]').forEach(function (el) {
      var ykey = el.getAttribute('data-year-i18n');
      if (ykey && dict[ykey] !== undefined) {
        el.setAttribute('data-year', dict[ykey]);
      }
    });

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      toggle.setAttribute('aria-label', dict.lang_toggle_aria);
    }

    var ruLabel = document.querySelector('[data-lang-label="ru"]');
    var enLabel = document.querySelector('[data-lang-label="en"]');
    if (ruLabel && dict.lang_ru_short) ruLabel.textContent = dict.lang_ru_short;
    if (enLabel && dict.lang_en_short) enLabel.textContent = dict.lang_en_short;
  }

  document.querySelectorAll('.toggle-detail').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = this.previousElementSibling;
      var isOpen = content.classList.contains('is-open');
      content.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  document.querySelectorAll('.skill-item-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var detail = this.nextElementSibling;
      var isOpen = detail && detail.classList.contains('is-open');
      if (detail) detail.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var next = getLang() === 'en' ? 'ru' : 'en';
      setLang(next);
    });
  }

  applyLang(getLang());
})();
