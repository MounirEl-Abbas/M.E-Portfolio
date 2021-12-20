//City Viewer Images
import {
  cityViewerHero,
  cityViewerPricing,
  cityViewerCountries,
  cityViewerCities,
  cityViewerCity,
} from "../../assets";
//Portfolio Images
import {
  portfolioHero,
  portfolioSkills,
  portfolioContact,
  portfolioLighthouse,
} from "../../assets";

import {
  dailyInspirationHero,
  dailyInspirationHeader,
  dailyInspirationMealDrink,
} from "../../assets";

const projects = [
  {
    id: 1,
    name: "City Viewer",
    subTitle: "Browse Countries to find real-time data on a city",
    description:
      "Website capable of browsing countries to see real-time events offered by ticketmaster, as well as the current weather, and of course, beautiful images. Created using Create-React-App, Redux, SCSS and React-Router v6",
    url: "https://pseudo-travel-app.netlify.app/",
    github: "https://github.com/MounirEl-Abbas/Travel-portfolio-project",
    images: [
      cityViewerHero,
      cityViewerPricing,
      cityViewerCountries,
      cityViewerCities,
      cityViewerCity,
    ],
  },

  {
    id: 2,
    name: "Portfolio",
    subTitle: "A little about me, and where to find me",
    description:
      "Feel free to browse my projects and see what I'm capable of. Also do not hesitate to contact me, I'm very approachable!",
    url: "https://www.mounirelabbas.com",
    github: "https://github.com/MounirEl-Abbas/M.E-Portfolio",
    images: [
      portfolioLighthouse,
      portfolioHero,
      portfolioSkills,
      portfolioContact,
    ],
  },
  {
    id: 2,
    name: "Daily Inspiration",
    subTitle: "Randomized quotes, sayings and more.",
    description:
      "Utilizing 9 different APIs, this website is never the same! On every refresh you will be inspired by quotes, images, affirmations and more!",
    url: "https://me-time.netlify.app/",
    github: "https://github.com/MounirEl-Abbas/daily-inspiration",
    images: [
      dailyInspirationHero,
      dailyInspirationHeader,
      dailyInspirationMealDrink,
    ],
  },
];

export default projects;
