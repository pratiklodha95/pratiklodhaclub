import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from 'styled-components';


const Button = styled.a`
  line-height: 2;
  height: 3.5rem;
  text-decoration: none;
  display:inline-flex;
  color: #FFFFFF;
  background-color: #c770f0;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 2rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 1rem;
  vertical-align: middle;
`;

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              Indian Institute of Technology, Bombay (IIT-B) alumnus and Co-founder at <b className="purple">Neodocs.</b> 
              <br/> Super pumped to build the future of <b className="purple">diagnostics.</b> 
              <br/> <br/> 
              Always excited about <b className="purple">startup and new ideas.   {"  "}</b>
              If you want to brainstorm, <b className="purple">let's chat.</b> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
           <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Best way to catchup is  <span className="purple">over a coffee </span>with me
            </p>
            <Button target="_blank" href="https://www.buymeacoffee.com//pratiklodha">
              <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
              <Text>Let's have a coffee</Text>
            </Button>
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
