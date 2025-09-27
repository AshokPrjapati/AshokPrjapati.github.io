import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Image, Link, Flex, Box } from "@chakra-ui/react";
import SectionHeader from "../../Components/SectionHeader";
import {
  gitContributeStates,
  gitRepoLanguagesStates,
} from "../../constants/constant";

function GitState() {
  const renderGitCalender = () => {
    return (
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
        color={"#e11d48"}
        // access_token="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"
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    );
  };

  const renderGitStateLink = (fadeDirection: string, src: string) => {
    return (
      <Link
        data-aos={fadeDirection}
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        href="https://github.com/AshokPrjapati"
        isExternal
      >
        <Image src={src} />
      </Link>
    );
  };

  const renderGitStates = () => {
    return (
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems="center"
        gap="20px"
        padding={"40px 0"}
      >
        {renderGitStateLink("fade-right", gitRepoLanguagesStates)}
        {renderGitStateLink("fade-left", gitContributeStates)}
      </Flex>
    );
  };

  return (
    <>
      <SectionHeader label=" Git Stats" />
      <Box data-aos="zoom-out">{renderGitCalender()}</Box>
      {renderGitStates()}
    </>
  );
}

export default GitState;
