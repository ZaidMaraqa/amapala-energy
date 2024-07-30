'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Flex, Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "@fontsource/lexend";

// Validation schema
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

interface FormValues {
    email: string;
}

const NewsletterForm: React.FC = () => {
    const initialValues: FormValues = { email: '' };

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log("Form data", values);
        // Perform any submission logic here
        resetForm();
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
                                border={'1px solid white'}
                                borderRadius={0}
                                fontFamily="'Lexend', sans-serif"
                                color={'white'}
                            />
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>
                        <Button
                            bg={'white'}
                            borderRadius={0}
                            color={'black'}
                            fontWeight={700}
                            fontSize={'1rem'}
                            rightIcon={<MdOutlineMarkEmailUnread size={'1.2rem'} />}
                            paddingX={'1.5rem'}
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
