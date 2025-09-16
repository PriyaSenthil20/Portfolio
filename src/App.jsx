
import './App.css'
import React from "react";

function Header() {
  return (
    <header className="py-8 text-center">
      <h1 className="text-4xl font-bold">Lakshmipriya Sivakumar</h1>
      <p className="mt-2 text-lg">Full-Stack Developer • Java • Spring Boot • React • AWS</p>
      <a href="#projects" className="inline-block mt-4 px-4 py-2 border rounded hover:bg-slate-100">View Projects</a>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-2">About</h2>
      <p>
        I'm a full-stack developer with experience in Java, Spring Boot, Vue/React,
        PostgreSQL, and AWS. I build reliable backend systems and clean, responsive frontends.
      </p>
    </section>
  );
}

function ProjectCard({title, desc, tech, link}) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
      <p className="mt-3 text-xs">Tech: {tech}</p>
      {link && <a className="mt-3 inline-block text-sm underline" href={link} target="_blank" rel="noreferrer">View repo/demo</a>}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="Task Manager"
          desc="A CRUD task app with authentication and PostgreSQL backend. Deployed on AWS."
          tech="React, Spring Boot, PostgreSQL, Docker"
          link="#"
        />
        <ProjectCard
          title="Educational App (MVP)"
          desc="Simple course dashboard with progress tracking and admin panel."
          tech="Vue, Node, PostgreSQL, AWS S3"
          link="#"
        />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {["Java","Spring Boot","React","Vue","PostgreSQL","Docker","AWS","Selenium","SQL","Selenium Webdriver","Automation Testing"].map(s => (
          <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: <a href="mailto:lakshmipriya.skm@gmail.com" className="underline">lakshmipriya.skm@gmail.com</a></p>
      <p className="mt-2">GitHub: <a href="https://github.com/priyasenthil20" className="underline">github.com/your-username</a></p>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen container mx-auto px-4">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="text-center py-8 text-xs text-slate-500">© {new Date().getFullYear()} Lakshmipriya</footer>
    </div>
  );
}
