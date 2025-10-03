// ================== Library's imports ================== //
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
  HStack,
  useToast,
  Container,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsPhone } from "react-icons/bs";
import { MdEmail, MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaFilePdf, FaPaperPlane } from "react-icons/fa";

// ================== Constants & Utils ================== //
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  PROFILE_EMAIL,
  RESUME_DRIVE_LINK,
} from "../../constants/links";

// ================== Components ========================= //
import SectionHeader from "../../Components/SectionHeader";
import { getResumeDownloadLink } from "../../utils/commonUtils";

export default function Contact() {
  /*
   ===================================================================================================
   Props, Variables, Refs & Hooks
   ===================================================================================================
 */
  const form = useRef<any>({ current: null });
  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

  /*
   ===================================================================================================
   States
   ===================================================================================================
 */
  const [loading, setLoading] = useState<boolean>(false);

  /*
   ===================================================================================================
   Handlers: Event handler for onChange, onBlur etc
   ===================================================================================================
 */

  const sendEmail = (e: any) => {
    e.preventDefault();

    const { name, email, message } = form.current ?? {};
    // input data
    let nameValue = name.value;
    let emailValue = email.value;
    let messageValue = message.value;

    // check for empty fields
    if (!nameValue || !emailValue || !messageValue) {
      return toast({
        title: "Please, Fill all fields",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }

    // check for valid email
    if (!emailValue.includes("@") || !emailValue.includes(".com")) {
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
            title: `${nameValue}, Your message has been sent successfully!`,
            description: "I'll get back to you within 24 hours.",
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

  /*
   ===================================================================================================
   Sectional Render Functions: For Sub components / section wise renders
   ===================================================================================================
 */

  const renderContactInfo = () => {
    const contactItems = [
      {
        icon: MdEmail,
        label: "Email",
        value: PROFILE_EMAIL,
        action: onCopy,
        tooltip: hasCopied ? "Email Copied!" : "Click to copy email",
        color: "primary",
      },
      {
        icon: BsPhone,
        label: "Phone",
        value: "+91 9799191449",
        href: "tel:+919799191449",
        tooltip: "Click to call",
        color: "secondary",
      },
      {
        icon: MdLocationOn,
        label: "Location",
        value: "Bangalore, India",
        tooltip: "Based in Bangalore",
        color: "accent",
      },
    ];

    return (
      <Card
        bg="bg-surface"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        p={8}
      >
        <VStack spacing={6}>
          <VStack spacing={2} textAlign="center">
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="text-primary"
            >
              Let's Connect
            </Heading>
            <Text fontSize="md" color="text-secondary" maxW="300px">
              Feel free to reach out for collaborations or just a friendly hello
            </Text>
          </VStack>

          <VStack spacing={4} w="100%">
            {contactItems.map((item, index) => (
              <Tooltip key={index} label={item.tooltip} hasArrow>
                <Box
                  as={item.href ? Link : Box}
                  href={item.href}
                  onClick={item.action}
                  w="100%"
                  p={4}
                  bg="card-bg"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="border-secondary"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: item.color,
                    bg: "card-hover",
                    transform: "translateY(-2px)",
                    cursor: item.href || item.action ? "pointer" : "default",
                  }}
                >
                  <HStack spacing={4}>
                    <Icon as={item.icon} w={5} h={5} color={item.color} />
                    <VStack spacing={1} align="start" flex={1}>
                      <Text
                        fontSize="sm"
                        color="text-muted"
                        fontWeight="medium"
                      >
                        {item.label}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="text-primary"
                        fontWeight="medium"
                      >
                        {item.value}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Tooltip>
            ))}
          </VStack>
        </VStack>
      </Card>
    );
  };

  const renderSocialLinks = () => {
    const socialLinks = [
      {
        icon: BsGithub,
        label: "GitHub",
        href: GITHUB_LINK,
        color: "primary",
        description: "View my repositories",
      },
      {
        icon: BsLinkedin,
        label: "LinkedIn",
        href: LINKEDIN_LINK,
        color: "secondary",
        description: "Connect professionally",
      },
      {
        icon: FaFilePdf,
        label: "Resume",
        href: RESUME_DRIVE_LINK,
        color: "accent",
        description: "Download my CV",
        onClick: () => {
          const downloadLink = getResumeDownloadLink();
          downloadLink.click();
        },
      },
    ];

    return (
      <Card
        bg="bg-surface"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        p={8}
      >
        <VStack spacing={6}>
          <VStack spacing={2} textAlign="center">
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="text-primary"
            >
              Social Links
            </Heading>
            <Text fontSize="md" color="text-secondary">
              Find me on these platforms
            </Text>
          </VStack>

          <VStack spacing={4} w="100%">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                isExternal
                w="100%"
                _hover={{ textDecor: "none" }}
                onClick={social.onClick}
              >
                <Box
                  p={4}
                  bg="card-bg"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="border-secondary"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: social.color,
                    bg: "card-hover",
                    transform: "translateY(-2px)",
                  }}
                  w="100%"
                >
                  <HStack spacing={4}>
                    <Icon as={social.icon} w={6} h={6} color={social.color} />
                    <VStack spacing={1} align="start" flex={1}>
                      <Text
                        fontSize="md"
                        color="text-primary"
                        fontWeight="bold"
                      >
                        {social.label}
                      </Text>
                      <Text fontSize="sm" color="text-muted">
                        {social.description}
                      </Text>
                    </VStack>
                    <Badge
                      bg={social.color}
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                    >
                      Visit
                    </Badge>
                  </HStack>
                </Box>
              </Link>
            ))}
          </VStack>
        </VStack>
      </Card>
    );
  };

  const renderContactForm = () => {
    return (
      <Card
        bg="bg-surface"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
      >
        <CardBody p={8}>
          <VStack spacing={6}>
            <VStack spacing={2} textAlign="center">
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="text-primary"
              >
                Send me a message
              </Heading>
            </VStack>

            <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
              <VStack spacing={6} w="100%">
                <FormControl isRequired>
                  <FormLabel color="text-primary" fontWeight="medium">
                    Full Name
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BsPerson} color="text-muted" />
                    </InputLeftElement>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      bg="card-bg"
                      border="1px solid"
                      borderColor="border-secondary"
                      _hover={{
                        borderColor: "primary",
                      }}
                      _focus={{
                        borderColor: "primary",
                        boxShadow: "0 0 0 1px var(--chakra-colors-primary)",
                      }}
                      borderRadius="lg"
                      size="lg"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="text-primary" fontWeight="medium">
                    Email Address
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MdOutlineEmail} color="text-muted" />
                    </InputLeftElement>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      bg="card-bg"
                      border="1px solid"
                      borderColor="border-secondary"
                      _hover={{
                        borderColor: "primary",
                      }}
                      _focus={{
                        borderColor: "primary",
                        boxShadow: "0 0 0 1px var(--chakra-colors-primary)",
                      }}
                      borderRadius="lg"
                      size="lg"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="text-primary" fontWeight="medium">
                    Message
                  </FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    resize="none"
                    bg="card-bg"
                    border="1px solid"
                    borderColor="border-secondary"
                    _hover={{
                      borderColor: "primary",
                    }}
                    _focus={{
                      borderColor: "primary",
                      boxShadow: "0 0 0 1px var(--chakra-colors-primary)",
                    }}
                    borderRadius="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={loading}
                  loadingText="Sending..."
                  leftIcon={<FaPaperPlane />}
                  size="lg"
                  bg="primary"
                  color="white"
                  _hover={{
                    bg: "secondary",
                    transform: "translateY(-2px)",
                    boxShadow: "shadow-primary",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.3s ease"
                  borderRadius="xl"
                  width="100%"
                  fontSize="md"
                  fontWeight="medium"
                  py={6}
                  onClick={sendEmail}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </VStack>
        </CardBody>
      </Card>
    );
  };

  const renderFooter = () => {
    return (
      <Box
        mt={20}
        pt={8}
        borderTop="1px solid"
        borderColor="border-primary"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Text color="text-secondary" fontSize="md">
            Made with 💖 by{" "}
            <Text as="span" color="primary" fontWeight="bold">
              Ashok Kumar
            </Text>
          </Text>
          {/* <Text color="text-muted" fontSize="sm">
            © 2025 All rights reserved
          </Text> */}
        </VStack>
      </Box>
    );
  };

  /*
   ===================================================================================================
   render main content:
   ===================================================================================================
 */

  return (
    <Container maxW="8xl" py={20} id="contact">
      <SectionHeader label="Get In Touch" />

      <VStack spacing={16} mt={16}>
        {/* Hero Section */}
        <VStack spacing={4} textAlign="center" maxW="600px">
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="text-primary"
            lineHeight="1.2"
          >
            Ready to start a{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, primary, secondary, accent)"
              bgClip="text"
            >
              project together?
            </Text>
          </Heading>
          <Text fontSize="lg" color="text-secondary" lineHeight="1.7">
            I'm always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, I'll try my best to get back to you!
          </Text>
        </VStack>

        {/* Contact Content */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="100%">
          {/* Contact Form - Takes 2 columns on large screens */}
          <Box gridColumn={{ base: "1", lg: "1 / 3" }}>
            {renderContactForm()}
          </Box>

          {/* Sidebar with contact info and social links */}
          <VStack spacing={8}>
            {renderContactInfo()}
            {renderSocialLinks()}
          </VStack>
        </SimpleGrid>

        {renderFooter()}
      </VStack>
    </Container>
  );
}
