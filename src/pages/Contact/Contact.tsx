import { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaFilePdf } from "react-icons/fa";
import SectionHeader from "../../Components/SectionHeader";

export default function Contact() {
  // form reference
  const form = useRef<any>({ current: null });
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // input data
    let name = form.current.name.value;
    let email = form.current.email.value;
    let message = form.current.message.value;

    // check for empty fields
    if (!name || !email || !message) {
      return toast({
        title: "Please, Fill all fields",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }

    // check for valid email
    if (!email.includes("@") || !email.includes(".com")) {
      return toast({
        title: "Invalid email",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }

    setLoading(true);

    // send email
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          toast({
            title: `${name}, Your message has been sent`,
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast({
            title: "Something went wrong, Please try again after some time",
            status: "error",
            duration: 6000,
            isClosable: true,
          });
          setLoading(false);
        }
      );
  };

  const { hasCopied, onCopy } = useClipboard("ashok.prjapati97@gmail.com");

  const bgColor = "bg.3";
  const spacing = { base: 4, md: 8, lg: 20 };

  return (
    <Flex bg={bgColor} align="center" justify="center" id="contact">
      <Box borderRadius="lg" pb="25px">
        <Box>
          <VStack spacing={spacing}>
            <SectionHeader label="Contact Me" />
            <Box
              bg={"gray.700"}
              borderRadius="lg"
              p={8}
              color={"whiteAlpha.900"}
              shadow="base"
            >
              <Flex
                align="center"
                justify="space-around"
                alignItems={"center"}
                direction={{ base: "row", md: "column" }}
              >
                <Flex
                  fontWeight={"medium"}
                  w="100%"
                  justifyContent="flex-start"
                  alignItems={"center"}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      color={"blue.300"}
                      aria-label="email"
                      variant="ghost"
                      size="md"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "#fff",
                        color: useColorModeValue("gray.700", "white"),
                      }}
                      onClick={onCopy}
                      isRound
                      mr="1rem"
                    />
                  </Tooltip>
                  <Text color="#fff" display={{ base: "none", md: "flex" }}>
                    ashok.prjapati97@gmail.com
                  </Text>
                </Flex>
                <Flex
                  fontWeight={"medium"}
                  w="100%"
                  justifyContent={{ base: "flex-end", md: "flex-start" }}
                  alignItems={"center"}
                >
                  <Tooltip
                    label={"+91 9799191449"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <Link href="tel:+91 9799191449">
                      <IconButton
                        color={"blue.300"}
                        aria-label="twitter"
                        variant="ghost"
                        size="md"
                        fontSize="28px"
                        mr="1rem"
                        icon={<PhoneIcon />}
                        _hover={{
                          bg: "#fff",
                          color: useColorModeValue("gray.700", "white"),
                        }}
                        isRound
                      />
                    </Link>
                  </Tooltip>
                  <Text color="#fff" display={{ base: "none", md: "flex" }}>
                    +91 9799191449
                  </Text>
                </Flex>
              </Flex>
              <Divider my={"1rem"} />
              <form ref={form} onSubmit={sendEmail}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input id="name" type="text" name="name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input id="email" type="email" name="email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    isLoading={loading}
                    loadingText="Please wait.."
                    type="submit"
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    width="100%"
                    onClick={sendEmail}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
              <Divider my="1rem" />
              <Flex align="center" justify="space-around" alignItems={"center"}>
                <Link href="https://github.com/AshokPrjapati" isExternal>
                  <IconButton
                    color={"blue.300"}
                    aria-label="github"
                    variant="ghost"
                    size="md"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "#fff",
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
                    color={"blue.300"}
                    aria-label="linkedin"
                    variant="ghost"
                    size="md"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "#fff",
                      color: useColorModeValue("gray.700", "white"),
                    }}
                    isRound
                  />
                </Link>

                <Tooltip label={"Resume"} closeOnClick={false} hasArrow>
                  <Link
                    href="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=sharing"
                    isExternal
                    onClick={() => {
                      const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
                      const downloadLink = document.createElement("a");
                      downloadLink.href = pdfUrl;
                      downloadLink.download =
                        "fw21_0784-Ashok-kumar-Resume.pdf";
                      downloadLink.click();
                    }}
                  >
                    <IconButton
                      color={"blue.300"}
                      aria-label="email"
                      variant="ghost"
                      size="md"
                      fontSize="3xl"
                      icon={<FaFilePdf />}
                      _hover={{
                        bg: "#fff",
                        color: useColorModeValue("gray.700", "white"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
              </Flex>
            </Box>

            <Flex align={"center"} color={"text.1"}>
              Made with 💖 by{" "}
              <span
                style={{
                  margin: "0 5px",
                  color: "#e11d48",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Ashok Kumar{" "}
              </span>{" "}
              {/* <FaCopyright /> 2023 */}
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
