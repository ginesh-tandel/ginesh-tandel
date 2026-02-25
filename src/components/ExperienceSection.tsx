import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    period: "Jul 2020 – Present",
    title: "Freelance Senior .NET Core Developer",
    company: "Remote",
    bullets: [
      "Architected scalable cloud-native distributed applications using ASP.NET Core, Azure, Docker, and microservices",
      "Delivered enterprise-grade solutions for global clients in Agile remote teams",
      "Automated CI/CD pipelines and optimized performance to accelerate release cycles",
    ],
  },
  {
    period: "Apr 2019 – Jun 2020",
    title: "Senior Software Engineer",
    company: "Spaculus Software",
    bullets: [
      "Led development of a cloud-based financial platform supporting 500+ users",
      "Optimized Azure SQL and backend performance reducing response time by 25%",
      "Delivered scalable, production-ready enterprise features",
    ],
  },
  {
    period: "Nov 2018 – Feb 2019",
    title: "Senior Software Engineer",
    company: "Rigel Networks",
    bullets: [
      "Enhanced scalable backend services for enterprise applications",
      "Built real-time Angular dashboards improving reporting efficiency by 40%",
      "Reduced production downtime by 20% through system optimizations",
    ],
  },
  {
    period: "Feb 2017 – Sept 2018",
    title: "Software Engineer",
    company: "Bharti Soft Tech Pvt. Ltd.",
    bullets: [
      "Delivered Azure-hosted enterprise applications for multiple clients",
      "Improved Agile delivery workflows increasing feature release speed by 25%",
      "Collaborated with cross-functional teams to ship scalable solutions",
    ],
  },
  {
    period: "Dec 2015 – Feb 2017",
    title: ".NET Developer",
    company: "Itact Solutions",
    bullets: [
      "Developed secure hospital management systems for 200+ daily users",
      "Implemented role-based authentication and scalable backend architecture",
      "Built REST APIs supporting high-availability systems",
    ],
  },
  {
    period: "Jan 2015 – Oct 2015",
    title: ".NET Developer",
    company: "Brelicon Technologies",
    bullets: [
      "Built a centralized placement platform managing 1,000+ records",
      "Optimized backend data processing improving efficiency by 30%",
      "Maintained scalable and reliable application architecture",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="px-6 py-28 bg-card">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Career
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A journey of continuous growth and impactful contributions
        </p>

        <div className="relative mt-14 ml-4">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                <div className="rounded-xl border border-border/60 p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-1 flex items-center gap-2 text-sm font-medium text-primary">
                    <Briefcase className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground">
                        • {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
