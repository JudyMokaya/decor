// pages/estimate.js or pages/contact.js

import ContactForm from '../components/ContactForm';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EstimatePage() {
  return (
    <div>
      <h1>Request an Estimate</h1>
      <p>If you have any questions or want to request an estimate, please fill out the form below:</p>
      <ContactForm />
    </div>
  );
}
