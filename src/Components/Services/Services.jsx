import React from "react";
import "./Services.css";

const Services = () => {
  const totalServices = [
    {
      serviceName: "Data Science",
      services: {
        1: "Healthcare",
        2: "Finance",
        3: "Retail",
        4: "Marketing and Sales",
        5: "Manufacturing",
        6: "Transportation and Logistics",
      },
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      serviceName: "Machine Learning",
      services: {
        1: "Education",
        2: "Entertainment",
        3: "Agriculture",
        4: "Cybersecurity",
        5: "Energy",
        6: "Natural Language Processing",
      },
      backgroundImage: "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
    },
    {
      serviceName: "Generative AI",
      services: {
        1: "Content Creation",
        2: "Art and Design",
        3: "Natural Language Processing",
        4: "Healthcare",
        5: "Gaming and Entertainment",
        6: "Marketing and Advertising",
      },
      backgroundImage: "https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg",
    },
  ];
  return (
    <div className="services" id="services">
      <h1>OUR SERVICES</h1>
      <div className="ourservices">
        {totalServices.map((service, index) => (
          <div key={index} className={`service${index + 1} service`} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backgroundImage}) center/cover no-repeat` }}>
            <div className="content">
              <h2>{service.serviceName}</h2>
              <p>
                <br />
                {Object.values(service.services).map((serviceDetail, idx) => (
                  <span key={idx}>
                    <i className="fa-solid fa-check"></i> {serviceDetail}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
