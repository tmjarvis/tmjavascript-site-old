import React from "react";
import { useHistory } from "react-router-dom";
import ProjectCard from "../common/projectCard";

const PortfolioPage = () => {
  const history = useHistory();

  const cardLink = (url) => {
    history.push(`/${url}`);
  };

  return (
    <div>
      <h1 style={{ paddingBottom: 50, paddingTop: 50 }}>My Portfolio</h1>
      <h4 style={{ paddingBottom: 30 }}>
        Not just a calculator and a to-do list.
      </h4>
      <h4 style={{ paddingBottom: 30 }}>
        I create new software solutions that provide competitive value to users.
      </h4>
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          <ProjectCard
            cardTitle="Project Management System"
            cardText="A custom project management tool to help teams meet goals and stay on task."
            lastUpdated="Last updated 3 mins ago"
            onCardClick={() => cardLink("pmsys")}
          />
          <ProjectCard
            cardTitle="Real Estate Management System"
            cardText="A platform that helps investment groups approve and track expenses, as well as calculates equity readjustments."
            lastUpdated="Last updated 3 hours ago"
            onCardClick={() => cardLink("propsys")}
          />
        </div>
        <div className="row" style={{ display: "flex" }}>
          <ProjectCard
            cardTitle="Developer Introduction Site"
            cardText="Additional information about the site you're on right now!"
            lastUpdated="Last updated 3 hours ago"
            onCardClick={() => cardLink("devsite")}
          />
          <ProjectCard
            cardTitle="Event Ticketing Platform"
            cardText="Revolutionary new system for selling event tickets and conducting detailed analysis at an unprecedented level."
            lastUpdated="IN PROGRESS - Last updated today."
            onCardClick={() => cardLink("tktg")}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
