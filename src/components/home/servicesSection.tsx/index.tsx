import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import "@fontsource/lexend";
import { servicesData } from "../../../../public/constants";
import ServiceCard from "@/components/serviceCard";


const ServicesSection = () => {
    return (
        <Flex direction={'column'} justifyContent={'flex-start'} gap={'2rem'} bg={'primeGray'} py={'6rem'} px={'2rem'}>
            <Text fontFamily="'Lexend', sans-serif" fontSize={'1.5rem'} fontWeight={500} color={'#202122'}>
                Our Services
            </Text>
            <Text color={'primeBlue'} fontWeight={600} fontSize={'70px'}>
                Consultancy <Text as={'span'} color={'black'}>blended</Text> <br />
                <Text as={'span'} color={'black'}>with</Text> Journalism
            </Text>
            <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                {servicesData.map(service => (
                    <ServiceCard 
                        key={service.id}
                        imagUrl={service.imagUrl}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ServicesSection