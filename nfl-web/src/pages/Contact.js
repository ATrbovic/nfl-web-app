import React from "react";
import {Helmet} from "react-helmet";

function Contact() {

  const pageTitle = 'Contact Us';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Get in touch with us. Find our contact information and reach out for inquiries, support, or any questions you may have. We're here to assist you." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Contact;