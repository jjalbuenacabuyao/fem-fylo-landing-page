import React from "react";
import { Header } from "./components";
import { Hero, Features, CTA } from "./containers";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </>
  );
};

export default App;
