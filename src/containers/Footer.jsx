import React from "react";
import { Logo, Icon } from "../components";
import Contact from "./Contact";
import { location, phone, email } from "../assets";

const Footer = () => {
  const contactInfo = [
    {
      key: "location",
      icon: location,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, accusantium",
      alt: "Location icon",
    },
    {
      key: "phone",
      icon: phone,
      content: "+1-543-123-4567",
      alt: "Phone icon",
    },
    {
      key: "email",
      icon: email,
      content: "example@fylo.com",
      alt: "Email icon",
    },
  ];

  const footerLink1 = ["About Us", "Jobs", "Press", "Blog"];
  const footerLink2 = ["Contact Us", "Terms", "Privacy"];
  const socialIcons = ["logo-facebook", "logo-twitter", "logo-instagram"];

  return (
    <footer className="relative flex flex-col gap-10 bg-dark-blue-footer px-9 pt-72 pb-12">
      <Contact />
      <Logo />
      <div className="flex flex-col gap-5">
        {contactInfo.map((info) => (
          <div key={info.key} className="grid grid-cols-[auto_1fr] gap-7">
            <Icon src={info.icon} alt={info.alt} className="h-auto w-5" />
            <p>{info.content}</p>
          </div>
        ))}
      </div>

      <ul className="flex flex-col gap-6">
        {footerLink1.map((link) => (
          <li key={link}>
            <a href="#" className="leading-none">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-5">
        {footerLink2.map((link) => (
          <li key={link}>
            <a href="#" className="leading-none">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex items-center justify-center gap-3 text-2xl leading-none">
        {socialIcons.map((icon) => (
          <ion-icon key={icon} name={icon}></ion-icon>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
