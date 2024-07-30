import { ASSETS } from "@/assets"
import {
    Flex, Image, Text,
} from "@chakra-ui/react"
import ContactUsButton from "./contactButton"

const NavBar = () => {

    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'#C8D0D6'} alignItems={'center'} px={'1rem'} py={'1.5rem'}>
                <Image src={ASSETS.amapalaFull} w={'7.25rem'} alt="amapala logo"  />
            <ContactUsButton />
        </Flex>
    )
}

export default NavBar