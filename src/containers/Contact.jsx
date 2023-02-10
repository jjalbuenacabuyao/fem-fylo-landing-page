import React from "react";
import { Button } from "../components";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 text-center py-12 px-7 bg-dark-blue-intro">
      <h2 className="font-raleway text-lg font-bold leading-none">
        Get early access today
      </h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="flex flex-col gap-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          className="py-3 px-8 rounded-full"
        />
        <Button text="Get Started For Free" />
      </form>
    </div>
  );
};

export default Contact;
