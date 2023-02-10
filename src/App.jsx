import React from "react";
import { Header } from "./components";
import { Hero, Features, CTA, Testimonials, Contact } from "./containers";

const App = () => {
  return (
    <>
      <Header />
      <main className="relative">
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
