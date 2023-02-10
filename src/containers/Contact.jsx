import React from "react";
import {Button} from "../components"

const Contact = () => {
  return (
    <div>
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
        />
        <Button text="Get Started For Free" />
      </form>
    </div>
  );
};

export default Contact;
