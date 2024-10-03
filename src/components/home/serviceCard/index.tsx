import "@fontsource/lexend";

import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

import CardHeader from "../../cardHeader";
import { FaChevronRight } from "react-icons/fa";
import { ServiceCardProps } from "./serviceCard.interface";
import Link from "next/link";

const ServiceCard = ({
  imageUrl,
  title,
  description,
  news,
  blog,
  category,
  readTime,
  country,
  country_code,
  article_type,
  link,
  _id,
}: ServiceCardProps) => {
  return (
    <Link href={link} aria-label="go to ">
      <Card
        boxShadow={0}
        bg={"transparent"}
        _hover={{ bg: news ? "primeGray" : "white", cursor: "pointer" }}
        p={"1rem"}
        role="group"
        h={"100%"}
      >
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          gap={"1.5rem"}
          position={"relative"}
        >
          <Image
            src={imageUrl}
            alt="service image"
            h={"18.75rem"}
            w={"100%"}
            objectFit={"cover"}
          />
          {article_type && (
            <Badge
              position="absolute"
              top="2rem"
              right="2rem"
              fontSize="0.875rem"
              bg={'primeBlue'}
              px="0.5rem"
              py="0.25rem"
              borderRadius="full"
            >
              {article_type}
            </Badge>
          )}
          <Flex direction={"column"} gap={"1.5rem"} mt={"1rem"}>
            {blog && category && readTime &&  country &&  country_code && (
              <CardHeader
                category={category}
                readTime={readTime}
                country={country}
                country_code={country_code}
              />
            )}
            <Heading color={"black"} fontWeight={600} fontSize={"1.5rem"}>
              {title}
            </Heading>
            <Text
              color={"#202122"}
              fontFamily="'Lexend', sans-serif"
              fontSize={"1rem"}
            >
              {description}
            </Text>
          </Flex>
        </CardBody>
        <CardFooter display={"flex"} alignItems={"center"} gap={".5rem"}>
          {blog && (
            <Text fontSize={"1rem"} color={"black"} fontWeight={600}>
              Read More
            </Text>
          )}
          <IconButton
            borderRadius={"50%"}
            _groupHover={{
              bg: "primeBlue",
              borderColor: "primeBlue",
              color: "white",
            }}
            border={"1px solid"}
            borderColor={"primeBlue"}
            bg={"transparent"}
            icon={<FaChevronRight />}
            aria-label="go to article"
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
