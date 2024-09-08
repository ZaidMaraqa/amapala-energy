import "@fontsource/lexend";

import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
import { PAGES } from "@/config";

const HeroSection = () => {
    return (
        <Flex
            direction={'row'}
            bg={'primeGray'}
            justifyContent={['space-between']}
            height={'90vh'}
            w={'100vw'}
        >
            <Flex direction={'column'} justifyContent={'center'} gap={'3rem'} alignItems={['center', 'center','center', 'start', 'start']} p={'1rem'} w={['100vw', '100vw', '100vw', '60vw']}  px={'1rem'}>
                <Text
                    color={'primeBlue'}
                    fontWeight={600}
                    fontSize={['3rem', '5rem', '5rem', '6.5rem']}
                    lineHeight={['3rem', '5rem', '5rem', '6.5rem']}
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
                <Text fontFamily="'Lexend', sans-serif" color={'#202122'} fontWeight={500} fontSize={'1rem'} whiteSpace={'pre-line'} maxW={'80%'}>
                Welcome to FAULMATA Energy Insights. Inspired by the history of the town of Amapala, on the Honduran Island La Isla del Tigre, we are the very first dedicated Latin America one-stop-shop energy and natural resource boutique news consultancy.

                </Text>
                <Link href={PAGES.ABOUT_US}>
                <Button bg={'primeBlue'} borderRadius={0} px={'2rem'} py={'1.5rem'} display={'flex'} alignItems={'center'} gap={'1rem'}>
                    <Text color={'white'} fontWeight={700}>Learn More</Text>
                    <Flex bg={'white'} borderRadius={'50%'} h={'1.5em'} w={'1.5rem'} justifyContent={'center'} alignItems={'center'}>
                        <MdOutlineArrowRight fontSize={'1.25rem'} />
                    </Flex>
                </Button>
                </Link>
            </Flex>
            <Image src={ASSETS.turbines} w={'40vw'} objectFit={'cover'} display={['none', 'none', 'none', 'flex']} alt="solar panels"/>
        </Flex>
    )
}

export default HeroSection;
