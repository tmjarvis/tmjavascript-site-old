import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopNavBar from "./components/common/topNavbar";
import PortfolioPage from "./components/pages/portfolioPage";
import Homepage from "./components/pages/homepage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PMSysPage from "./components/pages/pmsysPage";
import AboutPage from "./components/pages/about";
import ResumePage from "./components/pages/resumePage";
import ContactPage from "./components/pages/contactPage";
import PropsysPage from "./components/pages/propsysPage";
import DevsitePage from "./components/pages/devsitePage";
import TktgPage from "./components/pages/tktgPage";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#181819";
  });

  return (
    <div className="App">
      <BrowserRouter>
        <TopNavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/pmsys">
            <PMSysPage />
          </Route>
          <Route exact path="/propsys">
            <PropsysPage />
          </Route>
          <Route exact path="/devsite">
            <DevsitePage />
          </Route>
          <Route exact path="/tktg">
            <TktgPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
        </Switch>
        {/* <BottomNavBar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
