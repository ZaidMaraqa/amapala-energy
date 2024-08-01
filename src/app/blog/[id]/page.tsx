"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import Footer from "@/components/footer";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import NavBar from "@/components/navbar";
import getBlog from "@/hooks/getBlog";

const BlogOverview = ({ params }: {params: { id: number }}) => {
  const id = params.id

  const { data, isLoading, error } = getBlog()

  if (isLoading) return <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <>
      <NavBar/>
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
                {data.date} &middot; {data.readingTime} minutes read
              </Text>
              <Text fontSize="lg" mb={4}>
                Share this post:
              </Text>
              <Stack direction="row" mb={4} spacing={4}>
                <Link href={"https://facebook.com"}>
                  <FaFacebook />
                </Link>
                <Link href={"https://instagram.com"}>
                  <FaInstagram />
                </Link>
                <Link href={"https://twitter.com"}>
                  <FaTwitter />
                </Link>
                <Link href={"https://linkedin.com"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://youtube.com"}>
                  <FaYoutube />
                </Link>
              </Stack>
              <Image src={data.image} alt="Main Image" mb={4} />
              {data.content.map((section: any, index: number) => (
                <React.Fragment key={index}>
                  <Heading
                    fontSize="2xl"
                    mt={8}
                    mb={4}
                  >
                    {section.heading}
                  </Heading>
                  {section.text.map((paragraph: string, pIndex: number) => (
                    <Text key={pIndex} mb={4}>
                      {paragraph}
                    </Text>
                  ))}
                </React.Fragment>
              ))}
            </Box>
          </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default BlogOverview;
