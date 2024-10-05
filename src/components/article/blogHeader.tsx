import { Badge, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Flag from "react-world-flags";
import { formatDate, getCountryBackgroundColor } from "@/utils";

const BlogHeader = ({ data }: { data: any }) => {
  return (
    <Flex direction={["column", "column", "row", "row"]} gap={"1rem"}>
      <Image
        src={data.image}
        w={"21.875rem"}
        alt="blog related pic"
        borderRadius={".5rem"}
      />
      <Flex
        direction={"column"}
        gap={"1rem"}
        px={["0rem", ".5rem", "1rem", "1rem"]}
        justifyContent={"space-between"}
      >
        <Flex
          direction={"row"}
          alignItems={"center"}
          gap={".5rem"}
          mt={"1rem"}
        >
          {data.article_type && (
            <Badge
              bg={"primeBlue"}
              p={".5rem"}
              borderRadius={".25rem"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontWeight={600}
                fontSize={[".75rem", "1rem", "1rem", "1rem"]}
                color={"white"}
              >
                {data.article_type}
              </Text>
            </Badge>
          )}
          <Badge
            bg={"primeBlue"}
            p={".5rem"}
            borderRadius={".25rem"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontWeight={600}
              fontSize={[".75rem", "1rem", "1rem", "1rem"]}
              color={"white"}
            >
              {data.category}
            </Text>
          </Badge>
          <Flex
            alignItems={"center"}
            gap={".5rem"}
            bg={getCountryBackgroundColor(data.country_code)}
            p={".45rem"}
            borderRadius={".25rem"}
          >
            <Flag
              code={data.country_code}
              style={{ width: "24px", height: "16px" }}
              alt={`${data.country} flag`}
            />
            <Text
              fontWeight={600}
              fontSize={[".75rem", "1rem", "1rem", "1rem"]}
              color={"white"}
            >
              {data.country}
            </Text>
          </Flex>
          <Text fontSize={[".75rem", "1.25rem", "1.25rem", "1.25rem"]} fontWeight={600}>
            {data.readingTime} min read
          </Text>
        </Flex>
        <Heading fontWeight={600} fontSize={["2.375rem", "2.75rem", "3.375rem", "4.375rem"]}>
          {data.title}
        </Heading>
        <Text fontWeight={600} fontSize={"1rem"} color={"#696D70"} mb={"1rem"}>
          {formatDate(data.date)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogHeader;
