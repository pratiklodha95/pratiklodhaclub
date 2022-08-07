import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <a href="" style={{"text-decoration":"none","color":"white"}}>surfing</a>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
       plane flying
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       mountaineering
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       skiing
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        sailing
      </Col>
      <Col xs={4} md={5} className="tech-icons">
        scuba diving
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        dancing
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        horse riding
      </Col>
      <Col xs={4} md={7} className="tech-icons">
        <a href="https://wa.me/919619369767" target='_blank' rel="noreferrer" >suggest me what next</a>
      </Col>
    </Row>
  );
}

export default Techstack;
