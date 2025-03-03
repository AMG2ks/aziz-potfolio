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
  angular,
  django,
  tailwind,
  nodejs,
  postgres,
  git,
  rabbitmq,
  docker,
  iot,
  iot2,
  berrysign,
  jobit,
  tripguide,
  threejs,
  digismart,
  digitalberry,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "rabbitmq",
    icon: rabbitmq,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Django Angular Developer - Intern",
    company_name: "Digi smart solutions",
    icon: digismart,
    iconBg: "#383E56",
    date: "Juin 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Building user interfaces using Angular and other front-end technologies.",
      "Building RESTful APIs and integrating third-party services.",
      "Creating and maintaining documentation for projects."
    ],
  },
  {
    title: "Full stack Developer - intern",
    company_name: "Digitalberry",
    icon: digitalberry,
    iconBg: "#E6DEDD",
    date: "February 2023 - Mai 2023",
    points: [
      "Building a Digital-Signature platform using Django, Angular, and Rabbitmq.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing a microservice architecture using Docker.",
      "Implementing a real-time notification system using Rabbitmq.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "Digitalberry",
    icon: digitalberry,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and Securing Microservices – Design, implement, and optimize secure microservices architectures, ensuring seamless integration with authentication systems like Keycloak.",
      "Certificate and Token Management – Work on BerryCert and the new token management platform, handling TLS credentials, YubiKey, and SafeNet integrations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Performance Optimization & Automation – Enhance system performance by optimizing API calls, implementing multi-threading, and automating key workflows for improved efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IOT device monitoring dashboard",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "chartJS",
        color: "green-text-gradient",
      },
    ],
    image: iot,
    source_code_link: "https://github.com/DigiSmartSolutions",
  },
  {
    name: "BerrySign",
    description:
      "berrySign is a digital signature platform that allows users to sign documents electronically, streamlining the document signing process and reducing paper waste.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "green-text-gradient",
      },
    ],
    image: berrysign,
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

export { services, technologies, experiences, testimonials, projects };
