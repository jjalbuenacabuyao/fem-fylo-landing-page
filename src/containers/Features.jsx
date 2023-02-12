import React from "react";
import {
  access,
  security,
  collaboration,
  anyFile,
  curvyMobile,
} from "../assets";
import { Icon } from "../components";

const Features = () => {
  const features = [
    {
      key: "access",
      icon: access,
      alt: "Icon of a desktop computer and a smart phone",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      key: "security",
      icon: security,
      alt: "Icon of a shield",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      key: "collaboration",
      icon: collaboration,
      alt: "Icon of clock and 3 persons",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.",
    },
    {
      key: "store",
      icon: anyFile,
      alt: "Icon of folder with files inside",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    // Features Section
    <section className="relative flex flex-col gap-80-96 bg-dark-blue-main px-36-280 py-128-165 text-center lg:pt-0">
      {/* Blob */}
      <img
        src={curvyMobile}
        aria-hidden="true"
        alt=""
        className="absolute bottom-[100%] left-0 right-0 -z-10 w-full"
      />

      {/* Features */}
      {features.map((feature) => (
        <div key={feature.key} className="flex flex-col items-center gap-9">
          <Icon src={feature.icon} alt={feature.alt} />
          <div className="flex flex-col gap-4">
            <h2 className="font-raleway text-lg font-bold leading-none">
              {feature.title}
            </h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
