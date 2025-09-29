import { ReactComponent as ReactIcon } from "../images/techIcons/react.svg";
import { ReactComponent as NextIcon } from "../images/techIcons/next.svg";
import { ReactComponent as JsIcon } from "../images/techIcons/js.svg";
import { ReactComponent as CssIcon } from "../images/techIcons/css.svg";
import { ReactComponent as HtmlIcon } from "../images/techIcons/html.svg";
import { ReactComponent as TsIcon } from "../images/techIcons/typescript.svg";
import { ReactComponent as ReduxIcon } from "../images/techIcons/redux.svg";
import { ReactComponent as ChakraIcon } from "../images/techIcons/chakra.svg";
import { ReactComponent as RouterIcon } from "../images/techIcons/react-router-dom.svg";
import { ReactComponent as MongoIcon } from "../images/techIcons/mongo.svg";
import { ReactComponent as ExpressIcon } from "../images/techIcons/express.svg";
import { ReactComponent as NodeIcon } from "../images/techIcons/node-js.svg";
import { ReactComponent as JwtIcon } from "../images/techIcons/jwt.svg";
import { ReactComponent as GitIcon } from "../images/techIcons/git.svg";
import { ReactComponent as GithubIcon } from "../images/techIcons/github.svg";
import { ReactComponent as VsCodeIcon } from "../images/techIcons/vs-code.svg";
import { ReactComponent as CypressIcon } from "../images/techIcons/cypress.svg";
import { ReactComponent as NetlifyIcon } from "../images/techIcons/netlify.svg";
import { ReactComponent as JsonServerIcon } from "../images/techIcons/code-json.svg";
// NpmIcon import removed, PNG cannot be imported as ReactComponent
import { ReactComponent as VercelIcon } from "../images/techIcons/vercel.svg";

export const FE_SKILLS = [
  { icon: ReactIcon, name: "React.js" },
  { icon: NextIcon, name: "Next.js" },
  { icon: JsIcon, name: "JavaScript" },
  { icon: CssIcon, name: "CSS3" },
  { icon: HtmlIcon, name: "HTML" },
  { icon: TsIcon, name: "TypeScript" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: ChakraIcon, name: "Chakra-UI" },
  { icon: RouterIcon, name: "React Router Dom" },
];

export const BE_SKILLS = [
  { icon: MongoIcon, name: "MongoDB" },
  { icon: ExpressIcon, name: "Express.js" },
  { icon: NodeIcon, name: "Node.js" },
  // For Mongoose, you may need to download the favicon and import it as SVG
  { icon: JwtIcon, name: "JWT Auth" },
];

export const TOOLS_SKILLS = [
  { icon: GitIcon, name: "Git" },
  { icon: GithubIcon, name: "Github" },
  { icon: VsCodeIcon, name: "VS-Code" },
  { icon: CypressIcon, name: "Cypress" },
  { icon: NetlifyIcon, name: "Netlify" },
  { icon: JsonServerIcon, name: "JSON Server" },
  // { icon: NpmIcon, name: "NPM" },
  { icon: VercelIcon, name: "Vercel" },
];
