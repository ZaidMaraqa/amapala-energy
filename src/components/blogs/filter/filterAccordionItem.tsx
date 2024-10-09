import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    CheckboxGroup,
    Stack,
    Text,
  } from "@chakra-ui/react";
  
  interface FilterAccordionItemProps {
    title: string;
    values: string[];
    onChange: (value: string[]) => void;
  }
  
  const FilterAccordionItem = ({ title, values, onChange }: FilterAccordionItemProps) => (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Text color={"#969696"} fontSize={".875rem"} fontWeight="bold">
            {title}
          </Text>
        </Box>
        <AccordionIcon color={"primeBlue"} />
      </AccordionButton>
      <AccordionPanel px={"2rem"}>
        <CheckboxGroup onChange={onChange}>
          <Stack spacing={2}>
            {values?.map((value: string) => (
              <Checkbox key={value} value={value}>
                {value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </AccordionPanel>
    </AccordionItem>
  );

  export default FilterAccordionItem;