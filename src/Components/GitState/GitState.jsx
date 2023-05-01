import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Container, Heading, Image, Link, Flex, Box } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

function GitState() {

  useEffect(() => {
    AOS.init();
  }, []);
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
        Git Stats
      </Heading>
      <Box data-aos="zoom-out">
        <GitHubCalendar
          style={{
            width: "97%",
            margin: "auto",
            color: "#fff",
            padding: "40px 0",
          }}
          username="AshokPrjapati"
          blockSize={20}
          fontSize={16}
          blockRadius={5}
          blockMargin={6}
          tooltips={true}
          color={"#e11d48"}
          access_token="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"
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </Box>

      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems="center"
        gap="20px"
        padding={"40px 0"}
      >
        <Link
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          href="https://github.com/AshokPrjapati"
          isExternal
        >
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=AshokPrjapati&theme=radical&langs_count=8" />
        </Link>
        <Link
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          href="https://github.com/AshokPrjapati"
          isExternal
        >
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=AshokPrjapati&theme=radical&border_radius=5.8&mode=daily" />
        </Link>
      </Flex>
    </Container>
  );
}

export default GitState;
