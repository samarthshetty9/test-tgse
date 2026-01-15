import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
