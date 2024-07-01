import { CountryProfileCardProps } from "@/Interfaces";
import { ASSETS } from "@/assets";
import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const SomeCard: React.FC<CountryProfileCardProps> = ({ expertiseText, headingText, descriptionText, buttonText, imageUrl }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bg={'white'}
            display={'flex'}
            flexDir={'row'}
            borderRadius={0}
            border={'1px solid black'}
        >
            <Flex flex={3}>
                <Image
                    objectFit={'cover'}
                    src={ASSETS.placeholder}
                    alt='Caffe Latte'
                />
            </Flex>
            <Flex flex={3}>
                <CardBody p={'3rem'} display={'flex'} gap={'1rem'} flexDir={'column'}>
                    <Text fontWeight={600} fontSize={'1rem'} color={'black'} lineHeight={'1.5rem'}>{expertiseText}</Text>
                    <Heading fontWeight={700} fontSize={'2.5rem'} lineHeight={'3rem'} color={'black'}>{headingText}</Heading>
                    <Text color={'black'} fontWeight={400} fontSize={'1rem'} lineHeight={'1.5rem'} mb={'.5rem'}>{descriptionText}</Text>
                    <Button rightIcon={<FaChevronRight color="black" />} variant={'link'} color={'black'} justifyContent={'start'}>View </Button>
                </CardBody>
            </Flex>

        </Card>
    )
}

export default SomeCard;