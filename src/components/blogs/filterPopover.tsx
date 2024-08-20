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

interface FilterPopoverProps {
    setCountry: (value: string) => void;
    setCategory: (value: string) => void;
  }
  
  const FilterPopover = ({ setCountry, setCategory }: FilterPopoverProps) => {
    
    const handleCountryChange = (values: string[]) => {
      setCountry(values.join(','));
    };
  
    const handleCategoryChange = (values: string[]) => {
      setCategory(values.join(','));
    };
  
    return (
      <Popover>
        <PopoverTrigger>
          <Flex bg={'primeBlue'} justifyContent={'center'} alignItems={'center'} cursor="pointer">
            <Image src={ASSETS.icons.filters} alt="filters icon" w={'3rem'} h={'1rem'} />
          </Flex>
        </PopoverTrigger>
        <PopoverContent bg={'white'}>
          <PopoverCloseButton />
          <PopoverBody py={'0.5rem'} px={0}>
            <Accordion allowMultiple mt={'1.5rem'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text color={'#969696'} fontSize={'.875rem'} fontWeight="bold">By Country</Text>
                  </Box>
                  <AccordionIcon color={'primeBlue'} />
                </AccordionButton>
                <AccordionPanel px={'2rem'}>
                  <CheckboxGroup onChange={handleCountryChange}>
                    <Stack spacing={2}>
                      <Checkbox value="Brazil">Brazil</Checkbox>
                      <Checkbox value="Argentina">Argentina</Checkbox>
                      <Checkbox value="Paraguay">Paraguay</Checkbox>
                      <Checkbox value="Colombia">Colombia</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
  
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text color={'#969696'} fontSize={'.875rem'} fontWeight="bold">By Source of Energy</Text>
                  </Box>
                  <AccordionIcon color={'primeBlue'} />
                </AccordionButton>
                <AccordionPanel px={'2rem'}>
                  <CheckboxGroup onChange={handleCategoryChange}>
                    <Stack spacing={2}>
                      <Checkbox value="Mining">Mining</Checkbox>
                      <Checkbox value="renewables">Renewables</Checkbox>
                      <Checkbox value="oilAndGas">Oil and Gas</Checkbox>
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
  