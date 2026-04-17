import { SpotlightCursor } from "./components/SpotlightCursor";
import { Nav } from "./components/Nav";
import { SocialLinks } from "./components/SocialLinks";
import { Section } from "./components/Section";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";

const experience = [
  {
    period: "2024 — Present",
    title: "COO & AI Augmented Engineer",
    company: "Martial Arts Agency",
    companyUrl: "https://www.martialartsads.ai/",
    description:
      "Running operations and building software for an ad platform that serves 633+ martial arts studios across $30M+ in ad spend. Co-built Martial Arts Ads AI — it beat our own agency team's performance across 70 accounts. Automated the full agency workflow and shipped a SaaS product from scratch.",
    tags: ["React", "Next.js", "AI/ML", "Facebook Ads API", "SaaS", "Operations"],
  },
  {
    period: "2026 — Present",
    title: "Software Developer",
    company: "Daru Performance Division",
    companyUrl: "https://daru-demo.vercel.app",
    description:
      "Building the full-stack platform for a performance coaching division partnered with Marek Health. React + TypeScript frontend, Supabase backend, readiness scoring, red flag escalation, and a client management system across three service tiers.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
  {
    period: "2022 — 2024",
    title: "Senior Program Manager",
    company: "GMA, Inc.",
    description:
      "Ran technology infrastructure projects from planning through delivery. Worked directly with clients, vendors, and C-level executives to keep initiatives on schedule and on budget. Left to build at Martial Arts Agency.",
    tags: ["Program Management", "Strategic Planning", "Stakeholder Management", "Agile"],
  },
  {
    period: "2016 — 2018",
    title: "Jr. Software Developer / Project Manager",
    company: "Aurotech, Inc.",
    description:
      "Built software and ran QA for confidential Department of Justice and USDA projects on SharePoint. Started as a junior developer, picked up project management along the way — wrote test scripts, led audits, and kept the team moving through classified deployments.",
    tags: ["SharePoint", "SDLC", "QA", "Confidential", "DOJ", "USDA"],
  },
  {
    period: "2015 — 2016",
    title: "Associate Director / Program Manager",
    company: "Regeneration (Non-Profit)",
    description:
      "Took over a program with 2 active members and grew it to 10+ with multiple initiatives running. 200% growth in under a year. Built structure where there wasn't any and got the team producing consistently.",
    tags: ["Leadership", "Program Management", "Team Building", "Non-Profit"],
  },
  {
    period: "2013 — 2022",
    title: "Strategist / Program Management Lead",
    company: "Adventist Organization (Non-Profit)",
    description:
      "Wrote strategic plans, restructured teams, and managed operations across the organization. Worked with leadership to figure out what wasn't working and fix it. Plans touched 5+ staff and 500+ users. Got attendance to 100% by actually building systems people could follow.",
    tags: ["Strategic Planning", "Stakeholder Analysis", "Operations", "Marketing"],
  },
  {
    period: "2013 — 2016",
    title: "Associate Program Director",
    company: "HopeTV",
    description:
      "Ran coaching sessions, seminars, and programming for audiences from one-on-one all the way to broadcasts reaching 1M+ viewers.",
    tags: ["Broadcasting", "Coaching", "Program Direction"],
  },
];

const projects = [
  {
    title: "Martial Arts Ads AI",
    description:
      "Co-built an AI ad platform that runs Facebook campaigns for 633+ martial arts studios across $30M+ in spend. Beat our own agency team across 70 accounts — cut lead costs 30-64% and tripled volume. Next.js, AI/ML pipelines, $199/mo SaaS.",
    tags: ["Next.js", "AI/ML", "Facebook Ads API", "SaaS", "$30M+ Managed"],
    url: "https://www.martialartsads.ai/",
    featured: true,
  },
  {
    title: "Daru Performance Platform",
    description:
      "Full-stack app for a performance coaching business. Readiness dashboards, daily check-ins, coach command center, programming engine, and automated red flag escalation. Serves 325+ athletes across three tiers.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    url: "https://daru-demo.vercel.app",
    featured: true,
  },
  {
    title: "CODEX 90 Operating System",
    description:
      "Designed the full operational framework for a 90-day coaching cycle — SOPs, automation logic, KPI dashboards, escalation protocols, and a coach certification program. Turned a founder's methodology into systems a team can run without him.",
    tags: ["Systems Design", "SOPs", "Automation", "Operations"],
    featured: false,
  },
  {
    title: "Federal Enterprise Solutions (Confidential)",
    description:
      "Built and tested software for classified DOJ and USDA projects on SharePoint. Wrote test scripts, ran QA, and handled enterprise workflows under federal compliance requirements.",
    tags: ["SharePoint", "Federal", "Confidential", "QA", "Enterprise"],
    featured: false,
  },
];

const certifications = [
  "Certified Scrum Master (CSM)",
  "Google Cybersecurity Professional",
  "CIW — Certified Internet Web Professional",
  "ITIL V3 — Customer Service Management",
  "Certified Gracie Jiu-Jitsu Instructor",
  "Augment MBA — In Progress",
];

const skills = [
  "React", "TypeScript", "JavaScript", "Next.js", "Python", "PHP", "SQL",
  "HTML/CSS", "Tailwind CSS", "Node.js", "Linux", "Bash",
  "Supabase", "SharePoint", "AI/ML", "Facebook Ads API",
  "GoHighLevel", "Git", "Vercel", "Agile/Scrum",
];

export default function App() {
  return (
    <>
      <SpotlightCursor />

      <div className="relative min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* ── Left Column: Fixed header ── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl animate-fade-up">
                Tyler Trahan
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-text-secondary sm:text-xl animate-fade-up delay-100">
                Software Developer & Program Leader
              </h2>
              <p className="mt-4 max-w-xs text-text-muted leading-relaxed animate-fade-up delay-200">
                I build software that runs real businesses and the systems behind them.
              </p>
              <Nav />
            </div>
            <SocialLinks />
          </header>

          {/* ── Right Column: Scrollable content ── */}
          <main className="pt-24 lg:w-[52%] lg:py-24">
            {/* About */}
            <Section id="about" title="About">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I've been building software and running programs for over a
                  decade — federal agencies, non-profits, startups. Most recently
                  I co-built{" "}
                  <a
                    href="https://www.martialartsads.ai/"
                    className="text-text-primary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Martial Arts Ads AI
                  </a>
                  , an ad platform serving 633+ martial arts studios with $30M+
                  in managed spend. It beat our own agency team across 70 accounts.
                  Before that I worked on classified projects for the{" "}
                  <span className="text-text-primary">Department of Justice</span>{" "}
                  and{" "}
                  <span className="text-text-primary">USDA</span>.
                </p>
                <p>
                  I come from program management and picked up development along
                  the way — or maybe it was the other way around. Either way, I
                  write code, I ship products, and I know how to talk to
                  executives without losing the engineers in the room. Certified{" "}
                  <span className="text-text-primary">Scrum Master</span>,{" "}
                  <span className="text-text-primary">Google Cybersecurity Professional</span>,
                  and currently going through the{" "}
                  <a
                    href="https://augment.org/augment-mba-program"
                    className="text-text-primary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Augment MBA
                  </a>.
                </p>
                <p>
                  Right now I'm also building the platform for{" "}
                  <a
                    href="https://daru-demo.vercel.app"
                    className="text-text-primary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daru Performance Division
                  </a>{" "}
                  — a React + TypeScript app with Supabase on the backend,
                  partnered with Marek Health. Readiness scoring, coach dashboards,
                  automated escalation, the whole stack. It serves 325+ athletes
                  across three tiers.
                </p>
                <p>
                  Outside of work, I'm a{" "}
                  <a
                    href="https://www.gracieuniversity.com"
                    className="text-text-primary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certified Gracie Jiu-Jitsu Instructor
                  </a>.
                </p>
              </div>
            </Section>

            {/* Experience */}
            <Section id="experience" title="Experience">
              <div className="space-y-2">
                {experience.map((exp) => (
                  <ExperienceCard key={exp.title + exp.company} {...exp} />
                ))}
              </div>

              {/* Education */}
              <div className="mt-12 mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Bachelor of Arts
                      </p>
                      <p className="text-sm text-text-secondary">
                        Washington Adventist University, MD
                      </p>
                    </div>
                    <span className="text-xs text-text-muted">2014</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Associate of Applied Science
                      </p>
                      <p className="text-sm text-text-secondary">
                        Indian River State College, FL
                      </p>
                    </div>
                    <span className="text-xs text-text-muted">2010</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium text-text-primary bg-bg-card border border-border px-3 py-1.5 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-accent bg-accent-muted px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/resume.pdf"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-accent transition-colors"
              >
                View Full Resume
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects">
              <div className="space-y-2">
                {projects.map((proj) => (
                  <ProjectCard key={proj.title} {...proj} />
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="pb-16 text-sm text-text-muted leading-relaxed">
              <p>
                Coded in{" "}
                <a href="https://code.visualstudio.com/" className="hover:text-text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Visual Studio Code
                </a>
                . Built with{" "}
                <a href="https://react.dev/" className="hover:text-text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  React
                </a>{" "}
                and{" "}
                <a href="https://tailwindcss.com/" className="hover:text-text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a href="https://vercel.com/" className="hover:text-text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Vercel
                </a>
                . All text set in the{" "}
                <a href="https://rsms.me/inter/" className="hover:text-text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Inter
                </a>{" "}
                typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
