import { ASSETS } from '@/assets';
import { Stack, Text, Flex, Image, } from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import SocialIcon from './socialButton';
import { navLinks1, navLinks2 } from '../../../public/constants';
import NavLink from './navLink';

const Footer = () => {

    const socialIcons = [
        { href: 'https://www.instagram.com', icon: <FaInstagram fontSize="1.5rem" />, label: 'instagram' },
        { href: 'https://www.linkedin.com/company/amapala-energy-insights/about/', icon: <FaLinkedinIn fontSize="1.5rem" />, label: 'linkedin' },
        { href: 'https://www.youtube.com', icon: <FaYoutube fontSize="1.5rem" />, label: 'youtube' }
    ];

    return (
        <Flex direction={'column'} gap={'4rem'} py={'3rem'} px={'1rem'}>
            <Flex direction={'row'} justifyContent={'space-between'}>
                <Flex direction={'column'}>
                    <Image src={ASSETS.amapala} alt='amapala logo' w={'12.5rem'} h={'6rem'} />
                    <Text fontWeight={600} fontSize={'2.125rem'} textAlign={'center'} color={'#324853'}>AMAPALA</Text>
                </Flex>
                <Flex gap={'2rem'}>
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
                <Flex direction="row" gap="1rem">
                    {socialIcons.map((social) => (
                        <SocialIcon key={social.href} href={social.href} icon={social.icon} label={social.label} />
                    ))}
                </Flex>
            </Flex>
            <Text color={'black'} fontWeight={600} fontSize={'1.25rem'} textAlign={'center'}>© 2024 AMAPALA Energy Insights Limited. All rights reserved.</Text>
        </Flex>
    );
}

export default Footer;
