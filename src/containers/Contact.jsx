import React from "react";
import { Button } from "../components";

const Contact = () => {
  return (
    <div className="absolute inset-x-20-290 bottom-full flex translate-y-1/2 flex-col gap-6 rounded-lg bg-dark-blue-intro py-12 px-28-76 text-center">
      <h2 className="font-raleway text-18-32 font-bold leading-none">
        Get early access today
      </h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr]">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          className="rounded-full py-3 px-8"
        />
        <Button text="Get Started For Free" />
      </form>
    </div>
  );
};

export default Contact;
