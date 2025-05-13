import React, { useState } from "react";
import "../style/Projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import image1 from '../assets/assignment/image1.png'

const projects = [
  {
    id: 1,
    name: "Inventory CRUD",
    technologies: "MERN Stack",
    image: project1,
    link: "https://client-omega-sandy.vercel.app/",
  },
  {
    id: 2,
    name: "KnowledgeHub",
    technologies: "Frontend React JS",
    image: project2,
    link: "https://quiz-nr9v7edo0-karans-projects-3df8eba2.vercel.app/",
  },
  {
    id: 3,
    name: "React E-Commerce",
    technologies: "Frontend React JS",
    image: project3,
    link: "https://social-media-2s7front-end-only.vercel.app/",
  },
];

const assignment = [
  {
    id: 1,
    name: "Filter Product",
    technologies: "Frontend: React.js, JSX, CSS, React Router, Axios | Backend: Node.js, Express.js",
    image: image1,
    link: "https://car-demo-frontend.vercel.app/",
    company : "   Company Brand Kiln",
    code : "https://github.com/karan8509/car_demo_frontend"
  },
  
];


const Projects = () => {
  const [active, setActive] = useState();
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
      <div className="projects-content">
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
              color: active === "project" ? "#00ffcc" : "#ffffff", // ✅ active tab highlight
              borderBottom: active === "project" ? "2px solid #00ffcc" : "none", // ✅ underline
            }}
            onClick={() => handleClick("project")}
          >
            My Projects
          </h2>

          <h2
            style={{
              padding: "10px 20px",
              margin: "0 15px",
              fontSize: "26px",
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "assignment" ? "#00ffcc" : "#ffffff",
              borderBottom:
                active === "assignment" ? "2px solid #00ffcc" : "none",
            }}
            onClick={() => handleClick("assignment")}
          >
            Assignment
          </h2>
        </div>

        {active === "project" && (
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
                <a
                  href={project.link}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
            ))}
          </div>
        )}
        {active === "assignment" && (
          <div className="projects-grid" style={{width : "500px" , marginLeft : "40px"}} >
            {assignment.map((project) => (
              <div key={project.id} className="project-card">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <h3 className="project-title">{project.name}</h3>
                <p className="project-tech">{project.technologies}</p>  
              <p className=""><span style={{ color: "#00ffcc" }}>{project.company}</span></p>

                <a
                  href={project.link}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{marginRight  : "20px"}}
                >
                  Live Preview
                </a>

          
                <a
                  href={project.code}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 code
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
