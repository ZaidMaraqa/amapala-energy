import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";



const HomeCards = () => {
    return (
        <SimpleGrid spacing={4} columns={2}>
            <Card bg={'white'} borderRadius={0} border={'1px solid black'} px={'2rem'} py={'3rem'} display={'flex'} flexDir={'column'} gap={'2rem'} justifyContent={'start'}>
                <CiMicrophoneOn color="black" size={'3rem'} />
                <Flex direction={'column'} gap={'.5rem'}>
                    <Heading color={'black'} size='md'>Exclusive Interviews</Heading>
                    <Text color="black">Hear from industry leaders and experts in the Latin American energy sector.
                    </Text>
                </Flex>
                <Button rightIcon={<FaChevronRight color="black" />} variant={'link'} color={'black'} justifyContent={'start'}>View </Button>
            </Card>
            <Card bg={'white'} borderRadius={0} border={'1px solid black'} px={'2rem'} py={'3rem'} display={'flex'} flexDir={'column'} gap={'2rem'} justifyContent={'start'}>
                <IoNewspaperOutline color="black" size={'3rem'} />
                <Flex direction={'column'} gap={'.5rem'}>
                    <Heading color={'black'} size='md'>Latest News</Heading>
                    <Text color="black">Stay up-to-date with the latest developments in the Latin American energy sector.

                    </Text>
                </Flex>
                <Button rightIcon={<FaChevronRight color="black" />} variant={'link'} color={'black'} justifyContent={'start'}>View </Button>
            </Card>
        </SimpleGrid>
    )
}

export default HomeCards;