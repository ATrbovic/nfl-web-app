import React from "react";
import {Helmet} from "react-helmet";

function Privacy() {

  const pageTitle = 'Privacy Policy';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Find answers to common questions in our FAQ section. Get information on various topics, policies, and solutions to common queries. Simplify your experience with our detailed FAQs." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Privacy;