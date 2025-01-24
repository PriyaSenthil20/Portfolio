
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  imageSrc,  
  githubUrl 
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <video width="50%"  controls>
        <source src={imageSrc} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="card-content">
        <div className="content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <footer className="card-footer">
        <a href={githubUrl} className="card-footer-item">
          GitHub
        </a>
      </footer>
    </div>
  );
};
export default ProjectCard;
