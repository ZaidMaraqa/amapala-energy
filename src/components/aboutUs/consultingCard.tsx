import "@fontsource/lexend";

import { Flex, Heading, Icon, Text } from '@chakra-ui/react';

import { IconType } from 'react-icons';

interface ConsultingCardProps {
  icon: IconType;
  title: string;
  description: string;
  iconBgColor?: string;
}

const ConsultingCard = ({ icon, title, description}: ConsultingCardProps) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      justifyContent={'space-between'}
      gap={4}
      minH={'11rem'}
    >
      <Flex
        w={12}
        h={12}
        align="center"
        justify="center"
        bg={'primeBlue'}
        borderRadius="full"
      >
        <Icon as={icon} boxSize={6} color="white" />
      </Flex>
      <Heading fontSize="1.5rem" fontWeight={700}>
        {title}
      </Heading>
      <Text fontSize="1rem" color="#696D70" fontFamily="'Lexend', sans-serif">
        {description}
      </Text>
    </Flex>
  );
};

export default ConsultingCard;
