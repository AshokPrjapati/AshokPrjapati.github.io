import { Heading } from "@chakra-ui/react";

interface HeadingProps {
  label: string;
}

const SectionHeader = (props: HeadingProps) => {
  const { label } = props;
  return (
    <Heading
      w="max-content"
      m="auto"
      textAlign="center"
      p="30px 10px 10px 10px"
      color="text-primary"
      fontWeight="500"
      borderBottom="3px solid var(--secondary)"
      mb="40px"
    >
      {label}
    </Heading>
  );
};

export default SectionHeader;
