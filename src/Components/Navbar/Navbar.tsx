import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Slide,
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
          userSelect="none"
        >
          <Text color="primary" mr={1}>
            &lt;
          </Text>
          <Text color="primary">Ashok</Text>
          <Text color="secondary">Kumar</Text>
          <Text color="primary" ml={1}>
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
        color="text-primary"
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
          borderRadius="lg"
          m="auto"
          bg="bg-surface"
          backdropFilter="blur(20px)"
          border="1px solid"
          borderColor="border-primary"
          boxShadow="shadow-primary"
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
      as="nav"
      className={styles.navbar}
      px={{ base: 5, md: 10 }}
      shadow="lg"
      justify="space-between"
      align="center"
      height="65px"
      width="100%"
      zIndex={10}
      bg="bg-surface"
      borderBottom="1px solid"
      borderColor="border-primary"
    >
      {renderPortfolioName()}
      {renderMenuButtons()}
      {isOpen ? renderMobileMenuList() : null}
    </Flex>
  );
};

export default Navbar;
