'use client';

import { SimpleGrid, Flex, Spinner, Divider, Box } from "@chakra-ui/react";
import getTopBlogs from "@/hooks/getTopBlogs";
import TopBlogCard from "./TopBlogCard";

const BlogList = () => {
  const { data, error, isLoading } = getTopBlogs();

  if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <SimpleGrid columns={1} spacing={10}>
      {data.map((blog: any, index: number) => (
        <Box key={index}>
          <TopBlogCard
            image={blog.image}
            category={blog.category}
            readTime={blog.readTime}
            title={blog.title}
            description={blog.description}
            _id={blog._id}
          />
            <Divider borderColor="#8A9BA8" borderWidth=".0625rem" my={5} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default BlogList;
