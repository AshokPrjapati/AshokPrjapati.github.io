import React from "react";
import { Container, Heading } from "@chakra-ui/react";

const TechStacks = () => {
  return (
    <Container maxW={"5xl"}>
      <Heading
        w={"max-content"}
        m="auto"
        textAlign={"center"}
        p={"60px 10px 10px 10px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="3px solid #e11d48"
      >
        About
      </Heading>
    </Container>
  );
};

export default TechStacks;
