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
        <Flex display={{ base: "none", lg: "flex" }} color="text.2">
          <NavButton />
        </Flex>
        <Flex
          flex={{ base: 1, lg: "auto" } as any}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
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
        </Flex>
      </>
    );
  };

  const renderMobileMenu = () => {
    return (
      <Slide
        direction="bottom"
        in={isOpen}
        style={{ zIndex: 10, position: "absolute" }}
      >
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
    <>
      <Box className={styles.sticky} shadow="lg">
        <Container maxW="full" px={10}>
          <Flex
            justify="space-between"
            align="center"
            height="65px"
            width="100%"
            zIndex={10}
          >
            {renderPortfolioName()}
            {renderMenuButtons()}
          </Flex>
        </Container>
      </Box>
      {renderMobileMenu()}
    </>
  );
};

export default Navbar;
