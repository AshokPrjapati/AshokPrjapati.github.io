// ================== Library's imports ================== //
import { ReactElement, useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
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

// ================== Custom Hooks ======================= //

// ================== Assets ============================= //

// ================== Interfaces & Types ================= //

// ================== Constants & Utils ================== //
import { PROFILE_EMAIL } from "../../constants/constant";

// ================== Services =========================== //

// ================== Routes ============================= //

// ================== Components ========================= //
import SectionHeader from "../../Components/SectionHeader";
import { getResumeDownloadLink } from "../../utils/commonUtils";

// ================== Lazy Components ==================== //

export default function Contact() {
  /*
   ===================================================================================================
   Props, Variables, Refs & Hooks
   ===================================================================================================
 */
  const form = useRef<any>({ current: null });
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

  const bgColor = "bg.3";
  const spacing = { base: 4, md: 8, lg: 20 };

  /*
   ===================================================================================================
   States
   ===================================================================================================
 */
  const [loading, setLoading] = useState<boolean>(false);

  /*
   ===================================================================================================
   LifeCycle Methods: 
   ===================================================================================================
 */

  /*
   ===================================================================================================
   Service Calls: For Getting Data from service/API
   ===================================================================================================
 */

  /*
   ===================================================================================================
   Validators:
   ===================================================================================================
 */

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
            title: `${nameValue}, Your message has been sent`,
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
   Helper Functions:
   ===================================================================================================
 */

  /*
   ===================================================================================================
   Sectional Render Functions: For Sub components / section wise renders
   ===================================================================================================
 */

  const renderIconButton = (
    ariaLabel: string,
    icon: ReactElement,
    handleCopy?: () => void
  ) => {
    return (
      <IconButton
        color={"blue.300"}
        aria-label={ariaLabel}
        variant="ghost"
        size="md"
        fontSize="3xl"
        icon={icon}
        _hover={{
          bg: "#fff",
          color: textColor,
        }}
        onClick={handleCopy}
        isRound
        mr="1rem"
      />
    );
  };

  const renderInfoIconButton = (ariaLabel: string, icon: ReactElement) => {
    return (
      <IconButton
        color={"blue.300"}
        aria-label={ariaLabel}
        variant="ghost"
        size="md"
        fontSize="3xl"
        icon={icon}
        _hover={{
          bg: "#fff",
          color: textColor,
        }}
        isRound
      />
    );
  };

  const renderProfileInfo = () => {
    return (
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
            {renderIconButton("email", <MdEmail />, onCopy)}
          </Tooltip>
          <Text color="#fff" display={{ base: "none", md: "flex" }}>
            {PROFILE_EMAIL}
          </Text>
        </Flex>
        <Flex
          fontWeight={"medium"}
          w="100%"
          justifyContent={{ base: "flex-end", md: "flex-start" }}
          alignItems={"center"}
        >
          <Tooltip label={"+91 9799191449"} closeOnClick={false} hasArrow>
            <Link href="tel:+91 9799191449">
              {renderIconButton("phone", <PhoneIcon />)}
            </Link>
          </Tooltip>
          <Text color="#fff" display={{ base: "none", md: "flex" }}>
            +91 9799191449
          </Text>
        </Flex>
      </Flex>
    );
  };

  const renderInfoButtons = () => {
    return (
      <Flex align="center" justify="space-around" alignItems={"center"}>
        <Link href="https://github.com/AshokPrjapati" isExternal>
          {renderInfoIconButton("github", <BsGithub />)}
        </Link>

        <Link
          href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
          isExternal
        >
          {renderInfoIconButton("linkedin", <BsLinkedin size="28px" />)}
        </Link>

        <Tooltip label={"Resume"} closeOnClick={false} hasArrow>
          <Link
            href="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=sharing"
            isExternal
            onClick={() => {
              const downloadLink = getResumeDownloadLink();
              downloadLink.click();
            }}
          >
            {renderInfoIconButton("resume", <FaFilePdf />)}
          </Link>
        </Tooltip>
      </Flex>
    );
  };

  const renderContactForm = () => {
    return (
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
    );
  };

  const renderFooter = () => {
    return (
      <Flex align={"center"} color={"text.1"}>
        Made with 💖 by
        <span
          style={{
            margin: "0 5px",
            color: "#e11d48",
            fontWeight: "bold",
          }}
        >
          Ashok Kumar
        </span>
        {/* <FaCopyright /> 2023 */}
      </Flex>
    );
  };

  /*
   ===================================================================================================
   render main content:
   ===================================================================================================
 */

  return (
    <Flex bg={bgColor} align="center" justify="center" id="contact">
      <Box borderRadius="lg" pb="25px">
        <VStack spacing={spacing}>
          <SectionHeader label="Contact Me" />
          <Box
            bg={"gray.700"}
            borderRadius="lg"
            p={8}
            color={"whiteAlpha.900"}
            shadow="base"
          >
            {renderProfileInfo()}
            <Divider my={"1rem"} />
            {renderContactForm()}
            <Divider my="1rem" />
            {renderInfoButtons()}
          </Box>
          {renderFooter()}
        </VStack>
      </Box>
    </Flex>
  );
}
