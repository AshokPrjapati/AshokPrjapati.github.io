import { EmailIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function SIcons() {
  return (
    <Flex gap={{ base: 4, sm: 6 }} justify={{ base: "center", md: "left" }}>
      <Link
        href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
        isExternal
      >
        <IconButton
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<FaLinkedinIn />}
        />
      </Link>
      <Link href="https://github.com/AshokPrjapati" isExternal>
        <IconButton
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<FaGithub />}
        />
      </Link>
      <Link href="ap271449@gmail.com" isExternal>
        <IconButton
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<EmailIcon />}
        />
      </Link>
    </Flex>
  );
}

export default SIcons;
