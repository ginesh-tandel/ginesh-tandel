

# Portfolio Website for Ginesh Tandel

A modern, professional single-page portfolio website inspired by the clean, minimalist style shown in the reference image — adapted for a Senior .NET Full Stack Developer.

## Design Direction
- Clean, minimal layout with bold typography (similar to reference image)
- Dark/light theme toggle with a professional blue/purple accent color palette
- Smooth scroll navigation with subtle fade-in animations on each section
- Fully responsive for desktop, tablet, and mobile

## Sections

### 1. Navigation Bar
- Logo/name "Ginesh Tandel." on the left
- Smooth-scroll nav links: Home, About, Skills, Experience, Projects, Contact
- Dark/light theme toggle button on the right
- Sticky header with subtle backdrop blur

### 2. Hero Section
- Large bold heading: "Senior .NET Full Stack Developer"
- Greeting line: "Hey, I'm Ginesh 👋"
- Short tagline about 10+ years of experience with .NET, React, Angular, and cloud technologies
- Two CTA buttons: "View Projects" and "Contact Me" (styled like the reference — one filled, one outlined)
- Clean whitespace-focused layout

### 3. About Me
- Professional summary paragraph covering scalable web apps, REST APIs, microservices, clean architecture, and Agile
- Highlight cards or badges for key strengths: Problem Solving, Architecture Design, Clean Code, Cloud Deployment

### 4. Technical Skills
- Three categorized cards with icons:
  - **Frontend**: React, Angular, JavaScript, TypeScript, HTML, CSS, Bootstrap
  - **Backend**: C#, .NET Core, ASP.NET Core, REST APIs, Microservices, Clean Architecture, JWT
  - **Database & Tools**: SQL Server, Azure, Docker, Git, CI/CD
- Each skill shown as a pill/badge within its category card

### 5. Experience Timeline
- Vertical timeline layout with alternating cards:
  - Freelance Senior .NET Core Developer (2020–Present)
  - Senior Software Engineer roles with key achievement bullet points
  - Focus on impact metrics (performance improvements, scalability, team leadership)

### 6. Projects Showcase
- Grid of project cards with hover effects:
  - **HR Management System** — employee lifecycle, payroll, attendance
  - **Financial Planning Platform** — budgeting, reporting, analytics
  - **Quickscrum SaaS Platform** — Agile project management tool
- Each card shows: title, short description, and technology tags

### 7. Contact Section
- Email link, LinkedIn icon, GitHub icon
- Simple contact form (Name, Email, Message) with client-side validation
- Form will use a toast notification on submit (no backend needed initially)

### 8. Footer
- Copyright line and social links

## Technical Approach
- Single-page React app with smooth scrolling between sections
- Component-based architecture with reusable section components
- Dark/light theme using next-themes + Tailwind CSS variables
- Fade-in animations using CSS/Tailwind animate utilities
- SEO-friendly semantic HTML structure

