'use client';

import { SimpleGrid, Flex, Spinner } from "@chakra-ui/react";
import BlogCard from "@/components/blogCard";
import getBlogs from "@/hooks/getAllBlogs";

const BlogList = () => {
  const { data, error, isLoading } = getBlogs();

  if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {data.map((blog: any, index: number) => (
        <BlogCard
          key={index}
          image={blog.image}
          category={blog.category}
          readTime={blog.readTime}
          title={blog.title}
          description={blog.description}
          link={blog.link}
        />
      ))}
    </SimpleGrid>
  );
};

export default BlogList;
