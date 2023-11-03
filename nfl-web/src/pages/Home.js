import React from "react";
import {Helmet} from "react-helmet";

function Home() {

  const pageTitle = 'Home';

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="" />
        <meta name="description" content="Welcome to our website. Discover what makes us unique and explore our services. Start your journey with us today." />
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Home;