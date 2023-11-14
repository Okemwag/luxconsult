import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Schema for form validation
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .required('Required'),
});

const ContactForm = () => (
  <div>
    <h1>Get In Touch</h1>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Your Email" />
          <ErrorMessage name="email" component="div" />

          <Field component="textarea" name="message" placeholder="Your Message" />
          <ErrorMessage name="message" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;