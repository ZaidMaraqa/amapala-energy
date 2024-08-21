import "@fontsource/lexend";

import { Flex, Text } from '@chakra-ui/react';

import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ReactMarkdown from 'react-markdown';

interface MissionStatementProps {
    title: string;
    content: string[];
    image?: string;
}

const MissionStatement = ({ title, content, image }: MissionStatementProps) => {
    console.log(image)
    return (
        <Flex direction="column" gap="1rem">
            <Flex gap="0.5rem" alignItems="center">
                <MdOutlineArrowRightAlt />
                <Text fontSize="1.25rem" fontWeight={700}>
                    {title}
                </Text>
            </Flex>
            {content.map((paragraph, index) => (
                <ReactMarkdown
                    key={index}
                    components={{
                        p: ({ node, ...props }) => <Text mb={index < content.length - 1 ? 4 : 0} fontFamily="'Lexend', sans-serif" fontWeight={500} fontSize="1rem" ml={'1.5rem'} {...props} />,
                    }}
                >
                    {paragraph}
                </ReactMarkdown>
            ))}
            {image && (
                <Image src={image} height={500} width={1400} alt="amapala" />
            )}
        </Flex>
    );
};

export default MissionStatement;
