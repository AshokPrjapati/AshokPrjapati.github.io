import { Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import styles from "./Navbar.module.css";
import { ModuleItem, TabOptProps } from "../../types/interface";
import { MODULES } from "../../constants/constant";

const TabOpt: React.FC<TabOptProps> = ({ isOpen, toggle }) => {
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
        <Button
          w={{ base: "100%", md: "auto", lg: "auto" }}
          variant="ghost"
          _hover={{
            bg: "text.3",
            color: "text.1",
            shadow: "0px 0px 10px #e11d48",
          }}
          onClick={toggle}
          zIndex={99}
          color="text.2"
        >
          {module.text}
        </Button>
      </Link>
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
      {MODULES.map((module, index) => renderModuleWithLink(module, index))}

      <ChakraLink
        className={styles.default}
        href={"/assets/Ashok-Kumar-Resume.pdf"}
        isExternal={true}
        onClick={() => {
          const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
          const downloadLink = document.createElement("a");
          downloadLink.href = pdfUrl;
          downloadLink.download = "Ashok-kumar-Resume.pdf";
          downloadLink.click();
        }}
      >
        <Button
          w={{ base: "100%", md: "auto", lg: "auto" }}
          variant="ghost"
          _hover={{
            bg: "text.3",
            color: "text.1",
            shadow: "0px 0px 10px #e11d48",
          }}
          onClick={toggle}
          zIndex={99}
          color="text.2"
        >
          Resume
        </Button>
      </ChakraLink>
    </Flex>
  );
};

export default TabOpt;
