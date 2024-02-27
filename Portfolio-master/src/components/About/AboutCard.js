import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen Kumar </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a software developer at Jasmin Infotech.
            <br />
            I have completed M.Sc Information Technology at Sri Krishna Arts and Science College
            Coimbatore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Riding Bikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self Help Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make Yourself One Percent Better Every day"{" "}
          </p>
          <footer className="blockquote-footer">the Quote that i Love Form Atomic Habits</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
