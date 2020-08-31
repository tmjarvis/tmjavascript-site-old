import React from "react";
import "./pageCSS/resumePage.css";
import ResumesList from "../common/resumesList";
import { DownloadPDFButton } from "../common/customButtons";
import Resume from "./pageAssets/Trevor_Jarvis_Resume_0820.pdf";

const ResumePage = () => {
  return (
    <div className="app container" style={{ justifyContent: "center" }}>
      <h1 style={{ paddingBottom: 50, paddingTop: 50 }}>
        Development Expertise
      </h1>
      <ResumesList />
      <h4 className="Space-Out">
        Check out my management experience and more by clicking the link below!
      </h4>
      <a href={Resume} download="TrevorJarvis_Resume.pdf">
        <DownloadPDFButton buttonText="Download Resume" />
      </a>
    </div>
  );
};

export default ResumePage;
