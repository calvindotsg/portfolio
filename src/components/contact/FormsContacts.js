import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import emailjs from 'emailjs-com';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import {
    Flex,
    Stack,
} from '@chakra-ui/react';

import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const SERVICE_ID = "service_3fy1t3n";
const TEMPLATE_ID = "template_ij57nui";
const USER_ID = "8ZvOnMBYYPrI1Q8ly";

const FormsContacts = ({
                           heading,
                           message
                       }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <Jumbotron fluid id="formContacts" className="bg-light m-0 target-section">
            <SlideUpWhenVisible>
                <Container className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Stack spacing={6}>
                        <h2 className="display-4 pb-5 text-center">
                            {heading}
                        </h2>
                        <p className="lead text-center pb-3">
                            {message}
                        </p>

                        <Flex className="contact" justify="center" id="contact">
                            {/* <!-- contact form --> */}
                            <Form
                                onSubmit={handleOnSubmit}
                            >
                                <Stack spacing={6} width="inherit">

                                    <label
                                        className="lead text-center"
                                    >
                                        Name
                                    </label>
                                    <Form.Field>
                                        <Input
                                            id='form-input-control-last-name'
                                            control={Input}
                                            placeholder='name'
                                            name= 'from_name'
                                            required
                                        />
                                    </Form.Field>

                                    <label
                                        className="lead text-center"
                                    >
                                        Email
                                    </label>
                                    <Form.Field>
                                        <Input
                                            // className="fields"
                                            id='form-input-control-email'
                                            control={Input}
                                            name='from_email'
                                            placeholder='email'
                                            required
                                        />
                                    </Form.Field>

                                    <label
                                        className="lead text-center"
                                    >
                                        Subject
                                    </label>
                                    <Form.Field>
                                        <Input
                                            // className="fields"
                                            id='form-input-control-subject'
                                            control={Input}
                                            name='from_subject'
                                            placeholder='subject'
                                            required
                                        />
                                    </Form.Field>

                                    <label
                                        className="lead text-center"
                                    >
                                        Message
                                    </label>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        name='message'
                                        placeholder='Enter your message'
                                        required
                                    />

                                    <Button
                                        className="btn btn-outline-dark btn-lg"
                                        type='submit'
                                        color='green'
                                    >
                                        Submit
                                    </Button>

                                </Stack>
                            </Form>
                            {/* <!-- end contact form --> */}
                        </Flex>
                    </Stack>
                </Container>
            </SlideUpWhenVisible>
        </Jumbotron>
    );
}

export default FormsContacts;