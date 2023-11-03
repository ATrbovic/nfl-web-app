import React from "react";
import {Helmet} from "react-helmet";

function Explore() {

  const pageTitle = 'Explore';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Embark on a journey of discovery. Explore our offerings, products, and services to find new opportunities and experiences. Start your adventure with us today." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Explore;