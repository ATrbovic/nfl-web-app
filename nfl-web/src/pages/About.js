import React from "react";
import {Helmet} from "react-helmet";

function About() {

  const pageTitle = 'About Us';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Discover the story and mission of our group. Learn about our team, values, and commitment to achieving above and beyond." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default About;