import { Monitor, Server, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    icon: Monitor,
    title: "Languages & Frameworks",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI Development",
    ],
  },
  {
    icon: Server,
    title: "Backend & Architecture",
    skills: [
      "RESTful APIs",
      "Microservices",
      "Clean Architecture",
      "OOP",
      "SOLID Principles",
      "Design Patterns",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "SQL Server",
      "Entity Framework Core",
      "Database Design",
      "Performance Tuning",
    ],
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Docker",
      "CI/CD Pipelines",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    icon: Database,
    title: "Practices & Methodologies",
    skills: [
      "Agile/Scrum",
      "Testable Code",
      "Code Reviews",
      "Performance Optimization",
    ],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative px-6 py-28 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/[0.05] blur-3xl" />
      </div>
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technologies and tools I work with on a daily basis
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <Card
              key={cat.title}
              className={`border-border/60 transition-all duration-700 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <CardHeader>
                <div className="mb-2 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <cat.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
