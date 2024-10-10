import { Text, Link as ChakraLink } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <Text
            mb={"2rem"}
            fontFamily="'Lexend', sans-serif"
            fontWeight={500}
            fontSize={"1.25rem"}
            color={"#696D70"}
            px={"2rem"}
            whiteSpace={'pre-line'}
            {...props}
          />
        ),
        strong: (props) => <Text as="strong" fontWeight="bold" {...props} />,
        em: (props) => <Text as="em" fontStyle="italic" {...props} />,
        u: (props) => <Text as="u" textDecoration="underline" {...props} />,
        a: ({ href, children }) => (
          <ChakraLink href={href} color="blue.500"  isExternal>
            {children}
          </ChakraLink>
        ), 
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default BlogContent;
