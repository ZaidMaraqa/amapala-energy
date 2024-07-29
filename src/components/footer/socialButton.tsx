import { Box, Link } from "@chakra-ui/react";

interface SocialIconProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <Link href={href} aria-label={label} isExternal>
      <Box
        border="1px solid"
        borderColor="primeBlue"
        borderRadius="50%"
        h="60px"
        w="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={0}
        color="black"
        _hover={{ bg: 'primeBlue', color: 'white' }}
      >
        {icon}
      </Box>
    </Link>
  );
};

export default SocialIcon;
