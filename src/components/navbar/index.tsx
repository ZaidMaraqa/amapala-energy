import { ASSETS } from "@/assets"
import {
    Flex, Image, Text,
} from "@chakra-ui/react"
import ContactUsButton from "./contactButton"

const NavBar = () => {

    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'#C8D0D6'} alignItems={'center'} px={'1rem'} py={'1.5rem'}>
            <Flex direction={'row'} alignItems={'flex-end'}>
                <Image src={ASSETS.amapala} w={'6.25rem'} alt="amapala logo"  />
                <Text color={'#324853'} fontWeight={600} fontSize={'1.725rem'}>AMAPALA Energy Insights</Text>
            </Flex>
            <ContactUsButton />
        </Flex>
    )
}

export default NavBar