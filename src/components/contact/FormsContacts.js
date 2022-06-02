/* Code adapted from Citation and Sources –
*   title = {cruip/open-react-template v1.0.0},
	copyright = {Released under the GPL. Copyright 2020 Cruip.},
	url = {https://github.com/cruip/open-react-template},
	abstract = {A free React landing page template designed to showcase open source projects, SaaS products, online services, and more. Made by cruip.com},
	urldate = {2022-04-25},
	publisher = {Cruip},
	author = {Vitiello, Pasquale and Pacilio, Davide},
	month = apr,
	year = {2022},
	note = {original-date: 2020-04-06T13:28:34Z},
	*
*   title = {mui/material-ui},
	copyright = {MIT license},
	url = {https://github.com/mui/material-ui/blob/v5.6.2/docs/data/material/components/accordion/BasicAccordion.js},
	abstract = {MUI Core (formerly Material-UI) is the React UI library you always wanted. Follow your own design system, or start with Material Design. - GitHub - mui/material-ui at v5.6.2},
	urldate = {2022-04-25},
	publisher = {MUI},
	author = {Siriwat, K},
	month = feb,
	year = {2022},
	*
*   title = {emailjs-com/emailjs-sdk},
	copyright = {BSD-3-Clause},
	url = {https://github.com/emailjs-com/emailjs-sdk},
	abstract = {EmailJS helps sending emails using client side technologies only. No server is required.},
	urldate = {2022-04-26},
	publisher = {EmailJS},
	author = {emailjs-com},
	month = apr,
	year = {2022},
	note = {original-date: 2018-03-04T19:17:59Z},
	*
*   title = {Semantic-Org/Semantic-UI-React},
	copyright = {MIT},
	url = {https://github.com/Semantic-Org/Semantic-UI-React},
	abstract = {The official Semantic-UI-React integration},
	urldate = {2022-04-26},
	publisher = {Semantic Org},
	author = {Semantic-Org},
	month = feb,
	year = {2022},
	note = {original-date: 2015-06-19T16:47:19Z},
	*
*   title = {sweetalert2/sweetalert2},
	copyright = {MIT},
	url = {https://github.com/sweetalert2/sweetalert2},
	abstract = {A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.},
	urldate = {2022-04-26},
	publisher = {SweetAlert2},
	author = {sweetalert2},
	month = apr,
	year = {2022},
	note = {original-date: 2015-01-03T16:15:52Z},
*/

import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';

import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';

import {makeStyles} from '@mui/styles';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const useStyles = makeStyles({
    demoform: {
        border: '1px solid lightgray',
        padding: '10px',
        margin: '20px',
    }
});

const SERVICE_ID = "service_3fy1t3n";
const TEMPLATE_ID = "template_ij57nui";
const USER_ID = "8ZvOnMBYYPrI1Q8ly";

const FormsContacts = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           ...props
                       }) => {

    const classes = useStyles();

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

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
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="reveal-from-bottom">
                        <div className="row">
                            <div className="col align-self-center">
                                <h1 className="text-center">Contact Form via Email</h1>
                                {/* <!-- contact form --> */}
                                <div className={classes.demoform}>
                                    <Form onSubmit={handleOnSubmit}>
                                        <Form.Field
                                            id='form-input-control-email'
                                            control={Input}
                                            label='Email'
                                            name='from_email'
                                            placeholder='Enter your email'
                                            required
                                            icon='mail'
                                            iconPosition='left'
                                        />
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Name'
                                            name='from_name'
                                            placeholder='Enter your name'
                                            required
                                            icon='user circle'
                                            iconPosition='left'
                                        />
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Subject'
                                            name='from_subject'
                                            placeholder='Enter your subject'
                                            required
                                            icon='user circle'
                                            iconPosition='left'
                                        />
                                        <label for="form-textarea-control-opinion">Message</label>
                                        <Form.Field
                                            id='form-textarea-control-opinion'
                                            control={TextArea}
                                            name='message'
                                            placeholder='Enter your message'
                                            required
                                        />
                                        <Button type='submit' color='green'>Submit</Button>
                                    </Form>
                                </div>
                                {/* <!-- end contact form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

FormsContacts.propTypes = propTypes;
FormsContacts.defaultProps = defaultProps;

export default FormsContacts;