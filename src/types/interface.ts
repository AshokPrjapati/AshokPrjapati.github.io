export interface ModuleItem {
  path: string;
  text: string;
}

export interface TabOptProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export interface Skill {
  icon: string;
  name: string;
}

export interface Tool {
  icon: string;
  name: string;
}

export interface ConfettiColors {
  primary: string;
  secondary: string;
}

export interface Confetti {
  light: ConfettiColors;
  dark: ConfettiColors;
}

export interface ProjectData {
  id: number;
  name: string;
  src: string;
  discription: string;
  techStack: string;
  detail: string;
  sourceCode: string;
  liveLink: string;
}
