import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  BarChart3,
  Database,
  Table2,
  Workflow,
  Wrench,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Award,
  ArrowRight,
  Download,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import profile from "@/assets/aman-profile.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { Nav } from "@/components/portfolio/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Sharma — Data Analyst & Power BI Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Aman Sharma, Data Analyst in Lisbon specializing in Power BI dashboards, SQL query optimization and Excel automation. EU work authorized.",
      },
      { property: "og:title", content: "Aman Sharma — Data Analyst & Power BI Specialist" },
      {
        property: "og:description",
        content:
          "Power BI, SQL and Excel expertise turning raw data into actionable business insights. Based in Lisbon, Portugal.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    items: ["Power BI (Advanced)", "Tableau (Basic)", "DAX Measures", "Executive Dashboards"],
  },
  {
    icon: Database,
    title: "Database & SQL",
    items: ["MySQL (Advanced)", "SQL Server", "Query Optimization", "JOINs, CTEs, Window Functions"],
  },
  {
    icon: Table2,
    title: "Excel Mastery",
    items: ["Pivot Tables", "VLOOKUP & INDEX-MATCH", "Macros / VBA", "Power Query & Power Pivot"],
  },
  {
    icon: Workflow,
    title: "Data Processing",
    items: ["ETL Pipelines", "Data Cleaning", "Statistical Analysis", "Data Governance"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Microsoft Office Suite", "Google Workspace", "Git", "Jupyter Notebook & Anaconda"],
  },
];

const certifications = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    date: "July 2026",
    description:
      "Hands-on business analytics: forensic data review, dashboard building and translating findings into client-ready recommendations.",
  },
  {
    title: "TATA Data Visualization Certification",
    date: "July 2026",
    description:
      "Designing insight-led visuals for executive audiences, choosing the right chart for the question and framing data stories for leadership.",
  },
  {
    title: "Coding Ninjas Excel Excellence — Top Performer",
    date: "June 2026",
    description:
      "Advanced Excel workflows: nested lookups, Power Query transformations and macro automation, finishing as a top-performing participant.",
  },
];

const projects = [
  {
    title: "Deloitte Data Analytics Simulation",
    description:
      "Analyzed complex business datasets, developed interactive Power BI dashboards with advanced DAX, delivered strategic recommendations resulting in 15% simulated cost reduction.",
    tags: ["Power BI", "DAX", "Business Analysis"],
  },
  {
    title: "TATA Data Visualization Project",
    description:
      "Designed executive-level dashboards and created automated reporting solutions reducing manual generation time by 40%.",
    tags: ["Visualization", "Reporting", "Dashboard Design"],
  },
  {
    title: "MySQL Data Analytics Portfolio",
    description:
      "Built a comprehensive relational database with 10+ normalized tables, wrote complex SQL queries (JOINs, CTEs, Window Functions) and optimized query performance by 30%.",
    tags: ["MySQL", "Database Design", "Query Optimization"],
  },
];

const achievements = [
  { value: "15+", label: "Interactive Power BI dashboards built" },
  { value: "50+", label: "SQL queries optimized" },
  { value: "20+", label: "Hours saved monthly via Excel macros" },
  { value: "40%", label: "Reduction in report generation time" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:amansharma8292ss@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email app with the message ready to send.");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input
            name="name"
            maxLength={100}
            className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email
          <input
            name="email"
            type="email"
            maxLength={255}
            className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          rows={5}
          maxLength={1000}
          className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          placeholder="Tell me about the role or project…"
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send message <ArrowRight className="h-4 w-4" />
      </button>
      {sent && (
        <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-accent" /> Your email app should now be open.
        </p>
      )}
    </form>
  );
}

function Index() {
  return (
    <div id="top" className="bg-background">
      <Nav />

      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/85">
              Based in Lisbon, Portugal · EU Work Authorized
            </p>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              Data Analyst · Business Intelligence Specialist · SQL &amp; Power BI Expert
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Transforming raw data into actionable business insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resume.url}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-2xl">
              <img
                src={profile.url}
                alt="Aman Sharma, data analyst, in a navy blazer"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-2xl bg-surface">
            <img
              src={profile.url}
              alt="Portrait of Aman Sharma"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <SectionTitle eyebrow="Introduction" title="About Me" />
            <p className="-mt-6 text-lg leading-relaxed text-muted-foreground">
              Results-driven Data Analyst with an 8.2/10 GPA (BCA, Kalinga University 2023).
              Specialized expertise in building interactive Power BI dashboards, writing optimized
              SQL queries, and automating Excel workflows. Certified by Deloitte, TATA, and Coding
              Ninjas. Multilingual professional (English C1/C2, Portuguese B1/B2, Hindi Native)
              passionate about transforming complex datasets into compelling business narratives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["English C1/C2", "Portuguese B1/B2", "Hindi Native", "Currently mastering MySQL"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Capabilities" title="Technical Expertise" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="card-elevated rounded-2xl bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Credentials" title="Professional Certifications" />
          <div className="grid gap-6 lg:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="card-elevated rounded-2xl border border-border bg-card p-7"
              >
                <Award className="h-7 w-7 text-accent" />
                <h3 className="mt-5 text-lg font-semibold text-primary">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{c.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Selected work" title="Portfolio Projects" />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="card-elevated rounded-2xl bg-card p-7">
                <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="hero-gradient py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Impact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              What I&apos;ve Accomplished
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
              >
                <p className="text-4xl font-bold text-primary-foreground">{a.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/80">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <SectionTitle eyebrow="Get in touch" title="Let's Work Together" />
            <p className="-mt-6 text-muted-foreground">
              Open to Data Analyst and BI roles across Portugal, Luxembourg and Switzerland.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:amansharma8292ss@gmail.com" className="break-all hover:text-accent">
                  amansharma8292ss@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+351931131294" className="hover:text-accent">
                  +351 931 131 294
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="https://linkedin.com/in/aman-sharma-data"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all hover:text-accent"
                >
                  linkedin.com/in/aman-sharma-data
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                Lisbon, Portugal
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Aman Sharma</p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Open to opportunities in Portugal, Luxembourg, and Switzerland.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Quick links
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
              {["about", "skills", "certifications", "projects", "contact"].map((id) => (
                <a key={id} href={`#${id}`} className="capitalize hover:text-primary-foreground">
                  {id}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <a href="mailto:amansharma8292ss@gmail.com" aria-label="Email Aman">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/aman-sharma-data"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="tel:+351931131294" aria-label="Call Aman">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Aman Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
