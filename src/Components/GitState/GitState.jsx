import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import {
  Container,
  Stack,
  Box,
  Center,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Divider,
  Button,
  Link,
  Grid,
  Flex,
} from "@chakra-ui/react";

function GitState() {
  return (
    <Container maxW={"5xl"}>
      <Heading
        textAlign={"center"}
        pt={"60px"}
        pb={"15px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="2px solid #e11d48"
      >
        Git States
      </Heading>

      <GitHubCalendar
        style={{ width: "100%", color: "#fff", padding: "40px 0" }}
        username="AshokPrjapati"
        blockSize={20}
        fontSize={20}
        blockRadius={5}
        blockMargin={6}
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        gap="10px"
        padding={"40px 0"}
      >
        <Link href="https://github.com/AshokPrjapati" isExternal>
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=AshokPrjapati&theme=radical&langs_count=8" />
        </Link>
        <Link href="https://github.com/AshokPrjapati" isExternal>
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=AshokPrjapati&theme=radical&border_radius=5.8&mode=weekly" />
        </Link>
      </Flex>
    </Container>
  );
}

export default GitState;
