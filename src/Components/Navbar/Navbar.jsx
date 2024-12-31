import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Slide,
  Container,
  Slider,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import TabOpt from "./TabOpt";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box className={styles.sticky} shadow={"lg"}>
        <Container maxW="5xl">
          <Flex
            justify={"space-between"}
            align={"center"}
            height={"65px"}
            width={"100%"}
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
      </Box>
      <Slide
        pos={"absolute"}
        direction="bottom"
        in={isOpen}
        style={{ zIndex: 10 }}
      >
        <Box
          w="90%"
          borderRadius={"5px"}
          m="auto"
          bg={"rgba(0,0,0,0.5)"}
          backdropFilter={"blur(10px)"}
          display={{ base: "auto", lg: "none" }}
        >
          <TabOpt isOpen={isOpen} toggle={onToggle} />
        </Box>

      </Slide >



    </>

  );
}

export default Navbar;