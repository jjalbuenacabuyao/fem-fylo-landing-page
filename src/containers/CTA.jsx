import React from "react";
import { Illustration } from "../components";
import { descriptionImg, arrow } from "../assets";

const CTA = () => {
  return (
    // CTA Section
    <section className="flex flex-col gap-14 bg-dark-blue-main px-9 pb-40">
      <Illustration
        src={descriptionImg}
        altText="Illustration of 3 persons having conversation"
      />
      <div className="flex flex-col items-start gap-5">
        <h2 className="font-raleway text-lg font-bold">
          Stay productive, wherever you are
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <button className="flex items-center gap-2 border-b-2 border-b-accent-cyan pb-1 leading-none text-accent-cyan">
          <span>See how Fylo works</span>
          <img src={arrow} alt="arrow right" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
