// ================== Library's imports ================== //
import { useState, useRef } from "react";
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
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

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
    icon: JSX.Element,
    handleCopy?: () => void
  ) => {
    return (
      <IconButton
        color={"secondary"}
        aria-label={ariaLabel}
        variant="ghost"
        size="md"
        fontSize="3xl"
        icon={icon}
        _hover={{
          bg: "secondary",
          color: "text-primary",
        }}
        onClick={handleCopy}
        isRound
        mr="1rem"
        p="20px"
        w="100%"
      />
    );
  };

  const renderInfoIconButton = (ariaLabel: string, icon: JSX.Element) => {
    return (
      <IconButton
        color="secondary"
        aria-label={ariaLabel}
        fontSize="3xl"
        icon={icon}
        _hover={{
          bg: "secondary",
          color: "text-primary",
        }}
        isRound
        p="20px"
      />
    );
  };

  const renderProfileInfo = () => {
    return (
      <Flex
        align="center"
        justify="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        w="100%"
      >
        <Flex
          fontWeight={"medium"}
          justifyContent="space-between"
          alignItems={"center"}
          gap={2}
        >
          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            {renderIconButton("email", <MdEmail />, onCopy)}
          </Tooltip>
          <Text color="text-primary">{PROFILE_EMAIL}</Text>
        </Flex>
        <Flex
          fontWeight={"medium"}
          justifyContent={{ base: "flex-end", md: "flex-start" }}
          alignItems={"center"}
          gap={2}
        >
          <Tooltip label={"+91 9799191449"} closeOnClick={false} hasArrow>
            <Link href="tel:+91 9799191449">
              {renderIconButton("phone", <PhoneIcon w={6} />)}
            </Link>
          </Tooltip>
          <Text color="text-primary">+91 9799191449</Text>
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
            <FormLabel color="text-primary">Name</FormLabel>

            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input id="name" type="text" name="name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="text-primary">Email</FormLabel>

            <InputGroup>
              <InputLeftElement children={<MdOutlineEmail />} />
              <Input id="email" type="email" name="email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="text-primary">Message</FormLabel>

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
            bg="secondary"
            color="text-primary"
            _hover={{
              shadow: "shadow-primary",
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
      <Flex
        align={"center"}
        color={"text-primary"}
        w="100%"
        justify={"center"}
        mt={20}
      >
        Made with 💖 by
        <span
          style={{
            margin: "0 5px",
            color: "var(--secondary)",
            fontWeight: "bold",
          }}
        >
          Ashok Kumar
        </span>
        {/* <FaCopyright /> 2023 */}
      </Flex>
    );
  };

  const renderCard = () => {
    return (
      <Box bg="bg-card" borderRadius="lg" p={8} shadow="base">
        {renderProfileInfo()}
        <Divider my={"1rem"} />
        {renderContactForm()}
        <Divider my="1rem" />
        {renderInfoButtons()}
      </Box>
    );
  };

  /*
   ===================================================================================================
   render main content:
   ===================================================================================================
 */

  return (
    <Box py={10} id="contact" justifyContent="center" alignItems="center">
      <SectionHeader label="Contact Me" />
      {renderCard()}
      {renderFooter()}
    </Box>
  );
}
