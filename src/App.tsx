import React from "react";

import Header from "./components/Header";
const About = React.lazy(() => import("./components/About"));
const Service = React.lazy(() => import("./components/Service"));
const OurClients = React.lazy(() => import("./components/OurClients"));
const Projects = React.lazy(() => import("./components/Project"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Service />
        <Projects />
        <OurClients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
