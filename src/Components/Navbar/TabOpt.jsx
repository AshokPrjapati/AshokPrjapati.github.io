import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/skills",
    text: "Skills",
  },
  {
    path: "/projects",
    text: "Project",
  },
  {
    path: "/contact",
    text: "Contact & Resume",
  },
];

function TabOpt({ isOpen, toggle }) {
  return (
    <Flex
      direction={{ base: "column", md: "row", lg: "row" }}
      gap="2"
      dir="column"
      textAlign={"center"}
      p={"10px 0"}
      width={"90%"}
      m={"auto"}
      borderRadius={"10px"}
      bg={"bg.1"}
      color={"text.2"}
    >
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.path}
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
        >
          <Button
            w={{ base: "100%", md: "auto", lg: "auto" }}
            bg="none"
            _hover={{
              bg: "text.3",
              color: "text.1",
              shadow: "0px 0px 10px #e11d48",
            }}
            onClick={toggle}
            z-index={99}
          >
            {link.text}
          </Button>
        </NavLink>
      ))}
    </Flex>
  );
}

export default TabOpt;
