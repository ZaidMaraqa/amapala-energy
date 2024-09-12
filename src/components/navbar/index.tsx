import { Flex, Image, Text } from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import ContactUsButton from "./contactButton";
import Link from "next/link";
import { PAGES } from "@/config";

const NavBar = ({ bg = '#C8D0D6' }) => {
    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={bg} alignItems={'center'} px={'1rem'} py={'1.5rem'} pl={0}>
            <Link href={PAGES.HOME}>
                <Image src={ASSETS.amapala} h={'4rem'} alt="faulmata logo" />
            </Link>
            <Flex display={['none', 'none', 'flex', 'flex']} direction={'row'} alignItems={'center'} gap={'1.5rem'} color={'#202122'} fontSize={'1.25rem'} fontWeight={500}>
                <Link href={PAGES.ABOUT_US} ><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>About Us</Text></Link>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>News and Analysis</Text></Link>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>Country Profiles</Text></Link>
            </Flex>
            <ContactUsButton />

        </Flex>
    );
}

export default NavBar;
