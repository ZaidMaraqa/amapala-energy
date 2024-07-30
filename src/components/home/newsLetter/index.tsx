import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import "@fontsource/lexend";


const NewsLetter = () => {
    return (
        <Flex direction={'column'}bg={'primeBlue'}  justifyContent={'center'} p={'5rem'}>
            <Flex direction={'column'} maxW={'70%'} gap={'1rem'} alignItems={'start'}>
            <Text color={'white'} fontWeight={700} fontSize={'3rem'} lineHeight={'3.5rem'} letterSpacing={'-3%'} >Subscribe to AMAPALA's LATAM Energy<br /> Prospective monthly brief</Text>
            <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={500}>AMAPALA's little own crystal ball. Most important news, future sector trends, developments and opportunities direct to your inbox once a month. 
            </Text>
            <Flex direction={'row'} gap={'.5rem'} >
                <Input borderColor={'white'} placeholder="Enter your email" borderRadius={0} />
                <Button border={'1px solid white'} borderRadius={0} color={'white'}>
                    Subscribe
                </Button>
            </Flex>
            </Flex>
        </Flex>
    )
}

export default NewsLetter