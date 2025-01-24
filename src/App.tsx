import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import PersonalIntro from './components/Personal _Intro';
import './App.css';
interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
}
const links = [
  { label: "Home", href: "./" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const projectsData: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio website built with React, TypeScript, and Bulma.",
    imageSrc: "src/assets/Portfolio.mp4",
    githubUrl: "https://github.com/your-username/portfolio-website",
  },
  {
    title: "Rocco Pizza",
    description: "A full-stack Pizza Shop Website built with Java, Spring Boot, and Vue.",
    imageSrc: "src/assets/0116 (2).mp4",
    githubUrl: "https://github.com/PriyaSenthil20/Capstone_Project",
  },
  // Add more projects here
];

const App = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleFilter = (filter: string) => {
    // Implement filter logic based on filter value
    if (filter === 'react') {
      setProjects(projectsData.filter(project => project.description.includes('React')));
    } else if (filter === 'java') {
      setProjects(projectsData.filter(project => project.description.includes('Java')));
    } else {
      setProjects(projectsData); 
    }
  };

  return (<>
    <div><Header title="LP" links={links}/></div>
    <div ><PersonalIntro/></div>
      <div id="about"><About/></div>
      <div id="skills"><Skills/></div>
    <div className="container">
      <h1 className="title has-text-centered has-text-white-light" id='projects'> Projects</h1>
      
      <div className="columns is-multiline">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            {...project} 
          />
        ))}
      </div>
    </div>
    <div id='contact'><Contact/></div></>
  );
};

export default App;