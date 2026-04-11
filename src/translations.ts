export type Language = 'en' | 'ru' | 'zh'

export type TranslationSchema = {
  nav: {
    how: string
    modes: string
    examples: string
    faq: string
    demo: string
  }
  hero: {
    badge: [string, string, string, string]
    title: string
    highlight: string
    subtitle: string
    github: string
    linkedin: string
  }
  problemSolution: {
    title: string
    subtitle: string
    problemTitle: string
    problemItems: string[]
    solutionTitle: string
    solutionItems: string[]
    flow: [string, string, string]
  }
  howItWorks: {
    label: string
    title: string
    subtitle: string
    steps: {
      number: string
      title: string
      description: string
    }[]
    flow: [string, string, string, string]
  }
  jsonExample: {
    title: string
    subtitle: string
    contentTitle: string
    bullets: string[]
    note: string
    bottom: string
    code: string
  }
  roles: {
    label: string
    title: string
    subtitle: string
    agents: {
      name: string
      role: string
      desc: string
    }[]
    flow: [string, string, string, string, string]
  }
  modes: {
    label: string
    title: string
    subtitle: string
    cards: {
      name: string
      desc: string
      features: string[]
      color: string
    }[]
    bottom: string
  }
  examples: {
    label: string
    title: string
    subtitle: string
    input: string
    output: string
    cards: {
      title: string
      input: string
      output: string
    }[]
    bottom: string
  }
  advantages: {
    label: string
    title: string
    subtitle: string
    items: {
      title: string
      desc: string
    }[]
    bottom: string
  }
  intelligence: {
    label: string
    title: string
    subtitle: string
    items: {
      title: string
      desc: string
    }[]
    flow: [string, string, string, string]
  }
  mindset: {
    label: string
    title: string
    subtitle: string
    items: {
      title: string
      desc: string
    }[]
    flow: [string, string, string, string]
  }
  faq: {
    label: string
    title: string
    subtitle: string
    items: {
      question: string
      answer: string
    }[]
    bottom: string
  }
  footer: {
    description: string
    product: string
    company: string
    social: string
    productLinks: string[]
    companyLinks: string[]
    socialLinks: string[]
    copyright: string
    bottom: string
  }
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      how: 'How it works',
      modes: 'Modes',
      examples: 'Examples',
      faq: 'FAQ',
      demo: 'Try Demo',
    },
    hero: {
      badge: ['Idea', 'project_brief.json', 'architecture', 'README.md'],
      title: 'Turn Raw Ideas into',
      highlight: 'Production-Ready Architecture',
      subtitle:
        'Multi-agent AI system that transforms product ideas into structured briefs, architecture drafts and engineering-ready README files — with iterative validation and zero hallucination padding.',
      github: 'View on GitHub',
      linkedin: 'LinkedIn',
    },
    problemSolution: {
      title: 'From Problem to Solution',
      subtitle:
        'Most ideas fail not because they are bad — but because they are not structured. We fix that.',
      problemTitle: '🚨 Problem',
      problemItems: [
        'Ideas are vague and unstructured',
        'No clear architecture or system design',
        'Developers waste time clarifying requirements',
        'Miscommunication between team members',
        'Projects start without proper documentation',
      ],
      solutionTitle: '✅ Solution',
      solutionItems: [
        'Convert ideas into structured project briefs',
        'Generate clear system architecture',
        'Provide ready-to-use technical documentation',
        'Align team understanding instantly',
        'Start development with confidence',
      ],
      flow: ['Problem', 'AI Processing', 'Solution'],
    },
    howItWorks: {
      label: 'How it works',
      title: 'Simple flow from idea to execution',
      subtitle:
        'The system guides every step of the process — from an unstructured idea to a clean technical output your team can use immediately.',
      steps: [
        {
          number: '01',
          title: 'Input the idea',
          description:
            'User describes the product, startup, feature, or business idea in plain language.',
        },
        {
          number: '02',
          title: 'AI structures the brief',
          description:
            'The system transforms raw input into a clear project brief with goals, scope, and key requirements.',
        },
        {
          number: '03',
          title: 'Architecture is generated',
          description:
            'The platform builds a logical system design, defining components, flows, and technical direction.',
        },
        {
          number: '04',
          title: 'README becomes ready',
          description:
            'A production-ready document is created so the team can start building without confusion.',
        },
      ],
      flow: ['Idea', 'Brief', 'Architecture', 'README'],
    },
    jsonExample: {
      title: 'Example Output',
      subtitle:
        'This is what your idea becomes after processing — clean, structured and ready for development.',
      contentTitle: 'From chaos → structured data',
      bullets: [
        'Clear project definition',
        'Structured feature list',
        'Defined tech stack',
        'Ready-to-use documentation',
      ],
      note: 'No ambiguity. No missing pieces. Just clean output.',
      bottom: 'Generated automatically in seconds',
      code: `{
  "project": "AI SaaS Platform",
  "goal": "Convert raw ideas into structured architecture",
  "features": [
    "Idea parsing",
    "Architecture generation",
    "README creation"
  ],
  "tech_stack": {
    "frontend": "React + Tailwind",
    "backend": "Node.js",
    "ai": "LLM multi-agent system"
  },
  "output": "Production-ready documentation"
}`,
    },
    roles: {
      label: 'Multi-agent system',
      title: 'Specialized AI roles working together',
      subtitle:
        'Each agent has a clear responsibility — just like a real product team. Together they transform your idea into a production-ready result.',
      agents: [
        {
          name: 'Idea Parser',
          role: 'Understands input',
          desc: 'Analyzes raw user input and extracts key intent, goals and constraints.',
        },
        {
          name: 'Product Architect',
          role: 'Builds structure',
          desc: 'Transforms the idea into a structured product brief and defines core features.',
        },
        {
          name: 'System Designer',
          role: 'Designs architecture',
          desc: 'Creates system components, data flow and technical architecture.',
        },
        {
          name: 'Tech Lead AI',
          role: 'Validates decisions',
          desc: 'Checks architecture consistency, stack choices and scalability risks.',
        },
        {
          name: 'Documentation Agent',
          role: 'Generates output',
          desc: 'Produces a clean README and technical documentation for developers.',
        },
      ],
      flow: ['Idea', 'Parsing', 'Architecture', 'Validation', 'Documentation'],
    },
    modes: {
      label: 'Modes',
      title: 'Choose how deep you want to go',
      subtitle:
        'Different workflows for different stages — from quick ideas to production-ready systems.',
      cards: [
        {
          name: 'Quick Mode',
          desc: 'Fast generation of project structure and README in seconds.',
          features: ['Minimal input', 'Instant output', 'Best for MVP ideas'],
          color: 'blue',
        },
        {
          name: 'Deep Mode',
          desc: 'Full analysis with detailed architecture and validation.',
          features: ['Detailed breakdown', 'Architecture decisions', 'Risk validation'],
          color: 'violet',
        },
        {
          name: 'Team Mode',
          desc: 'Collaborative workflow for teams and product development.',
          features: ['Shared understanding', 'Aligned documentation', 'Team-ready output'],
          color: 'green',
        },
      ],
      bottom: 'Switch modes anytime depending on your workflow',
    },
    examples: {
      label: 'Examples',
      title: 'See what you can build',
      subtitle: 'Different types of ideas transformed into structured outputs.',
      input: 'Input',
      output: 'Output',
      cards: [
        {
          title: 'Startup Idea',
          input: 'I want to build a food delivery app for students',
          output: 'Structured MVP plan + architecture + README ⠀⠀⠀',
        },
        {
          title: 'SaaS Product',
          input: 'Platform for managing remote teams and tasks',
          output: 'Full product breakdown + scalable system design',
        },
        {
          title: 'AI Tool',
          input: 'AI that generates marketing content automatically',
          output: 'AI pipeline + feature map + tech stack',
        },
      ],
      bottom: 'Works for startups, products, tools and more',
    },
    advantages: {
      label: 'Advantages',
      title: 'Why this approach works',
      subtitle: 'Built to remove chaos, reduce friction and accelerate development.',
      items: [
        {
          title: 'Save time',
          desc: 'Reduce hours of planning and discussions to seconds of structured output.',
        },
        {
          title: 'Clarity from the start',
          desc: 'No vague ideas — everything is structured and ready to use immediately.',
        },
        {
          title: 'Production-ready output',
          desc: 'Generate documentation your developers can start working with instantly.',
        },
        {
          title: 'Consistent decisions',
          desc: 'Architecture and tech stack are aligned and logically validated.',
        },
        {
          title: 'Scalable approach',
          desc: 'Works for MVPs, startups and full-scale products. ⠀⠀⠀',
        },
        {
          title: 'No communication gaps',
          desc: 'Everyone on the team understands the same structure and goals.',
        },
      ],
      bottom: 'Designed for speed, clarity and real-world development',
    },
    intelligence: {
      label: 'Tech Intelligence',
      title: 'More than generation — informed technical thinking',
      subtitle:
        'The system does not just format ideas. It analyzes technical direction, validates logic, and helps shape decisions before development begins.',
      items: [
        {
          title: 'Stack reasoning',
          desc: 'Suggests a fitting technology stack based on product goals, complexity, and expected scale.',
        },
        {
          title: 'Architecture awareness',
          desc: 'Identifies core system parts, service boundaries, and the logic behind component interaction.',
        },
        {
          title: 'Scalability thinking',
          desc: 'Considers future growth, load, maintainability, and expansion before development starts.',
        },
        {
          title: 'Risk detection',
          desc: 'Highlights possible weak points, bottlenecks, and unclear requirements early in the process.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Documentation quality',
          desc: 'Transforms technical decisions into structured output your team can read and use immediately.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Decision consistency',
          desc: 'Keeps product logic, architecture choices, and implementation direction aligned across the workflow.',
        },
      ],
      flow: ['Input', 'Analysis', 'Technical Decisions', 'Reliable Output'],
    },
    mindset: {
      label: 'Architecture Mindset',
      title: 'Thinking like a real system architect',
      subtitle:
        'The platform approaches product creation with architectural logic — not just output generation, but structured technical thinking.',
      items: [
        {
          title: 'Systems first',
          desc: 'Looks beyond isolated features and treats the product as a connected system with clear relationships.',
        },
        {
          title: 'Structure before speed',
          desc: 'Builds a solid foundation first so future development moves faster with fewer mistakes.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Long-term thinking',
          desc: 'Considers maintainability, growth, and change instead of optimizing only for the first release.⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Clear boundaries',
          desc: 'Separates responsibilities between components, services, and flows to reduce confusion and coupling.',
        },
        {
          title: 'Intentional decisions',
          desc: 'Every recommendation is tied to product goals, technical logic, and practical implementation needs.⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'From idea to blueprint',
          desc: 'Turns abstract concepts into a structured plan that developers can understand and execute.⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
      ],
      flow: ['Idea', 'Structure', 'System Logic', 'Execution Blueprint'],
    },
    faq: {
      label: 'FAQ',
      title: 'Frequently asked questions',
      subtitle: 'Clear answers to the most common questions about the platform.',
      items: [
        {
          question: 'What does the platform actually generate?',
          answer:
            'It turns raw product ideas into structured briefs, architecture drafts, and developer-ready documentation.',
        },
        {
          question: 'Is this only for startups?',
          answer:
            'No. It works for startups, internal tools, SaaS products, MVPs, and larger systems that need clear planning.',
        },
        {
          question: 'Do I need technical knowledge to use it?',
          answer:
            'No. You can describe your idea in simple language, and the system will convert it into structured technical output.',
        },
        {
          question: 'Can developers use the output directly?',
          answer:
            'Yes. The goal is to produce documentation that is clear enough for product and engineering teams to use as a starting point.',
        },
        {
          question: 'How is this different from a normal AI chat?',
          answer:
            'Instead of giving loose answers, the system follows structured roles and workflow logic to produce more consistent results.',
        },
        {
          question: 'Can I refine the result later?',
          answer:
            'Yes. You can iterate on the idea, improve the brief, and adjust architecture direction as the product evolves.',
        },
      ],
      bottom:
        'Still have questions? The platform is designed to be simple on the surface and powerful underneath.',
    },
    footer: {
      description:
        'Transform raw ideas into structured briefs, architecture, and developer-ready documentation with a multi-agent AI workflow.',
      product: 'Product',
      company: 'Company',
      social: 'Social',
      productLinks: ['How it works', 'Modes', 'Examples', 'FAQ'],
      companyLinks: ['About', 'Contact', 'Privacy', 'Terms'],
      socialLinks: ['Twitter', 'GitHub', 'LinkedIn'],
      copyright: '© 2026 ProjectArchitect. All rights reserved.',
      bottom: 'Built for founders, teams, and developers.',
    },
  },

  ru: {
    nav: {
      how: 'Как это работает',
      modes: 'Режимы',
      examples: 'Примеры',
      faq: 'FAQ',
      demo: 'Попробовать демо',
    },
    hero: {
      badge: ['Идея', 'project_brief.json', 'архитектура', 'README.md'],
      title: 'Превращайте сырые идеи в',
      highlight: 'готовую архитектуру продукта',
      subtitle:
        'Мультиагентная AI-система, которая превращает идеи продукта в структурированные брифы, архитектурные схемы и готовую для разработки документацию — с итеративной проверкой и без лишней воды.',
      github: 'Открыть GitHub',
      linkedin: 'LinkedIn',
    },
    problemSolution: {
      title: 'От проблемы к решению',
      subtitle:
        'Большинство идей проваливаются не потому, что они плохие, а потому что они не структурированы. Мы это исправляем.',
      problemTitle: '🚨 Проблема',
      problemItems: [
        'Идеи расплывчатые и неструктурированные',
        'Нет понятной архитектуры или дизайна системы',
        'Разработчики тратят время на уточнение требований',
        'Возникает недопонимание между участниками команды',
        'Проекты стартуют без нормальной документации',
      ],
      solutionTitle: '✅ Решение',
      solutionItems: [
        'Преобразовать идеи в структурированные проектные брифы',
        'Сгенерировать понятную архитектуру системы',
        'Подготовить готовую техническую документацию',
        'Мгновенно выровнять понимание внутри команды',
        'Начать разработку увереннее и быстрее',
      ],
      flow: ['Проблема', 'AI-обработка', 'Решение'],
    },
    howItWorks: {
      label: 'Как это работает',
      title: 'Простой путь от идеи до реализации',
      subtitle:
        'Система ведёт через каждый этап процесса — от неструктурированной идеи до чистого технического результата, который команда может использовать сразу.',
      steps: [
        {
          number: '01',
          title: 'Введите идею',
          description:
            'Пользователь описывает продукт, стартап, функцию или бизнес-идею простыми словами. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          number: '02',
          title: 'AI структурирует бриф',
          description:
            'Система превращает сырой ввод в понятный проектный бриф с целями, объёмом и ключевыми требованиями.',
        },
        {
          number: '03',
          title: 'Создаётся архитектура',
          description:
            'Платформа строит логичный дизайн системы, определяя компоненты, потоки и техническое направление.',
        },
        {
          number: '04',
          title: 'README готов',
          description:
            'Создаётся готовый к работе документ, чтобы команда могла начать разработку без путаницы. ⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
      ],
      flow: ['Идея', 'Бриф', 'Архитектура', 'README'],
    },
    jsonExample: {
      title: 'Пример результата',
      subtitle:
        'Вот во что превращается ваша идея после обработки — чисто, структурировано и готово к разработке.',
      contentTitle: 'От хаоса → к структурированным данным',
      bullets: [
        'Чёткое описание проекта',
        'Структурированный список функций',
        'Определённый стек технологий',
        'Готовая к использованию документация',
      ],
      note: 'Никакой двусмысленности. Никаких пробелов. Только чистый результат.',
      bottom: 'Автоматически сгенерировано за секунды',
      code: `{
  "project": "AI SaaS Platform",
  "goal": "Преобразовать сырые идеи в структурированную архитектуру",
  "features": [
    "Разбор идеи",
    "Генерация архитектуры",
    "Создание README"
  ],
  "tech_stack": {
    "frontend": "React + Tailwind",
    "backend": "Node.js",
    "ai": "LLM multi-agent system"
  },
  "output": "Готовая к продакшену документация"
}`,
    },
    roles: {
      label: 'Мультиагентная система',
      title: 'Специализированные AI-роли работают вместе',
      subtitle:
        'У каждого агента своя чёткая ответственность — как в настоящей продуктовой команде. Вместе они превращают идею в готовый к работе результат.',
      agents: [
        {
          name: 'Idea Parser',
          role: 'Понимает ввод',
          desc: 'Анализирует сырой пользовательский ввод и извлекает ключевые намерения, цели и ограничения.',
        },
        {
          name: 'Product Architect',
          role: 'Строит структуру',
          desc: 'Преобразует идею в структурированный продуктовый бриф и определяет основные функции.',
        },
        {
          name: 'System Designer',
          role: 'Проектирует архитектуру',
          desc: 'Создаёт компоненты системы, поток данных и техническую архитектуру.⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          name: 'Tech Lead AI',
          role: 'Проверяет решения',
          desc: 'Проверяет целостность архитектуры, выбор стека и риски масштабирования.',
        },
        {
          name: 'Documentation Agent',
          role: 'Генерирует результат',
          desc: 'Создаёт чистый README и техническую документацию для разработчиков.',
        },
      ],
      flow: ['Идея', 'Разбор', 'Архитектура', 'Проверка', 'Документация'],
    },
    modes: {
      label: 'Режимы',
      title: 'Выберите нужную глубину проработки',
      subtitle:
        'Разные сценарии для разных стадий — от быстрых идей до готовых к продакшену систем.',
      cards: [
        {
          name: 'Quick Mode',
          desc: 'Быстрая генерация структуры проекта и README за секунды.',
          features: ['Минимум ввода', 'Мгновенный результат', 'Лучше всего для MVP-идей'],
          color: 'blue',
        },
        {
          name: 'Deep Mode',
          desc: 'Полный анализ с детальной архитектурой и проверкой.',
          features: ['Детальная разбивка', 'Архитектурные решения', 'Проверка рисков'],
          color: 'violet',
        },
        {
          name: 'Team Mode',
          desc: 'Совместный процесс для команд и продуктовой разработки.',
          features: ['Общее понимание', 'Согласованная документация', 'Результат для команды'],
          color: 'green',
        },
      ],
      bottom: 'Переключайте режимы в любой момент под свой процесс',
    },
    examples: {
      label: 'Примеры',
      title: 'Посмотрите, что можно создать',
      subtitle: 'Разные типы идей, превращённые в структурированный результат.',
      input: 'Ввод',
      output: 'Результат',
      cards: [
        {
          title: 'Идея стартапа',
          input: 'Я хочу создать приложение доставки еды для студентов',
          output: 'Структурированный план MVP + архитектура + README',
        },
        {
          title: 'SaaS-продукт',
          input: 'Платформа для управления удалёнными командами и задачами',
          output: 'Полная разбивка продукта + масштабируемый дизайн системы',
        },
        {
          title: 'AI-инструмент',
          input: 'AI, который автоматически генерирует маркетинговый контент',
          output: 'AI-пайплайн + карта функций + стек технологий',
        },
      ],
      bottom: 'Подходит для стартапов, продуктов, инструментов и не только',
    },
    advantages: {
      label: 'Преимущества',
      title: 'Почему этот подход работает',
      subtitle: 'Создано, чтобы убрать хаос, снизить трение и ускорить разработку.',
      items: [
        {
          title: 'Экономия времени',
          desc: 'Сокращает часы обсуждений и планирования до секунд структурированного результата.⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Ясность с самого начала',
          desc: 'Никаких расплывчатых идей — всё структурировано и сразу готово к использованию.',
        },
        {
          title: 'Результат, готовый к продакшену',
          desc: 'Генерирует документацию, с которой разработчики могут начать работать сразу.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Последовательные решения',
          desc: 'Архитектура и стек технологий согласованы и логически проверены.',
        },
        {
          title: 'Масштабируемый подход',
          desc: 'Подходит для MVP, стартапов и полноценных продуктов.',
        },
        {
          title: 'Без коммуникационных разрывов',
          desc: 'Вся команда понимает одну и ту же структуру и цели.',
        },
      ],
      bottom: 'Создано для скорости, ясности и реальной разработки',
    },
    intelligence: {
      label: 'Технический интеллект',
      title: 'Больше, чем генерация — продуманное техническое мышление',
      subtitle:
        'Система не просто форматирует идеи. Она анализирует техническое направление, проверяет логику и помогает формировать решения ещё до начала разработки.',
      items: [
        {
          title: 'Выбор стека',
          desc: 'Предлагает подходящий стек технологий на основе целей продукта, сложности и ожидаемого масштаба.',
        },
        {
          title: 'Понимание архитектуры',
          desc: 'Определяет ключевые части системы, границы сервисов и логику взаимодействия компонентов.⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Мышление о масштабировании',
          desc: 'Учитывает будущий рост, нагрузку, поддержку и расширение ещё до старта разработки.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Выявление рисков',
          desc: 'Рано замечает слабые места, узкие горлышки и неясные требования.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Качество документации',
          desc: 'Преобразует технические решения в структурированный результат, который команда может сразу читать и использовать.',
        },
        {
          title: 'Последовательность решений',
          desc: 'Сохраняет согласованность логики продукта, архитектурных решений и направления реализации на всём процессе.',
        },
      ],
      flow: ['Ввод', 'Анализ', 'Технические решения', 'Надёжный результат'],
    },
    mindset: {
      label: 'Архитектурное мышление',
      title: 'Мышление как у настоящего системного архитектора',
      subtitle:
        'Платформа подходит к созданию продукта с архитектурной логикой — не просто генерация текста, а структурированное техническое мышление.',
      items: [
        {
          title: 'Сначала система',
          desc: 'Смотрит шире отдельных функций и воспринимает продукт как связанную систему с понятными отношениями.',
        },
        {
          title: 'Структура раньше скорости',
          desc: 'Сначала создаёт прочную основу, чтобы дальнейшая разработка шла быстрее и с меньшим числом ошибок.',
        },
        {
          title: 'Долгосрочное мышление',
          desc: 'Учитывает поддержку, рост и изменения, а не оптимизирует только под первый релиз.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: 'Чёткие границы',
          desc: 'Разделяет ответственность между компонентами, сервисами и потоками, чтобы уменьшить путаницу и связность.',
        },
        {
          title: 'Осознанные решения',
          desc: 'Каждая рекомендация связана с целями продукта, технической логикой и практическими потребностями реализации.',
        },
        {
          title: 'От идеи к чертежу',
          desc: 'Преобразует абстрактные концепции в структурированный план, который разработчики могут понять и реализовать.',
        },
      ],
      flow: ['Идея', 'Структура', 'Системная логика', 'План реализации'],
    },
    faq: {
      label: 'FAQ',
      title: 'Часто задаваемые вопросы',
      subtitle: 'Понятные ответы на самые частые вопросы о платформе.',
      items: [
        {
          question: 'Что именно генерирует платформа?',
          answer:
            'Она превращает сырые продуктовые идеи в структурированные брифы, черновики архитектуры и готовую для разработчиков документацию.',
        },
        {
          question: 'Это только для стартапов?',
          answer:
            'Нет. Это подходит для стартапов, внутренних инструментов, SaaS-продуктов, MVP и более крупных систем, которым нужно чёткое планирование.',
        },
        {
          question: 'Нужны ли мне технические знания, чтобы пользоваться этим?',
          answer:
            'Нет. Вы можете описать идею простыми словами, а система преобразует её в структурированный технический результат.',
        },
        {
          question: 'Могут ли разработчики использовать результат сразу?',
          answer:
            'Да. Цель в том, чтобы создать документацию, которая достаточно ясна как стартовая точка для продуктовой и инженерной команды.',
        },
        {
          question: 'Чем это отличается от обычного AI-чата?',
          answer:
            'Вместо расплывчатых ответов система использует структурированные роли и логику процесса, чтобы выдавать более последовательный результат.',
        },
        {
          question: 'Можно ли потом доработать результат?',
          answer:
            'Да. Вы можете итерироваться по идее, улучшать бриф и корректировать архитектурное направление по мере развития продукта.',
        },
      ],
      bottom:
        'Остались вопросы? Платформа задумана простой снаружи и мощной внутри.',
    },
    footer: {
      description:
        'Преобразуйте сырые идеи в структурированные брифы, архитектуру и готовую для разработчиков документацию с помощью мультиагентного AI-процесса.',
      product: 'Продукт',
      company: 'Компания',
      social: 'Соцсети',
      productLinks: ['Как это работает', 'Режимы', 'Примеры', 'FAQ'],
      companyLinks: ['О нас', 'Контакты', 'Конфиденциальность', 'Условия'],
      socialLinks: ['Twitter', 'GitHub', 'LinkedIn'],
      copyright: '© 2026 ProjectArchitect. Все права защищены.',
      bottom: 'Создано для фаундеров, команд и разработчиков.',
    },
  },

  zh: {
    nav: {
      how: '工作原理',
      modes: '模式',
      examples: '示例',
      faq: '常见问题',
      demo: '试用演示',
    },
    hero: {
      badge: ['想法', 'project_brief.json', '架构', 'README.md'],
      title: '将原始想法转化为',
      highlight: '可投入使用的产品架构',
      subtitle:
        '多智能体 AI 系统可将产品想法转换为结构化简介、架构草案和面向工程的 README 文档，并通过迭代验证减少无效输出。',
      github: '查看 GitHub',
      linkedin: 'LinkedIn',
    },
    problemSolution: {
      title: '从问题到解决方案',
      subtitle: '大多数想法失败并不是因为它们不好，而是因为它们缺乏结构。我们正是为了解决这一点。',
      problemTitle: '🚨 问题',
      problemItems: [
        '想法模糊且缺乏结构',
        '没有清晰的架构或系统设计',
        '开发者把时间花在澄清需求上',
        '团队成员之间容易产生误解',
        '项目在缺少文档的情况下启动',
      ],
      solutionTitle: '✅ 解决方案',
      solutionItems: [
        '把想法转化为结构化项目简介',
        '生成清晰的系统架构',
        '提供可直接使用的技术文档',
        '快速统一团队理解',
        '更有信心地开始开发',
      ],
      flow: ['问题', 'AI 处理', '解决方案'],
    },
    howItWorks: {
      label: '工作原理',
      title: '从想法到执行的简单流程',
      subtitle:
        '系统会引导整个过程的每一步——从非结构化想法到你的团队可以立即使用的清晰技术输出。',
      steps: [
        {
          number: '01',
          title: '输入想法',
          description: '用户用自然语言描述产品、创业项目、功能或商业想法。',
        },
        {
          number: '02',
          title: 'AI 结构化简介',
          description: '系统将原始输入转化为清晰的项目简介，包括目标、范围和关键需求。',
        },
        {
          number: '03',
          title: '生成架构',
          description: '平台构建逻辑化的系统设计，定义组件、流程和技术方向。',
        },
        {
          number: '04',
          title: 'README 准备完成',
          description: '生成可直接使用的文档，让团队无需混乱即可开始构建。',
        },
      ],
      flow: ['想法', '简介', '架构', 'README'],
    },
    jsonExample: {
      title: '输出示例',
      subtitle: '这就是你的想法经过处理后的样子——清晰、结构化并可用于开发。',
      contentTitle: '从混乱 → 到结构化数据',
      bullets: ['清晰的项目定义', '结构化功能列表', '明确的技术栈', '可直接使用的文档'],
      note: '没有歧义，没有缺失，只有清晰输出。',
      bottom: '几秒内自动生成',
      code: `{
  "project": "AI SaaS Platform",
  "goal": "将原始想法转化为结构化架构",
  "features": [
    "想法解析",
    "架构生成",
    "README 创建"
  ],
  "tech_stack": {
    "frontend": "React + Tailwind",
    "backend": "Node.js",
    "ai": "LLM multi-agent system"
  },
  "output": "可用于生产环境的文档"
}`,
    },
    roles: {
      label: '多智能体系统',
      title: '协同工作的专业 AI 角色',
      subtitle: '每个智能体都有明确职责——就像真实的产品团队一样。它们共同把你的想法转化为可投入使用的结果。',
      agents: [
        {
          name: 'Idea Parser',
          role: '理解输入',
          desc: '分析原始用户输入并提取关键意图、目标和约束。',
        },
        {
          name: 'Product Architect',
          role: '构建结构',
          desc: '将想法转化为结构化产品简介并定义核心功能。',
        },
        {
          name: 'System Designer',
          role: '设计架构',
          desc: '创建系统组件、数据流和技术架构。',
        },
        {
          name: 'Tech Lead AI',
          role: '验证决策',
          desc: '检查架构一致性、技术栈选择和可扩展性风险。',
        },
        {
          name: 'Documentation Agent',
          role: '生成输出',
          desc: '为开发者生成清晰的 README 和技术文档。',
        },
      ],
      flow: ['想法', '解析', '架构', '验证', '文档'],
    },
    modes: {
      label: '模式',
      title: '选择你需要的深度',
      subtitle: '针对不同阶段提供不同工作流——从快速想法到可投入生产的系统。',
      cards: [
        {
          name: 'Quick Mode',
          desc: '几秒内快速生成项目结构和 README。',
          features: ['最少输入', '即时输出', '适合 MVP 想法'],
          color: 'blue',
        },
        {
          name: 'Deep Mode',
          desc: '包含详细架构和验证的完整分析。',
          features: ['详细拆解', '架构决策', '风险验证'],
          color: 'violet',
        },
        {
          name: 'Team Mode',
          desc: '面向团队和产品开发的协作流程。',
          features: ['统一认知', '文档对齐', '团队可用输出'],
          color: 'green',
        },
      ],
      bottom: '可根据你的工作流随时切换模式',
    },
    examples: {
      label: '示例',
      title: '看看你可以构建什么',
      subtitle: '不同类型的想法被转化为结构化输出。',
      input: '输入',
      output: '输出',
      cards: [
        {
          title: '创业想法',
          input: '我想为学生做一个外卖应用',
          output: '结构化 MVP 计划 + 架构 + README',
        },
        {
          title: 'SaaS 产品',
          input: '用于管理远程团队和任务的平台',
          output: '完整产品拆解 + 可扩展系统设计',
        },
        {
          title: 'AI 工具',
          input: '一个能自动生成营销内容的 AI',
          output: 'AI 流程 + 功能图 + 技术栈',
        },
      ],
      bottom: '适用于创业、产品、工具等多种场景',
    },
    advantages: {
      label: '优势',
      title: '为什么这种方法有效',
      subtitle: '旨在消除混乱、减少摩擦并加快开发速度。',
      items: [
        {
          title: '节省时间',
          desc: '将数小时的规划与讨论缩短为几秒钟的结构化输出。',
        },
        {
          title: '从一开始就清晰',
          desc: '不再有模糊想法——一切都结构化并可立即使用。',
        },
        {
          title: '可投入生产的输出',
          desc: '生成开发者可以立即使用的文档。',
        },
        {
          title: '一致的决策',
          desc: '架构与技术栈保持一致并经过逻辑验证。',
        },
        {
          title: '可扩展的方法',
          desc: '适用于 MVP、创业项目和完整产品。',
        },
        {
          title: '没有沟通断层',
          desc: '团队中的每个人都理解同样的结构与目标。',
        },
      ],
      bottom: '为速度、清晰度和真实开发而设计',
    },
    intelligence: {
      label: '技术智能',
      title: '不仅仅是生成——有依据的技术思考',
      subtitle: '系统不仅格式化想法，还会分析技术方向、验证逻辑，并在开发开始前帮助塑造决策。',
      items: [
        {
          title: '技术栈推理',
          desc: '根据产品目标、复杂度和预期规模建议合适的技术栈。',
        },
        {
          title: '架构意识',
          desc: '识别核心系统部分、服务边界以及组件交互逻辑。',
        },
        {
          title: '可扩展性思维',
          desc: '在开发开始前就考虑未来增长、负载、可维护性和扩展。',
        },
        {
          title: '风险识别',
          desc: '及早发现潜在弱点、瓶颈和不明确需求。',
        },
        {
          title: '文档质量',
          desc: '将技术决策转化为团队可以立即阅读和使用的结构化输出。',
        },
        {
          title: '决策一致性',
          desc: '在整个流程中保持产品逻辑、架构选择和实现方向的一致。',
        },
      ],
      flow: ['输入', '分析', '技术决策', '可靠输出'],
    },
    mindset: {
      label: '架构思维',
      title: '像真正的系统架构师一样思考',
      subtitle: '平台以架构逻辑来处理产品创建——不仅仅是输出生成，而是结构化的技术思考。',
      items: [
        {
          title: '系统优先',
          desc: '不仅关注单个功能，而是把产品视为一个具有清晰关系的整体系统。',
        },
        {
          title: '结构先于速度',
          desc: '先建立稳固基础，让后续开发更快、错误更少。⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: '长期思维',
          desc: '考虑可维护性、增长和变化，而不仅仅优化首次发布。⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        },
        {
          title: '清晰边界',
          desc: '在组件、服务和流程之间划分责任，以减少混乱和耦合。',
        },
        {
          title: '有意识的决策',
          desc: '每项建议都与产品目标、技术逻辑和实际实现需求相关。',
        },
        {
          title: '从想法到蓝图',
          desc: '把抽象概念转化为开发者能够理解并执行的结构化方案。',
        },
      ],
      flow: ['想法', '结构', '系统逻辑', '执行蓝图'],
    },
    faq: {
      label: '常见问题',
      title: '常见问题解答',
      subtitle: '关于平台最常见问题的清晰回答。',
      items: [
        {
          question: '这个平台实际会生成什么？',
          answer: '它会将原始产品想法转化为结构化简介、架构草案和开发者可直接使用的文档。',
        },
        {
          question: '它只适用于创业项目吗？',
          answer: '不是。它适用于创业项目、内部工具、SaaS 产品、MVP 以及需要清晰规划的大型系统。',
        },
        {
          question: '我需要技术背景才能使用吗？',
          answer: '不需要。你可以用简单语言描述想法，系统会将其转化为结构化技术输出。',
        },
        {
          question: '开发者可以直接使用输出结果吗？',
          answer: '可以。目标是生成足够清晰的文档，供产品和工程团队作为起点使用。',
        },
        {
          question: '这和普通 AI 聊天有什么不同？',
          answer: '它不是给出松散回答，而是遵循结构化角色和工作流逻辑，从而生成更一致的结果。',
        },
        {
          question: '之后还能继续优化结果吗？',
          answer: '可以。你可以持续迭代想法、改进简介，并随着产品演进调整架构方向。',
        },
      ],
      bottom: '还有问题吗？平台在表面上保持简单，在底层则更加强大。',
    },
    footer: {
      description: '通过多智能体 AI 工作流，将原始想法转化为结构化简介、架构和开发者可用文档。',
      product: '产品',
      company: '公司',
      social: '社交',
      productLinks: ['工作原理', '模式', '示例', '常见问题'],
      companyLinks: ['关于', '联系', '隐私', '条款'],
      socialLinks: ['Twitter', 'GitHub', 'LinkedIn'],
      copyright: '© 2026 ProjectArchitect. 保留所有权利。',
      bottom: '为创始人、团队和开发者打造。',
    },
  },
}