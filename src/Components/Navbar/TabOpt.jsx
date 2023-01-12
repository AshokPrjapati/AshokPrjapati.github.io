import { Button, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "#home",
    text: "Home",
  },
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#skills",
    text: "Skills",
  },
  {
    path: "#projects",
    text: "Project",
  },
  {
    path: "#contact",
    text: "Contact & Resume",
  },
];

function TabOpt({ isOpen, toggle }) {
  const [active, setActive] = useState("home");
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
        <Link
          key={i}
          className={active === link.path ? styles.active : styles.default}
          href={link.path}
          onClick={() => setActive(link.path)}
          scrollBehavior={"smooth"}
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
        </Link>
      ))}
    </Flex>
  );
}

export default TabOpt;
