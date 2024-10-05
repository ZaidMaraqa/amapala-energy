import {
  Accordion,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import useSWR from "swr";
import { fetcher } from "@/hooks/fetcher";
import FilterAccordionItem from "./filterAccordionItem";

interface FilterPopoverProps {
  setCountry: (value: string) => void;
  setCategory: (value: string) => void;
  setArticleType: (value: string) => void;
}
const FilterPopover = ({ setCountry, setCategory, setArticleType }: FilterPopoverProps) => {
  const { data, error, isLoading } = useSWR("/api/getFilters", fetcher);
  const { countries = [], categories = [], article_types = [] } = data || {};

  if (error) return <div>Failed to load filters</div>;
  if (isLoading) return <div>Loading filters...</div>;

  return (
    <Popover>
      <PopoverTrigger>
        <Flex
          bg={"primeBlue"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor="pointer"
        >
          <Image
            src={ASSETS.icons.filters}
            alt="filters icon"
            w={"3rem"}
            h={"1rem"}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg={"white"}>
        <PopoverCloseButton />
        <PopoverBody py={"0.5rem"} px={0}>
          <Accordion allowMultiple mt={"1.5rem"}>
            <FilterAccordionItem
              title="By Country"
              values={countries}
              onChange={(values) => setCountry(values.join(","))}
            />
            <FilterAccordionItem
              title="By Source of Energy"
              values={categories}
              onChange={(values) => setCategory(values.join(","))}
            />
            <FilterAccordionItem
              title="By Article Type"
              values={article_types}
              onChange={(values) => setArticleType(values.join(","))}
            />
          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopover;
