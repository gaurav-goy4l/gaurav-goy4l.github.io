import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const experience = [
  {
    title: "SDET Team Lead / DevOps Engineer (SDET-3)",
    company: "Safe Security",
    location: "New Delhi, India",
    period: "Sep 2025 — Present",
    current: true,
    highlights: [
      "Leading and mentoring a team of 4 SDETs, overseeing end-to-end quality strategy and multiple high-priority deliverables.",
      "Architecting a specialized testing framework to validate the correctness and reliability of AI Agents, tackling non-deterministic output challenges.",
      "Developing an AI-driven automation engine to programmatically generate test scripts, reducing manual authoring time.",
      "Built and deployed an internal productivity tracking framework to provide data-driven insights into organizational engineering velocity.",
      "Managing complex CI/CD environments across Jenkins and GitHub Actions, supporting specialized builds and organizational side quests.",
      "Maintaining and scaling multi-stack automation frameworks (Playwright/Cypress/API) to ensure seamless delivery across the product suite.",
    ],
  },
  {
    title: "Software Development Engineer in Test - 2 / DevOps Engineer",
    company: "Safe Security",
    period: "Aug 2023 — Sep 2025",
    current: false,
    highlights: [
      "Migrated the majority of the organization's infrastructure from AWS CDK to OpenTofu and transitioned CI from Jenkins to GitHub Actions.",
      "Moved 15+ services from monolithic cluster deployments to independent micro-service deployments.",
      "Reduced major CI build times from 8 hours down to 3 hours and cut backend deployment cycles from 1 hour to 15 minutes.",
      "Granted full Jenkins admin access, managing end-to-end updates, security patches, and server maintenance.",
      "Setup Test Automation Frameworks for E2E Tests (Cypress) and API Testing in Go (testify) and TypeScript (Jest).",
      "Established quality processes and practices across the organization and shared improvements via internal webinars.",
    ],
  },
  {
    title: "Software Development Engineer in Test - 1",
    company: "Safe Security",
    period: "Oct 2021 — Aug 2023",
    current: false,
    highlights: [
      "Focused on writing stable product automations and performing performance testing across the platform.",
      "Spearheaded the setup of a mobile automation testing framework using BrowserStack.",
      "Built an integration testing framework from scratch, including WireMock server setups and service mocks.",
      "Significantly reduced test suite flakiness, achieving a high level of reliability for CI builds.",
    ],
  },
  {
    title: "SDET Intern",
    company: "Safe Security",
    period: "Mar 2021 — Oct 2021",
    current: false,
    highlights: [
      "Started as a product automation engineer, writing initial test scripts and building foundational test coverage.",
      "Began working extensively within Jenkins to manage and monitor automation builds.",
      "Promoted to a permanent role after 7 months due to high performance and technical contributions.",
    ],
  },
];

