import "@fontsource/lexend";

import {
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react";

import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import dynamic from 'next/dynamic';

const TopBlogList = dynamic(() => import('@/components/blogs/TopBlogsList'), { ssr: false });
const BlogList = dynamic(() => import('@/components/blogs/blogsList'), { ssr: false });

const Blogs = () => {
  return (
    <>
      <NavBar bg="#F2F2F2" />
      <Flex bg="#F2F2F2" direction={'column'} my={'3rem'} p={['0rem', '.5rem', '1.5rem', '3rem']} gap={'2rem'}>
        <Heading fontSize={['2rem', '2.75rem', '3.625rem', '4.625rem']} fontWeight={600}>Trending Topics</Heading>
        <Box p={'1rem'}>
          <TopBlogList />
          <BlogNewsLetter />
        </Box>
      </Flex>
      <BlogList />
      <Footer />
    </>
  );
};

export default Blogs;
