import React from 'react';
import './OurProjects.css';

const OurProjects = () => {
  const projects = [
    {
      title: "Employee Satisfaction",
     // description: "A brief description of Project One.",
      link: "https://github.com/itechdp/InferUSA-Data/blob/main/01_Employee_Satisfaction/",
    },
    {
      title: "Kate Project",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/02_Kate_Project_05",
    },
    {
      title: "Logistics Reg Analysis",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/03_Logistic_Reg5",
    },
    {
      title: "Delivery Truck",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/04_Delivery_Truck",
    },
    {
      title: "Email Spam Detection",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/05_Email_spam_detection",
    },
    {
      title: "House Price",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/06_House_Price",
    },
    {
      title: "Clustering",
      //description: "A brief description of Project Two.",
      link: "https://github.com/itechdp/InferUSA-Data/tree/main/07_Clustering",
    },
    // Add more projects as needed
  ];

  return (
    <div className="our-projects" id='projects'>
      <h1>Our Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}  className='project-link'  target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
