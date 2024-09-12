'use client'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

interface FormValues {
    name: string;
    job_title: string;
    company: string;
    subject: string;
    request: string;
}

const ContactUsForm = () => {
    const initialValues: FormValues = {
        name: "",
        job_title: "",
        company: "",
        subject: "",
        request: "",
    };

    const validationSchema = Yup.object({
        subject: Yup.string().required("Subject is required"),
        name: Yup.string().required("Name is required"),
        job_title: Yup.string().required("Job Title is required"),
        company: Yup.string().required("Company is required"),
        request: Yup.string().required("Request is required"),
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log("Form data", values);
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
                    <Flex direction={'column'} bg={'#EBF4F6'} p={'1.5rem'} borderRadius={'.625rem'} gap={'1.5rem'}>
                        <Text color={'#201E43'} fontWeight={300} fontSize={'1.375rem'} lineHeight={'1.75rem'}>Get in touch and let us know how we can help.</Text>
                        <FormControl isInvalid={!!errors.name && touched.name} >
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Field as={Input} id="name" name="name" variant="filled" placeholder="Your name" borderColor="primeBlue"  />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                        </FormControl>
                        <Flex gap={'.5rem'} direction={['column', 'column', 'row', 'row']}>
                        <FormControl isInvalid={!!errors.job_title && touched.job_title}>
                            <FormLabel htmlFor="job_title">Job Title</FormLabel>
                            <Field as={Input} id="job_title" name="job_title" variant="filled" placeholder="Your job title" borderColor="primeBlue" />
                            <FormErrorMessage>{errors.job_title}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.company && touched.company} >
                            <FormLabel htmlFor="company">Company</FormLabel>
                            <Field as={Input} id="company" name="company" variant="filled" placeholder="Your company" borderColor="primeBlue" />
                            <FormErrorMessage>{errors.company}</FormErrorMessage>
                        </FormControl>
                        </Flex>
                        <FormControl isInvalid={!!errors.subject && touched.subject}>
                            <FormLabel htmlFor="subject">Subject</FormLabel>
                            <Field as={Input} id="subject" name="subject" variant="filled" placeholder="Your subject" borderColor="primeBlue" />
                            <FormErrorMessage>{errors.subject}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.request && touched.request} >
                            <FormLabel htmlFor="request">Request</FormLabel>
                            <Field as={Textarea} id="request" name="request" variant="filled" placeholder="Your Request" borderColor="primeBlue"  />
                            <FormErrorMessage>{errors.request}</FormErrorMessage>
                        </FormControl>
                        <Flex>
                        <Button type="submit" bg={'primeBlue'} color={'white'} px={'1.5rem'} py={'1rem'}>Submit</Button>
                        </Flex>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default ContactUsForm;
