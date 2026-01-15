import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100">
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D1528] focus:ring-1 focus:ring-[#5D1528] outline-none transition" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D1528] focus:ring-1 focus:ring-[#5D1528] outline-none transition" placeholder="Doe" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D1528] focus:ring-1 focus:ring-[#5D1528] outline-none transition" placeholder="john@example.com" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D1528] focus:ring-1 focus:ring-[#5D1528] outline-none transition" placeholder="How can we help you?"></textarea>
                </div>

                <button className="w-full bg-[#5D1528] text-white font-bold py-4 rounded-lg hover:bg-[#4a1120] transition-colors shadow-lg">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
