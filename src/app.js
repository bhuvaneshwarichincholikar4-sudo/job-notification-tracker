const jobs = [
  {
    id: "job-1",
    title: "SDE Intern - Platform",
    company: "Infosys",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Spring Boot", "Data Structures", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.infosys.com/jobs/sde-intern-platform-bengaluru",
    description:
      "Work with the core platform team to build internal services used across multiple Infosys products. You will collaborate with senior engineers on feature delivery, learn how releases are managed, and write well-reviewed production code. The role is designed to give you exposure to large-scale systems without expecting prior experience in enterprise environments.",
  },
  {
    id: "job-2",
    title: "Graduate Engineer Trainee - Full Stack",
    company: "TCS",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "0-1",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.tcs.com/jobs/grad-engineer-fullstack-hyderabad",
    description:
      "Join a cross-functional team delivering web applications for global clients. As a GET, you will rotate between frontend and backend tasks, always paired with a mentor. You will learn code review practices, internal tooling, and how to safely deploy to staging and production environments.",
  },
  {
    id: "job-3",
    title: "Frontend Intern - Design Systems",
    company: "Wipro",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["HTML", "CSS", "React", "Design Systems"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.wipro.com/jobs/frontend-intern-design-system-bengaluru",
    description:
      "Support the design systems team in implementing reusable UI components for internal dashboards. You will work closely with designers to translate Figma specs into accessible, production-ready React components. The internship emphasises code quality, documentation, and learning how large teams ship UI safely.",
  },
  {
    id: "job-4",
    title: "Junior Backend Developer - Payments",
    company: "Razorpay",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Kotlin", "Microservices", "PostgreSQL"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/careers/jobs/junior-backend-developer-payments",
    description:
      "Contribute to backend services that power payment flows for Indian businesses. You will implement APIs, write integration tests, and work with monitoring tools to understand system behaviour in production. The role suits engineers who are comfortable with clean code and are keen to understand how financial systems stay reliable.",
  },
  {
    id: "job-5",
    title: "Data Analyst Intern - Growth",
    company: "Swiggy",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Tableau", "Python"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.swiggy.com/jobs/data-analyst-intern-growth",
    description:
      "Work with the growth analytics team to understand how customers interact with Swiggy’s consumer apps. You will help clean datasets, build simple dashboards, and support experiments with clear documentation. The role is designed to teach you how data is used to make day-to-day product decisions.",
  },
  {
    id: "job-6",
    title: "SDE Intern - Logistics",
    company: "Flipkart",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Kafka", "Microservices", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://www.flipkartcareers.com/jobs/sde-intern-logistics",
    description:
      "Help the logistics engineering team improve reliability of delivery pipelines. You will work on small, well-defined tasks in services that handle shipment tracking and status updates. The team focuses on clear reviews, observability, and making sure every change is easy to roll back if needed.",
  },
  {
    id: "job-7",
    title: "Python Developer (Fresher) - Internal Tools",
    company: "Capgemini",
    location: "Pune, Maharashtra",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Python", "Django", "REST APIs", "Git"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://www.capgemini.com/in-en/jobs/python-developer-fresher-pune",
    description:
      "Build and maintain small internal tools that support delivery teams. You will mostly work on new features with occasional bug fixes under guidance from seniors. The environment emphasises predictable delivery, straightforward communication, and writing code that is easy for the next person to maintain.",
  },
  {
    id: "job-8",
    title: "Java Developer (0-1) - Enterprise Apps",
    company: "Cognizant",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Spring Boot", "REST APIs", "SQL"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.cognizant.com/jobs/java-developer-0-1-chennai",
    description:
      "Work with senior engineers to deliver enhancements to existing enterprise applications. Your day-to-day includes implementing small stories, fixing defects, and learning how to write tests that catch regressions early. The team will support you with structured onboarding and clear checklists.",
  },
  {
    id: "job-9",
    title: "React Developer (1-3) - Customer Experience",
    company: "Amazon",
    location: "Hyderabad, Telangana",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "CSS", "Testing Library"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://www.amazon.jobs/en/jobs/react-developer-cx-hyderabad",
    description:
      "Join a frontend team focused on improving account and order experiences for Indian customers. You will own small features end-to-end from implementation to rollout, with a strong emphasis on accessibility and measurable impact. The role expects thoughtful communication and the discipline to keep UI performance healthy.",
  },
  {
    id: "job-10",
    title: "QA Intern - Web & Mobile",
    company: "Zoho",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Manual Testing", "Test Cases", "Bug Reporting"],
    source: "Indeed",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/jobs/qa-intern-web-mobile",
    description:
      "Assist the QA team in validating new features across web and mobile products. You will write clear test cases, execute regression suites, and log issues with enough detail for engineers to act quickly. The team values calm communication and a steady pace over last-minute heroics.",
  },
  {
    id: "job-11",
    title: "Data Analyst Intern - Product Insights",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Excel", "Power BI"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.freshworks.com/jobs/data-analyst-intern-product-insights",
    description:
      "Support product managers with simple analyses that explain how customers use key features. Your work will involve pulling data, structuring queries, and presenting trends in calm, narrative form. You will be paired with an analyst who reviews each deliverable and helps you grow your toolkit.",
  },
  {
    id: "job-12",
    title: "Junior Backend Developer - Lending",
    company: "PhonePe",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Spring Boot", "Kafka", "MySQL"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://careers.phonepe.com/jobs/junior-backend-developer-lending",
    description:
      "Contribute to APIs and services that power lending experiences inside the PhonePe app. You will work in a small team that values clear diagrams, predictable deployment schedules, and ownership of monitoring dashboards. The role suits engineers who like understanding how technical choices show up in customer behaviour.",
  },
  {
    id: "job-13",
    title: "SDE Intern - Merchant Experience",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Spring", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.paytm.com/sde-intern-merchant-experience-noida",
    description:
      "Work alongside senior developers to build reliable flows for merchants accepting payments. You will mainly focus on small enhancements, monitoring existing endpoints, and closing low-risk issues. The goal is to build your confidence with production systems without rushing your learning curve.",
  },
  {
    id: "job-14",
    title: "Graduate Engineer Trainee - Data Platform",
    company: "Accenture",
    location: "Pune, Maharashtra",
    mode: "Onsite",
    experience: "0-1",
    skills: ["SQL", "ETL", "Python"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "3–5 LPA",
    applyUrl: "https://www.accenture.com/in-en/careers/graduate-engineer-data-platform-pune",
    description:
      "Join the data platform team working on ingestion and transformation pipelines. You will help maintain existing jobs, write simple scripts, and learn how deployments are scheduled. The environment emphasises documentation and learning from steady, incremental changes.",
  },
  {
    id: "job-15",
    title: "Frontend Intern - Internal Dashboards",
    company: "IBM",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["JavaScript", "React", "CSS"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.ibm.com/jobs/frontend-intern-internal-dashboards",
    description:
      "Help build internal dashboards for consulting teams. You will work on small UI refinements, table views, and filters, all under the guidance of an experienced engineer. The role is structured to help you learn design-system thinking rather than one-off UI work.",
  },
  {
    id: "job-16",
    title: "Junior Backend Developer - Cloud Integrations",
    company: "Oracle",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "REST APIs", "Oracle DB"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "6–10 LPA",
    applyUrl: "https://oracle.taleo.net/careersection/junior-backend-developer-cloud-integrations",
    description:
      "Work on backend services that integrate Oracle products with customer systems. You will implement adapters, write integration tests, and help triage issues raised by support teams. The work is steady and focuses on long-term reliability rather than constant feature churn.",
  },
  {
    id: "job-17",
    title: "React Developer (1-3) - SaaS Admin",
    company: "SAP",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "10–18 LPA",
    applyUrl: "https://jobs.sap.com/job/react-developer-saas-admin-bengaluru",
    description:
      "Build admin-facing UI for SAP’s SaaS products. You will own well-scoped features, work with design on interaction details, and help keep the codebase approachable for new team members. The team favours clarity, simple patterns, and a deliberate release cadence.",
  },
  {
    id: "job-18",
    title: "QA Intern - API Testing",
    company: "Dell",
    location: "Hyderabad, Telangana",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["API Testing", "Postman", "Basic SQL"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.dell.com/api-testing-qa-intern-hyderabad",
    description:
      "Support the QA team responsible for key customer-facing APIs. You will help design and execute test cases, validate responses, and log findings with clear reproduction steps. The team will train you on understanding logs and basic monitoring dashboards.",
  },
  {
    id: "job-19",
    title: "Junior Backend Developer - Reporting",
    company: "Infosys",
    location: "Pune, Maharashtra",
    mode: "Onsite",
    experience: "1-3",
    skills: [".NET", "C#", "SQL Server"],
    source: "Naukri",
    postedDaysAgo: 9,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.infosys.com/jobs/junior-backend-developer-reporting-pune",
    description:
      "Contribute to reporting services that surface key operational metrics to clients. You will implement stable queries, optimise slow reports, and collaborate with support to keep SLAs healthy. Expect thorough reviews and regular learning sessions rather than surprise fire drills.",
  },
  {
    id: "job-20",
    title: "SDE Intern - CRM",
    company: "Zoho",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["C++", "Java", "Data Structures"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/jobs/sde-intern-crm-chennai",
    description:
      "Join the CRM engineering team and help build incremental improvements to core modules. You will work on small tasks, learn the review process, and gradually understand how the product fits together. The internship is paced to help you grow without encouraging late-night crunch.",
  },
  {
    id: "job-21",
    title: "Frontend Intern - Design System Adoption",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["React", "Storybook", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.freshworks.com/jobs/frontend-intern-design-system-adoption",
    description:
      "Help product teams migrate legacy components to the shared design system. You will work from clear migration guides, pair with mentors, and learn how design tokens are applied consistently. The focus is on thoughtful implementation rather than chasing novelty.",
  },
  {
    id: "job-22",
    title: "Data Analyst Intern - Customer Ops",
    company: "Cognizant",
    location: "Pune, Maharashtra",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Excel", "SQL", "Power BI"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.cognizant.com/jobs/data-analyst-intern-customer-ops",
    description:
      "Support customer operations leads with simple reports and trend analyses. You will tidy data extracts, build basic dashboards, and document what each view is used for. The team cares about clear writing and calm, predictable updates.",
  },
  {
    id: "job-23",
    title: "Java Developer (0-1) - BFSI",
    company: "TCS",
    location: "Mumbai, Maharashtra",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Spring", "Oracle DB"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.tcs.com/jobs/java-developer-0-1-bfsi-mumbai",
    description:
      "Work with a stable banking client to implement and maintain backend modules. You will be given clearly-scoped tickets, supported by peers, and encouraged to ask questions early. The environment rewards patience, careful testing, and reliable communication.",
  },
  {
    id: "job-24",
    title: "Python Developer (Fresher) - Automation",
    company: "Wipro",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Python", "Automation", "APIs"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.wipro.com/jobs/python-developer-fresher-automation-hyderabad",
    description:
      "Implement small automation scripts that help delivery teams reduce repetitive manual work. You will work from simple specs, write clean Python, and receive structured feedback. The role is ideal for freshers who like making tools that quietly remove friction.",
  },
  {
    id: "job-25",
    title: "React Developer (1-3) - Internal Tools",
    company: "Capgemini",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "CSS Modules"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "6–10 LPA",
    applyUrl: "https://www.capgemini.com/in-en/jobs/react-developer-internal-tools-bengaluru",
    description:
      "Build and maintain internal tools that consultants use to manage projects and staffing. You will focus on clarity, sensible defaults, and UI that gets out of the user’s way. The team values small, reversible changes shipped at a steady pace.",
  },
  {
    id: "job-26",
    title: "SDE Intern - Observability",
    company: "Amazon",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Python", "Monitoring", "Dashboards"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://www.amazon.jobs/en/jobs/sde-intern-observability-bengaluru",
    description:
      "Help improve the internal observability stack used by engineering teams. You will contribute to dashboards, alerts, and small tooling that makes it easier to understand system health. The work is technical but paced with a focus on learning, not urgency.",
  },
  {
    id: "job-27",
    title: "QA Intern - Regression Suites",
    company: "Infosys",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Manual Testing", "Test Plans", "JIRA"],
    source: "Indeed",
    postedDaysAgo: 8,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.infosys.com/jobs/qa-intern-regression-suites-hyderabad",
    description:
      "Assist with maintaining and executing regression suites for a stable enterprise product. You will document test coverage clearly and shadow senior testers during release cycles. The rhythm of work is deliberate and planned in advance.",
  },
  {
    id: "job-28",
    title: "Graduate Engineer Trainee - Cloud Apps",
    company: "Cognizant",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["JavaScript", "Node.js", "Cloud Basics"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.cognizant.com/jobs/graduate-engineer-cloud-apps-bengaluru",
    description:
      "Rotate across teams shipping cloud-hosted applications for global clients. You will work on small, well-supported tasks and learn deployment basics on major cloud providers. The programme emphasises mentorship and realistic expectations for fresh graduates.",
  },
  {
    id: "job-29",
    title: "Junior Backend Developer - APIs",
    company: "Accenture",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "REST APIs", "Microservices"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://www.accenture.com/in-en/careers/junior-backend-developer-apis-hyderabad",
    description:
      "Implement and maintain service endpoints that integrate with third-party systems. You will work from clear contracts, support QA in reproducing issues, and participate in code reviews. The culture values patient debugging and clear documentation.",
  },
  {
    id: "job-30",
    title: "Frontend Intern - Marketing Site",
    company: "Zoho",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["HTML", "CSS", "JavaScript"],
    source: "Indeed",
    postedDaysAgo: 9,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/jobs/frontend-intern-marketing-site",
    description:
      "Support the web team responsible for public marketing pages. You will implement small content updates, tidy layouts, and ensure responsive behaviour matches design expectations. The role requires attention to detail and a calm, methodical work style.",
  },
  {
    id: "job-31",
    title: "Junior Backend Developer - Notifications",
    company: "Razorpay",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Kafka", "Redis"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/careers/jobs/junior-backend-developer-notifications",
    description:
      "Work on services that deliver timely notifications to merchants and partners. You will focus on reliability, idempotency, and observability rather than quick experiments. The team prides itself on stable systems and clear incident retrospectives.",
  },
  {
    id: "job-32",
    title: "React Developer (1-3) - Growth Experiments",
    company: "Swiggy",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "AB Testing"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "10–18 LPA",
    applyUrl: "https://careers.swiggy.com/jobs/react-developer-growth-experiments",
    description:
      "Implement small, well-instrumented UI experiments in consumer flows. You will work closely with analysts to ensure each experiment is measured correctly. The role encourages careful rollouts and quick, quiet rollbacks when needed.",
  },
  {
    id: "job-33",
    title: "Data Analyst Intern - Experimentation",
    company: "PhonePe",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Experiment Design", "Dashboards"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.phonepe.com/jobs/data-analyst-intern-experimentation",
    description:
      "Help design and analyse small experiments across various product surfaces. You will learn how to construct baselines, segment results, and present takeaways that are easy to act on. The team values patience, thoroughness, and honest reporting over flashy charts.",
  },
  {
    id: "job-34",
    title: "QA Intern - Mobile Apps",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Mobile Testing", "Test Cases", "Bug Tracking"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.paytm.com/qa-intern-mobile-apps-noida",
    description:
      "Test new and existing features in the Paytm consumer app across a range of devices. You will build a strong understanding of core flows and help maintain regression coverage. The team emphasises steady, repeatable testing rather than last-minute rushes.",
  },
  {
    id: "job-35",
    title: "Graduate Engineer Trainee - Analytics",
    company: "IBM",
    location: "Pune, Maharashtra",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Python", "SQL", "Dashboards"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.ibm.com/jobs/graduate-engineer-analytics-pune",
    description:
      "Join a small analytics team supporting internal stakeholders. You will automate manual reports, maintain simple scripts, and write clear documentation. The role aims to build your confidence with business data without rushing complexity.",
  },
  {
    id: "job-36",
    title: "Junior Backend Developer - Internal APIs",
    company: "Oracle",
    location: "Bengaluru, Karnataka",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "REST APIs", "Oracle DB"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://oracle.taleo.net/careersection/junior-backend-internal-apis-bengaluru",
    description:
      "Maintain and extend internal APIs used by product and support teams. You will focus on predictable behaviour, clean error handling, and helpful logs. The environment favours stability and clear communication with downstream users.",
  },
  {
    id: "job-37",
    title: "React Developer (1-3) - Reporting UI",
    company: "SAP",
    location: "Gurugram, Haryana",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "Charts", "Accessibility"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://jobs.sap.com/job/react-developer-reporting-ui-gurugram",
    description:
      "Build reporting interfaces that help enterprise customers understand their data at a glance. You will work closely with design to balance density and clarity. The team values sober visual design and reliable performance over novelty.",
  },
  {
    id: "job-38",
    title: "QA Intern - Tooling",
    company: "Dell",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Scripting", "Automation Basics", "Testing"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.dell.com/qa-intern-tooling-bengaluru",
    description:
      "Help the QA tooling team build simple utilities that make everyday testing smoother. You will work on small scripts, tidy documentation, and receive hands-on feedback. The pace is designed to be sustainable and intentional.",
  },
  {
    id: "job-39",
    title: "SDE Intern - Data Pipelines",
    company: "Swiggy",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "SQL", "ETL"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.swiggy.com/jobs/sde-intern-data-pipelines",
    description:
      "Assist in maintaining and improving data pipelines that feed analytics dashboards. You will start with documentation updates and small fixes, gradually growing into more complex tasks. The team encourages writing down what you learn as you go.",
  },
  {
    id: "job-40",
    title: "Python Developer (Fresher) - Internal Dashboards",
    company: "Flipkart",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "Flask", "SQL"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "3–5 LPA",
    applyUrl: "https://www.flipkartcareers.com/jobs/python-developer-fresher-internal-dashboards",
    description:
      "Build small backend services that support reporting dashboards for operations teams. You will focus on clear, readable code and simple endpoints with predictable behaviour. Mentors will help you understand logging, configuration, and safe deployments.",
  },
  {
    id: "job-41",
    title: "SDE Intern - Merchant Analytics",
    company: "PhonePe",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "SQL", "Dashboards"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.phonepe.com/jobs/sde-intern-merchant-analytics",
    description:
      "Contribute to analytics features that help merchants understand payment trends. You will implement small backend tasks and support with data validation. The team appreciates thoughtful questions and incremental improvements.",
  },
  {
    id: "job-42",
    title: "Graduate Engineer Trainee - Platform Support",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Linux", "SQL"],
    source: "Naukri",
    postedDaysAgo: 4,
    salaryRange: "3–5 LPA",
    applyUrl: "https://jobs.paytm.com/graduate-engineer-platform-support-noida",
    description:
      "Join the platform support group that keeps core services healthy. You will help investigate issues, write small fixes, and maintain runbooks. The work is steady and values calm debugging over reactive changes.",
  },
  {
    id: "job-43",
    title: "React Developer (1-3) - Merchant Dashboard",
    company: "Razorpay",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "REST APIs"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/careers/jobs/react-developer-merchant-dashboard",
    description:
      "Own small but meaningful improvements to the merchant dashboard experience. You will focus on clarity of layout, performance, and easy navigation for busy operators. The team values collaborative design reviews and pragmatic solutions.",
  },
  {
    id: "job-44",
    title: "Data Analyst Intern - Revenue",
    company: "Infosys",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Excel", "SQL", "Power BI"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.infosys.com/jobs/data-analyst-intern-revenue-bengaluru",
    description:
      "Work with the revenue analytics team to maintain key internal dashboards. You will learn how revenue is tracked, reconciled, and reported. The team offers structured guidance and expects thoughtful follow-up questions.",
  },
  {
    id: "job-45",
    title: "QA Intern - Web Regression",
    company: "Capgemini",
    location: "Pune, Maharashtra",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Manual Testing", "Regression Suites"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://www.capgemini.com/in-en/jobs/qa-intern-web-regression-pune",
    description:
      "Assist delivery teams by running and updating regression suites before releases. You will learn how to structure test cycles and capture clear evidence for each run. The environment is disciplined but supportive of new testers.",
  },
  {
    id: "job-46",
    title: "Junior Backend Developer - Integrations",
    company: "Cognizant",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "REST APIs", "Integration"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.cognizant.com/jobs/junior-backend-developer-integrations-chennai",
    description:
      "Implement integration points between client systems and internal platforms. You will own small connectors, document contracts, and help with issue triage. The team leans on checklists and written handovers to keep work predictable.",
  },
  {
    id: "job-47",
    title: "Python Developer (Fresher) - Data Tools",
    company: "Accenture",
    location: "Hyderabad, Telangana",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Python", "ETL", "APIs"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "3–5 LPA",
    applyUrl: "https://www.accenture.com/in-en/careers/python-developer-fresher-data-tools-hyderabad",
    description:
      "Build and maintain small data tools that help consulting teams track progress. You will write straightforward Python scripts, follow coding standards, and receive regular feedback. The focus is on sustainable contribution rather than quick wins.",
  },
  {
    id: "job-48",
    title: "React Developer (1-3) - Admin Consoles",
    company: "IBM",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "Design Systems"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.ibm.com/jobs/react-developer-admin-consoles-bengaluru",
    description:
      "Work on admin consoles used to manage enterprise deployments. You will implement features, refine layouts, and keep interactions predictable and accessible. The team values small, reversible changes and thorough reviews.",
  },
  {
    id: "job-49",
    title: "SDE Intern - Core Services",
    company: "Oracle",
    location: "Hyderabad, Telangana",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Java", "Data Structures", "Algorithms"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://oracle.taleo.net/careersection/sde-intern-core-services-hyderabad",
    description:
      "Join the team responsible for core shared services used across multiple Oracle products. You will work on small stories, learn how large codebases are organised, and observe how changes are safely deployed. The internship emphasises thoughtful reviews over rushed delivery.",
  },
  {
    id: "job-50",
    title: "QA Intern - Enterprise Workflows",
    company: "SAP",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Manual Testing", "Test Suites"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://jobs.sap.com/job/qa-intern-enterprise-workflows-bengaluru",
    description:
      "Assist in validating key workflow scenarios for enterprise customers. You will pair with senior testers, keep regression packs tidy, and document observations carefully. The workload is planned so that learning and quality both receive attention.",
  },
  {
    id: "job-51",
    title: "SDE Intern - Risk and Compliance",
    company: "CRED",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Kotlin", "APIs"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.cred.club/jobs/sde-intern-risk-compliance-bengaluru",
    description:
      "Support the risk and compliance engineering team with well-scoped backend tasks. You will work with senior developers who value clear thinking, simple code, and measured releases. The focus is on building robust flows rather than rapid experiments.",
  },
  {
    id: "job-52",
    title: "Data Analyst Intern - Credit Insights",
    company: "CRED",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["SQL", "Python", "Dashboards"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.cred.club/jobs/data-analyst-intern-credit-insights",
    description:
      "Help the credit insights team understand member behaviour and risk profiles. You will work with anonymised data, build dashboards, and write brief summaries for stakeholders. The team encourages careful reasoning and avoids overclaiming from data.",
  },
  {
    id: "job-53",
    title: "SDE Intern - UPI Platform",
    company: "PhonePe",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Distributed Systems", "Monitoring"],
    source: "LinkedIn",
    postedDaysAgo: 0,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.phonepe.com/jobs/sde-intern-upi-platform",
    description:
      "Work with the UPI platform team to implement small improvements and automation. You will learn how high-volume systems are observed and tuned over time. The internship is structured and expects responsible communication.",
  },
  {
    id: "job-54",
    title: "React Developer (1-3) - Consumer Web",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "Redux", "TypeScript"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "10–18 LPA",
    applyUrl: "https://jobs.paytm.com/react-developer-consumer-web-noida",
    description:
      "Implement and refine flows in the Paytm consumer web app. You will partner with design and product to turn clear requirements into thoughtful UI. The team prefers predictable, well-tested releases over constant churn.",
  },
  {
    id: "job-55",
    title: "Graduate Engineer Trainee - Data",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Python", "SQL", "ETL"],
    source: "Naukri",
    postedDaysAgo: 4,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.freshworks.com/jobs/graduate-engineer-data-chennai",
    description:
      "Join a small team building and maintaining data pipelines for SaaS products. You will handle well-defined tasks, write simple tests, and learn from clear code reviews. The focus is on long-term maintainability over quick hacks.",
  },
  {
    id: "job-56",
    title: "QA Intern - Release Readiness",
    company: "Zoho",
    location: "Chennai, Tamil Nadu",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Manual Testing", "Release Checklists"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://careers.zoho.com/jobs/qa-intern-release-readiness",
    description:
      "Work closely with product and engineering teams to validate features just before release. You will follow clear checklists, report issues calmly, and learn how release decisions are made. The work is methodical and well structured.",
  },
  {
    id: "job-57",
    title: "Junior Backend Developer - Subscription Billing",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Microservices", "PostgreSQL"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://careers.freshworks.com/jobs/junior-backend-developer-subscription-billing",
    description:
      "Contribute to services that handle subscriptions, invoicing, and renewals. You will work on well-scoped changes with clear tests and rollback plans. The team takes reliability seriously and encourages open, direct communication.",
  },
  {
    id: "job-58",
    title: "React Developer (1-3) - Internal Tools",
    company: "Infosys",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.infosys.com/jobs/react-developer-internal-tools-bengaluru",
    description:
      "Build internal tools that simplify everyday workflows for project teams. You will mostly own incremental improvements, focusing on clarity and performance. The team prefers small, reviewed changes over large, risky refactors.",
  },
  {
    id: "job-59",
    title: "Python Developer (Fresher) - Reporting",
    company: "TCS",
    location: "Mumbai, Maharashtra",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Python", "Pandas", "Excel"],
    source: "Naukri",
    postedDaysAgo: 9,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.tcs.com/jobs/python-developer-fresher-reporting-mumbai",
    description:
      "Support reporting teams by writing small Python scripts that prepare data for analysis. You will work with senior analysts who will review your work and help you learn. The pace is consistent and measured.",
  },
  {
    id: "job-60",
    title: "SDE Intern - Merchant Dashboard",
    company: "Razorpay",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["JavaScript", "React", "APIs"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹15k–₹40k/month Internship",
    applyUrl: "https://razorpay.com/careers/jobs/sde-intern-merchant-dashboard",
    description:
      "Assist the merchant dashboard team with small UI and API-integration tasks. You will be guided on how to break down work, write maintainable code, and observe impact with basic metrics. The focus is on calm, steady contribution.",
  },
];

const STORAGE_KEY = "jobNotificationTracker.savedJobs";

const routes = {
  "/": {
    key: "landing",
    title: "Stop Missing The Right Jobs.",
    subtext: "Precision-matched job discovery delivered daily at 9AM.",
    body: `
      <div class="card">
        <div class="card__section">
          <p class="body text-muted">
            Job Notification Tracker is designed to surface the roles that actually match what you are looking for,
            without noise or urgency theater.
          </p>
        </div>
        <div class="card__section">
          <button type="button" class="btn btn--primary" data-cta-settings>
            Start Tracking
          </button>
        </div>
      </div>
    `,
  },
  "/dashboard": {
    key: "dashboard",
    title: "Dashboard",
    subtext: "Explore a realistic set of early-career tech roles.",
    body: `
      <div class="card">
        <div class="card__section">
          <div class="stack-vertical stack-vertical--large">
            <div class="field">
              <span class="field__label">Filter jobs</span>
              <p class="field__hint">
                Adjust these controls to explore the dataset. Filters apply instantly and do not change your settings.
              </p>
            </div>
            <div class="filter-bar" data-filter-bar>
              <div class="filter-bar__group">
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-keyword">Keyword</label>
                  <p class="field__hint">Search by job title or company name.</p>
                  <input
                    id="filter-keyword"
                    class="field__input"
                    type="text"
                    placeholder="e.g., React, Data Analyst"
                    data-filter-keyword
                  />
                </div>
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-location">Location</label>
                  <select id="filter-location" class="field__input" data-filter-location>
                    <option value="">All locations</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurugram">Gurugram</option>
                  </select>
                </div>
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-mode">Mode</label>
                  <select id="filter-mode" class="field__input" data-filter-mode>
                    <option value="">Any mode</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                </div>
              </div>
              <div class="filter-bar__group">
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-experience">Experience</label>
                  <select id="filter-experience" class="field__input" data-filter-experience>
                    <option value="">Any experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1">0-1</option>
                    <option value="1-3">1-3</option>
                    <option value="3-5">3-5</option>
                  </select>
                </div>
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-source">Source</label>
                  <select id="filter-source" class="field__input" data-filter-source>
                    <option value="">All sources</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Naukri">Naukri</option>
                    <option value="Indeed">Indeed</option>
                  </select>
                </div>
                <div class="field filter-bar__field">
                  <label class="field__label" for="filter-sort">Sort</label>
                  <select id="filter-sort" class="field__input" data-filter-sort>
                    <option value="latest">Latest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card__section">
          <div class="job-list" data-job-list></div>
        </div>
      </div>
    `,
  },
  "/saved": {
    key: "saved",
    title: "Saved",
    subtext: "Keep roles you might want to revisit later.",
    body: `
      <div class="card">
        <div class="card__section">
          <p class="body text-muted">
            Jobs you choose to save from the dashboard will appear here. Saved roles stay on this device after you close
            the tab.
          </p>
        </div>
        <div class="card__section">
          <div class="job-list" data-saved-list></div>
        </div>
      </div>
    `,
  },
  "/digest": {
    key: "digest",
    title: "Digest",
    subtext: "A calm daily summary that arrives on your schedule.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">Daily digest coming soon.</h2>
        <p class="body empty-card__body">
          In a future step, this page will show a 9AM summary of new and important roles, aligned with your preferences.
        </p>
      </div>
    `,
  },
  "/settings": {
    key: "settings",
    title: "Settings",
    subtext: "Define the kind of roles you care about. These controls are placeholders only.",
    body: `
      <div class="card">
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-role-keywords">Role keywords</label>
            <p class="field__hint">
              List titles or keywords you want this tracker to focus on.
            </p>
            <input
              id="settings-role-keywords"
              class="field__input"
              type="text"
              placeholder="e.g., Senior Frontend Engineer, Product Manager"
            />
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-preferred-locations">Preferred locations</label>
            <p class="field__hint">
              Cities, regions, or time zones that are realistic for you.
            </p>
            <input
              id="settings-preferred-locations"
              class="field__input"
              type="text"
              placeholder="e.g., Bengaluru, Remote-friendly in IST, US-remote overlap"
            />
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <span class="field__label">Mode</span>
            <p class="field__hint">
              Indicate how you prefer to work. These options are placeholders; they do not affect any logic yet.
            </p>
            <div class="stack-horizontal">
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Remote
              </label>
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Hybrid
              </label>
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Onsite
              </label>
            </div>
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-experience-level">Experience level</label>
            <p class="field__hint">
              Select the band that most closely matches your current profile.
            </p>
            <select id="settings-experience-level" class="field__input">
              <option value="">Select an experience band</option>
              <option value="junior">Junior / Entry-level</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead / Principal</option>
            </select>
          </div>
        </div>
      </div>
    `,
  },
  "/proof": {
    key: "proof",
    title: "Proof",
    subtext: "This page will collect artifacts that show this tracker is working as intended.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">Proof workspace</h2>
        <p class="body empty-card__body">
          In a future step, you will attach screenshots, logs, and short notes that demonstrate the end-to-end flow
          from notification to decision.
        </p>
      </div>
    `,
  },
};

let savedJobIds = new Set();

function loadSavedJobIds() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (error) {
    return [];
  }
}

function persistSavedJobIds() {
  try {
    const value = JSON.stringify(Array.from(savedJobIds));
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    // Ignore persistence errors to keep UI responsive.
  }
}

function getRoute(pathname) {
  if (routes[pathname]) {
    return routes[pathname];
  }

  if (pathname === "" || pathname === null || pathname === undefined) {
    return routes["/"];
  }

  return null;
}

function getJobById(id) {
  return jobs.find((job) => job.id === id) || null;
}

function formatPostedDaysAgo(days) {
  if (days === 0) {
    return "Today";
  }
  if (days === 1) {
    return "1 day ago";
  }
  return `${days} days ago`;
}

function renderJobCards(container, jobList) {
  if (!container) return;

  if (!jobList.length) {
    container.innerHTML = `
      <div class="empty-card">
        <h2 class="empty-card__title">No jobs match your search.</h2>
        <p class="body empty-card__body">
          Try broadening your filters or clearing the keyword search to see more roles.
        </p>
      </div>
    `;
    return;
  }

  const html = jobList
    .map((job) => {
      const isSaved = savedJobIds.has(job.id);
      const postedLabel = formatPostedDaysAgo(job.postedDaysAgo);
      const skillsPreview = job.skills.slice(0, 3).join(", ");

      return `
        <article class="card job-card" data-job-id="${job.id}">
          <header class="card__header">
            <div class="stack-vertical">
              <h2 class="card__title">${job.title}</h2>
              <p class="body card__subtitle text-muted">
                ${job.company} · ${job.location}
              </p>
            </div>
            <span class="tag tag--accent">${job.source}</span>
          </header>
          <div class="card__section job-card__meta">
            <div class="job-card__meta-item">
              <span class="body"><strong>Mode:</strong> ${job.mode}</span>
            </div>
            <div class="job-card__meta-item">
              <span class="body"><strong>Experience:</strong> ${job.experience}</span>
            </div>
            <div class="job-card__meta-item">
              <span class="body"><strong>Salary:</strong> ${job.salaryRange}</span>
            </div>
            <div class="job-card__meta-item">
              <span class="body text-muted">${postedLabel}</span>
            </div>
          </div>
          <div class="card__section">
            <p class="body text-muted">
              ${skillsPreview ? `Likely to use: ${skillsPreview}.` : ""}
            </p>
          </div>
          <div class="card__section">
            <div class="button-row">
              <button type="button" class="btn btn--secondary" data-job-view="${job.id}">
                View
              </button>
              <button
                type="button"
                class="btn btn--ghost"
                data-job-save="${job.id}"
                ${isSaved ? "disabled" : ""}
              >
                ${isSaved ? "Saved" : "Save"}
              </button>
              <button type="button" class="btn btn--primary" data-job-apply="${job.id}">
                Apply
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  container.innerHTML = html;
}

function getFilteredJobs() {
  const keywordInput = document.querySelector("[data-filter-keyword]");
  const locationSelect = document.querySelector("[data-filter-location]");
  const modeSelect = document.querySelector("[data-filter-mode]");
  const expSelect = document.querySelector("[data-filter-experience]");
  const sourceSelect = document.querySelector("[data-filter-source]");
  const sortSelect = document.querySelector("[data-filter-sort]");

  const keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : "";
  const locationValue = locationSelect ? locationSelect.value.trim().toLowerCase() : "";
  const modeValue = modeSelect ? modeSelect.value : "";
  const expValue = expSelect ? expSelect.value : "";
  const sourceValue = sourceSelect ? sourceSelect.value : "";
  const sortValue = sortSelect ? sortSelect.value : "latest";

  let filtered = jobs.slice();

  filtered = filtered.filter((job) => {
    if (keyword) {
      const inTitle = job.title.toLowerCase().includes(keyword);
      const inCompany = job.company.toLowerCase().includes(keyword);
      if (!inTitle && !inCompany) return false;
    }

    if (locationValue) {
      const locationMatch = job.location.toLowerCase().includes(locationValue);
      if (!locationMatch) return false;
    }

    if (modeValue && job.mode !== modeValue) {
      return false;
    }

    if (expValue && job.experience !== expValue) {
      return false;
    }

    if (sourceValue && job.source !== sourceValue) {
      return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (sortValue === "oldest") {
      return b.postedDaysAgo - a.postedDaysAgo;
    }
    return a.postedDaysAgo - b.postedDaysAgo;
  });

  return filtered;
}

function renderDashboardPage() {
  const listContainer = document.querySelector("[data-job-list]");
  if (!listContainer) return;

  const jobsToShow = getFilteredJobs();
  renderJobCards(listContainer, jobsToShow);
}

function renderSavedPage() {
  const listContainer = document.querySelector("[data-saved-list]");
  if (!listContainer) return;

  const saved = jobs.filter((job) => savedJobIds.has(job.id));

  if (!saved.length) {
    listContainer.innerHTML = `
      <div class="empty-card">
        <h2 class="empty-card__title">Nothing saved yet.</h2>
        <p class="body empty-card__body">
          As you review roles on the dashboard, use the Save action to keep the ones you may want to revisit here.
        </p>
      </div>
    `;
    return;
  }

  renderJobCards(listContainer, saved);
}

function openJobModal(job) {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;

  const titleEl = modal.querySelector("[data-modal-title]");
  const companyEl = modal.querySelector("[data-modal-company]");
  const descriptionEl = modal.querySelector("[data-modal-description]");
  const skillsEl = modal.querySelector("[data-modal-skills]");

  if (!titleEl || !companyEl || !descriptionEl || !skillsEl) return;

  titleEl.textContent = job.title;
  companyEl.textContent = `${job.company} · ${job.location} · ${job.mode}`;

  descriptionEl.textContent = job.description;

  const skillsHtml = job.skills
    .map((skill) => `<span class="tag skill-pill">${skill}</span>`)
    .join("");

  skillsEl.innerHTML = skillsHtml;

  modal.hidden = false;
}

function closeJobModal() {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;
  modal.hidden = true;
}

function attachModalListeners() {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;

  const closeButton = modal.querySelector("[data-modal-close]");
  if (closeButton) {
    closeButton.addEventListener("click", function handleCloseClick() {
      closeJobModal();
    });
  }

  modal.addEventListener("click", function handleBackdropClick(event) {
    if (event.target === modal) {
      closeJobModal();
    }
  });

  window.addEventListener("keydown", function handleKeydown(event) {
    if (event.key === "Escape") {
      closeJobModal();
    }
  });
}

function handleJobListClick(event) {
  const viewButton = event.target.closest("[data-job-view]");
  const saveButton = event.target.closest("[data-job-save]");
  const applyButton = event.target.closest("[data-job-apply]");

  if (viewButton) {
    const id = viewButton.getAttribute("data-job-view");
    if (!id) return;
    const job = getJobById(id);
    if (!job) return;
    openJobModal(job);
    return;
  }

  if (saveButton) {
    const id = saveButton.getAttribute("data-job-save");
    if (!id) return;
    if (!savedJobIds.has(id)) {
      savedJobIds.add(id);
      persistSavedJobIds();
    }
    saveButton.textContent = "Saved";
    saveButton.disabled = true;
    return;
  }

  if (applyButton) {
    const id = applyButton.getAttribute("data-job-apply");
    if (!id) return;
    const job = getJobById(id);
    if (!job) return;
    window.open(job.applyUrl, "_blank", "noopener");
  }
}

function renderRoute(pathname) {
  const route = getRoute(pathname);
  const headingEl = document.querySelector("[data-route-heading]");
  const subtextEl = document.querySelector("[data-route-subtext]");
  const contentEl = document.querySelector("[data-route-content]");

  if (!headingEl || !subtextEl || !contentEl) return;

  if (!route) {
    headingEl.textContent = "Page Not Found";
    subtextEl.textContent = "The page you are looking for does not exist.";
    contentEl.innerHTML = `
      <div class="empty-card">
        <h2 class="empty-card__title">This route is not available.</h2>
        <p class="body empty-card__body">
          Check the navigation options above, or return to the dashboard.
        </p>
      </div>
    `;
    return;
  }

  headingEl.textContent = route.title;
  subtextEl.textContent = route.subtext;
  contentEl.innerHTML = route.body || "";

  if (route.key === "landing") {
    const cta = document.querySelector("[data-cta-settings]");
    if (cta) {
      cta.onclick = function handleLandingClick(event) {
        event.preventDefault();
        navigate("/settings");
      };
    }
  }

  if (route.key === "dashboard") {
    const filterBar = document.querySelector("[data-filter-bar]");
    if (filterBar) {
      filterBar.addEventListener("input", function handleFilterInput() {
        renderDashboardPage();
      });
      filterBar.addEventListener("change", function handleFilterChange() {
        renderDashboardPage();
      });
    }
    const jobList = document.querySelector("[data-job-list]");
    if (jobList) {
      jobList.addEventListener("click", handleJobListClick);
    }
    renderDashboardPage();
  }

  if (route.key === "saved") {
    const savedList = document.querySelector("[data-saved-list]");
    if (savedList) {
      savedList.addEventListener("click", handleJobListClick);
    }
    renderSavedPage();
  }
}

function isLinkActive(pathname, target) {
  return pathname === target;
}

function updateActiveNav(pathname) {
  const links = document.querySelectorAll("[data-nav-link]");

  links.forEach((link) => {
    const target = link.getAttribute("data-route");
    const isActive = isLinkActive(pathname, target);
    link.classList.toggle("nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function closeMobileNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector(".top-bar__menu-toggle");

  if (!nav || !toggle) return;

  nav.classList.remove("nav--open");
  toggle.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector(".top-bar__menu-toggle");

  if (!nav || !toggle) return;

  const isOpen = nav.classList.toggle("nav--open");
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function navigate(pathname) {
  const currentPath = window.location.pathname || "/";

  if (pathname === currentPath) {
    renderRoute(pathname);
    updateActiveNav(pathname);
    closeMobileNav();
    return;
  }

  window.history.pushState({}, "", pathname);
  renderRoute(pathname);
  updateActiveNav(pathname);
  closeMobileNav();
}

function handleLinkClick(event) {
  const link = event.target.closest("[data-nav-link]");

  if (!link) return;

  event.preventDefault();

  const targetPath = link.getAttribute("data-route");
  if (!targetPath) return;

  navigate(targetPath);
}

function handlePopState() {
  const pathname = window.location.pathname || "/";
  renderRoute(pathname);
  updateActiveNav(pathname);
}

function initShell() {
  try {
    savedJobIds = new Set(loadSavedJobIds());
  } catch (error) {
    savedJobIds = new Set();
  }

  const initialPath = window.location.pathname || "/";

  renderRoute(initialPath);
  updateActiveNav(initialPath);

  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.addEventListener("click", handleLinkClick);
  }

  const toggle = document.querySelector(".top-bar__menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", toggleMobileNav);
  }

  attachModalListeners();

  window.addEventListener("popstate", handlePopState);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initShell);
} else {
  initShell();
}

