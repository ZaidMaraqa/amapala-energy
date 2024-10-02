'use client'
import { Flex, Image, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ASSETS } from "@/assets";
import ContactUsButton from "./contactButton";
import Link from "next/link";
import { PAGES } from "@/config";

const NavBar = ({ noBorderRadius = false }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'primeGray'} alignItems={'center'} px={'1rem'} py={'.2rem'} pl={0} borderRadius={noBorderRadius ? 0 : 'xl'} mt={noBorderRadius ? '0rem': '1rem'} mx={noBorderRadius ? '0': '1rem'}>
            <Link href={PAGES.HOME}>
                <Image src={ASSETS.amapala} h={'3.5rem'} alt="faulmata logo" pl={'.7rem'} />
            </Link>

            {/* Desktop Navigation */}
            <Flex display={['none', 'none', 'flex', 'flex']} direction={'row'} alignItems={'center'} gap={'1.5rem'} color={'#202122'} fontSize={'1.25rem'} fontWeight={500}>
                <Link href={PAGES.ABOUT_US}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline' }}>About Us</Text></Link>
                <Link href={PAGES.BLOGS}><Text _hover={{ color: 'primeBlue', textDecoration: 'underline' }}>News and Analysis</Text></Link>
            </Flex>

            {/* Contact Us Button */}
            <Flex display={['none', 'none', 'flex', 'flex']}>
                <ContactUsButton />
            </Flex>

            {/* Hamburger Icon for Small Screens */}
            <IconButton
                display={['flex', 'flex', 'none', 'none']}
                icon={<HamburgerIcon />}
                aria-label="Open navigation"
                onClick={onOpen}
                variant="outline"
                fontSize="2rem"
                border={'none'}
            />

            {/* Drawer for Mobile Navigation */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg={'primeGray'}>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex direction="column" gap={'1.5rem'} fontSize={'1.25rem'} fontWeight={500} justifyContent={'center'} h={'100%'}>
                            <Link href={PAGES.HOME}><Text onClick={onClose} _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>Home</Text></Link>
                            <Link href={PAGES.ABOUT_US}><Text onClick={onClose} _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>About Us</Text></Link>
                            <Link href={PAGES.BLOGS}><Text onClick={onClose} _hover={{ color: 'primeBlue', textDecoration: 'underline'}}>News and Analysis</Text></Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default NavBar;
