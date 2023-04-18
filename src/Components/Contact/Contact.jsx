import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { PhoneIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";
import { CONFETTI_DARK, CONFETTI_LIGHT } from "../../Theme/config";

const initialData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setformData] = useState(initialData);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    let val = e.target.value;
    setformData({ ...formData, [e.target.name]: val });
  };

  const sendEmail = async () => {
    console.log(formData);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  const { hasCopied, onCopy } = useClipboard("ashok.prjapati97@gmail.com");

  return (
    <Flex
      bg={"gray.900"}
      align="center"
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_DARK, CONFETTI_LIGHT),
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box borderRadius="lg" pb="25px">
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              w={"max-content"}
              p={"60px 10px 10px 10px"}
              m="auto"
              textAlign={"center"}
              color={"text.1"}
              fontWeight={500}
              borderBottom="3px solid #e11d48"
            >
              Contact Me
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Box align="center">
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      color={"text.1"}
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("gray.700", "white"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
                  <Text color="blue.400" display={{ base: "none", md: "flex" }}>
                    ashok.prjapati97@gmail.com
                  </Text>
                </Box>
                <Link href="https://github.com/AshokPrjapati" isExternal>
                  <IconButton
                    color={"text.1"}
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("gray.700", "white"),
                    }}
                    isRound
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
                  isExternal
                >
                  <IconButton
                    color={"text.1"}
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("gray.700", "white"),
                    }}
                    isRound
                  />
                </Link>
                <Box align="center">
                  <Tooltip
                    label={"+91 9799191449"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <Link href="tel:+91 9799191449">
                      <IconButton
                        color={"text.1"}
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        icon={<PhoneIcon size="28px" />}
                        _hover={{
                          bg: "blue.500",
                          color: useColorModeValue("gray.700", "white"),
                        }}
                        isRound
                      />
                    </Link>
                  </Tooltip>
                  <Text color="blue.400" display={{ base: "none", md: "flex" }}>
                    +91 9799191449
                  </Text>
                </Box>

                <Tooltip label={"Resume"} closeOnClick={false} hasArrow>
                  <Link
                    href="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=sharing"
                    isExternal
                    onClick={() => {
                      const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
                      const downloadLink = document.createElement("a");
                      downloadLink.href = pdfUrl;
                      downloadLink.download = "fw21_0784-Ashok-kumar-Resume.pdf";
                      downloadLink.click();
                    }}
                  >
                    <IconButton
                      color={"text.1"}
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaFilePdf />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("gray.700", "white"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
              </Stack>

              <Box
                bg={"gray.700"}
                borderRadius="lg"
                p={8}
                color={"whiteAlpha.900"}
                shadow="base"
              >
                <form
                  //   action="https://script.google.com/macros/s/AKfycbz5WemVKBSKCBIfm8kbVATI-qxLPCOuMuwGeC748b5kGAaa6EIUnfjr4UjY6KIQ0bIM/exec"
                  id="gform"
                  method="POST"
                >
                  {" "}
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Your Name"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Your Email"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={message}
                        resize="none"
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      isFullWidth
                      onClick={sendEmail}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
            {/* <Flex align={"center"} color={"text.1"}>
              Designed and build by{" "}
              <span style={{ margin: "0 5px", color: "#e11d48" }}>
                {" "}
                Ashok Kumar{" "}
              </span>{" "}
              <FaCopyright /> 2023
            </Flex> */}
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
