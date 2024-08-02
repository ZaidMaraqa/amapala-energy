import { ASSETS } from "@/assets";
import { Flex, Image, Text } from "@chakra-ui/react";
import ContactUsButton from "./contactButton";
import Link from "next/link";
import { PAGES } from "@/config";

const NavBar = ({ bg = '#C8D0D6' }) => {
    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={bg} alignItems={'center'} px={'1rem'} py={'1.5rem'}>
            <Link href={PAGES.HOME}>
                <Image src={ASSETS.amapalaFull} w={'7.25rem'} alt="amapala logo" />
            </Link>
            <Flex direction={'row'} alignItems={'center'} gap={'1.5rem'} color={'#202122'} fontSize={'1.25rem'} fontWeight={500}>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>Blogs</Text></Link>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>Country Profiles</Text></Link>
                <Link href={PAGES.HOME} ><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>About Us</Text></Link>
            </Flex>
            <ContactUsButton />

        </Flex>
    );
}

export default NavBar;
