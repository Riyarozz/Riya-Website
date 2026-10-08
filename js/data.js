/**
 * DATA CONFIGURATION FILE
 * Single source of truth for all website content for RIYA ROSE SAJI.
 * Edit the values in this file to customize your personal details, projects,
 * experience, BlackIt details, and insights.
 */

const SITE_DATA = {
  // 1. PERSONAL PROFILE & BRANDING
  profile: {
    name: "RIYA ROSE SAJI",
    initials: "RRS",
    title: "Power BI Developer | PMO | Business Analyst | Founder of The BlackIt",
    subtitle: "4+ Years of Professional Experience at Wipro",
    headline: "Turning Data, Projects & Technology Into Business Impact.",
    subheadline: "I work at the intersection of data analytics, project management, and technology — transforming complex information into meaningful insights, efficient processes, and measurable business outcomes.",
    experienceBadge: "4+ Years of Professional Experience at Wipro",
    brandStatement: "\"I don't just build dashboards. I understand the business problems behind the data.\"",
    brandStatementSub: "With experience spanning Power BI, business intelligence and PMO, I bridge the gap between data, technology, projects and business decisions.",
    location: "India",
    email: "contact@riyarose057@gmail.com",         // ← Replace with your real email
    linkedin: "https://linkedin.com/in/riyarosesaji",  // ← Replace with real LinkedIn
    github: "https://github.com/riyarosesaji",          // ← Replace with real GitHub
    blackitUrl: "#blackit",
    resumeUrl: "assets/resume.pdf",
    avatarUrl: "assets/about_me_photo_1773321212638.png",
  },

  // NAVIGATION LINKS
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#identity", label: "Identity" },
    { href: "#experience", label: "Experience" },
    { href: "#expertise", label: "Expertise" },
    { href: "#powerbi", label: "Power BI" },
    { href: "#pmo", label: "PMO" },
    { href: "#journey", label: "Journey" },
    { href: "#blackit", label: "The BlackIt" },
    { href: "#projects", label: "Projects" },
    { href: "#insights", label: "Insights" },
    { href: "#contact", label: "Contact" }
  ],

  // PROFESSIONAL IDENTITY (Where Data Meets Business & Delivery)
  identity: {
    title: "Where Data Meets Business & Delivery",
    subtitle: "A multi-disciplinary skill set combining deep analytical power, enterprise PMO governance, and strategic business analysis.",
    pillars: [
      {
        number: "01",
        title: "Data & Analytics",
        color: "blue",
        icon: "bar-chart-2",
        skillsText: "Power BI • Business Intelligence • Data Visualization • Reporting",
        details: [
          "Enterprise Power BI dashboard development",
          "Advanced DAX modeling & measures",
          "KPI & executive performance reporting",
          "Automated data pipelines & refreshes"
        ]
      },
      {
        number: "02",
        title: "Project Management",
        color: "purple",
        icon: "check-square",
        skillsText: "PMO • Governance • Project Tracking • Risk & Issue Management",
        details: [
          "Structured project governance & tracking",
          "RAID log monitoring & mitigation",
          "Meeting coordination & steering updates",
          "Cross-functional delivery alignment"
        ]
      },
      {
        number: "03",
        title: "Business Analysis",
        color: "emerald",
        icon: "trending-up",
        skillsText: "Requirements • Stakeholder Management • Process Understanding • Business Insights",
        details: [
          "Business requirements gathering (BRD/FRD)",
          "As-Is & To-Be process mapping",
          "Stakeholder needs translation into tech specs",
          "UAT coordination & post-rollout validation"
        ]
      },
      {
        number: "04",
        title: "Entrepreneurship",
        color: "rose",
        icon: "rocket",
        skillsText: "The BlackIt • Technology Solutions • Innovation • Digital Transformation",
        details: [
          "Co-founder of The BlackIt technology venture",
          "Exploring AI, modern software & digital workflows",
          "Product concept architecture & strategy",
          "Tech-driven innovation for modern businesses"
        ]
      }
    ]
  },

  // WIPRO EXPERIENCE (Power BI Developer & PMO - 4+ Years)
  wiproExperience: {
    company: "WIPRO",
    role: "Power BI Developer & PMO",
    tenure: "4+ Years",
    tagline: "Contributing to enterprise technology and business operations through a combination of Power BI development, analytics, project management, reporting and stakeholder coordination.",
    valuePipeline: [
      { label: "Analytics", icon: "bar-chart-2", desc: "Data modeling, DAX architecture & KPI metrics" },
      { label: "Reporting", icon: "file-text", desc: "Automated executive dashboards & real-time refreshes" },
      { label: "PMO", icon: "check-square", desc: "Governance, milestones, risks & schedule tracking" },
      { label: "Stakeholder Management", icon: "users", desc: "Requirements elicitation & steering alignment" },
      { label: "Business Insights", icon: "trending-up", desc: "Actionable decision support & measurable impact" }
    ],
    areas: [
      {
        color: "blue",
        icon: "bar-chart-3",
        badge: "Area 01",
        title: "Power BI & Business Intelligence",
        summary: "Designing end-to-end analytical suites, DAX formulations, and interactive executive reporting at enterprise scale.",
        points: [
          "Power BI dashboard development",
          "Data visualization and reporting",
          "KPI & performance reporting",
          "Data analysis",
          "Business requirements gathering",
          "Dashboard enhancement and maintenance",
          "Management reporting",
          "Data-driven insights",
          "Working with stakeholders to understand reporting requirements"
        ]
      },
      {
        color: "purple",
        icon: "folder-check",
        badge: "Area 02",
        title: "PMO & Project Management",
        summary: "Driving structured project governance, status transparency, and stakeholder synchronization across concurrent initiatives.",
        points: [
          "Project tracking and governance",
          "Status reporting",
          "Stakeholder coordination",
          "Financial and operational tracking",
          "Risk & issue tracking",
          "Opportunity and contract tracking",
          "Project documentation",
          "Meeting coordination and follow-ups",
          "Progress monitoring",
          "Management-level reporting",
          "Cross-functional coordination"
        ]
      }
    ],
    differentiator: {
      quote: "“This combination is a core differentiator: bridging technical data depth with enterprise PMO & business governance.”",
      sub: "Understanding both the data side and the project/business side allows turning complex numbers into structured execution and clear strategic outcomes."
    }
  },

  // CAREER JOURNEY (5-Stage Visual Roadmap)
  careerJourney: [
    {
      year: "2022",
      badge: "Milestone",
      title: "Started Professional Journey",
      subtitle: "Foundation in Tech & Analytics",
      icon: "graduation-cap",
      description: "Launched professional career with a clear commitment to technology, data-driven reasoning, and business solutions."
    },
    {
      year: "Wipro",
      badge: "Enterprise BI",
      title: "Power BI / Business Intelligence",
      subtitle: "Enterprise Dashboard Architecture",
      icon: "bar-chart-2",
      description: "Engineered scalable Power BI reporting systems, DAX modeling, data visual storytelling, and automated refreshes for cross-functional operations."
    },
    {
      year: "PMO Experience",
      badge: "Governance",
      title: "Project Governance & Operations",
      subtitle: "Structured Execution & PMO Delivery",
      icon: "clipboard-list",
      description: "Steered project health monitoring, RAID logs, status reporting, stakeholder alignment, and executive coordination."
    },
    {
      year: "4+ Years",
      badge: "Combined Strength",
      title: "Data + Business + PMO",
      subtitle: "The Complete Intersection",
      icon: "trending-up",
      description: "Unified 4+ years of hands-on data analytics with rigorous project management and strategic business analysis for maximum impact."
    },
    {
      year: "The BlackIt",
      badge: "Venture",
      title: "Founder / Tech Entrepreneur",
      subtitle: "Building Next-Gen Technology",
      icon: "rocket",
      description: "Co-founded The BlackIt to innovate across data analytics, AI & automation, digital solutions, and modern software consulting."
    }
  ],

  // 2. SEO & METADATA
  seo: {
    title: "RIYA ROSE SAJI | Power BI Developer | PMO | Business Analyst | Founder of The BlackIt",
    description: "Portfolio of RIYA ROSE SAJI — Power BI Developer, PMO Professional, and Founder of The BlackIt with 4+ years at Wipro. Turning Data into Insights. Projects into Outcomes. Ideas into Technology.",
    keywords: "RIYA ROSE SAJI, Power BI Developer, PMO, Business Analyst, The BlackIt, Wipro, Data Analytics, DAX, Business Intelligence, Dashboard Design, Project Governance",
    author: "RIYA ROSE SAJI",
    ogImage: "assets/og-preview.png"
  },

  // 3. KEY STATS (Hero & Stats Section)
  stats: [
    {
      value: "Power BI",
      label: "Data & Analytics",
      detail: "Enterprise Dashboards & DAX",
      icon: "bar-chart-3"
    },
    {
      value: "PMO",
      label: "Project Management",
      detail: "Governance, Governance & Risk",
      icon: "check-square"
    },
    {
      value: "Business Analysis",
      label: "Process & Strategy",
      detail: "Requirement Analysis & Reporting",
      icon: "trending-up"
    },
    {
      value: "BlackIT",
      label: "Technology & Innovation",
      detail: "Co-Founder & Tech Strategist",
      icon: "layers"
    }
  ],

  // 4. ABOUT ME SECTION
  about: {
    tagline: "Bridging the gap between raw data, strategic governance, and modern technology.",
    paragraph1: "I am a technology and business professional with deep cross-functional experience across Power BI development, project management office (PMO) operations, business analysis, and entrepreneurial tech initiatives.",
    paragraph2: "Rather than operating in isolation, I combine data storytelling with structured project execution. My work involves designing executive Power BI dashboards, establishing transparent PMO reporting standards, optimizing operational processes, and steering technology initiatives to success.",
    focusAreas: [
      "Building high-impact interactive Power BI dashboards",
      "Translating complex datasets into strategic executive insights",
      "Establishing PMO governance, status reporting & performance tracking",
      "Analyzing business processes and identifying optimization bottlenecks",
      "Facilitating cross-functional stakeholder coordination and alignment",
      "Driving technology innovation & digital product execution through BlackIT"
    ],
    cards: [
      {
        id: "data-analytics",
        badge: "DATA & ANALYTICS",
        title: "Data & Analytics Excellence",
        description: "Transforming raw, unstructured data into clear, actionable insights through scalable data models, advanced DAX, and intuitive visualization.",
        icon: "pie-chart",
        gradient: "from-blue-500/20 to-cyan-500/20"
      },
      {
        id: "project-management",
        badge: "PROJECT MANAGEMENT",
        title: "PMO & Governance",
        description: "Supporting leadership and cross-functional teams through structured governance, risk tracking, timeline monitoring, and executive status reporting.",
        icon: "briefcase",
        gradient: "from-purple-500/20 to-indigo-500/20"
      },
      {
        id: "founder",
        badge: "ENTREPRENEURSHIP",
        title: "Founder at BlackIT",
        description: "Building forward-thinking technology solutions, exploring digital innovation, and driving tech-focused business initiatives.",
        icon: "rocket",
        gradient: "from-emerald-500/20 to-teal-500/20"
      }
    ]
  },

  // 5. EXPERTISE SECTION ("What I Do")
  expertise: [
    {
      id: "powerbi-analytics",
      title: "Power BI & Data Analytics",
      subtitle: "End-to-end data pipelines, custom DAX modeling, and visual storytelling.",
      icon: "bar-chart-2",
      color: "blue",
      skills: [
        "Power BI Dashboards & Reports",
        "Advanced DAX & Power Query (M)",
        "Data Modeling & Relationships",
        "KPI & Executive Metrics Reporting",
        "Business Intelligence (BI) Strategy",
        "Interactive Data Storytelling"
      ]
    },
    {
      id: "pmo-governance",
      title: "PMO & Project Management",
      subtitle: "Structured project delivery, governance frameworks, and status monitoring.",
      icon: "shield-check",
      color: "purple",
      skills: [
        "Project Governance Frameworks",
        "Milestone & Progress Tracking",
        "Executive Status Reporting",
        "Risk & Issue (RAID) Management",
        "Stakeholder Alignment & PMO Setup",
        "Project Documentation & Audits"
      ]
    },
    {
      id: "business-analysis",
      title: "Business Analysis & Process Strategy",
      subtitle: "Bridging business goals with technical requirements and process improvements.",
      icon: "file-search",
      color: "emerald",
      skills: [
        "Requirement Gathering & Specifications",
        "As-Is & To-Be Process Mapping",
        "Business Process Improvement",
        "Gap Analysis & Feasibility",
        "Management & Operational Reporting",
        "UAT & Solution Validation"
      ]
    },
    {
      id: "technology-digital",
      title: "Technology & Digital Solutions",
      subtitle: "Leveraging modern digital tools and AI-assisted automation for efficiency.",
      icon: "cpu",
      color: "amber",
      skills: [
        "Digital Transformation Strategy",
        "Business Process Automation",
        "AI-Assisted Workflow Integration",
        "Data-Driven Decision Systems",
        "Microsoft 365 Ecosystem",
        "Technology Evaluation"
      ]
    },
    {
      id: "entrepreneurship-blackit",
      title: "Entrepreneurship & Innovation",
      subtitle: "Co-founding and scaling tech-focused ventures at BlackIT.",
      icon: "zap",
      color: "rose",
      skills: [
        "Building & Scaling BlackIT",
        "Technology Strategy & Product Ideas",
        "Venture Ideation & Execution",
        "Product Roadmap & Vision",
        "Innovation Management",
        "Business Development"
      ]
    }
  ],

  // 6. POWER BI SHOWCASE SECTION ("Data That Drives Decisions")
  powerbiShowcase: {
    heading: "Data That Drives Decisions",
    subheading: "Interactive Sample Dashboards demonstrating high-density visual design, executive KPI tracking, and analytical depth.",
    disclaimer: "Note: The projects below represent interactive sample/demo dashboards designed to showcase data modeling, layout architecture, and reporting standards.",
    dashboards: [
      {
        id: "exec-summary",
        title: "Executive Leadership Dashboard",
        category: "Executive Dashboard",
        badge: "Sample Dashboard",
        summary: "High-level overview of revenue streams, operational efficiency, cost variances, and top-tier KPI summaries designed for C-suite decision makers.",
        metrics: [
          { label: "Total Revenue", value: "$14.2M", change: "+12.4% vs PY" },
          { label: "EBITDA Margin", value: "24.8%", change: "+2.1% Target" },
          { label: "Active Projects", value: "38", change: "92% On-Track" },
          { label: "Operational Cost", value: "$4.1M", change: "-4.5% Budget" }
        ],
        chartType: "bar-line-combo",
        filters: ["Quarterly", "Regional", "Business Unit"],
        caseStudy: {
          problem: "Leadership lacked a single unified view of operational performance across 4 distinct business units, leading to delayed strategic decisions.",
          solution: "Designed a consolidated Power BI executive dashboard with drill-through capabilities, RLS security, and automated daily data refreshes.",
          outcome: "Reduced monthly reporting turnaround time from 5 days to real-time automated updates."
        }
      },
      {
        id: "sales-analytics",
        title: "Global Sales Performance & Pipeline",
        category: "Sales Analytics",
        badge: "Sample Dashboard",
        summary: "Detailed breakdown of sales conversion funnels, regional revenue distribution, sales rep performance, and predictive quarterly forecasting.",
        metrics: [
          { label: "Pipeline Value", value: "$28.5M", change: "+18.2%" },
          { label: "Win Rate", value: "34.2%", change: "+3.5% MoM" },
          { label: "Avg Deal Size", value: "$142K", change: "+8.1%" },
          { label: "Sales Cycle", value: "42 Days", change: "-5 Days" }
        ],
        chartType: "sales-funnel",
        filters: ["Sales Region", "Product Line", "Rep Grade"],
        caseStudy: {
          problem: "Sales leadership struggled to monitor deal stage velocity and conversion drop-offs across regional teams.",
          solution: "Built a dynamic funnel analysis dashboard in Power BI featuring custom DAX measures for opportunity age and pipeline probability adjustments.",
          outcome: "Improved pipeline forecasting accuracy by 27% within two quarters."
        }
      },
      {
        id: "fin-analytics",
        title: "Financial Variance & Budget Control",
        category: "Financial Dashboard",
        badge: "Sample Dashboard",
        summary: "Comprehensive financial intelligence dashboard highlighting P&L variances, CAPEX/OPEX expenditure tracking, and cash flow projections.",
        metrics: [
          { label: "Gross Margin", value: "48.2%", change: "+1.8%" },
          { label: "OPEX Variance", value: "-$320K", change: "Favorable" },
          { label: "Cash Reserves", value: "$8.9M", change: "Healthy" },
          { label: "Budget Utilization", value: "87.4%", change: "On Target" }
        ],
        chartType: "financial-waterfall",
        filters: ["Fiscal Year", "Cost Center", "Account Group"],
        caseStudy: {
          problem: "Finance teams spent over 30 hours each month manually matching Excel spreadsheets for department budget variance analysis.",
          solution: "Architected a star-schema financial data model connecting ERP exports with automated variance alerts.",
          outcome: "Eliminated manual spreadsheet reconciliation and provided instant variance drill-down."
        }
      },
      {
        id: "project-perf",
        title: "Enterprise PMO Project Health & Resources",
        category: "Project Performance",
        badge: "Sample Dashboard",
        summary: "Integrated project management dashboard monitoring milestone compliance, resource allocation heatmaps, and budget burn-down rates.",
        metrics: [
          { label: "Portfolio Value", value: "$9.4M", change: "15 Initiatives" },
          { label: "On-Time Delivery", value: "89.5%", change: "+5.0%" },
          { label: "Risk Items", value: "4 Critical", change: "Mitigated" },
          { label: "Resource Load", value: "84.2%", change: "Optimal" }
        ],
        chartType: "project-gantt",
        filters: ["Portfolio", "Project Manager", "Health Status"],
        caseStudy: {
          problem: "PMO directors lacked cross-portfolio visibility into resource over-allocation and impending milestone delays.",
          solution: "Created a unified PMO tracking suite combining Gantt milestone visuals, resource utilization matrices, and risk heatmaps.",
          outcome: "Reduced project milestone slippage by 35% through early bottleneck detection."
        }
      }
    ]
  },

  // 7. PMO DASHBOARD SECTION ("Where Data Meets Project Management")
  pmoDashboard: {
    title: "Where Data Meets Project Management",
    subtitle: "Combining quantitative data analytics with structured PMO governance to ensure transparent project delivery and strategic alignment.",
    healthSummary: {
      onTrack: 12,
      atRisk: 3,
      delayed: 1,
      totalBudget: "$14.8M",
      budgetSpent: "$9.2M"
    },
    sampleProjects: [
      {
        name: "Enterprise ERP System Migration",
        owner: "PMO Steering",
        health: "On Track",
        progress: 78,
        budgetStatus: "Under Budget",
        keyMilestone: "User Acceptance Testing (UAT)",
        dueDate: "Q3 2026",
        risksCount: 1
      },
      {
        name: "Customer Data Warehouse & BI Upgrade",
        owner: "Analytics Team",
        health: "On Track",
        progress: 92,
        budgetStatus: "On Target",
        keyMilestone: "Power BI Tenant Deployment",
        dueDate: "Q4 2026",
        risksCount: 0
      },
      {
        name: "Digital Process Automation Initiative",
        owner: "Operations & BA",
        health: "At Risk",
        progress: 60,
        budgetStatus: "Slight Variance",
        keyMilestone: "API Integration & Testing",
        dueDate: "Q4 2026",
        risksCount: 3
      },
      {
        name: "BlackIT Innovation Accelerator Phase 2",
        owner: "BlackIT Founders",
        health: "On Track",
        progress: 85,
        budgetStatus: "On Target",
        keyMilestone: "MVP Release & Pilot",
        dueDate: "Q1 2027",
        risksCount: 1
      }
    ],
    governancePillars: [
      {
        title: "Real-Time Project Health",
        desc: "Automated status indicators (On Track, At Risk, Delayed) powered by live dataset updates.",
        icon: "activity"
      },
      {
        title: "Budget & Variance Tracking",
        desc: "Precision financial monitoring linking planned budget vs actual spend at milestone levels.",
        icon: "dollar-sign"
      },
      {
        title: "RAID Risk Management",
        desc: "Proactive Risk, Assumption, Issue & Dependency logging with severity heatmaps.",
        icon: "alert-triangle"
      },
      {
        title: "Executive Governance",
        desc: "Concise steering committee packs and automated dashboard summaries for decision-makers.",
        icon: "sliders"
      }
    ]
  },

  // 8. PROJECTS & PORTFOLIO
  projects: [
    {
      id: "proj-1",
      title: "Executive Business Intelligence & KPI Suite",
      category: "Power BI",
      tags: ["Power BI", "DAX", "Data Modeling", "SQL", "Azure"],
      shortDesc: "Comprehensive enterprise dashboard solution connecting multiple data sources into a unified executive reporting suite.",
      problem: "Disparate data silos across regional ERPs caused fragmented financial and operational reporting, taking weeks to compile.",
      solution: "Developed an automated Power BI data architecture with star-schema modeling, centralized DAX measures, and drill-through analysis.",
      outcome: "Eliminated 40+ hours of monthly manual reporting and established a single source of truth for senior leadership.",
      role: "Lead Power BI Developer & Data Architect",
      featured: true
    },
    {
      id: "proj-2",
      title: "PMO Governance & Portfolio Tracking System",
      category: "PMO",
      tags: ["PMO", "Project Governance", "Power BI", "Process Analysis", "RAID Logs"],
      shortDesc: "End-to-end PMO reporting framework designed to standardize status tracking, milestone risk monitoring, and executive summaries.",
      problem: "Lack of standardized status reporting across 15+ concurrent project streams led to uncoordinated delivery and hidden risks.",
      solution: "Implemented a standardized PMO governance model accompanied by a custom Power BI portfolio dashboard and RAID escalation protocol.",
      outcome: "Improved project milestone predictability by 30% and enabled proactive risk intervention for steering committees.",
      role: "PMO Consultant & Business Analyst",
      featured: true
    },
    {
      id: "proj-3",
      title: "Operational Process Optimization & Workflow Redesign",
      category: "Business Analysis",
      tags: ["Business Analysis", "Process Mapping", "Requirement Specs", "UAT", "M365"],
      shortDesc: "Cross-departmental process mapping and requirement analysis to streamline supply chain procurement and invoice approvals.",
      problem: "Legacy manual paper-based approval workflows caused supply bottlenecks and lack of audit visibility.",
      solution: "Conducted detailed As-Is process analysis, specified To-Be workflow requirements, and facilitated digital automation rollout.",
      outcome: "Reduced processing turnaround time by 65% and created full audit transparency.",
      role: "Senior Business Analyst",
      featured: true
    },
    {
      id: "proj-4",
      title: "BlackIT Technology Solution & Architecture",
      category: "Technology",
      tags: ["BlackIT", "Technology Strategy", "AI Solutions", "Product Development"],
      shortDesc: "Strategic technology roadmap and digital product architecture developed under the BlackIT venture initiative.",
      problem: "Modern organizations struggle to seamlessly combine AI automation tools with robust project analytics.",
      solution: "Spearheaded the research, conceptual design, and architecture for BlackIT's flagship data-driven digital solutions.",
      outcome: "Successfully launched MVP prototypes and positioned BlackIT as an innovative tech venture.",
      role: "Co-Founder & Technology Strategist",
      featured: true
    },
    {
      id: "proj-5",
      title: "Financial Planning & Revenue Forecasting Dashboard",
      category: "Power BI",
      tags: ["Power BI", "Financial Modeling", "DAX", "Excel Integration"],
      shortDesc: "Dynamic financial dashboard with scenario parameters for revenue projection, cash flow sensitivity, and margin variance.",
      problem: "Finance leadership required rapid scenario testing capabilities for budget planning without relying on heavy Excel models.",
      solution: "Engineered dynamic DAX parameter tables and scenario sliders within Power BI for real-time forecast adjustments.",
      outcome: "Enabled instant what-if financial analysis during executive planning sessions.",
      role: "Power BI Developer",
      featured: false
    },
    {
      id: "proj-6",
      title: "AI-Assisted PMO Reporting Automation",
      category: "AI",
      tags: ["AI", "Automation", "Power BI", "PMO", "Python"],
      shortDesc: "Automated executive summary text generation combining AI language prompts with Power BI structured dataset exports.",
      problem: "PMs spent hours crafting repetitive weekly progress narratives for multi-stakeholder updates.",
      solution: "Integrated AI natural language generation templates with dataset status outputs to draft structured PMO summaries.",
      outcome: "Accelerated weekly status report generation by 80% while maintaining human oversight.",
      role: "Business Analyst & AI Tech Lead",
      featured: false
    }
  ],

  // 9. THE BLACKIT SECTION
  blackit: {
    name: "The BlackIt",
    tagline: "Building Technology. Creating Possibilities.",
    role: "Founder — The BlackIt",
    overview: "Beyond my professional role, I am also one of the founders of The BlackIt, a technology-focused initiative exploring innovative solutions across data, AI, software and digital transformation.",
    vision: "To empower organizations and forward-thinking teams through modern, data-driven technology solutions, streamlined digital workflows, and intelligent software initiatives.",
    mission: "Combining deep data analytics, structured project management discipline, and modern technology architecture to build products and platforms that create measurable impact.",
    focus: [
      { label: "Data & Analytics", icon: "bar-chart-3", color: "blue" },
      { label: "AI & Automation", icon: "cpu", color: "purple" },
      { label: "Digital Solutions", icon: "layers", color: "cyan" },
      { label: "Technology Consulting", icon: "terminal", color: "emerald" },
      { label: "Business Intelligence", icon: "pie-chart", color: "amber" }
    ],
    pillars: [
      {
        title: "Intelligent Data Products",
        description: "Designing advanced analytics platforms and decision-support tools tailored for enterprise governance.",
        icon: "database"
      },
      {
        title: "Technology Solutions & Advisory",
        description: "Helping businesses navigate digital transformation through modern architecture and strategy.",
        icon: "code"
      },
      {
        title: "Product Innovation & R&D",
        description: "Incubating in-house tech ideas, prototyping AI-assisted tools, and turning concepts into reality.",
        icon: "cpu"
      }
    ],
    status: "Active Tech Venture & Innovation Hub",
    ctaText: "Connect with The BlackIt",
    ctaLink: "#contact"
  },

  // 10. EXPERIENCE TIMELINE
  timeline: [
    {
      id: "exp-1",
      period: "2024 - Present",
      role: "Co-Founder & Technology Lead",
      organization: "BlackIT",
      category: "Entrepreneurship",
      description: "Leading technology strategy, digital solution architecture, and product development initiatives under the BlackIT brand.",
      achievements: [
        "Co-founded BlackIT to build technology-driven data solutions and digital platforms.",
        "Overseeing product roadmaps, technology stack evaluation, and strategic partner collaborations.",
        "Integrating AI-assisted capabilities into core business analysis and project delivery workflows."
      ],
      tech: ["Technology Strategy", "Data Products", "AI Automation", "Venture Building"]
    },
    {
      id: "exp-2",
      period: "2022 - Present",
      role: "Senior Power BI Developer & Business Analyst",
      organization: "Enterprise Technology & Consulting",
      category: "Professional Experience",
      description: "Delivering end-to-end Power BI reporting suites and leading business requirement engineering for complex enterprise engagements.",
      achievements: [
        "Architected 25+ interactive Power BI dashboards serving executive leadership across finance, sales, and operations.",
        "Optimized complex DAX data models, improving report render speeds by over 50%.",
        "Conducted detailed business analysis sessions to map stakeholder needs into scalable BI architectures."
      ],
      tech: ["Power BI", "DAX", "Power Query", "Business Analysis", "SQL", "Requirements"]
    },
    {
      id: "exp-3",
      period: "2020 - 2022",
      role: "PMO Specialist / Project Coordinator",
      organization: "Global Program Management Office",
      category: "PMO & Governance",
      description: "Managed project governance frameworks, RAID risk logs, executive status dashboards, and cross-functional team coordination.",
      achievements: [
        "Established standardized PMO reporting templates and milestone tracking metrics across 12 digital projects.",
        "Facilitated weekly steering committee updates, risk mitigation workshops, and stakeholder alignment meetings.",
        "Integrated automated project status metrics with Power BI for real-time PMO oversight."
      ],
      tech: ["PMO Governance", "RAID Management", "Project Tracking", "Executive Reporting", "M365"]
    },
    {
      id: "exp-4",
      period: "2019 - 2020",
      role: "Business & Systems Analyst",
      organization: "Digital Solutions & Services",
      category: "Business Analysis",
      description: "Analyzed business processes, authored functional requirement documents, and coordinated user acceptance testing (UAT).",
      achievements: [
        "Mapped As-Is and To-Be operational processes, identifying bottleneck reductions of up to 30%.",
        "Prepared comprehensive Business Requirement Documents (BRD) and functional specifications.",
        "Worked closely with development teams to ensure technical deliverables matched business intent."
      ],
      tech: ["Requirement Engineering", "Process Mapping", "Gap Analysis", "UAT Coordination"]
    }
  ],

  // 11. INSIGHTS / BLOG SECTION
  insights: [
    {
      id: "post-1",
      title: "Why Most Power BI Dashboards Fail Executive Approval (And How to Fix It)",
      category: "Power BI",
      date: "October 2026",
      readTime: "5 min read",
      summary: "Explore common visual clutter mistakes, poor DAX structure, and how aligning KPIs with executive decision flows transforms adoption rates.",
      content: `
The Challenge with Executive Dashboards
Many Power BI developers focus heavily on colorful charts and complex visual tricks. However, C-suite executives require immediate clarity, actionable context, and reliable metrics.

Key Rules for High-Impact BI Design
1. Prioritize Information Hierarchy: Place high-level summary KPIs at the top-left, followed by trends and drill-through details.
2. Context is Everything: Never present a raw metric like '$5M Revenue' without context (e.g., '+12% vs Target' or 'YoY Growth').
3. Optimize DAX Performance: Slow loading visuals ruin executive presentation flow. Pre-calculate aggregations where appropriate.

By combining business analysis rigor with clean UI layout principles, data dashboards become essential daily management tools.
      `
    },
    {
      id: "post-2",
      title: "Combining PMO Discipline with Real-Time Power BI Analytics",
      category: "PMO",
      date: "September 2026",
      readTime: "6 min read",
      summary: "How modern Project Management Offices are moving away from manual static slide decks toward automated, data-driven governance dashboards.",
      content: `
Moving Beyond Static Slides
Traditional PMO reporting relying on static PowerPoint slides creates stale data and manual overhead. Integrating Power BI directly into project management workflows provides transparent governance.

Core PMO Metrics to Automate
- Milestone Schedule Variance: Visualizing slip days across active project phases.
- Resource Over-Allocation Heatmaps: Preventing team burnout before critical deadlines.
- RAID Escalation Matrices: Classifying high-impact risks for steering committee intervention.

When PMO governance meets automated analytics, project health moves from gut-feeling to empirical evidence.
      `
    },
    {
      id: "post-3",
      title: "The Strategic Role of the Business Analyst in Digital Transformation",
      category: "Business Analysis",
      date: "August 2026",
      readTime: "4 min read",
      summary: "Understanding how thorough requirements engineering and process optimization form the foundation of successful software and BI implementations.",
      content: `
Bridging the Communication Gap
The biggest risk in digital initiatives is not technology failure—it is misaligned requirements. The Business Analyst translates strategic executive goals into clear, unambiguous technical specifications.

Essential Steps in Requirement Engineering
1. Deep Stakeholder Interviews: Uncovering implicit user needs beyond superficial requests.
2. As-Is Process Mapping: Documenting existing pain points and operational bottlenecks.
3. Validation & UAT Protocols: Ensuring delivered solutions satisfy measurable business criteria.
      `
    }
  ],

  // 12. SKILLS VISUALIZATION
  skills: [
    {
      category: "Analytics & BI",
      icon: "pie-chart",
      items: [
        { name: "Power BI", level: "Expert" },
        { name: "DAX & Data Modeling", level: "Advanced" },
        { name: "Power Query (M)", level: "Advanced" },
        { name: "Data Visualization & Storytelling", level: "Expert" },
        { name: "SQL & Relational Databases", level: "Proficient" },
        { name: "Excel & Advanced Analytics", level: "Expert" }
      ]
    },
    {
      category: "PMO & Project Management",
      icon: "check-square",
      items: [
        { name: "Project Governance", level: "Expert" },
        { name: "RAID Risk & Issue Management", level: "Expert" },
        { name: "Milestone & Status Tracking", level: "Expert" },
        { name: "Stakeholder Management", level: "Advanced" },
        { name: "Project Documentation & Audits", level: "Advanced" },
        { name: "Agile / Hybrid Methodologies", level: "Proficient" }
      ]
    },
    {
      category: "Business Analysis",
      icon: "file-search",
      items: [
        { name: "Requirements Engineering (BRD/FRD)", level: "Expert" },
        { name: "Process Mapping & Optimization", level: "Expert" },
        { name: "Gap Analysis & Feasibility", level: "Advanced" },
        { name: "User Acceptance Testing (UAT)", level: "Advanced" },
        { name: "Management & Operational Reporting", level: "Expert" }
      ]
    },
    {
      category: "Technology & Tools",
      icon: "cpu",
      items: [
        { name: "BlackIT Tech Strategy", level: "Advanced" },
        { name: "Microsoft 365 & Power Platform", level: "Advanced" },
        { name: "AI-Assisted Workflow Automation", level: "Advanced" },
        { name: "JIRA / Azure DevOps / Trello", level: "Proficient" },
        { name: "Git & Documentation Tools", level: "Proficient" }
      ]
    }
  ],

  // 13. TESTIMONIALS (Editable Placeholders)
  testimonials: [
    {
      id: "test-1",
      quote: "The Power BI dashboards created for our team completely transformed how we track project health and financial performance. The attention to detail and data clarity was exceptional.",
      name: "[Placeholder — Add Real Name]",
      role: "Director of Technology & Operations",
      company: "[Your Organization]",
      avatar: null
    },
    {
      id: "test-2",
      quote: "Brings a unique combination of technical Power BI expertise and structured PMO governance. Able to understand complex business requirements and convert them into seamless reports.",
      name: "[Placeholder — Add Real Name]",
      role: "Head of Project Management Office",
      company: "[Your Organization]",
      avatar: null
    },
    {
      id: "test-3",
      quote: "As a founder at The BlackIt, demonstrates incredible forward-thinking strategy, combining analytical depth with clear product vision and technology leadership.",
      name: "[Placeholder — Add Real Name]",
      role: "Co-Founder / Venture Strategist",
      company: "The BlackIt Partner Initiative",
      avatar: null
    }
  ],

  // 14. NAVIGATION LINKS
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#experience" },
    { label: "Expertise", href: "#expertise" },
    { label: "Power BI", href: "#powerbi" },
    { label: "PMO Suite", href: "#pmo" },
    { label: "Projects", href: "#projects" },
    { label: "BlackIt", href: "#blackit" },
    { label: "Journey", href: "#journey" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" }
  ],

  // ============================================================
  // 15. PROFESSIONAL IDENTITY SECTION ("Where Data Meets Business & Delivery")
  // ============================================================
  identity: {
    title: "Where Data Meets Business & Delivery",
    subtitle: "A unique professional combining data analytics, project management, business analysis, and entrepreneurial vision to drive real business outcomes.",
    pillars: [
      {
        number: "01",
        title: "Data & Analytics",
        skillsText: "Power BI • Business Intelligence • Data Visualization • Reporting",
        icon: "bar-chart-2",
        color: "blue",
        details: [
          "Enterprise Power BI dashboard development",
          "Advanced DAX & data modeling",
          "KPI reporting & business intelligence",
          "Data-driven insights for decision making"
        ]
      },
      {
        number: "02",
        title: "Project Management",
        skillsText: "PMO • Governance • Project Tracking • Risk & Issue Management",
        icon: "shield-check",
        color: "purple",
        details: [
          "Project governance frameworks & PMO setup",
          "Milestone tracking & status reporting",
          "Risk, issue & dependency management",
          "Stakeholder coordination & executive reporting"
        ]
      },
      {
        number: "03",
        title: "Business Analysis",
        skillsText: "Requirements • Stakeholder Management • Process Understanding • Business Insights",
        icon: "file-search",
        color: "emerald",
        details: [
          "Business requirements engineering (BRD/FRD)",
          "As-Is & To-Be process mapping",
          "Gap analysis & feasibility assessment",
          "UAT coordination & solution validation"
        ]
      },
      {
        number: "04",
        title: "Entrepreneurship",
        skillsText: "The BlackIt • Technology Solutions • Innovation • Digital Transformation",
        icon: "rocket",
        color: "rose",
        details: [
          "Co-Founder at The BlackIt",
          "Technology strategy & product development",
          "Digital transformation & AI initiatives",
          "Innovation management & business development"
        ]
      }
    ]
  },

  // ============================================================
  // 16. WIPRO / PROFESSIONAL EXPERIENCE SECTION
  // ============================================================
  wiproExperience: {
    company: "WIPRO",
    role: "Power BI Developer & PMO Professional",
    tenure: "4+ Years",
    tagline: "Contributing to enterprise technology and business operations through a combination of Power BI development, analytics, project management, reporting and stakeholder coordination.",
    differentiator: {
      quote: "\"I don't just build dashboards. I understand the business problems behind the data.\"",
      sub: "With experience spanning Power BI, business intelligence, and PMO operations at Wipro, I bridge the gap between data, technology, projects, and business decisions."
    },
    valuePipeline: [
      { label: "Analytics", icon: "bar-chart-2", desc: "Power BI dashboards & data visualization" },
      { label: "Reporting", icon: "file-text", desc: "KPI, management & executive reporting" },
      { label: "PMO", icon: "shield-check", desc: "Project governance & milestone tracking" },
      { label: "Stakeholder Mgmt", icon: "users", desc: "Cross-functional coordination & alignment" },
      { label: "Business Insights", icon: "trending-up", desc: "Data-driven business decision support" }
    ],
    areas: [
      {
        badge: "POWER BI & BUSINESS INTELLIGENCE",
        title: "Data Analytics & Reporting",
        icon: "bar-chart-2",
        color: "blue",
        summary: "Building enterprise-grade Power BI dashboards and delivering meaningful data insights through advanced analytics, visualization, and stakeholder-focused reporting.",
        points: [
          "Power BI dashboard development and enhancement",
          "Data visualization and interactive reporting",
          "KPI tracking and performance reporting",
          "Business requirements gathering for BI solutions",
          "DAX measures and data model optimization",
          "Dashboard maintenance and continuous improvement",
          "Management and executive-level reporting",
          "Data-driven insights for strategic decisions",
          "Working with stakeholders to define reporting needs"
        ]
      },
      {
        badge: "PMO & PROJECT MANAGEMENT",
        title: "Project Governance & Operations",
        icon: "shield-check",
        color: "purple",
        summary: "Supporting project delivery through structured governance, transparent status reporting, stakeholder coordination, and proactive risk management across concurrent initiatives.",
        points: [
          "Project tracking, governance, and oversight",
          "Weekly/monthly status reporting for leadership",
          "Stakeholder coordination and meeting management",
          "Financial and operational project tracking",
          "Risk and issue tracking (RAID logs)",
          "Opportunity and contract tracking",
          "Project documentation and audit preparation",
          "Meeting coordination and follow-ups",
          "Progress monitoring across project streams",
          "Management-level reporting and executive summaries",
          "Cross-functional team coordination"
        ]
      }
    ]
  },

  // ============================================================
  // 17. CAREER JOURNEY TIMELINE
  // ============================================================
  careerJourney: [
    {
      year: "2022",
      badge: "Professional Start",
      title: "Started Professional Journey",
      subtitle: "Beginning of Enterprise Career",
      icon: "graduation-cap",
      description: "Began professional career journey, entering the enterprise technology space at Wipro with a focus on data, analytics, and business operations."
    },
    {
      year: "Wipro",
      badge: "Power BI & BI",
      title: "Power BI / Business Intelligence",
      subtitle: "Enterprise Data & Analytics at Wipro",
      icon: "bar-chart-2",
      description: "Developed enterprise Power BI dashboards, implemented data models, created KPI reporting frameworks, and delivered management-level reporting across business units."
    },
    {
      year: "Wipro",
      badge: "PMO & Governance",
      title: "PMO Experience",
      subtitle: "Project Governance & Business Operations",
      icon: "shield-check",
      description: "Expanded into PMO operations — driving project governance, status reporting, stakeholder coordination, risk tracking, and executive-level project performance monitoring."
    },
    {
      year: "4+ Yrs",
      badge: "Combined Expertise",
      title: "4+ Years Experience",
      subtitle: "Data + Business + Project Management",
      icon: "trending-up",
      description: "Built a unique professional identity combining Power BI analytics with PMO governance and business analysis — bridging the gap between data, technology, and business delivery."
    },
    {
      year: "Now",
      badge: "Entrepreneurship",
      title: "The BlackIt",
      subtitle: "Co-Founder / Technology Entrepreneur",
      icon: "rocket",
      description: "Co-founded The BlackIt — a forward-thinking technology initiative exploring innovative solutions across data, AI, software, and digital transformation."
    }
  ]
};

// Export to global scope for easy access without build bundling requirements
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}

