import { Link, Text } from "@chakra-ui/react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

const NavLink = ({ href, children, label }: NavLinkProps) => {
  return (
    <Link href={href} aria-label={label}>
      <Text fontWeight={500} fontSize="1.2rem" fontFamily="'Lexend', sans-serif" color="black">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
