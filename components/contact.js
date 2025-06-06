"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    const [successMsg, setSuccessMsg] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        const response = await fetch('/api/sendmessage', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const ext = await response.json();
        console.log(ext);

        // Show success message
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 5000); // Hide after 5s
        e.target.reset();
    };

    return (
        <section id='contact'>
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative">
            {/* Custom Toast */}
            {successMsg && (
                <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-down z-50">
                    ✅ Message sent successfully!
                </div>
            )}

            <div className="max-w-4xl w-full bg-[#1a1a1a] p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#e91e63]">Contact Me</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-between space-y-6">
                        <div className="w-full h-48 bg-[url('/Images/contact.jpg')] bg-cover rounded-md"></div>
                        <div>
                            <p className="mb-2 font-medium">Connect with me:</p>
                            <div className="flex space-x-4">
                                <Link href="https://www.linkedin.com/in/aman-mourya-976633280/" target="_blank" className="text-blue-400">
                                    <FaLinkedin size={36} />
                                </Link>
                                <Link href="https://github.com/amanmmourya" target="_blank" className="text-gray-300">
                                    <FaGithub size={36} />
                                </Link>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <MdEmail size={24} />
                                <span>mouryaaman69@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-md bg-gray-700 text-white" />
                        <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-md bg-gray-700 text-white" />
                        <textarea name="message" placeholder="Your Message" rows="4" required className="p-3 rounded-md bg-gray-700 text-white"></textarea>
                        <button type="submit" className="bg-[#e91e63] hover:scale-[1.02] transition p-3 rounded-md font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Animation style */}
            <style jsx>{`
                .animate-slide-down {
                    animation: slideDown 0.3s ease-out, fadeOut 0.5s ease 4.5s forwards;
                }

                @keyframes slideDown {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
        </section>
    );
};

export default Contact;
