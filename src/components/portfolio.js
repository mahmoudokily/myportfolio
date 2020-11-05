import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <h3>portfolio</h3>
        <hr></hr>
        <div className="grid">
          <Card className="grid-item">
            <iframe
              title="p1"
              className="iframe"
              src="https://portgolio2021.herokuapp.com/"
            ></iframe>
            <CardBody>
              <CardTitle>Project 1</CardTitle>

              <CardText>
                <small className="text-muted">
                  <a href="https://portgolio2021.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="grid-item">
            <iframe
              title="p2"
              className="iframe"
              src="https://floating-sea-18480.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Project 2</CardTitle>
              <CardText>
                <small className="text-muted">
                  <a href="https://floating-sea-18480.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="grid-item">
            <iframe
              title="p3"
              className="iframe"
              src="https://momuzio.herokuapp.com/"
            ></iframe>
            <CardBody>
              <CardTitle>Project 3</CardTitle>

              <CardText>
                <small className="text-muted">
                  <a href="https://momuzio.herokuapp.com/">visit the website</a>
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="grid-item">
            <iframe
              title="p4"
              className="iframe"
              src="https://morning-wildwood-26582.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Project 4</CardTitle>

              <CardText>
                <small className="text-muted">
                  <a href="https://morning-wildwood-26582.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card className="grid-item">
            <iframe
              title="p4"
              className="iframe"
              src="https://online-shop2121.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Project 4</CardTitle>

              <CardText>
                <small className="text-muted">
                  <a href="https://online-shop2121.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
