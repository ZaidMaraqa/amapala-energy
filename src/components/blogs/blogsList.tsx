"use client";

import {
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import FilterPopover from "./filter/filterPopover";
import Paginator from "../paginator";
import ServiceCard from "../home/serviceCard";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import useGetBlogs from "@/hooks/getAllBlogs";
import { ASSETS } from "@/assets";

interface BlogListProps {
  isSpecficBlog?: boolean;
}

const BlogList = ({ isSpecficBlog }: BlogListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [articleType, setArticleType] = useState<string>("");

  const [debouncedSearch] = useDebounce(search, 600);

  const pageSize = isSpecficBlog ? 3 : 9;

  const { data, error, isLoading } = useGetBlogs(
    currentPage,
    debouncedSearch,
    category,
    country,
    articleType,
    pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const totalPosts = data?.total_posts || 0;
  const totalPages = Math.ceil(totalPosts / pageSize);

  if (error) return <div>Failed to load data {error}</div>;
  

  return (
    <Flex
      direction={"column"}
      gap={["1.5rem"]}
      bg="primeGray"
      py={["2rem", "3rem", "3rem", "5rem"]}
      px={[".5rem", "3rem", "3rem", "3rem"]}
    >
      {!isSpecficBlog ? (
        <Flex
          direction={["column", "column", "row", "row"]}
          justifyContent={"space-between"}
          alignItems={["start", "start", "center", "center"]}
        >
          <Flex direction={"column"} gap={"1.5rem"} flex={2}>
            <Text
              fontFamily="'Lexend', sans-serif"
              fontSize={"1.5rem"}
              fontWeight={500}
              color={"#202122"}
            >
              News and Analysis
            </Text>
            <Text
              color={"primeBlue"}
              fontWeight={600}
              fontSize={[
                "1.375rem",
                "2.775rem",
                "3.575rem",
                "4.375rem",
                "5.375rem",
              ]}
            >
              Discover{" "}
              <Text as={"span"} color={"black"}>
                The{" "}
              </Text>
              <Text as={"span"} color={"black"}>
                Latest
              </Text>{" "}
              <br />
              Insights
            </Text>
          </Flex>

          <Flex
            direction={"row"}
            gap={".5rem"}
            flex={1}
            mt={["1rem", "1rem", "0rem", "0rem"]}
          >
            <Input
              placeholder={`Search articles... (${totalPosts} posts)`}
              value={search}
              onChange={handleSearchChange}
              borderColor="primeBlue"
              borderRadius={0}
              _placeholder={{
                color: "#484848",
                fontSize: ".85rem",
                fontWeight: 400,
              }}
              _hover={"none"}
              display={"flex"}
              borderWidth={".125rem"}
            />
            <FilterPopover
              setCountry={setCountry}
              setCategory={setCategory}
              setArticleType={setArticleType}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center" py="2rem">
          <Text
            fontFamily="'Lexend', sans-serif"
            fontSize="2rem"
            fontWeight={600}
            color="primeBlue"
          >
            Keep exploring
          </Text>
        </Flex>
      )}

      <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing={10} mt={"1rem"}>
        {data?.blogs.length > 0 ? (
          data.blogs.map((blog: any, index: number) => (
            <ServiceCard
              key={index}
              imageUrl={blog.image}
              category={blog.category}
              country={blog.country}
              country_code={blog.country_code}
              readTime={blog.readTime}
              article_type={blog.article_type}
              title={blog.title}
              description={blog.description}
              link={`/article/${blog._id}`}
              blog={true}
            />
          ))
        ) : (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            py="1rem"
            w={"100vw"}
          >
            <Image
              src={ASSETS.icons.noResults}
              alt="No results"
              boxSize="8rem"
              mb="1.5rem"
              mr={'1.5rem'}
            />
            <Text
              fontSize="1.75rem"
              fontWeight={600}
              color="primeBlue"
              textAlign="center"
            >
              Oops! No results found.
            </Text>
            <Text
              fontSize="1.25rem"
              color="gray.500"
              textAlign="center"
              mt="0.5rem"
            >
              Try adjusting your filters or search terms and give it another go!
            </Text>
          </Flex>
        )}
      </SimpleGrid>

      <Flex justifyContent="center" mt="2rem">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Flex>
  );
};

export default BlogList;
