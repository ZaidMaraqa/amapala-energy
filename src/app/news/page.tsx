import "@fontsource/lexend";

import { Flex, Heading } from "@chakra-ui/react";

import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import dynamic from "next/dynamic";

const TopBlogList = dynamic(() => import("@/components/blogs/TopBlogsList"), {
  ssr: false,
});
const BlogList = dynamic(() => import("@/components/blogs/blogsList"), {
  ssr: false,
});

const Blogs = () => {
  return (
    <>
      <NavBar />
      <Flex
        bg="#F2F2F2"
        direction={"column"}
        mb={"3rem"}
        p={["0rem", ".5rem", "1.5rem", "3rem"]}
        gap={["0rem", "2rem", "2rem", "2rem"]}
      >
        <Heading
          fontSize={["2rem", "2.75rem", "3.625rem", "4.625rem"]}
          fontWeight={600}
          textAlign={["center", "center", "start", "start"]}
          mt={["2.5rem", "0rem", "0rem", "0rem"]}
        >
          Trending Topics
        </Heading>
        <Flex p={"1rem"} direction={"column"} gap={"3rem"}>
          <TopBlogList />
          <BlogNewsLetter />
        </Flex>
      </Flex>
      <BlogList />
      <Footer />
    </>
  );
};

export default Blogs;
