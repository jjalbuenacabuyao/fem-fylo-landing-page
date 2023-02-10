import React from "react";
import { Header } from "./components";
import { Hero, Features, CTA, Testimonials, Footer } from "./containers";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
