import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import slcBackground from "../../backgroundImages/slcBackground.png";
import { DownloadPDFButton, EmailButton } from "../common/customButtons";
import Resume from "./pageAssets/Trevor_Jarvis_Resume_0820.pdf";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Jumbotron
        style={{
          backgroundImage: `url(${slcBackground})`,
          backgroundPosition: "center",
          minHeight: 500,
        }}
      >
        <h1 style={{ paddingBottom: 50, paddingTop: 50 }}>
          A little bit about me:
        </h1>
        <div
          className="app container"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <h5>I came to love software through interning at Intel in 2013.</h5>
          <h5>
            I've grown my skillset significantly since then, and I've managed
            teams for over two years. I'm ready for my next challenge!
          </h5>
          <h5 style={{ paddingTop: 50 }}>
            Born and raised in the Pacific Northwest, I'm currently living in
            the Salt Lake City area. When I'm not coding, I enjoy hanging out
            with my wife and spending time outdoors.
          </h5>
        </div>
      </Jumbotron>
      <h5 style={{ paddingBottom: 20 }}>Let's collaborate!</h5>
      <h5 style={{ paddingBottom: 20 }}>
        Feel free to reach out via email or check out my resume below:
      </h5>

      <Row>
        <Col>
          <div style={{ float: "right" }}>
            <a href={Resume} download="TrevorJarvis_Resume.pdf">
              <DownloadPDFButton buttonText="Download My Resume" />
            </a>
          </div>
        </Col>
        <Col style={{ maxWidth: 5 }}></Col>
        <Col>
          <div style={{ float: "left" }}>
            <a href={"mailto:" + "tmjarv@gmail.com"}>
              <EmailButton />
            </a>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutPage;
