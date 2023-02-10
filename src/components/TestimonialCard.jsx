import React from "react";

const TestimonialCard = ({ name, role, comment, src, alt }) => {
  return (
    <div className="flex flex-col gap-5 rounded-md bg-dark-blue-testimonial px-5 py-7 text-xs">
      <p>{comment}</p>
      <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 leading-none">
        <img
          src={src}
          alt={alt}
          className="row-span-2 w-7 self-center rounded-full"
        />
        <p className="font-bold self-center">{name}</p>
        <p className="text-[8px] self-center">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
