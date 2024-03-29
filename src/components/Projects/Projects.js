import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import spaceLogo from "../../Assets/space-main.png"
import earthLogo from "../../Assets/earth-travel.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Explore Space {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🚀
                </span>
              </h1>

              <h4 className="heading-name">
              
              </h4>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={spaceLogo}
                alt="space pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Travel Earth {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🌎
                </span>
              </h1>

              <h4 className="heading-name">
              
              </h4>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={earthLogo}
                alt="earth pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
    </Container>
  );
}

export default Projects;
