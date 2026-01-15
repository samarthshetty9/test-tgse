import React from 'react';

const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-4xl font-serif font-bold text-[#5D1528] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">
                We'd love to hear from you. Visit us, call us, or send a message.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F3D03E]/20 text-[#5D1528] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#5D1528] text-lg">Visit Campus</h4>
                        <p className="text-gray-600">
                            123 Education Lane, Knowledge Park,<br />
                            Bangalore, Karnataka 560001
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F3D03E]/20 text-[#5D1528] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#5D1528] text-lg">Call Us</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-600">+91 80 1234 5678</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F3D03E]/20 text-[#5D1528] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#5D1528] text-lg">Email Us</h4>
                        <p className="text-gray-600">admissions@tgse.edu.in</p>
                        <p className="text-gray-600">info@tgse.edu.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
