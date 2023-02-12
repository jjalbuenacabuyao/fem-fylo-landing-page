import React from "react";
import { TestimonialCard } from "../components";
import { profile1, profile2, profile3, quotes } from "../assets";

const Testimonials = () => {
  const testimonials = [
    {
      image: profile1,
      alt: "image of Satish Patel",
      name: "Satish Patel",
      role: "Founder and CEO, Huddle",
      testimony:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      image: profile2,
      alt: "image of Bruce McKenzie",
      name: "Bruce McKenzie",
      role: "Founder and CEO, Huddle",
      testimony:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      image: profile3,
      alt: "image of Iva Boyd",
      name: "Iva Boyd",
      role: "Founder and CEO, Huddle",
      testimony:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];
  return (
    //Testimonials
    <section className="flex flex-col gap-24-36 bg-dark-blue-main px-48-140 pb-288-360 md:grid md:grid-cols-4 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          index={index}
          name={testimonial.name}
          role={testimonial.role}
          comment={testimonial.testimony}
          src={testimonial.image}
          alt={testimonial.alt}
        />
      ))}
    </section>
  );
};

export default Testimonials;
