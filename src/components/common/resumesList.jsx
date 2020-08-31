import React from "react";
import "../pages/pageCSS/resumePage.css";
import bootstrapLogo from "../pages/pageAssets/bootstrapLogo.png";
import cLogo from "../pages/pageAssets/cLogo.png";
import cssLogo from "../pages/pageAssets/cssLogo.png";
import ExpressLogo from "../pages/pageAssets/ExpressLogo.png";
import firebaseLogo from "../pages/pageAssets/FirebaseLogo.png";
import htmlLogo from "../pages/pageAssets/htmlLogo.png";
import jsLogo from "../pages/pageAssets/jsLogo.png";
import jwtLogo from "../pages/pageAssets/jwtLogo.png";
import matUILogo from "../pages/pageAssets/matUILogo.png";
import mongoLogo from "../pages/pageAssets/mongoLogo.png";
import nodeLogo from "../pages/pageAssets/nodeLogo.png";
import postgreSQLlogo from "../pages/pageAssets/postgreSQLlogo.png";
import pythonLogo from "../pages/pageAssets/pythonLogo.png";
import reactLogo from "../pages/pageAssets/reactLogo.png";
import reduxLogo from "../pages/pageAssets/reduxLogo.png";
import sqlLogo from "../pages/pageAssets/sqlLogo.png";
import swiftLogo from "../pages/pageAssets/swiftLogo.png";
import { Container, Row, Col } from "react-bootstrap";

const ResumesList = () => {
  return (
    <div>
      <Row>
        <Col>
          <h3 className="Subtitle">Languages</h3>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={jsLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={cssLogo} alt="Logo" />
            </Col>
          </Row>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={htmlLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={sqlLogo} alt="Logo" />
            </Col>
          </Row>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={pythonLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={swiftLogo} alt="Logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="Logo" src={cLogo} alt="Logo" />
            </Col>
          </Row>
        </Col>

        <Col>
          <h3 className="Subtitle">Frameworks</h3>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={reactLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={nodeLogo} alt="Logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="Logo" src={ExpressLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={reduxLogo} alt="Logo" />
            </Col>
          </Row>
        </Col>

        <Col>
          <h3 className="Subtitle">Databases, Etc.</h3>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={postgreSQLlogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={firebaseLogo} alt="Logo" />
            </Col>
          </Row>
          <Row className="Logo-Row">
            <Col>
              <img className="Logo" src={mongoLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={matUILogo} alt="Logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="Logo" src={bootstrapLogo} alt="Logo" />
            </Col>
            <Col>
              <img className="Logo" src={jwtLogo} alt="Logo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ResumesList;
