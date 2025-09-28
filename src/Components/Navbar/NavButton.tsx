import {
  Button,
  Flex,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import React from "react";
import styles from "./Navbar.module.css";
import { ModuleItem, TabOptProps } from "../../types/interface";
import { MODULES_DATA } from "../../constants/constant";
import { getResumeDownloadLink } from "../../utils/commonUtils";

const NavButton: React.FC<TabOptProps> = ({ toggle }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const renderNavButton = (label: string) => {
    return (
      <Button
        w={{ base: "100%", md: "auto", lg: "auto" }}
        variant="ghost"
        _hover={{
          bg: "secondary",
          color: "background",
          shadow: "0px 0px 10px var(--color-secondary)",
        }}
        onClick={toggle}
        zIndex={99}
        color="primary"
      >
        {label}
      </Button>
    );
  };

  const renderModuleWithLink = (module: ModuleItem, idx: number) => {
    return (
      <Link
        className={styles.default}
        activeClass={styles.active}
        to={module.path}
        spy={true}
        smooth={true}
        offset={0}
        duration={750}
        key={idx}
      >
        {renderNavButton(module.text)}
      </Link>
    );
  };

  const renderResumeButton = () => {
    const downloadLink = getResumeDownloadLink();
    return (
      <ChakraLink
        className={styles.default}
        href={"/assets/Ashok-Kumar-Resume.pdf"}
        isExternal={true}
        onClick={() => {
          downloadLink.click();
        }}
      >
        {renderNavButton("Resume")}
      </ChakraLink>
    );
  };

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={2}
      textAlign="center"
      p="10px 15px"
      width="90%"
      m="auto"
      borderRadius="10px"
    >
      {MODULES_DATA.map((module, index) => renderModuleWithLink(module, index))}
      {renderResumeButton()}
      <Button
        size="sm"
        onClick={toggleColorMode}
        colorScheme={colorMode === "light" ? "blue" : "cyan"}
        variant="outline"
        aria-label={
          colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        mt={1}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default NavButton;
