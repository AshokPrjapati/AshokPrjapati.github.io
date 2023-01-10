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
import TabOpt from "./TabOpt";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box className={styles.sticky}>
      <Flex
        justify={"space-around"}
        align={"center"}
        p={"0 15px"}
        height={"60px"}
        width={"100%"}
        shadow={"lg"}
        bg={"bg.1"}
        zIndex={10}
      >
        <NavLink to={"/"}>
          <Flex
            fontSize={"3xl"}
            fontFamily={"Roboto"}
            fontWeight={500}
            color={"text.1"}
          >
            <Text color={"text.1"}>Ashok</Text>
            <Text color={"text.3"}>{" Kumar"}</Text>
          </Flex>
        </NavLink>

        <Box>
          <Flex
            display={{ base: "none", md: "flex", lg: "flex" }}
            color={"text.2"}
          >
            <TabOpt />
          </Flex>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              color={"text.1"}
              bg={"none"}
              _hover={{ bg: "none" }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Box>
      </Flex>

      <Slide
        pos={"absolute"}
        direction="bottom"
        in={isOpen}
        style={{ zIndex: 10 }}
      >
        <TabOpt isOpen={isOpen} toggle={onToggle} />
      </Slide>
    </Box>
  );
}

export default Navbar;
