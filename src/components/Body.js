import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import My from "../img/my.jpg";
import Skills from "./Skills";
import Experience from "./Experience";
import Portfolio from "./portfolio";
import Contact from "./Contact";

class Body extends Component {
  render() {
    return (
      <Container className="body">
        <Row className="row">
          <Col l="6" xs="12" className="col-md-6 col-xs-6-l ">
            <img src={My} className="myImg" alt="img" />
            <h3>Mahmoud Okily</h3>
            <h6>full stack web developer </h6>
            <h6>react && nodejs</h6>
            <a
              href="cv.pdf"
              download="proposed_file_name"
              type="button"
              className="cta"
            >
              dawnload cv
            </a>
          </Col>
          <Col l="6" xs="12" className="col-md-6 col-xs-6-r">
            <h4>ABOUT</h4>
            <hr></hr>
            <p>
              Web developer loves design passion to build websites With the
              latest and fastest technologies used to help users communicate
              well with sites, he decided to take web development as a
              profession because of his love and passion for this work and not
              for income or material
              <br></br>
              <span id="name">mahmoud okily</span>
            </p>
          </Col>
        </Row>
        <Skills />
        <Experience />
        <Portfolio />

        <Contact />
      </Container>
    );
  }
}
export default Body;
