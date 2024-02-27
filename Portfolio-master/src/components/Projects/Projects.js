import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cab_Booking_Dashboard from "../../Assets/Projects/Cab_Booking_Dashboard.jpg";
import alien_invasion from "../../Assets/Projects/alien_invasion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cab_Booking_Dashboard}
              isBlog={false}
              title="Cab Booking & Dashboard Analysis"
              description="Easily book cabs for office rides and Late Night Booking and Can Analyse Your rides Based on daily
              Weekly and Monthly using the Intractive Dashboard.
              Built using React, React Bootstrap."
              ghLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alien_invasion}
              isBlog={false}
              title="Alien Invasion Game"
              description="Experience a thrilling crash course in Alien Invasion! Fight off extraterrestrial foes in this action-packed game, filled with excitement and adventure.
              using Python."
              ghLink="https://github.com/Bornneverquit/alien-invasion-game-crash-course-solutions-"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
