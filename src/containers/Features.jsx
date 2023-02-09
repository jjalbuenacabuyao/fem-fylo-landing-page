import React from "react";
import { access, security, collaboration, anyFile } from "../assets";
import { Icon } from "../components";

const Features = () => {
  const features = [
    {
      key: "access",
      icon: access,
      alt: "Icon of a desktop computer and a smart phone",
      title: "Access your files, anywhere",
      description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      key: "security",
      icon: security,
      alt: "Icon of a shield",
      title: "Security you can trust",
      description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      key: "collaboration",
      icon: collaboration,
      alt: "Icon of clock and 3 persons",
      title: "Real-time collaboration",
      description: "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required."
    },
    {
      key: "store",
      icon: anyFile,
      alt: "Icon of folder with files inside",
      title: "Store any type of file",
      description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ]

  return (
    // Features Section
    <section className="flex flex-col px-9 py-32">
      {features.map(feature => (
        <div key={feature.key}>
          <Icon src={feature.icon} alt={feature.alt} />
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
      </div>
      ))}
    </section>
  );
};

export default Features;
