import React from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopTitle } from "../responsiveReact/homepageDesktop";
import {} from "../responsiveReact/homepageMobile";
import { useHistory } from "react-router";
import MutedBackground from "../../backgroundImages/MutedBackground.png";
import { ContactButton } from "../common/customButtons";

const Homepage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isMobileOrTablet = useMediaQuery({
    query: "(max-device-width: 1223px)",
  });

  return (
    <div
      className="homepage-bg"
      style={{
        minHeight: "100%",
        backgroundImage: `url(${MutedBackground})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      {isDesktopOrLaptop && !isMobileOrTablet ? (
        <div className="container app">
          <DesktopTitle />
        </div>
      ) : (
        <div className="container app">
          <h1 style={{ paddingBottom: 50, paddingTop: 70 }}>
            Full Stack Javascript Developer & Project Manager
          </h1>
          <h4 style={{ paddingBottom: 70 }}>
            I build websites and apps from the ground up.
          </h4>
        </div>
      )}
      <a href="./portfolio">
        <ContactButton />
      </a>
      {/* <h2 style={{ paddingTop: 90, paddingBottom: 50 }}>My Process</h2>
      {isDesktopOrLaptop && !isMobileOrTablet ? (
        <div className="container app">
          <DesktopStep1 />
          <DesktopStep2 />
          <DesktopStep3 />
        </div>
      ) : (
        <div className="container app">
          <MobileStep1 />
          <MobileStep2 />
          <MobileStep3 />
        </div>
      )} */}
    </div>
  );
};

export default Homepage;
