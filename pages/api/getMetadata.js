export const getMetadata = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us | ENT & Rhinoplasty Hub",
        description:
          "Learn more about ENT & Rhinoplasty Hub, led by Dr. Haitham Akaash, an expert in ENT treatments and advanced rhinoplasty procedures in Rawalpindi, Pakistan.",
        keywords:
          "ENT, rhinoplasty, Dr. Haitham Akaash, ENT treatments, advanced rhinoplasty, Rawalpindi,ENT specialist Rawalpindi, Pakistan",
      };
    case "contact":
      return {
        title: "Contact Us | ENT & Rhinoplasty Hub",
        description:
          "Get in touch with ENT & Rhinoplasty Hub for expert care in ENT treatments and rhinoplasty services in Rawalpindi, Pakistan.",
        keywords:
          "contact, ENT, rhinoplasty, Dr. Haitham Akaash, ENT services, Rawalpindi,ENT specialist Rawalpindi, Pakistan",
      };
    case "services":
      return {
        title: "Our Services | ENT & Rhinoplasty Hub",
        description:
          "Explore the comprehensive ENT and rhinoplasty services offered by ENT & Rhinoplasty Hub, including advanced surgeries and treatments for ear, nose, and throat care.",
        keywords:
          "ENT services, rhinoplasty, ear surgery, nose surgery, throat care, Dr. Haitham Akaash,ENT specialist Rawalpindi, Rawalpindi",
      };
    case "gallery":
      return {
        title: "Gallery | ENT & Rhinoplasty Hub",
        description:
          "Browse through the successful ENT treatments and rhinoplasty transformations performed by Dr. Haitham Akaash at ENT & Rhinoplasty Hub.",
        keywords:
          "ENT gallery, rhinoplasty transformations, Dr. Haitham Akaash, ENT specialist Rawalpindi,ENT treatments, Rawalpindi",
      };
    case "home":
      return {
        title: "ENT & Rhinoplasty Hub | Leading ENT Specialist in Rawalpindi",
        description:
          "Welcome to ENT & Rhinoplasty Hub, led by Dr. Haitham Akaash. We provide expert care in ENT treatments and advanced rhinoplasty procedures to enhance your health and appearance.",
        keywords:
          "ENT specialist, rhinoplasty, ENT care, Dr. Haitham Akaash,ENT specialist Rawalpindi, ENT services, facial surgery",
      };
    default:
      return {
        title: "ENT & Rhinoplasty Hub",
        description:
          "Leading ENT and rhinoplasty care by Dr. Haitham Akaash in Rawalpindi, Pakistan. Comprehensive treatments for ear, nose, throat, and facial plastic surgery.",
        keywords:
          "ENT, rhinoplasty, ENT specialist, Dr. Haitham Akaash, ENT care,ENT specialist Rawalpindi, facial surgery",
      };
  }
};
