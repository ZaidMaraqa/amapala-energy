import { Box, Container, SimpleGrid, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'bold'}>Logo</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'bold'}>Column One</Text>
                        <Link href={'#'}>Link One</Link>
                        <Link href={'#'}>Link Two</Link>
                        <Link href={'#'}>Link Three</Link>
                        <Link href={'#'}>Link Four</Link>
                        <Link href={'#'}>Link Five</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'bold'}>Column Two</Text>
                        <Link href={'#'}>Link Six</Link>
                        <Link href={'#'}>Link Seven</Link>
                        <Link href={'#'}>Link Eight</Link>
                        <Link href={'#'}>Link Nine</Link>
                        <Link href={'#'}>Link Ten</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'bold'}>Column Three</Text>
                        <Link href={'#'}>Link Eleven</Link>
                        <Link href={'#'}>Link Twelve</Link>
                        <Link href={'#'}>Link Thirteen</Link>
                        <Link href={'#'}>Link Fourteen</Link>
                        <Link href={'#'}>Link Fifteen</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'bold'}>Column Four</Text>
                        <Link href={'#'}>Link Sixteen</Link>
                        <Link href={'#'}>Link Seventeen</Link>
                        <Link href={'#'}>Link Eighteen</Link>
                        <Link href={'#'}>Link Nineteen</Link>
                        <Link href={'#'}>Link Twenty</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Container as={Stack} maxW={'6xl'} spacing={4} justify={'center'} align={'center'}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'https://facebook.com'} isExternal>
                            <FaFacebook />
                        </Link>
                        <Link href={'https://instagram.com'} isExternal>
                            <FaInstagram />
                        </Link>
                        <Link href={'https://twitter.com'} isExternal>
                            <FaTwitter />
                        </Link>
                        <Link href={'https://linkedin.com'} isExternal>
                            <FaLinkedin />
                        </Link>
                        <Link href={'https://youtube.com'} isExternal>
                            <FaYoutube />
                        </Link>
                    </Stack>
                </Container>
                <Container as={Stack} maxW={'6xl'} justify={'center'} align={'center'}>
                    <Text>© 2024 Relume. All rights reserved.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Cookies Settings</Link>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