const skills = [
  {
    name: "Test Automation",
    level: "Expert",
    percent: 95,
    tags: ["Playwright", "Cypress", "Jest", "TestCafe"],
  },
  {
    name: "DevOps & CI/CD",
    level: "Advanced",
    percent: 90,
    tags: ["Kubernetes", "Jenkins", "GitHub Actions", "Docker", "OpenTofu"],
  },
  {
    name: "API Testing",
    level: "Expert",
    percent: 92,
    tags: ["REST", "Go/Testify", "WireMock", "TypeScript"],
  },
  {
    name: "Infrastructure",
    level: "Advanced",
    percent: 82,
    tags: ["AWS CDK", "Microservices", "BrowserStack"],
  },
];

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <span className="text-tertiary font-label text-sm tracking-[0.2em] uppercase block mb-4">
            Professional Dossier
          </span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-headline font-black leading-none tracking-[-0.04em] uppercase text-foreground">
            Curating <br />
            <span className="text-primary text-glow">Experiences.</span>
          </h1>
        </div>
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
          <p className="text-muted text-lg leading-relaxed lg:text-right max-w-md">
            An SDET specializing in DevOps, focused on building robust test
            infrastructure and reliable delivery pipelines.
          </p>
          <a
            href="/resume/gaurav-goyal-resume.pdf"
            download
            className="group flex items-center gap-3 bg-surface-container-high hover:bg-primary-container text-foreground px-8 py-4 rounded-md transition-all duration-300"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              download
            </span>
            <span className="font-label font-bold tracking-widest uppercase text-sm group-hover:text-on-primary-container">
              Download PDF
            </span>
          </a>
        </div>
      </header>

      {/* Career Timeline Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground sticky top-32">
                Career <br />
                Evolution
              </h2>
              <div className="mt-8 p-8 bg-surface-container rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    work
                  </span>
                  <span className="text-primary font-label text-xs uppercase tracking-widest font-bold">
                    Safe Security
                  </span>
                </div>
                <p className="text-muted text-sm italic">
                  5+ years of growth from intern to team lead — shipping quality
                  at every level.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-20 relative">
              <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-surface-container-highest" />

              {experience.map((role) => (
                <div key={role.period} className="relative pl-12 group">
                  <div
                    className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full ring-4 ring-background transition-all ${
                      role.current
                        ? "bg-primary ring-primary-container/30"
                        : "bg-surface-container-highest group-hover:bg-primary"
                    }`}
                  />
                  <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-headline font-bold text-foreground uppercase">
                        {role.title}
                      </h3>
                      <p className="text-primary font-label text-sm font-bold tracking-widest uppercase mt-1">
                        {role.company}
                        {role.location ? `, ${role.location}` : ""}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mt-4 md:mt-0 ${
                        role.current
                          ? "bg-primary-container/20 text-primary"
                          : "bg-surface-container-high text-muted"
                      }`}
                    >
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {role.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tight text-foreground mb-8">
              Technical <br />
              Arsenal
            </h2>
            <p className="text-muted leading-relaxed">
              A synthesis of testing intuition and engineering precision. These
              tools form the foundation of every quality initiative I lead.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-headline font-bold uppercase text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary font-label text-xs tracking-widest uppercase">
                    {skill.level} / {skill.percent}%
                  </span>
                </div>
                <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary-container to-primary"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-widest text-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Embed */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight">
            Full Resume
          </h2>
          <div className="h-px grow mx-8 bg-surface-container-highest" />
          <a
            href="/resume/gaurav-goyal-resume.pdf"
            download
            className="text-tertiary font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
          >
            Download PDF
          </a>
        </div>
        <div className="bg-surface-container-low rounded-xl p-2 overflow-hidden">
          <iframe
            src="/resume/gaurav-goyal-resume.pdf"
            title="Gaurav Goyal Resume"
            className="w-full min-h-[80vh] rounded-lg"
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          If the PDF doesn&apos;t load, you can{" "}
          <a
            href="/resume/gaurav-goyal-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-2"
          >
            open it in a new tab
          </a>
          .
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-24">
        <div className="relative bg-surface-container-low rounded-xl p-16 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-linear-to-br from-primary-container/10 via-transparent to-transparent" />
          <h2 className="relative text-3xl md:text-5xl font-headline font-black uppercase mb-6 text-foreground leading-tight">
            Ready to build something <br />
            <span className="text-primary">monumental?</span>
          </h2>
          <p className="relative text-muted max-w-xl mb-12">
            I am currently open to high-impact collaborations and leadership
            roles in innovative digital spaces.
          </p>
          <div className="relative flex flex-col md:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/gaurav-goyal-4a850a173/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container px-12 py-5 rounded-md font-label font-bold tracking-widest uppercase text-sm transition-transform active:scale-95"
            >
              Start a Conversation
            </a>
            <a
              href="/resume/gaurav-goyal-resume.pdf"
              download
              className="bg-transparent border border-outline-variant text-foreground px-12 py-5 rounded-md font-label font-bold tracking-widest uppercase text-sm hover:bg-surface-container-high transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
