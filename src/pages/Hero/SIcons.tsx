import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PROFILE_EMAIL } from "../../constants/constant";

const SIcons: React.FC = () => {
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

  const renderIconButton = (
    ariaLabel: string,
    icon: ReactElement,
    handleCopy?: () => void
  ) => {
    return (
      <IconButton
        aria-label={ariaLabel}
        bg="inherit"
        color="text.3"
        border="1px solid"
        borderColor="text.3"
        size={"lg"}
        fontWeight={"normal"}
        px={6}
        icon={icon as ReactElement}
        onClick={handleCopy}
        _hover={{
          bg: "secondary",
          color: "text-secondary",
        }}
      />
    );
  };

  return (
    <Flex
      gap={{ base: 4, sm: 6 }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Link
        href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
        isExternal
      >
        {renderIconButton("LinkedIn Profile", <FaLinkedinIn />)}
      </Link>
      <Link href="https://github.com/AshokPrjapati" isExternal>
        {renderIconButton("GitHub Profile", <FaGithub />)}
      </Link>
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        {renderIconButton("Copy Email", <EmailIcon />, onCopy)}
      </Tooltip>
    </Flex>
  );
};

export default SIcons;
