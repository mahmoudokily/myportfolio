import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <h3>portfolio</h3>
        <hr></hr>
        <div className="grid">
          <Card>
            <iframe
              title="p1"
              className="iframe"
              src="https://portgolio2021.herokuapp.com/#hero"
            ></iframe>
            <CardBody>
              <CardTitle>Project 1</CardTitle>
              <CardText>
                Sito web personale realizzato utilizzando Reactjs && css
              </CardText>
              <CardText>
                <small className="text-muted">
                  <a href="https://portgolio2021.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <iframe
              title="p2"
              className="iframe"
              src="https://floating-sea-18480.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <iframe
              title="p3"
              className="iframe"
              src="https://momuzio.herokuapp.com/"
            ></iframe>
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <iframe
              title="p4"
              className="iframe"
              src="https://morning-wildwood-26582.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
