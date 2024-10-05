import { Text } from "@chakra-ui/react";

const BlogContent = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          mb={"2rem"}
          fontFamily="'Lexend', sans-serif"
          fontWeight={500}
          fontSize={"1.25rem"}
          color={"#696D70"}
          px={"2rem"}
        >
          {paragraph}
        </Text>
      ))}
    </>
  );
};

export default BlogContent;
