import "@fontsource/lexend";

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import ReactMarkdown from 'react-markdown';
import React from "react";

interface MissionStatementProps {
    title: string;
    content: string[];
    image?: string;
    right? : boolean;
}

const MissionStatement = ({ title, content, image, right }: MissionStatementProps) => {
    return (
        <Flex direction="column" gap="2rem" px={'1.5rem'}>
            <Box
                width="fit-content"
                position="relative"
                pb={'.5rem'}
                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '0%',
                    right: '30%',
                    borderBottom: '.1875rem solid #03346E',
                }}
            >
                <Text fontSize="2rem" fontWeight={700} color={'primeBlue'}>
                    {title}
                </Text>
            </Box>

            <Flex gap={'1rem'} direction={['column', 'column', 'row', 'row']} >
            {image && !right && (
                    <Image src={image} w={['100%', '100%', '50%', '40%']} alt="faulmata" objectFit={'cover'}  />
                )}
                <Flex direction={'column'} w={['100%', '100%', '50%', '60%']} justifyContent={'space-between'}>
                    {content.map((paragraph, index) => (
                        <ReactMarkdown
                        key={index}
                        components={{
                            p: ({ node, ...props }) => (
                                <Text
                                    mb={index < content.length - 1 ? 4 : 0}
                                    fontFamily="'Lexend', sans-serif"
                                    color={title === 'Our Mission' ? '#202122': '#5C6770'}
                                    fontWeight={500}
                                    fontSize={["1.5rem", "1.25rem", "1.45rem", "1.5rem"]}
                                    {...props}
                                />
                            ),
                            strong: ({ node, ...props }) => {
                                const childrenArray = React.Children.toArray(props.children);
                                const textContent = typeof childrenArray[0] === 'string' ? childrenArray[0] : '';
                                const isOurMission = textContent === "Our mission";

                                return (
                                    <Text
                                        as="span"
                                        color={isOurMission ? "#202122" : "primeBlue"}
                                        fontSize="2rem"
                                        fontWeight={700}
                                        {...props}
                                    />
                                );
                            }
                        }}
                    >
                            {paragraph}
                        </ReactMarkdown>
                    ))}
                </Flex>
                {image && right && (
                    <Image src={image} w={['100%', '100%', '50%', '40%']} alt="faulmata"  />
                )}
            </Flex>
        </Flex>
    );
};

export default MissionStatement;
