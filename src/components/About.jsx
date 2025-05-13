import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkedAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "../style/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <h2 className="title">
          I'<span style={{ color: "white" }}>m</span>{" "}
          <span className="gradient-text">Karan Kashyap</span>
        </h2>
        <div className="content">
          <p className="description">
            Hello! My name is <strong>Karan</strong>, and I am a passionate
            Full-Stack Web Developer with expertise in <strong>React.js</strong>{" "}
            and <strong>Node.js</strong>. I have hands-on experience in
            authentication, API handling, and debugging. I enjoy building
            dynamic and user-friendly web applications.
          </p>

          <div className="contact-info">
            <a
              href="mailto:kj382542@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
            <a
              href="https://github.com/karan8509"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/karan-kashyap-a1b4a1329"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>

          {/* Skills Section */}
          <div className="skills">
            {/* <div className=" ">
              <h3>Skills</h3>
              <p>HTML, CSS, JavaScript, React, Node, MongoDB</p>
            </div> */}
            <div className="skill-box">
              <h3>Education</h3>
              <p>
                10th: CSBS <br />
                12th: NIOS <br />
                College: <em>Indira Gandhi National Open University</em> — B.Sc.
                in Computer Science (2025 - 2027)
              </p>
            </div>


          </div>
          <div className="resume-btn">
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
