export const enum ModuleName {
  HERO = "Hero",
  ABOUT = "About",
  TECHSTACKS = "TechStacks",
  PROJECTS = "Projects",
  GITSTATE = "GitState",
  CONTACT = "Contact",
}

export const MODULES_DATA = [
  {
    path: "home",
    text: "Home",
    componentName: ModuleName.HERO,
  },
  {
    path: "about",
    text: "About",
    componentName: ModuleName.ABOUT,
  },
  {
    path: "skills",
    text: "Skills",
    componentName: ModuleName.TECHSTACKS,
  },
  {
    path: "projects",
    text: "Project",
    componentName: ModuleName.PROJECTS,
  },
  {
    path: "gitState",
    text: "Git Stats",
    componentName: ModuleName.GITSTATE,
  },

  {
    path: "contact",
    text: "Contact",
    componentName: ModuleName.CONTACT,
  },
];

export const tools = [
  {
    icon: "./images/git.svg",
    name: "Git",
  },
  {
    icon: "./images/github.svg",
    name: "Github",
  },
  {
    icon: "./images/vs-code.svg",
    name: "VS-Code",
  },
  {
    icon: "./images/cypress.svg",
    name: "Cypress",
  },

  {
    icon: "./images/netlify.svg",
    name: "Netlify",
  },
  {
    icon: "./images/code-json.svg",
    name: "JSON Server",
  },
  {
    icon: "./images/npm-48.png",
    name: "NPM",
  },
  {
    icon: "./images/vercel.svg",
    name: "Vercel",
  },
];

export const PROFILE_EMAIL = "ashok.prjapati97@gmail.com";
