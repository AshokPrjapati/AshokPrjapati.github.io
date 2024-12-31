import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function SIcons() {
  const { hasCopied, onCopy } = useClipboard("ashok.prjapati97@gmail.com");
  return (
    <Flex gap={{ base: 4, sm: 6 }} justify={{ base: "center", md: "left" }}>
      <Link
        href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
        isExternal
      >
        <IconButton
          bg="inherit"
          color="text.3"
          border="1px solid"
          borderColor="text.3"
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<FaLinkedinIn />}
          _hover={
            {
              bg: "text.3",
              color: "#fff"
            }
          }
        />
      </Link>
      <Link href="https://github.com/AshokPrjapati" isExternal>
        <IconButton
          bg="inherit"
          color="text.3"
          border="1px solid"
          borderColor="text.3"
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<FaGithub />}
          _hover={
            {
              bg: "text.3",
              color: "#fff"
            }
          }
        />
      </Link>
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          bg="inherit"
          color="text.3"
          border="1px solid"
          borderColor="text.3"
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          icon={<EmailIcon />}
          onClick={onCopy}
          _hover={
            {
              bg: "text.3",
              color: "#fff"
            }
          }
        />
      </Tooltip>
    </Flex>
  );
}

export default SIcons;