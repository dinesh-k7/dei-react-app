import React, { Fragment, ReactElement } from "react";

import HeroContainer from "./container/hero-container";
import "./sentinels-club.scss";

const SentinelsClub: React.FC = (): ReactElement => {
  // Google page event track
  window["dataLayer"].push({
    event: "pageview",
    page: {
      url: window.location.href,
      title: "SentinelsClub page",
    },
  });
  return (
    <Fragment>
      <HeroContainer />
    </Fragment>
  );
};

export default SentinelsClub;
