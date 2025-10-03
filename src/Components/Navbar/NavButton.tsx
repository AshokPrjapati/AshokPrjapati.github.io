import {
  Button,
  Flex,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import React from "react";
import { ModuleItem, TabOptProps } from "../../types/interface";
import { MODULES_DATA } from "../../constants/constant";
import { getResumeDownloadLink } from "../../utils/commonUtils";
import styles from "./Navbar.module.css";

const NavButton: React.FC<TabOptProps> = ({ toggle }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const commonButtonCss = {
    w: { base: "100%", md: "auto", lg: "auto" },
    variant: "ghost" as const,
    size: "md" as const,
    _hover: {
      bg: "primary",
      color: "white",
      transform: "translateY(-1px)",
    },
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "md",
    fontWeight: "500",
  };

  const renderNavButton = (label: string, onClick?: () => void) => {
    return (
      <Button {...commonButtonCss} onClick={onClick}>
        {label}
      </Button>
    );
  };

  const renderModuleWithLink = (
    module: ModuleItem,
    idx: number
  ): JSX.Element => {
    const handleClick = () => {
      // Close mobile menu immediately
      if (toggle) {
        toggle();
      }
    };

    return (
      <Link
        className=""
        activeClass={styles.activeNavButton}
        to={module.path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        key={idx}
        onClick={handleClick}
      >
        {renderNavButton(module.text)}
      </Link>
    );
  };

  const renderResumeButton = () => {
    const downloadLink = getResumeDownloadLink();
    return (
      <ChakraLink
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

  const renderThemeToggleButton = () => {
    return (
      <Button
        {...commonButtonCss}
        onClick={toggleColorMode}
        aria-label={
          colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    );
  };

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={2}
      textAlign="center"
      p={4}
      width="90%"
      m="auto"
      borderRadius="lg"
    >
      {MODULES_DATA.map((module: ModuleItem, index: number) =>
        renderModuleWithLink(module, index)
      )}
      {renderResumeButton()}
      {renderThemeToggleButton()}
    </Flex>
  );
};

export default NavButton;
