import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "eBasket",
    desc: "A scalable eCommerce platform built using microservices architecture, supporting product management, orders, payments, and real-time processing for high-performance online shopping.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "Tailwind CSS",
      "PrimeNG",
      "SQL Server",
      "Azure",
      "Docker",
      "MediatR",
      "CQRS",
      "RabbitMQ",
      "gRPC",
      "Ocelot",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Microservices",
    ],
  },
  {
    title: "Licenora",
    desc: "A license management system that automates issuing, tracking, validating, and renewing licenses, ensuring compliance and efficient lifecycle management.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "Tailwind CSS",
      "PrimeNG",
      "SQL Server",
      "Azure",
      "Azure DevOps",
    ],
  },
  {
    title: "Filezeno",
    desc: "A document management system for storing, organizing, tracking, and securely sharing digital documents with version control and access management features.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "React",
      "Bootstrap",
      "SQL Server",
      "Azure",
      "GitHub CI/CD",
    ],
  },
  {
    title: "HRnix",
    desc: "A comprehensive HR management system for handling recruitment, onboarding, payroll, attendance, and performance management with automation and role-based access control.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "Tailwind CSS",
      "SQL Server",
      "Azure",
      "GitHub CI/CD",
    ],
  },
  {
    title: "LifeArcPlan",
    desc: "An enterprise financial planning platform with modules for budgeting, investment planning, retirement forecasting, and analytics dashboards for better financial decision-making.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "Bootstrap",
      "SQL Server",
      "AWS RDS",
      "AWS S3",
      "AWS SNS",
    ],
  },
  {
    title: "Quickscrum",
    desc: "An Agile project management tool that enables teams to manage sprints, track tasks, handle backlogs, and monitor project progress with real-time collaboration features.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "Angular",
      "Bootstrap",
      "SQL Server",
      "Azure",
    ],
  },
  {
    title: "Hospivo",
    desc: "A healthcare management platform for handling patient records, appointments, billing, and administrative workflows with secure and scalable backend architecture.",
    tags: ["ASP.NET Core", "Web API", "React", "Bootstrap", "SQL Server"],
  },
  {
    title: "Learnifyx",
    desc: "A web-based learning management system for managing courses, student enrollments, assessments, and progress tracking with structured content delivery and performance analytics.",
    tags: ["ASP.NET MVC", "jQuery", "Bootstrap", "SQL Server"],
  },
  {
    title: "Central Placement",
    desc: "A centralized recruitment and placement system for managing candidate records, job postings, and application workflows with efficient data processing and streamlined hiring operations.",
    tags: ["ASP.NET MVC", "jQuery", "Bootstrap", "SQL Server"],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="px-6 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Work
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Featured projects showcasing end-to-end development expertise
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Card
              className={`group flex h-full flex-col border-border/60 cursor-pointer transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() =>
                      window.open(
                        new URL(
                          `/src/assets/docs/${p.title}.pdf`,
                          import.meta.url,
                        ).href,
                        "_blank",
                      )
                    }
                  />
                </div>
                <CardDescription className="leading-relaxed">
                  {p.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
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
