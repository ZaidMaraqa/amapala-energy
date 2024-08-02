'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Flex, Input, FormControl, FormErrorMessage, useToast } from "@chakra-ui/react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "@fontsource/lexend";
import { subscribe } from '@/hooks/useSubscribe';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

interface FormValues {
    email: string;
}


const NewsletterForm = ({ color = 'white'}) => {
    const initialValues: FormValues = { email: '' };
    const toast = useToast()

    const onSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        try {
            await subscribe(values.email);
            console.log('Subscribed successfully!');
            toast({
                title: 'Subscribed successfully!',
                description: "Your email has been added to our newsletter.",
                status: 'success',
                duration: 9000,
              })
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: 'Email already subscribed',
                description: "Your email is already in our newsletter.",
                status: 'error',
                duration: 9000,
              })
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Flex direction={'row'} gap={'.5rem'} minW={'50%'}>
                        <FormControl isInvalid={!!errors.email && touched.email}>
                            <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email Address"
                                border={'1px solid'}
                                borderColor={color}
                                borderRadius={0}
                                fontFamily="'Lexend', sans-serif"
                                color={color}
                                _placeholder={{color: color}}
                            />
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>
                        <Button
                            bg={color}
                            borderRadius={0}
                            color={color ? 'black': 'white'}
                            fontWeight={700}
                            fontSize={'1rem'}
                            rightIcon={<MdOutlineMarkEmailUnread size={'1.2rem'} />}
                            paddingX={'2rem'}
                            paddingY={'1rem'}
                            type="submit"
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
}

export default NewsletterForm;
