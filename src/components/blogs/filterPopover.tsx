import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import useSWR from "swr";
import { fetcher } from "@/hooks/fetcher";

interface FilterPopoverProps {
  setCountry: (value: string) => void;
  setCategory: (value: string) => void;
}

const FilterPopover = ({ setCountry, setCategory }: FilterPopoverProps) => {
  const { data, error, isLoading } = useSWR("/api/getFilters", fetcher);

  const { countries = [], categories = [], article_types = [] } = data || {};

  const handleCountryChange = (values: string[]) => {
    setCountry(values.join(","));
  };

  const handleCategoryChange = (values: string[]) => {
    setCategory(values.join(","));
  };

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
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    color={"#969696"}
                    fontSize={".875rem"}
                    fontWeight="bold"
                  >
                    By Country
                  </Text>
                </Box>
                <AccordionIcon color={"primeBlue"} />
              </AccordionButton>
              <AccordionPanel px={"2rem"}>
                <CheckboxGroup onChange={handleCountryChange}>
                  <Stack spacing={2}>
                    {countries?.map((country: string) => (
                      <Checkbox key={country} value={country}>
                        {country}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    color={"#969696"}
                    fontSize={".875rem"}
                    fontWeight="bold"
                  >
                    By Source of Energy
                  </Text>
                </Box>
                <AccordionIcon color={"primeBlue"} />
              </AccordionButton>
              <AccordionPanel px={"2rem"}>
                <CheckboxGroup onChange={handleCategoryChange}>
                  <Stack spacing={2}>
                    {categories?.map((category: string) => (
                      <Checkbox key={category} value={category}>
                        {category}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    color={"#969696"}
                    fontSize={".875rem"}
                    fontWeight="bold"
                  >
                    By Article Type
                  </Text>
                </Box>
                <AccordionIcon color={"primeBlue"} />
              </AccordionButton>
              <AccordionPanel px={"2rem"}>
                <CheckboxGroup>
                  <Stack spacing={2}>
                    {article_types?.map((articleType: string) => (
                      <Checkbox key={articleType} value={articleType}>
                        {articleType}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopover;
