import React, { useState } from "react";
import "../style/Projects.css";
import project1 from "../assets/ecom.png";
import image1 from '../assets/assignment/image1.png';
import naksh from "../assets/naksh.png"

const projects = [
  {
    id: 1,
    name: "Ecommerce",
    technologies: "MERN Stack",
    image: project1,
    link: "https://mern-project-live-link.com", // 🔁 Replace this with actual live link if available
    code: "https://mern-project-live-link.com"
  },
  {
    id: 2,
    name: "Filter Product",
    technologies: "Frontend: React.js, JSX, CSS, React Router, Axios | Backend: Node.js, Express.js",
    image: image1,
    link: "https://car-demo-frontend.vercel.app/",
    code: "https://github.com/karan8509/car_demo_frontend"
  },{
   id: 3,
    name: "nextjs_intern_assignment from Naksh Jewels",
    technologies: "Next.js Intern Assignment | Naksh Jewels",
    image: naksh,
    link: "https://geer-intern-assignment-private-copy.vercel.app",
    code: "https://github.com/karan8509/car_demo_frontend"
  }
];

const Projects = () => {
  const [active, setActive] = useState("project");

  const handleClick = (type) => {
    setActive(type);
  };

  return (
    <div className="projects-container" id="project">
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">Hi, I'M</h1>
        <h1 className="projects-name">KARAN KASHYAP</h1>
        <h2 className="projects-subtitle">FULL-STACK DEVELOPER</h2>
        <p className="projects-description">
          I specialize in building modern and scalable web applications that
          enhance user experience.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            padding: "10px 20px",
            margin: "0 15px",
            fontSize: "26px",
            fontWeight: "bold",
            cursor: "pointer",
            color: active === "project" ? "#00ffcc" : "#ffffff",
            borderBottom: active === "project" ? "2px solid #00ffcc" : "none",
          }}
          onClick={() => handleClick("project")}
        >
          My Projects
        </h2>

      </div>

      {/* Projects Display */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-tech">{project.technologies}</p>

            {/* Buttons */}
            <div className="project-buttons">
              {project.link && (
                <a
                  href={project.link}
                  className="project-button live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  className="project-button repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
