import React from "react";
import {Helmet} from "react-helmet";

function Settings() {

  const pageTitle = 'Settings';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Customize your preferences and manage account settings on our platform. Personalize your experience, update account details, and tailor your settings to suit your needs." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Settings;