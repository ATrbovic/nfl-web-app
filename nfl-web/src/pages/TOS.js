import React from "react";
import {Helmet} from "react-helmet";

function TOS() {

  const pageTitle = 'Terms of Service';
  
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Read our Terms of Service to understand the rules, obligations, and agreements governing the use of our platform. Learn about user rights, responsibilities, and legal terms." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default TOS;