import "@fontsource/lexend";

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ASSETS } from "@/assets";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
import { PAGES } from "@/config";

const HeroSection = () => {
    return (
        <Flex
            bg={'primeGray'}
            justifyContent={'space-between'}
            height={'90vh'}
            minH={'50rem'}
            width={'100vw'}
            overflowX={'hidden'}
        >
            <Flex 
                direction={'column'}
                justifyContent={'center'}
                gap={'3rem'}
                p={'1rem'}
                pl={['0.5rem', '1rem', '2rem', '3rem']}
                width={['100%', '100%', '60vw']}
            >
                <Text
                    color={'primeBlue'}
                    fontWeight={600}
                    fontSize={['3rem', '5rem', '5rem', '6.5rem']}
                    lineHeight={['3rem', '5rem', '5rem', '6.5rem']}
                    whiteSpace={'pre-line'}
                    maxWidth={'100%'} 
                >
                    <Text as={'span'}>
                        Shaping
                    </Text>
                    <Text as={'span'} color='black' display={'block'} whiteSpace={'nowrap'}>
                        Latin American
                    </Text>
                    <Text as={'span'}>
                        Energy
                    </Text>
                </Text>
                <Text
                    fontFamily="'Lexend', sans-serif"
                    color={'#202122'}
                    fontWeight={500}
                    fontSize={'1rem'}
                    whiteSpace={'pre-line'}
                    maxWidth={'80%'}
                    textAlign={'start'} 
                >
                    Welcome to FAULMATA Energy Group. Inspired by the history of the town of Amapala, on the Honduran Island La Isla del Tigre, we are the very first dedicated Latin America one-stop-shop energy and natural resource boutique news consultancy.
                </Text>
                <Link href={PAGES.ABOUT_US}>
                    <Button
                        bg={'primeBlue'}
                        borderRadius={0}
                        px={'2rem'}
                        py={'1.5rem'}
                        display={'flex'}
                        alignItems={'center'}
                        gap={'1rem'}
                    >
                        <Text color={'white'} fontWeight={700}>Learn More</Text>
                        <Flex
                            bg={'white'}
                            borderRadius={'50%'}
                            height={'1.5em'}
                            width={'1.5rem'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <MdOutlineArrowRight fontSize={'1.25rem'} />
                        </Flex>
                    </Button>
                </Link>
            </Flex>
            <Flex  flex={1} display={['none', 'none', 'flex', 'flex']}>
            <Image
                src={ASSETS.turbines}
                objectFit={['contain', 'contain', 'cover', 'cover']}
                w={'100%'}
                alt="solar panels"
            />
            </Flex>
        </Flex>
    );
};

export default HeroSection;
