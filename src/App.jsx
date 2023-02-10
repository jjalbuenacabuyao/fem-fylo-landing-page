import React from "react";
import { Header } from "./components";
import { Hero, Features, CTA, Testimonials, Contact } from "./containers";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default App;
