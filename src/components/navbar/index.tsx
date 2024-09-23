import { Flex, Image, Text } from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import ContactUsButton from "./contactButton";
import Link from "next/link";
import { PAGES } from "@/config";

const NavBar = ({ noBorderRadius = false }) => {
    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'primeGray'} alignItems={'center'} px={'1rem'} py={'.2rem'} pl={0} borderRadius={noBorderRadius ? 0 : 'xl'} mt={noBorderRadius ? '0rem': '1rem'} mx={noBorderRadius ? '0': '1rem'}>
            <Link href={PAGES.HOME}>
                <Image src={ASSETS.amapala} h={'4rem'}  alt="faulmata logo" />
            </Link>
            <Flex display={['none', 'none', 'flex', 'flex']} direction={'row'} alignItems={'center'} gap={'1.5rem'} color={'#202122'} fontSize={'1.25rem'} fontWeight={500}>
                <Link href={PAGES.ABOUT_US} ><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>About Us</Text></Link>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>News and Analysis</Text></Link>
            </Flex>
            <ContactUsButton />

        </Flex>
    );
}

export default NavBar;
