import {
  Button,
  Flex,
  Link as ChakraLink,
  useColorMode,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import React from "react";
import { ModuleItem, TabOptProps } from "../../types/interface";
import { MODULES_DATA } from "../../constants/constant";
import { getResumeDownloadLink } from "../../utils/commonUtils";
import { FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";

const NavButton: React.FC<TabOptProps> = ({ toggle }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const commonButtonCss = {
    w: { base: "100%", lg: "auto" },
    variant: "ghost" as const,
    size: "md" as const,
    color: "text-secondary",
    _hover: {
      bg: "primary",
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: "shadow-md",
    },
    _active: {
      transform: "translateY(0)",
    },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "lg",
    fontWeight: "500",
    px: 4,
    py: 2,
  };

  const renderNavButton = (label: string, onClick?: () => void, icon?: any) => {
    return (
      <Button {...commonButtonCss} onClick={onClick} leftIcon={icon}>
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
    const handleClick = () => {
      downloadLink.click();
      if (toggle) {
        toggle();
      }
    };

    return (
      <ChakraLink
        href={"/assets/Ashok-Kumar-Resume.pdf"}
        isExternal={true}
        onClick={handleClick}
        _hover={{ textDecor: "none" }}
      >
        {renderNavButton(
          "Resume",
          undefined,
          <Icon as={FaDownload} w={3} h={3} />
        )}
      </ChakraLink>
    );
  };

  const renderThemeToggleButton = () => {
    const handleClick = () => {
      toggleColorMode();
      if (toggle) {
        toggle();
      }
    };

    return (
      <Button
        {...commonButtonCss}
        onClick={handleClick}
        aria-label={
          colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        bg="card-bg"
        border="1px solid"
        borderColor="border-secondary"
        _hover={{
          bg: "secondary",
          color: "white",
          borderColor: "secondary",
          transform: "translateY(-2px)",
          boxShadow: "shadow-md",
        }}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    );
  };

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 2, lg: 1 }}
      align="center"
      justify="center"
      p={{ base: 6, lg: 4 }}
      w="100%"
    >
      <HStack
        spacing={1}
        wrap={{ base: "wrap", lg: "nowrap" }}
        justify="center"
        w="100%"
      >
        {MODULES_DATA.map((module: ModuleItem, index: number) =>
          renderModuleWithLink(module, index)
        )}

        <HStack spacing={1} ml={{ base: 0, lg: 4 }}>
          {renderResumeButton()}
          {renderThemeToggleButton()}
        </HStack>
      </HStack>
    </Flex>
  );
};

export default NavButton;
