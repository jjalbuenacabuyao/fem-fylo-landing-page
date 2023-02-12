import React from "react";
import { quotes } from "../assets";

const TestimonialCard = ({ index, name, role, comment, src, alt }) => {
  return (
    <div
      className={`relative flex flex-col gap-20-28 rounded-md bg-dark-blue-testimonial px-20-24 py-28-44 text-12-14 md:col-span-2 ${
        index == 2 ? "md:col-start-2" : ""
      } lg:col-span-1`}
    >
      {index == 0 ? (
        <img
          aria-hidden="true"
          src={quotes}
          alt="quotes"
          className="absolute left-4 bottom-full w-6"
        />
      ) : (
        <></>
      )}
      <p>{comment}</p>
      <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 leading-none">
        <img
          src={src}
          alt={alt}
          className="row-span-2 w-7 self-center rounded-full"
        />
        <p className="self-center font-bold">{name}</p>
        <p className="self-center text-[8px]">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
