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

export const gitRepoLanguagesStates =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=AshokPrjapati&theme=radical&langs_count=8";
export const gitContributeStates =
  "https://github-readme-streak-stats.herokuapp.com?user=AshokPrjapati&theme=radical&border_radius=5.8&mode=daily";

export const PROFILE_EMAIL = "ashok.prjapati97@gmail.com";
