import { ASSETS } from "@/assets"
import { Button, Flex, Image, Text } from "@chakra-ui/react"
import "@fontsource/lexend";
import { MdOutlineArrowRight } from "react-icons/md";

const AboutSection = () => {
    return (
        <Flex direction={['column', 'column', 'column', 'row']} py={'5.5rem'} gap={'5rem'} maxH={'60rem'}>
            <Image src={ASSETS.solarPanels}  w={'100%'} objectFit={'cover'} alt="solarPanels"/>
            <Flex direction={'column'} gap={'1.5rem'} alignItems={'start'} justifyContent={'space-between'}>
                <Text fontFamily="'Lexend', sans-serif" fontWeight={500} fontSize={'1.5rem'} color={'#202122'}>About Us</Text>
                <Text color={'primeBlue'} fontWeight={500} fontSize={['1rem', '2rem', '3rem', '4rem']} lineHeight={['1.5rem', '2.5rem', '3.5rem', '4.5rem']}>
                Offering unique <Text as={'span'} color={'black'}>expertise</Text> and unparalleled <Text as={'span'} color={'black'}>insights</Text> across 
                the whole of the Latin American <Text as={'span'} color={'black'}>energy and natural </Text> resource sector,
                we help our clients and viewers <Text as={'span'} color={'black'}>navigate and understand</Text> the dynamics 
                of a vibrant and <Text as={'span'} color={'black'}>ever-changing market.</Text> 
                </Text>
                <Button border={'1px solid'} borderColor={'primeBlue'} borderRadius={0} px={'2rem'} py={'1.5rem'} display={'flex'} alignItems={'center'} gap={'1rem'} _hover={{ bg: 'primeBlue'}} role="group">
                    <Text color={'black'} fontWeight={700} _groupHover={{color: 'white'}}>Learn More</Text>
                    <Flex border={'1px solid'} borderRadius={'50%'} h={'1.5em'} w={'1.5rem'} justifyContent={'center'} alignItems={'center'} borderColor={'black'} color="black" _groupHover={{color:'white', borderColor:'white'}}>
                        <MdOutlineArrowRight fontSize={'1.25rem'}  />
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    )
}

export default AboutSection