import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ControlledCarousel from "../common/carousel";
import jsLogo from "../pages/pageAssets/jsLogo.png";
import bootstrapLogo from "../pages/pageAssets/bootstrapLogo.png";
import cssLogo from "../pages/pageAssets/cssLogo.png";
import htmlLogo from "../pages/pageAssets/htmlLogo.png";
import reactLogo from "../pages/pageAssets/reactLogo.png";
import jwtLogo from "../pages/pageAssets/jwtLogo.png";
import postgreSQLlogo from "../pages/pageAssets/postgreSQLlogo.png";
import ExpressLogo from "../pages/pageAssets/ExpressLogo.png";
import nodeLogo from "../pages/pageAssets/nodeLogo.png";
import "../pages/pageCSS/projectPages.css";
import pmTasks from "../../slidePhotos/pmTasks.png";
import pmSprints from "../../slidePhotos/pmSprints.png";
import pmLogin from "../../slidePhotos/pmLogin.png";

const PMSysPage = () => {
  return (
    <div className="container">
      <Container>
        <h1 style={{ paddingBottom: 50, paddingTop: 30 }}>
          Project Mangement System
        </h1>
        <h6 style={{ textAlign: "center", paddingBottom: 30 }}>
          More than just a to-do list, this platform breaks down projects and
          keeps teams on schedule.
        </h6>
        <h3>Technologies Used:</h3>
        <div className="container">
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
            <Col>
              <img className="Tech-Image" src={ExpressLogo} alt="Logo" />
            </Col>
          </div>
          <div className="row" style={{ display: "flex", paddingBottom: 20 }}>
            <Col>
              <img className="Tech-Image" src={nodeLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={postgreSQLlogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={jwtLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Tech-Image" src={bootstrapLogo} alt="Logo" />
            </Col>
          </div>
        </div>
        <ControlledCarousel
          image1={pmSprints}
          image2={pmLogin}
          image3={pmTasks}
        />
        <h3 style={{ paddingTop: 10 }}>Features:</h3>
        <Row style={{ paddingTop: 10 }}>
          <Col>
            <p>
              Keep track of major milestones by organizing projects into sprints
              and tasks.
            </p>
          </Col>
          <Col>
            <p>
              Custom-built, secure authentication system with route protection
              for each project, including its sprints and tasks.
            </p>
          </Col>
          <Col>
            <p>
              Users have the option to organize tasks based on due date,
              priority level, or the team member that assigned the task.
            </p>
          </Col>
        </Row>
        <p></p>

        {/* Would be cool to do 2 things here: 1. Have a photo carousel to the left with these features to the right. Bold the feature that is highlighted in the photo. 2. I'm planning on building this project into a production release and have not made it open source. If you would like to see the source code, let's get in touch! */}
      </Container>
    </div>
  );
};

export default PMSysPage;
