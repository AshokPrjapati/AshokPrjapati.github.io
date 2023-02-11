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
import TabOpt from "./TabOpt";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box className={styles.sticky} bg={"bg.1"}>
      <Container maxW="5xl">
        <Flex
          justify={"space-between"}
          align={"center"}
          height={"60px"}
          width={"100%"}
          shadow={"lg"}
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
            <Flex display={{ base: "none", lg: "flex" }} color={"text.2"}>
              <TabOpt />
            </Flex>
            <Flex
              flex={{ base: 1, lg: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", lg: "none" }}
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
      </Container>

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
