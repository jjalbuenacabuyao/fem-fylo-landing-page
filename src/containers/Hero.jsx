import React from "react";
import { Illustration, Button } from "../components";
import { illustration } from "../assets";

const Hero = () => {
  return (
    // Hero Section
    <section className="px-36-350 pt-9 flex flex-col gap-44-60 lg:pb-36-280">
      <Illustration
        src={illustration}
        alt="Illustration of two persons organizing files in a huge folder"
        className="mx-auto"
      />
      <article className="flex flex-col items-center text-center gap-20-36">
        <h1 className="font-raleway font-bold text-24-38">All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family and co-workers.</p>
        <Button text="Get Started" className="px-20"/>
      </article>
    </section>
  );
};

export default Hero;
