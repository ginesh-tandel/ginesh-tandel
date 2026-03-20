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
    title: "LifeArcPlan",
    desc: "An advanced financial planning platform offering intelligent modules for budgeting, investment strategy, retirement forecasting, and financial analytics, enabling data-driven decision-making for individuals and financial advisors.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "React",
      "Bootstrap",
      "SQL Server",
      "AWS RDS",
      "AWS S3",
      "AWS SNS",
    ],
  },
  {
    title: "OnyxHR",
    desc: "A scalable HR management system that automates recruitment, onboarding, payroll, attendance, and performance tracking, enhanced with role-based access control and analytics to support modern workforce management.",
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
    title: "QuickScrum",
    desc: "An Agile project management solution built for modern teams to manage sprints, backlogs, and tasks efficiently, featuring real-time collaboration, progress tracking, and performance insights for streamlined software delivery.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "React",
      "Bootstrap",
      "SQL Server",
      "Azure",
    ],
  },
  {
    title: "eBasket",
    desc: "A high-performance, cloud-native eCommerce platform built on microservices architecture, enabling scalable product catalog management, order processing, secure payments, and real-time event-driven workflows for enterprise-grade online retail systems.",
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
    desc: "An enterprise license management system designed to automate license issuance, validation, renewals, and compliance tracking, providing a centralized and secure lifecycle management solution for regulatory and business needs.",
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
    title: "Propixy",
    desc: "A comprehensive property management platform that streamlines tenant lifecycle, lease tracking, rent collection, maintenance workflows, and reporting, delivering operational efficiency for real estate businesses and property managers.",
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
    title: "Hospivo",
    desc: "A secure and scalable healthcare management system that digitizes patient records, appointment scheduling, billing, and administrative operations, ensuring efficient hospital workflows and improved patient care management.",
    tags: ["ASP.NET Core", "Web API", "React", "Bootstrap", "SQL Server"],
  },
  {
    title: "Learnifyx",
    desc: "A structured learning management system that facilitates course creation, student enrollment, assessments, and progress tracking, delivering an organized and scalable digital education experience.",
    tags: ["ASP.NET MVC", "jQuery", "Bootstrap", "SQL Server"],
  },
  {
    title: "Central Placement",
    desc: "A centralized recruitment and placement platform that manages candidate pipelines, job postings, and hiring workflows, enabling efficient coordination between recruiters, candidates, and organizations.",
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
              key={`key-${i}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
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
