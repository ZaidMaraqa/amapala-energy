"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import Footer from "@/components/footer";

import NavBar from "@/components/navbar";
import getBlog from "@/hooks/getBlog";
import { formatDate } from "@/utils";

const BlogOverview = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const { data, isLoading, error } = getBlog(id)

  if (isLoading) return <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <>
      <NavBar />
      <Box bg="" px={'2rem'} py={'1rem'}>
        <Stack direction={{ base: "column", lg: "row" }} spacing={10}>
          <Box flex="3">
            <Text fontSize="sm" color="gray.500">
              Energy &gt; Insights
            </Text>
            <Heading fontSize="3xl" my={4}>
              {data.title}
            </Heading>
            <Text color="gray.500" mb={4}>
              By {data.author} <br />
              {formatDate(data.date)} &middot; {data.readingTime} minute read
            </Text>
            <Image src={data.image} alt="Main Image" mb={4} />
            <Text mb={4}>
              {data.content}
            </Text>
            </Box>

        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default BlogOverview;
