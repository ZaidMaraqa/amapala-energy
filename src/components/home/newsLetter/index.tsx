import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "@fontsource/lexend";

const NewsLetter = () => {
    return (
        <Flex direction={'column'} bg={'primeBlue'} justifyContent={'center'} px={'5rem'} py={'8rem'}>
            <Flex direction={'column'}  gap={'1.5rem'} alignItems={'start'}>
                <Text color={'white'} fontWeight={700} fontSize={'4rem'} lineHeight={'4.5rem'} letterSpacing={'-3%'} >Subscribe to AMAPALA's LATAM Energy<br /> Prospective monthly brief</Text>
                <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={500}>AMAPALA's little own crystal ball. Most important news, future sector trends, developments and opportunities direct to your inbox once a month.
                </Text>
                <Flex direction={'row'} gap={'.5rem'} minW={'50%'}>
                    <Input border={'1px solid white'} placeholder="Enter Your Email Address" borderRadius={0} fontFamily="'Lexend', sans-serif" />
                    <Button bg={'white'} borderRadius={0} color={'black'} fontWeight={700} fontSize={'1rem'} rightIcon={<MdOutlineMarkEmailUnread size={'1.2rem'} />} paddingX={'1.5rem'}
                        paddingY={'1rem'}>
                        <Text>Subscribe</Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default NewsLetter