'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Open Gmail compose with prefilled data
        const to = 'info@tgse.org.in';
        const subject = encodeURIComponent(`Contact Form: Message from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank');

        setIsSubmitting(false);
    };

    const inputClasses = (fieldName) => `w-full px-4 py-3 rounded-lg border ${errors[fieldName] ? 'border-red-500' : 'border-gray-200'} focus:border-[#5D1528] focus:ring-1 focus:ring-[#5D1528] outline-none transition`;

    return (
        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={inputClasses('firstName')}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <div className="flex items-center gap-2 mt-2 p-2 bg-[#F3D03E]/20 border border-[#F3D03E] rounded-lg">
                                <span className="text-[#F3D03E] text-lg">⚠</span>
                                <p className="text-[#5D1528] text-sm font-medium">{errors.firstName}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={inputClasses('lastName')}
                            placeholder="Doe"
                        />
                        {errors.lastName && (
                            <div className="flex items-center gap-2 mt-2 p-2 bg-[#F3D03E]/20 border border-[#F3D03E] rounded-lg">
                                <span className="text-[#F3D03E] text-lg">⚠</span>
                                <p className="text-[#5D1528] text-sm font-medium">{errors.lastName}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses('email')}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <div className="flex items-center gap-2 mt-2 p-2 bg-[#F3D03E]/20 border border-[#F3D03E] rounded-lg">
                            <span className="text-[#F3D03E] text-lg">⚠</span>
                            <p className="text-[#5D1528] text-sm font-medium">{errors.email}</p>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                    <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClasses('message')}
                        placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                        <div className="flex items-center gap-2 mt-2 p-2 bg-[#F3D03E]/20 border border-[#F3D03E] rounded-lg">
                            <span className="text-[#F3D03E] text-lg">⚠</span>
                            <p className="text-[#5D1528] text-sm font-medium">{errors.message}</p>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5D1528] text-white font-bold py-4 rounded-lg hover:bg-[#4a1120] transition-colors shadow-lg disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
