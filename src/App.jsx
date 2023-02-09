import React from "react";
import { Header } from "./components";
import { Hero, Features } from "./containers";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default App;
