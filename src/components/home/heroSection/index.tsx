import { ASSETS } from "@/assets";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineArrowRight } from "react-icons/md";
import "@fontsource/lexend";

const HeroSection = () => {
    return (
        <Flex
            direction={'row'}
            bg={'primeGray'}
            justifyContent={'space-between'}
            height={'90vh'}
        >
            <Flex direction={'column'} justifyContent={'center'} gap={'3rem'} alignItems={'start'} p={'1rem'} w={'60vw'}  px={'1rem'}>
                <Text
                    color={'primeBlue'}
                    fontWeight={600}
                    fontSize={['2.5rem', '3.5rem', '5rem', '7.5rem']}
                    lineHeight={['2.5rem', '3.5rem', '5rem', '6.5rem']}
                    whiteSpace={'pre-line'}
                >
                    <Text as={'span'} >
                        Shaping
                    </Text>
                    <Text as={'span'} color='black' display={'block'} whiteSpace={'nowrap'}>
                        Latin American
                    </Text>
                    <Text as={'span'} >
                        Energy
                    </Text>
                </Text>
                <Text fontFamily="'Lexend', sans-serif" color={'#202122'} fontWeight={500} fontSize={'1rem'} whiteSpace={'pre-line'}>
                    Welcome to AMAPALA,  the very first dedicated Latin America, one-stop-shop <br />
                    energy and natural resource boutique news consultancy.
                </Text>
                <Button bg={'primeBlue'} borderRadius={0} px={'2rem'} py={'1.5rem'} display={'flex'} alignItems={'center'} gap={'1rem'}>
                    <Text color={'white'} fontWeight={700}>Learn More</Text>
                    <Flex bg={'white'} borderRadius={'50%'} h={'1.5em'} w={'1.5rem'} justifyContent={'center'} alignItems={'center'}>
                        <MdOutlineArrowRight fontSize={'1.25rem'} />
                    </Flex>
                </Button>
            </Flex>
            <Image src={ASSETS.oil} w={'40vw'} objectFit={'cover'} display={['none', 'none', 'none', 'flex']} alt="solar panels"/>
        </Flex>
    )
}

export default HeroSection;
