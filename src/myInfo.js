export const greetings = {
  name: "Mounir El-Abbas",
  title: "Hello, I'm Mounir",
  description:
    "A self-motivated Front-End Web Developer enthusiastic to apply my obsessive attention to detail to build web applications with JavaScript / ReactJS / Redux / SCSS and some other cool libraries and frameworks I've experimented with on my mission to becoming a well-rounded programmer.",
};

export const socialLinks = {
  github: "https://github.com/MounirEl-Abbas",
  linkedin: "https://www.linkedin.com/in/mounir-el-abbas-04b733212/",
  resume: "https://mounirelabbas.com/static/media/ME-Resume.f22c3498.pdf",
  email: "eamounir1@gmail.com",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "Develop responsive, browser-compatible websites accessible to all",
  skills: [
    {
      icon: "MdWeb",
      info: "Develop Responsive Front End / User Interfaces for your web and mobile applications",
    },
    {
      icon: "SiRedux",
      info: "Utilize React coupled with Redux for efficient and scalable applications",
    },
    {
      icon: "IoIosBrowsers",
      info: "Mindful of browser-compatability as well as persons with disability",
    },
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      skillIcon: "/images/skills/html.webp",
    },
    {
      skillName: "CSS3",
      skillIcon: "/images/skills/css.webp",
    },
    {
      skillName: "JavaScript",
      skillIcon: "/images/skills/javascript.webp",
    },
    {
      skillName: "ReactJS",
      skillIcon: "/images/skills/react.webp",
    },
    {
      skillName: "SASS",
      skillIcon: "/images/skills/sass.webp",
    },

    {
      skillName: "Git",
      skillIcon: "/images/skills/git.webp",
    },
    {
      skillName: "TypeScript",
      skillIcon: "/images/skills/typescript.webp",
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Run Tracker",
    subTitle: "Track your runs and visualize your improvement!",
    description:
      "Track your jogs and get instant feedback including run pace, average distance covered, and total distance ran in the past year.",
    url: "https://me-run-tracker.herokuapp.com/",
    github: "https://github.com/MounirEl-Abbas/runTracker",
    images: [
      "/images/projects/runTracker/runTracker-stats.webp",
      "/images/projects/runTracker/runTracker-runs.webp",
      "/images/projects/runTracker/runTracker-login.webp",
      "/images/projects/runTracker/runTracker-landing.webp",
    ],
  },
  {
    id: 2,
    name: "City Viewer",
    subTitle: "Browse Countries to find real-time data on a city",
    description:
      "Website capable of browsing countries to see real- time events offered by ticketmaster, as well as the current weather, and of course, beautiful images. See Github README for list of APIs used.Created using Create-React-App, Redux, SCSS and React-Router v6",
    url: "https://pseudo-travel-app.netlify.app/",
    github: "https://github.com/MounirEl-Abbas/Travel-portfolio-project",
    images: [
      "/images/projects/cityViewer/cityViewer-hero.webp",
      "/images/projects/cityViewer/cityViewer-pricing.webp",
      "/images/projects/cityViewer/cityViewer-countries.webp",
      "/images/projects/cityViewer/cityViewer-cities.webp",
      "/images/projects/cityViewer/cityViewer-city.webp",
    ],
  },
  {
    id: 3,
    name: "Space Tourism",
    subTitle: "Front-End Mentor FIGMA Design",
    description:
      "This project is a clone of a FIGMA Design provided by Front-End Mentor. You can find a link to the project in the Github README. Created using React & SCSS.",
    url: "https://me-space-tourism.netlify.app/",
    github: "https://github.com/MounirEl-Abbas/space-tourism-FIGMA",
    images: [
      "/images/projects/spaceTourism/hero.webp",
      "/images/projects/spaceTourism/destination.webp",
      "/images/projects/spaceTourism/crew.webp",
      "/images/projects/spaceTourism/tech.webp",
    ],
  },
];

export const educationInfo = [
  // {
  //   id: 1,
  //   schoolName: "TeachyourselfCS",
  //   subHeader: "",
  //   duration: "September 2017 - April 2019",
  //   desc: "Participated in the research of XXX and published 3 papers.",
  //   descBullets: [
  //     "1Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
  //     "2Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   ],
  // },
  {
    id: 2,
    schoolName: "St. Clair College",
    subHeader: "Robotics Programmer",
    duration: "September 2019 - April 2021",
    desc: "Ulitized C# to program ABB robots to perform repeatable tasks with precision.",
    descBullets: ["Excelled at PLC (Programmable Logic Controller)"],
  },
  {
    id: 3,
    schoolName: "University Of Windsor",
    subHeader: "Biological Science",
    duration: "September 2016 - April 2019",
    desc: "Cultivated my concentration with long study hours.",
    descBullets: [
      "Participated in Students Offering Support (SOS) Program",
      "Active part of Science Society",
    ],
  },
];

export const footerInfo = {
  headshot: "/images/me-headshot.webp",
  title: "Reach out to me!",
  subtitle:
    "Discuss a project, collaborate or just want to say hi? Feel free to contact me, I'm very approachable!",
  role: "I'm a Front-End Developer | ReactJS | Typescript",
  location: "Ontario, Canada",
};
