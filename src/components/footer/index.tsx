import { FaLinkedinIn } from 'react-icons/fa';
import { Flex, Image, Stack, Text, } from '@chakra-ui/react';
import { navLinks1, navLinks2 } from '../../../public/constants';

import { ASSETS } from '@/assets';
import NavLink from './navLink';
import SocialIcon from './socialButton';

const socialIcons = [
    { href: 'https://www.linkedin.com/company/faulmata-energy-advisors/about/', icon: <FaLinkedinIn fontSize="1.5rem" />, label: 'linkedin' },
];

const Footer = () => {
    return (
        <Flex direction={'column'} gap={'4rem'} py={'3rem'} px={'1rem'} w={'100vw'}>
            <Flex direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center','start','start']} gap={'2rem'} flex={1}>
                <Flex flex={1}>
                    <Image src={ASSETS.amapala} alt='amapala logo' w={'12rem'} h={'5rem'} display={['none', 'nonr','flex','flex',]} />
                    </Flex>
                <Flex gap={'2rem'} justifyContent={'center'}  flex={1}>
                    <Stack gap={'1rem'}>
                        {navLinks1.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label}>
                                {link.label}
                            </NavLink>
                        ))}
                    </Stack>
                    <Stack gap={'1rem'}>
                        {navLinks2.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label}>
                                {link.label}
                            </NavLink>
                        ))}
                    </Stack>
                </Flex>
                <Flex direction="row" justifyContent={'end'} gap="1rem" flex={1}>
                    {socialIcons.map((social) => (
                        <SocialIcon key={social.href} href={social.href} icon={social.icon} label={social.label} />
                    ))}
                </Flex>
            </Flex>
            <Text color={'black'} fontWeight={600} fontSize={'1.25rem'} textAlign={'center'}>© 2024 FAULMATA Energy Group Limited. All rights reserved.</Text>
        </Flex>
    );
}

export default Footer;
