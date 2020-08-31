import React from "react";
import "./pageCSS/contactPage.css";
import { EmailButton } from "../common/customButtons";
import linkedinLogo from "../pages/pageAssets/linkedinLogo.png";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="Need-Space">Let's get in touch.</h1>
      <h4>
        You can reach me via LinkedIn or by emailing me at{" "}
        <a href={"mailto:" + "tmjarv@gmail.com"}>tmjarv@gmail.com</a>
      </h4>
      <h4 className="Bottom-Subtitle">
        I look forward to hearing from you soon!
      </h4>
      <a href={"mailto:" + "tmjarv@gmail.com"}>
        <EmailButton />
      </a>
      <LinkedinLogo />
    </div>
  );
};

const LinkedinLogo = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/trevor-jarvis-b7b235185/"
      >
        <motion.div whileHover={{ scale: 1.03, cursor: "pointer" }}>
          <img className="Linkedin-Logo" src={linkedinLogo} alt="Logo" />
        </motion.div>
      </a>
    </div>
  );
};

export default ContactPage;
