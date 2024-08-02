import { Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import { ASSETS } from "@/assets";
import "@fontsource/lexend";

const NotFound = () => {
    return (
        <Flex w={'100vw'} h={'100vh'} direction={'column'} bg={'primeGray'} >
            <NavBar />
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} flex={1} bg={'#9BA1A6'} opacity={.8} m={'4rem'} borderRadius={'1.25rem'} gap={'1rem'}>
                    <Image src={ASSETS.icons.pageNotFound} w={'6rem'} h={'6rem'} />
                <Text fontWeight={500} fontSize={'8.125rem'} color={'primeBlue'} lineHeight={'7.5rem'}>404</Text>
                <Text color={'#202122'} fontSize={'2.55rem'} fontFamily="'Lexend', sans-serif">Page not found</Text>
            </Flex>
        </Flex>
    );
}

export default NotFound