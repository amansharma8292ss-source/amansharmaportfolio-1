import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, Check, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import profile from "@/assets/aman-profile.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/portfolio/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Sharma | Data Analyst Portfolio" },
      {
        name: "description",
        content: "Aman Sharma is a Lisbon-based Data Analyst specializing in Power BI, SQL, Excel automation, and business intelligence.",
      },
      { property: "og:title", content: "Aman Sharma | Data Analyst Portfolio" },
      { property: "og:description", content: "Power BI, SQL, and Excel expertise that turns complex data into clear business decisions." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { number: "01", title: "Data Visualization", text: "Advanced Power BI, DAX measures, executive dashboards, and foundational Tableau." },
  { number: "02", title: "Database & SQL", text: "MySQL, SQL Server, query optimization, JOINs, CTEs, and window functions." },
  { number: "03", title: "Excel Mastery", text: "Pivot tables, advanced lookups, VBA macros, Power Query, and Power Pivot." },
  { number: "04", title: "Data Processing", text: "ETL pipelines, data cleaning, statistical analysis, and reliable data governance." },
  { number: "05", title: "Analyst Toolkit", text: "Microsoft Office, Google Workspace, Git, Jupyter Notebook, and Anaconda." },
];

const certifications = [
  { title: "Deloitte Data Analytics Job Simulation", date: "July 2026", text: "Forensic data review, dashboard building, and client-ready business recommendations." },
  { title: "TATA Data Visualization Certification", date: "July 2026", text: "Insight-led visuals, executive chart selection, and data storytelling for leadership." },
  { title: "Coding Ninjas Excel Excellence", date: "June 2026 · Top Performer", text: "Advanced lookups, Power Query transformations, and macro automation." },
];

const projects = [
  { number: "01", title: "Deloitte Data Analytics Simulation", text: "Analyzed complex business datasets and built interactive Power BI dashboards with advanced DAX, resulting in a 15% simulated cost reduction.", tags: ["Power BI", "DAX", "Business Analysis"] },
  { number: "02", title: "TATA Data Visualization Project", text: "Designed executive dashboards and automated reporting workflows that reduced manual report generation time by 40%.", tags: ["Visualization", "Reporting", "Dashboard Design"] },
  { number: "03", title: "MySQL Data Analytics Portfolio", text: "Built 10+ normalized relational tables and optimized complex JOINs, CTEs, and window functions for a 30% performance improvement.", tags: ["MySQL", "Database Design", "Query Optimization"] },
];

const achievements = [
  ["15+", "Power BI dashboards"],
  ["50+", "SQL queries optimized"],
  ["20+", "Hours saved monthly"],
  ["40%", "Faster reporting"],
];

