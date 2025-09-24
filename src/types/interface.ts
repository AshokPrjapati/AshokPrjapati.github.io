export interface ModuleItem {
  path: string;
  text: string;
}

export interface TabOptProps {
  isOpen?: boolean;
  toggle?: () => void;
}
