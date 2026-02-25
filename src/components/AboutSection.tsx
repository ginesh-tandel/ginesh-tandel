import { Lightbulb, Layers, Code2, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Analytical thinker who breaks complex problems into elegant solutions",
  },
  {
    icon: Layers,
    title: "Architecture Design",
    desc: "Expert in clean architecture, microservices, and scalable system design",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Advocate for maintainable, testable, and well-documented code",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Experienced with Azure, Docker, CI/CD pipelines, and DevOps",
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="px-6 py-28 bg-card">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Me
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Who I Am
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I’m a Senior Full Stack Engineer who helps businesses build scalable,
          high-quality software that solves real-world problems. With over 10
          years of experience in .NET and modern web technologies, I focus on
          clean architecture, performance, and maintainable code. I enjoy
          working with international teams, understanding client needs, and
          delivering solutions that are both technically strong and
          user-friendly.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Card
              key={s.title}
              className={`group border-border/60 transition-all duration-700 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <CardContent className="flex flex-col items-start p-6">
                <div className="mb-4 rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
