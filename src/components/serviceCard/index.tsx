import { Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa";
import { ServiceCardProps } from "./serviceCard.interface";
import "@fontsource/lexend";

const ServiceCard = ({
    imagUrl,
    title,
    description,
}: ServiceCardProps) => {
    return (
        <Card boxShadow={0} h={'800px'} bg={'transparent'} _hover={{ bg:'white', cursor: 'pointer', opacity: 0.8}} p={'1rem'}>
            <CardBody display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
                <Image
                    src={imagUrl}
                    alt='Green double couch with wooden legs'
                    h={'400px'}
                    w={'100%'}
                    objectFit={'cover'}
                />
                <Flex direction={'column'}  gap={'1.5rem'} mt={'1rem'}>
                    <Heading color={'black'} fontWeight={600} fontSize={'1.5rem'}>{title}</Heading>
                    <Text color={'#202122'} fontFamily="'Lexend', sans-serif" fontSize={'1rem'}>
                        {description}
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter>
                <IconButton borderRadius={'50%'} _hover={{bg: 'primeBlue'}} border={'1px solid'} borderColor={'primeBlue'} icon={<FaChevronRight color="black" />} aria-label="go to article"/>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard