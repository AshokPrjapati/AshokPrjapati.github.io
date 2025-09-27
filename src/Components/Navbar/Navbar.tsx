import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Slide,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const renderPortfolioName = () => {
    return (
      <NavLink to="/">
        <Flex
          fontSize="3xl"
          alignItems="center"
          fontFamily="monospace"
          fontWeight={700}
          letterSpacing="wide"
        >
          <Text color="text.1" mr={1}>
            &lt;
          </Text>
          <Text color="text.1">Ashok</Text>
          <Text color="text.3">Kumar</Text>
          <Text color="text.1" ml={1}>
            /&gt;
          </Text>
        </Flex>
      </NavLink>
    );
  };

  const renderMenuButtons = () => {
    return (
      <>
        <Box display={{ base: "none", lg: "flex" }}>
          <NavButton />
        </Box>

        <Box display={{ base: "flex", lg: "none" }}>
          {renderMobileMenuIcon()}
        </Box>
      </>
    );
  };

  const renderMobileMenuIcon = () => {
    return (
      <IconButton
        color="text.1"
        bg="none"
        _hover={{ bg: "none" }}
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant="ghost"
        aria-label="Toggle Navigation"
      />
    );
  };

  const renderMobileMenuList = () => {
    return (
      <Slide direction="bottom">
        <Box
          w="90%"
          borderRadius="5px"
          m="auto"
          bg="rgba(0,0,0,0.5)"
          backdropFilter="blur(10px)"
          display={{ base: "auto", lg: "none" }}
        >
          <NavButton toggle={onToggle} />
        </Box>
      </Slide>
    );
  };

  return (
    <Flex
      maxW="100%"
      px={10 as number}
      className={styles.sticky}
      shadow="lg"
      justify="space-between"
      align="center"
      height="65px"
      width="100%"
      zIndex={10}
    >
      {renderPortfolioName()}
      {renderMenuButtons()}
      {isOpen ? renderMobileMenuList() : null}
    </Flex>
  );
};

export default Navbar;
