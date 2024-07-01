import { Button, Card, CardBody, CardFooter, Heading, Image, Text } from "@chakra-ui/react";

interface CountryProfileCardProps {
  expertiseText: string;
  headingText: string;
  descriptionText: string;
  buttonText: string;
  imageUrl: string;
}

const CountryProfileCard: React.FC<CountryProfileCardProps> = ({ expertiseText, headingText, descriptionText, buttonText, imageUrl }) => {
  return (
    <Card bg={'white'} border={'1px solid black'} borderRadius={0}>
      <CardBody p={'3rem'} display={'flex'} gap={'1rem'} flexDir={'column'}>
        <Text fontWeight={600} fontSize={'1rem'} color={'black'} lineHeight={'1.5rem'}>{expertiseText}</Text>
        <Heading fontWeight={700} fontSize={'2.5rem'} lineHeight={'3rem'} color={'black'}>{headingText}</Heading>
        <Text color={'black'} fontWeight={400} fontSize={'1rem'} lineHeight={'1.5rem'} mb={'.5rem'}>{descriptionText}</Text>
        <Button variant={'outline'} border={'1px solid black'} borderRadius={0} py={'1.5rem'} px={'.75rem'} maxW={'8.75rem'}>
          <Text fontWeight={400} fontSize={'1rem'} color={'black'}>{buttonText}</Text>
        </Button>
      </CardBody>
      <CardFooter p={0}>
        <Image src={imageUrl} />
      </CardFooter>
    </Card>
  );
};

export default CountryProfileCard;
