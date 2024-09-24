export const getMetadata = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us | ENT & Rhinoplasty Hub",
        description:
          "Learn more about ENT & Rhinoplasty Hub, led by Dr. Haitham Akaash, an expert in ENT treatments and advanced rhinoplasty procedures in Rawalpindi, Pakistan.",
      };
    case "contact":
      return {
        title: "Contact Us | ENT & Rhinoplasty Hub",
        description:
          "Get in touch with ENT & Rhinoplasty Hub for expert care in ENT treatments and rhinoplasty services in Rawalpindi, Pakistan.",
      };
    case "services":
      return {
        title: "Our Services | ENT & Rhinoplasty Hub",
        description:
          "Explore the comprehensive ENT and rhinoplasty services offered by ENT & Rhinoplasty Hub, including advanced surgeries and treatments for ear, nose, and throat care.",
      };
    case "gallery":
      return {
        title: "Gallery | ENT & Rhinoplasty Hub",
        description:
          "Browse through the successful ENT treatments and rhinoplasty transformations performed by Dr. Haitham Akaash at ENT & Rhinoplasty Hub.",
      };
    case "home":
      return {
        title: "ENT & Rhinoplasty Hub | Leading ENT Specialist in Rawalpindi",
        description:
          "Welcome to ENT & Rhinoplasty Hub, led by Dr. Haitham Akaash. We provide expert care in ENT treatments and advanced rhinoplasty procedures to enhance your health and appearance.",
      };
    default:
      return {
        title: "ENT & Rhinoplasty Hub",
        description:
          "Leading ENT and rhinoplasty care by Dr. Haitham Akaash in Rawalpindi, Pakistan. Comprehensive treatments for ear, nose, throat, and facial plastic surgery.",
      };
  }
};
