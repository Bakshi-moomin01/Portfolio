import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Cpu,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ActionLink, Card, Chip, SectionHeading } from "@/components/ui-kit";
import {
  ABOUT_PARAGRAPHS,
  ADDITIONAL_ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  NAV_ITEMS,
  PORTFOLIO_CONFIG as C,
  PROJECTS,
  SKILLS,
  TRAINING,
} from "@/config/portfolio";

const TITLE = "M.Moomin Bakshi | Cybersecurity Student & Developer";
const DESCRIPTION =
  "Portfolio of M.Moomin Bakshi, a B.Tech CSE Cybersecurity student at Lovely Professional University, showcasing cybersecurity interests, technical skills, projects, and achievements.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: C.name,
          jobTitle: C.title,
          email: `mailto:${C.email}`,
          sameAs: [C.github, C.linkedin],
          alumniOf: EDUCATION.institution,
        }),
      },
    ],
  }),
});

function Portfolio() {
  return (
    <div className="min-h-dvh">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface px-3.5 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {C.badge}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {C.name}
              </h1>
              <p className="mt-3 text-sm font-medium text-primary sm:text-base">{C.title}</p>
              <p className="mt-6 max-w-xl text-2xl leading-snug font-medium text-foreground sm:text-3xl">
                <span className="text-gradient">{C.headline}</span>
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {C.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="#projects" variant="primary">
                  View Projects
                </ActionLink>
                <ActionLink href="#contact">Contact Me</ActionLink>
                <ActionLink href={C.resume} external>
                  <FileText className="size-4" aria-hidden="true" />
                  Resume
                </ActionLink>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={C.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={C.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="justify-self-center lg:justify-self-end">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-3xl opacity-40 blur-2xl"
                  style={{ background: "var(--gradient-accent)" }}
                />
                <img
                  src={C.profileImage}
                  alt={C.name}
                  width={320}
                  height={320}
                  className="relative w-56 rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)] sm:w-72"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <SectionHeading eyebrow="About" title="Security-focused engineering, built hands-on." />
          <div className="grid gap-6 lg:grid-cols-3">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Card className="h-full text-sm leading-relaxed text-muted-foreground">{p}</Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <SectionHeading eyebrow="Education" title="University education" />
          <Reveal>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-surface text-primary">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{EDUCATION.institution}</h3>
                    <p className="text-sm text-muted-foreground">{EDUCATION.location}</p>
                    <p className="mt-3 max-w-2xl text-sm text-foreground">{EDUCATION.degree}</p>
                  </div>
                </div>
                <p className="text-xs font-medium tracking-wide text-primary">{EDUCATION.period}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>Current Semester: {EDUCATION.semester}</Chip>
                <Chip>CGPA: {EDUCATION.cgpa}</Chip>
              </div>
            </Card>
          </Reveal>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <SectionHeading eyebrow="Skills" title="Technical skills" />
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.05}>
                <Card className="h-full">
                  <h3 className="flex items-center gap-2 text-base font-semibold">
                    <Cpu className="size-4 text-primary" aria-hidden="true" />
                    {group.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Chip>{item}</Chip>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="space-y-8">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.05}>
                <article
                  className={`glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                    project.status === "featured"
                      ? "border-primary/35 shadow-[var(--shadow-glow)]"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "featured"
                          ? "bg-primary text-primary-foreground"
                          : "border border-accent/50 text-foreground"
                      }`}
                    >
                      {project.status === "featured" ? (
                        <Shield className="size-3.5" aria-hidden="true" />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full bg-accent"
                        />
                      )}
                      {project.statusLabel}
                    </span>
                    <p className="text-xs font-medium text-muted-foreground">{project.period}</p>
                  </div>

                  <h3
                    className={`mt-5 font-semibold tracking-tight ${
                      project.status === "featured" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section id="achievements">
          <SectionHeading eyebrow="Achievements" title="Training, achievements & certifications" />

          <div className="space-y-6">
            {TRAINING.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-surface text-primary">
                        <BookOpen className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-primary">{item.period}</p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-14 mb-6 flex items-center gap-2 text-xl font-semibold">
            <Trophy className="size-5 text-primary" aria-hidden="true" />
            Additional Achievements
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {ADDITIONAL_ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <Card className="h-full">
                  <Users className="size-5 text-primary" aria-hidden="true" />
                  <h4 className="mt-4 text-base font-semibold">{a.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-14 mb-6 flex items-center gap-2 text-xl font-semibold">
            <Award className="size-5 text-primary" aria-hidden="true" />
            Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 0.05}>
                <Card className="h-full">
                  <h4 className="text-base font-semibold">{cert.name}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-4 text-xs font-medium text-primary">{cert.date}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT + LINKS */}
        <Section id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Open to cybersecurity internships, software development opportunities, and technical collaboration."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-lg font-semibold">Professional Links</h3>
                <ul className="mt-5 space-y-3">
                  <li>
                    <LinkRow icon={<Mail className="size-4" />} label="Email" value={C.email}>
                      <a href={`mailto:${C.email}`} className="hover:text-primary">
                        {C.email}
                      </a>
                    </LinkRow>
                  </li>
                  <li>
                    <LinkRow icon={<Github className="size-4" />} label="GitHub" value={C.github}>
                      <a
                        href={C.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        GitHub
                      </a>
                    </LinkRow>
                  </li>
                  <li>
                    <LinkRow
                      icon={<Linkedin className="size-4" />}
                      label="LinkedIn"
                      value={C.linkedin}
                    >
                      <a
                        href={C.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        LinkedIn
                      </a>
                    </LinkRow>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionLink href={`mailto:${C.email}`} variant="primary">
                    <Mail className="size-4" aria-hidden="true" />
                    Email Me
                  </ActionLink>
                  <ActionLink href={C.resume} external>
                    <FileText className="size-4" aria-hidden="true" />
                    Resume
                  </ActionLink>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold">Send a message</h3>
                <p className="mt-1.5 mb-5 text-xs text-muted-foreground">
                  This form validates input in the browser. An email service is not connected yet.
                </p>
                <ContactForm />
              </Card>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">{C.name}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{C.title}</p>
          </div>
          <nav aria-label="Quick links">
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={C.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold">Professional Links</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={C.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Github className="size-4" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={C.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${C.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 {C.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-24">
      {children}
    </section>
  );
}

function LinkRow({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-start gap-3 text-sm">
      <span className="mt-0.5 text-primary" aria-hidden="true">
        {icon}
      </span>
      <span>
        <span className="block text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
        <span className="text-foreground">{children}</span>
        <span className="mt-0.5 block text-xs break-all text-muted-foreground">{value}</span>
      </span>
    </span>
  );
}
