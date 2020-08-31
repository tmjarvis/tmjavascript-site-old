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

const DevsitePage = () => {
  return (
    <div className="container">
      <Container>
        <h1 style={{ paddingBottom: 50, paddingTop: 30 }}>
          Developer Introduction Site
        </h1>
        <h6 style={{ paddingBottom: 30 }}>
          I custom-built this site from the ground up to show off. As this is a
          purely frontend site, its primary feature is responsive design.
        </h6>
        <h6 style={{ paddingBottom: 30 }}>
          I read that most people reviewing developer portfolios spend only a
          few seconds reviewing projects and the majority of the time resizing
          the page and inspecting frontend elements.
        </h6>
        <h6 style={{ paddingBottom: 30 }}>So go ahead, resize the page.</h6>
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
          <div className="row" style={{ display: "flex", paddingBottom: 20 }}>
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
        </div>

        {/* Would be cool to do 2 things here: 1. Have a photo carousel to the left with these features to the right. Bold the feature that is highlighted in the photo. 2. I'm planning on building this project into a production release and have not made it open source. If you would like to see the source code, let's get in touch! */}
      </Container>
    </div>
  );
};

export default DevsitePage;