function Kicker({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`mb-5 text-xs font-black uppercase ${inverse ? "text-red" : "text-red"}`}>{children}</p>;
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    window.location.href = `mailto:amansharma8292ss@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setSent(true);
    toast.success("Opening your email app with the message ready to send.");
  }

  return (
    <form onSubmit={onSubmit} className="border-4 border-ink bg-paper p-5 text-ink sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-black uppercase">Name<input name="name" maxLength={100} placeholder="Your name" className="mt-2 w-full border-2 border-ink bg-transparent px-4 py-3 text-sm font-medium outline-none placeholder:text-muted-foreground focus:bg-background" /></label>
        <label className="text-xs font-black uppercase">Email<input name="email" type="email" maxLength={255} placeholder="you@company.com" className="mt-2 w-full border-2 border-ink bg-transparent px-4 py-3 text-sm font-medium outline-none placeholder:text-muted-foreground focus:bg-background" /></label>
      </div>
      <label className="mt-5 block text-xs font-black uppercase">Message<textarea name="message" rows={5} maxLength={1000} placeholder="Tell me about the role or project…" className="mt-2 w-full resize-none border-2 border-ink bg-transparent px-4 py-3 text-sm font-medium outline-none placeholder:text-muted-foreground focus:bg-background" /></label>
      <Button type="submit" className="mt-5 h-13 rounded-none border-2 border-ink bg-ink px-7 font-black uppercase text-paper shadow-none hover:bg-red hover:text-paper">
        Send message <ArrowRight />
      </Button>
      {sent && <p className="mt-4 flex items-center gap-2 text-sm font-semibold"><Check className="h-4 w-4" /> Your email app should now be open.</p>}
    </form>
  );
}

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-paper text-ink">
      <Nav />

      <section className="relative min-h-screen bg-red px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <p className="font-display text-[27vw] font-black uppercase leading-none text-ink/8">Sharma</p>
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-screen-2xl items-end gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="z-10 pb-4 lg:pb-12">
            <p className="mb-5 inline-block bg-ink px-4 py-2 text-xs font-black uppercase text-paper">Portfolio · Data Analyst</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.86] sm:text-8xl lg:text-[7rem]">Aman<br />Sharma</h1>
            <div className="my-7 h-2 w-24 bg-ink" />
            <p className="max-w-lg text-xl font-black uppercase leading-tight">Power BI · SQL · Excel · Business Intelligence</p>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-paper sm:text-lg">Turning raw data into clear business decisions. Based in Lisbon, EU work authorized, and open to freelance projects and full-time roles.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex h-13 items-center gap-2 border-2 border-ink bg-ink px-7 text-sm font-black uppercase text-paper transition-colors hover:bg-transparent hover:text-ink">View work <ArrowDownRight className="h-4 w-4" /></a>
              <a href="#contact" className="inline-flex h-13 items-center border-2 border-ink px-7 text-sm font-black uppercase transition-colors hover:bg-ink hover:text-paper">Get in touch</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:mr-7">
            <div className="aspect-[5/6] overflow-hidden border-[10px] border-ink bg-dark shadow-brutal sm:aspect-[4/5] lg:max-h-[72vh]">
              <img src={profile.url} alt="Aman Sharma, data analyst, wearing a navy suit" className="h-full w-full object-cover object-top grayscale contrast-110 transition duration-700 hover:scale-[1.025] hover:grayscale-0" />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden border-4 border-ink bg-paper p-5 text-ink sm:flex sm:gap-8 lg:-left-7">
              <div><p className="text-3xl font-black">3</p><p className="text-xs font-bold uppercase">Languages</p></div>
              <div><p className="text-3xl font-black">EU</p><p className="text-xs font-bold uppercase">Authorized</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><Kicker>01 · Profile</Kicker><h2 className="font-display text-5xl font-black uppercase leading-none sm:text-6xl">About<br />the analyst</h2></div>
          <div className="lg:col-span-8">
            <p className="max-w-4xl text-2xl font-semibold leading-snug sm:text-4xl">Results-driven Data Analyst translating complex datasets into compelling business narratives.</p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">BCA graduate from Kalinga University with an 8.2/10 GPA. Specialized in interactive Power BI dashboards, optimized SQL queries, and automated Excel workflows. Certified by Deloitte, TATA, and Coding Ninjas.</p>
            <div className="mt-12 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
              {["English C1/C2", "Portuguese B1/B2", "Hindi Native", "Mastering MySQL"].map((item) => <p key={item} className="bg-paper p-5 text-sm font-black uppercase">{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t-[10px] border-red bg-dark px-5 py-24 text-paper sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><Kicker inverse>02 · Expertise</Kicker><h2 className="font-display text-5xl font-black uppercase leading-none sm:text-6xl lg:sticky lg:top-28">Core<br />capabilities</h2></div>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
            {skills.map((skill) => <article key={skill.title} className="group bg-ink p-7 transition-colors duration-300 hover:bg-red sm:p-10"><p className="mb-8 text-4xl font-black text-red group-hover:text-ink">{skill.number}</p><h3 className="font-display text-2xl font-black uppercase">{skill.title}</h3><p className="mt-4 leading-relaxed text-soft group-hover:text-paper">{skill.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-red px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-screen-2xl"><Kicker>03 · Credentials</Kicker><h2 className="max-w-4xl font-display text-5xl font-black uppercase leading-none sm:text-7xl">Certified to turn evidence into action.</h2>
          <div className="mt-16 border-y-4 border-ink">
            {certifications.map((item, index) => <article key={item.title} className="grid gap-4 border-b-2 border-ink py-8 last:border-b-0 md:grid-cols-[5rem_1fr_13rem] md:items-start"><p className="text-xl font-black">0{index + 1}</p><div><h3 className="font-display text-2xl font-black uppercase">{item.title}</h3><p className="mt-2 max-w-2xl font-medium text-paper">{item.text}</p></div><p className="text-sm font-black uppercase md:text-right">{item.date}</p></article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-screen-2xl"><Kicker>04 · Selected work</Kicker><h2 className="font-display text-5xl font-black uppercase leading-none sm:text-7xl">Projects with<br />measurable impact.</h2>
          <div className="mt-16 border-t-4 border-ink">
            {projects.map((project) => <article key={project.title} className="group grid gap-6 border-b-2 border-ink py-10 transition-colors hover:bg-background md:grid-cols-[5rem_1fr_1.4fr]"><p className="text-3xl font-black text-red">{project.number}</p><h3 className="font-display text-3xl font-black uppercase leading-tight">{project.title}</h3><div><p className="leading-relaxed text-muted-foreground">{project.text}</p><div className="mt-5 flex flex-wrap gap-4">{project.tags.map((tag) => <span key={tag} className="border-b-2 border-red pb-1 text-xs font-black uppercase">{tag}</span>)}</div></div></article>)}
          </div>
        </div>
      </section>

      <section id="achievements" className="border-y-[10px] border-ink bg-red px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-screen-2xl gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map(([value, label]) => <div key={label} className="bg-red p-7 sm:p-9"><p className="font-display text-6xl font-black text-ink">{value}</p><p className="mt-2 text-sm font-black uppercase text-paper">{label}</p></div>)}
        </div>
      </section>

      <section id="contact" className="bg-red px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-screen-2xl"><p className="text-center text-xs font-black uppercase">Available across Portugal · Luxembourg · Switzerland</p><h2 className="mx-auto mt-5 max-w-5xl text-center font-display text-5xl font-black uppercase leading-none sm:text-8xl">Start a project.</h2>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="max-w-md text-xl font-semibold">Open to freelance projects and full-time Data Analyst or Business Intelligence roles.</p>
              <ul className="mt-10 space-y-5 text-sm font-bold">
                <li><a className="flex items-center gap-3 hover:text-paper" href="mailto:amansharma8292ss@gmail.com"><Mail className="h-5 w-5" /> amansharma8292ss@gmail.com</a></li>
                <li><a className="flex items-center gap-3 hover:text-paper" href="tel:+351931131294"><Phone className="h-5 w-5" /> +351 931 131 294</a></li>
                <li><a className="flex items-center gap-3 hover:text-paper" href="https://linkedin.com/in/aman-sharma-data" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /> LinkedIn profile</a></li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Lisbon, Portugal</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-paper sm:px-8 lg:px-12"><div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><p className="font-display text-xl font-black uppercase">Aman Sharma</p><p className="text-xs font-bold uppercase text-soft">© {new Date().getFullYear()} · Data Analyst · Lisbon</p><a href="#top" className="text-xs font-black uppercase text-red hover:text-paper">Back to top ↑</a></div></footer>
    </main>
  );
}