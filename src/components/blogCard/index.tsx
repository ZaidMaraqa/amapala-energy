import { Box, Image, Text, Heading, Link, Stack } from "@chakra-ui/react";
import { BlogCardProps } from "./blogCard.interface";

const BlogCard = ({
  image,
  category,
  readTime,
  title,
  description,
  link,
}: BlogCardProps) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth=".0625rem"
      boxShadow={"none"}
      border={"solid black .0625rem"}
    >
      <Image src={image} alt="Blog Image" mb={4} />
      <Stack direction="row" spacing={2} align="center">
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {category}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {readTime}
        </Text>
      </Stack>
      <Heading fontSize="xl" mt={2}>
        {title}
      </Heading>
      <Text mt={4}>{description}</Text>
      <Link mt={2} color="teal.500" href={link}>
        Read More &gt;
      </Link>
    </Box>
  );
};

export default BlogCard;
