'use client'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

interface FormValues {
    subject: string;
    request: string;
}

const ContactUsForm = () => {
    const initialValues: FormValues = {
        subject: "",
        request: "",
    };

    const validationSchema = Yup.object({
        subject: Yup.string().required("Subject is required"),
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
                        <FormControl isInvalid={!!errors.subject && touched.subject} w={'25%'}>
                            <FormLabel htmlFor="subject">Subject</FormLabel>
                            <Field as={Input} id="subject" name="subject" variant="filled" placeholder="Your subject" borderColor="#201E43" />
                            <FormErrorMessage>{errors.subject}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.request && touched.request} w={'50%'}>
                            <FormLabel htmlFor="request">Request</FormLabel>
                            <Field as={Textarea} id="request" name="request" variant="filled" placeholder="Your Request" borderColor="#201E43"  />
                            <FormErrorMessage>{errors.request}</FormErrorMessage>
                        </FormControl>
                        <Flex>
                        <Button type="submit" bg={'#201E43'} color={'white'} px={'1.5rem'} py={'1rem'}>Submit</Button>
                        </Flex>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default ContactUsForm;
