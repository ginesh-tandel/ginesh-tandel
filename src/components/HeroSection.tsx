import { ArrowDown, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left — text */}
        <div>
          <p className="animate-fade-up text-lg text-muted-foreground">
            Hey, I'm Ginesh 👋
          </p>
          <h1 className="animate-fade-up-delay-1 mt-4 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-primary">Senior .NET</span>
            <br />
            <span className="text-foreground">Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            10+ years of experience building scalable cloud applications with
            .NET, ASP.NET Core, React, Angular, and SQL Server.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-6" asChild>
              <a href="#contact">
                <Send className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                Browse Projects
              </a>
            </Button>
          </div>
        </div>

        {/* Right — avatar placeholder circle */}
        <div className="hidden items-center justify-center md:flex">
          <div className="relative">
            <div className="h-80 w-80 rounded-full border-2 border-primary/20 lg:h-96 lg:w-96" />
            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-muted">
              <User className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
