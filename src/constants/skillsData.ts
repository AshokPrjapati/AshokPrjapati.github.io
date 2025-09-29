import { ReactComponent as ReactIcon } from "../images/react.svg";
import { ReactComponent as NextIcon } from "../images/next.svg";
import { ReactComponent as JsIcon } from "../images/js.svg";
import { ReactComponent as CssIcon } from "../images/css.svg";
import { ReactComponent as HtmlIcon } from "../images/html.svg";
import { ReactComponent as TsIcon } from "../images/typescript.svg";
import { ReactComponent as ReduxIcon } from "../images/redux.svg";
import { ReactComponent as ChakraIcon } from "../images/chakra.svg";
import { ReactComponent as RouterIcon } from "../images/react-router-dom.svg";
import { ReactComponent as MongoIcon } from "../images/mongo.svg";
import { ReactComponent as ExpressIcon } from "../images/express.svg";
import { ReactComponent as NodeIcon } from "../images/node-js.svg";
import { ReactComponent as JwtIcon } from "../images/jwt.svg";
import { ReactComponent as GitIcon } from "../images/git.svg";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as VsCodeIcon } from "../images/vs-code.svg";
import { ReactComponent as CypressIcon } from "../images/cypress.svg";
import { ReactComponent as NetlifyIcon } from "../images/netlify.svg";
import { ReactComponent as JsonServerIcon } from "../images/code-json.svg";
// NpmIcon import removed, PNG cannot be imported as ReactComponent
import { ReactComponent as VercelIcon } from "../images/vercel.svg";

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
