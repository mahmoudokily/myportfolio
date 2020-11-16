import React from "react";
import { Card, CardBody, Row, Col, CardTitle, CardText } from "reactstrap";
function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h3>portfolio</h3>
      <hr></hr>

      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <Card>
            <iframe
              title="p1"
              className="iframe"
              src="https://portgolio2021.herokuapp.com/"
            ></iframe>
            <CardBody>
              <CardTitle>Project 1</CardTitle>

              <CardText>
                <p>
                  Un semplice sito Web è un esempio di un sito Web personale o
                  di un portafoglio. È stato creato da reactjs e css3 e
                  javascript
                </p>
                <small className="text-muted">
                  <a href="https://portgolio2021.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6}>
          <Card>
            <iframe
              title="p2"
              className="iframe"
              src="https://floating-sea-18480.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Project 2</CardTitle>
              <CardText>
                <p>
                  Un esempio di un sito web che utilizza l'intelligenza
                  artificiale per controllare facilmente il sito (dando comandi
                  vocali per eseguire determinati eventi come leggere le notizie
                  e navigare tra le pagine) costruito da Reactjs e alan api
                  Library
                </p>
                <small className="text-muted">
                  <a href="https://floating-sea-18480.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6}>
          <Card>
            <iframe
              title="p4"
              className="iframe"
              src="https://online-shop2121.herokuapp.com/"
            ></iframe>

            <CardBody>
              <CardTitle>Project 3</CardTitle>

              <CardText>
                <small className="text-muted">
                  <a href="https://online-shop2121.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6}>
          <Card>
            <iframe
              title="p6"
              className="iframe"
              src="https://yalpcamps.herokuapp.com/"
            ></iframe>
            <CardBody>
              <CardTitle>Project 4</CardTitle>
              <CardText>
                <p>
                  Esempio di un sito web di intrattenimento e affari per trovare
                  alloggi per viaggi brevi. Sono state utilizzate diverse
                  librerie JavaScript come reactjs, expressjs, jwttoken,
                  reactstrap, scss.
                </p>
                <small className="text-muted">
                  <a href="https://yalpcamps.herokuapp.com/">
                    visit the website
                  </a>
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
