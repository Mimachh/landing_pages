import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    laravel,
    wordpress,
    shopi,
    react,
    studi,
    buy,
    enjoy,
    sell
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Wordpress Plugin Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const servicesStore = [
    {
      title: "Sell",
      icon: sell,
    },
    {
      title: "Buy",
      icon: buy,
    },
    {
      title: "Enjoy",
      icon: enjoy,
    },
  ];

  const AnimatedNumbersLanding2 = [
    {
      number: 10,
      info: "Years experience",
      sign: "+"
    },
    {
      number: 350,
      info: "Collector products",
      sign: "+"
    },
    {
      number: 45,
      numberPlus: "k",
      info: "Satisfied clients",
      sign: "+"
    },
  ];

  const techno = [
    {
      name: "React + NextJs",
      icon: react,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Shopify",
      icon: shopi,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
  ];
  const experiences = [
    {
      title: "Graduate Developer web full stack",
      company_name: "Studi",
      icon: studi,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js, Next.js, Laravel, Wordpress...",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, 
    experiences, 
    projects,
    servicesStore, 
    techno,
    AnimatedNumbersLanding2
  };