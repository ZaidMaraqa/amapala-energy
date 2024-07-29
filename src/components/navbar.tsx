import { ASSETS } from "@/assets"
import {
    Button,
    Flex, Image, Text,
} from "@chakra-ui/react"

const NavBar = () => {
    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'#C8D0D6'} alignItems={'center'} px={'1rem'} py={'1.5rem'}>
            <Flex direction={'row'} alignItems={'flex-end'}>
                <Image src={ASSETS.amapala} w={'6.25rem'} alt="amapala logo"  />
                <Text color={'#324853'} fontWeight={600} fontSize={'1.725rem'}>AMAPALA Energy Insights</Text>
            </Flex>
            <Button borderRadius={0} border={'1px solid'} borderColor={'primeBlue'}  color={'black'}>
                <Text>Subscribe</Text>
            </Button>
        </Flex>
    )
}

export default NavBar