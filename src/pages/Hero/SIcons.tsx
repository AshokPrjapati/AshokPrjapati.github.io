import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  Tooltip,
  useClipboard,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GITHUB_LINK, PROFILE_EMAIL } from "../../constants/links";

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
        bg="icon-bg"
        color="text-secondary"
        border="1px solid"
        borderColor="border-primary"
        size="lg"
        borderRadius="full"
        boxShadow="icon-shadow"
        icon={icon as ReactElement}
        onClick={handleCopy}
        _hover={{
          bg: "primary",
          color: "white",
          transform: "translateY(-3px)",
          boxShadow: "shadow-primary",
          borderColor: "primary",
        }}
        _active={{
          transform: "translateY(-1px)",
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      />
    );
  };

  return (
    <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
      <Text
        fontSize="sm"
        color="text-secondary"
        fontWeight="500"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Connect with me
      </Text>

      <Flex gap={4} justifyContent={{ base: "center", md: "flex-start" }}>
        <Link href="" isExternal>
          {renderIconButton("LinkedIn Profile", <FaLinkedinIn size={20} />)}
        </Link>
        <Link href={GITHUB_LINK} isExternal>
          {renderIconButton("GitHub Profile", <FaGithub size={20} />)}
        </Link>
        <Tooltip
          label={hasCopied ? "Email Copied!" : "Copy Email"}
          closeOnClick={false}
          hasArrow
          bg="primary"
          color="white"
        >
          {renderIconButton("Copy Email", <EmailIcon w={5} h={5} />, onCopy)}
        </Tooltip>
      </Flex>
    </VStack>
  );
};

export default SIcons;
