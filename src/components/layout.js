import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import favIcon from "../assets/favicon.png";
import Navigation from "./Navigation";
import css from "../assets/app.css";

require("prismjs/themes/prism-solarizedlight.css");
require("typeface-raleway");
require("typeface-roboto-slab");

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "100%",
      gridTemplateRows: "60px 1fr auto"
    }}
  >
    <Helmet
      title="Stefan Ivić - Portfolio"
      meta={[
        { name: "description", content: "Stefan Ivić - Portfolio" },
        {
          name: "keywords",
          content:
            "front-end, design, developer, minimal, gatsby, stefan, ivic, ivić"
        }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favIcon}` }]}
    >
      <html lang="en" />
    </Helmet>
    <Navigation />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
TemplateWrapper.defaultProps = {
  children: null
};

export default TemplateWrapper;
