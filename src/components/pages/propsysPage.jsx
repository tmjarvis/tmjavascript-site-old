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
import dashboard from "./pageAssets/dashboard.png";
import reviewExpense from "./pageAssets/reviewExpense.png";
import propDetails from "./pageAssets/propDetails.png";

const PropsysPage = () => {
  return (
    <div className="container">
      <Container>
        <h1 style={{ paddingBottom: 50, paddingTop: 30 }}>
          Property Mangement System
        </h1>
        <h6 style={{ textAlign: "center", paddingBottom: 30 }}>
          Now entering alpha release phase, I designed this platform to assist
          real estate management groups in keeping track of expenses and owners'
          equity percentages.
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
          image1={dashboard}
          image2={reviewExpense}
          image3={propDetails}
        />
        <h3 style={{ paddingTop: 10 }}>Features:</h3>
        <Row style={{ paddingTop: 10 }}>
          <Col>
            <p>
              Keep track of your investment properties, along with their key
              details and expenses.
            </p>
          </Col>
          <Col>
            <p>
              Create new expenses for your partners to review. Each partner can
              vote to approve or reject each proposed expense, and the threshold
              for approval automatically adjusts based on the rules that your
              group sets. The higher the expense, the more votes needed to
              approve the expense.
            </p>
          </Col>
          <Col>
            <p>
              The system will calculate and constantly readjust equity split and
              various profitability measures based on expenses, mortgage
              payment, etc.
            </p>
          </Col>
        </Row>
        <p></p>

        {/* Would be cool to do 2 things here: 1. Have a photo carousel to the left with these features to the right. Bold the feature that is highlighted in the photo. 2. I'm planning on building this project into a production release and have not made it open source. If you would like to see the source code, let's get in touch! */}
      </Container>
    </div>
  );
};

export default PropsysPage;
