import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jsLogo from "../pages/pageAssets/jsLogo.png";
import bootstrapLogo from "../pages/pageAssets/bootstrapLogo.png";
import cssLogo from "../pages/pageAssets/cssLogo.png";
import htmlLogo from "../pages/pageAssets/htmlLogo.png";
import reactLogo from "../pages/pageAssets/reactLogo.png";
import FirebaseLogo from "../pages/pageAssets/FirebaseLogo.png";
import nodeLogo from "../pages/pageAssets/nodeLogo.png";
import "../pages/pageCSS/projectPages.css";

const TktgPage = () => {
  return (
    <div className="container">
      <Container>
        <h1 style={{ paddingBottom: 50, paddingTop: 30 }}>
          Event Ticketing Platform
        </h1>
        <h5 style={{ paddingBottom: 30 }}>
          An advanced system for selling event tickets, designed to be an order
          of magnitude better than any existing solution.
        </h5>
        <h3 style={{ paddingBottom: 30 }}>Objectives</h3>
        <Row>
          <Col>
            <h5 style={{ paddingBottom: 30 }}>
              Provide next-level analytics to assist with marketing efforts.
            </h5>
          </Col>
          <Col>
            <h5 style={{ paddingBottom: 30 }}>
              Include data visualization for clear insights.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{ paddingBottom: 30 }}>
              Integrate A/B testing to optimize checkout flows for different
              events.
            </h5>
          </Col>
          <Col>
            <h5 style={{ paddingBottom: 30 }}>Clean, responsive design.</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{ paddingBottom: 30 }}>
              Competitive pricing, even when compared to less-advanced
              alternatives.
            </h5>
          </Col>
          <Col></Col>
        </Row>
        <h3 style={{ paddingBottom: 20 }}>Technologies Used:</h3>
        <div style={{ paddingBottom: 40 }} className="container">
          <div
            className="row"
            style={{ display: "flex", paddingBottom: 20, paddingTop: 20 }}
          >
            <Col>
              <img className="Tech-Image" src={jsLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={cssLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={htmlLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={reactLogo} alt="Logo" />
            </Col>
          </div>
          <div className="row" style={{ display: "flex", paddingBottom: 70 }}>
            <Col>
              <img className="Tech-Image" src={nodeLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={FirebaseLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={bootstrapLogo} alt="Logo" />
            </Col>
          </div>
          <h5>Screenshots coming soon!</h5>
        </div>

        {/* Would be cool to do 2 things here: 1. Have a photo carousel to the left with these features to the right. Bold the feature that is highlighted in the photo. 2. I'm planning on building this project into a production release and have not made it open source. If you would like to see the source code, let's get in touch! */}
      </Container>
    </div>
  );
};

export default TktgPage;
