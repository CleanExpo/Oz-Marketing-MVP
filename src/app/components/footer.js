import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        features: [],
        comments: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const featureOptions = [
        'Automated Invoice Generation',
        'CRM Integration',
        'Google Sheets Integration',
        'AI-Powered Analysis',
        'Accounting System Sync',
        'Custom Reporting',
        'Multi-User Access',
        'Real-time Updates'
    ];

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const features = formData.features.includes(value)
                ? formData.features.filter(f => f !== value)
                : [...formData.features, value];
            setFormData({ ...formData, features });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit feedback');

            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                features: [],
                comments: ''
            });
        } catch (err) {
            setError('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <>
            <div className="relative" id="feedback">
                <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <footer className="relative bg-gray-900 overflow-hidden">
                <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400  from-fuchsia-600 z-0"></span>
                <div className="container-fluid relative md:py-24 py-16">
                    <div className="container relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="text-center">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">Help Us Improve</h4>
                                <p className="text-white/70 text-lg ">Your feedback helps us make OZ-Invoice better. Let us know what features you'd like to see!</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                                {submitted ? (
                                    <div className="text-center text-white">
                                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                        <p>Your feedback has been submitted successfully.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-amber-400"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                required
                                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-amber-400"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company Name (Optional)"
                                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-amber-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white mb-2">Features You're Interested In:</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {featureOptions.map((feature) => (
                                                    <label key={feature} className="flex items-center space-x-2 text-white/80">
                                                        <input
                                                            type="checkbox"
                                                            value={feature}
                                                            checked={formData.features.includes(feature)}
                                                            onChange={handleChange}
                                                            className="rounded border-white/20 text-amber-400 focus:ring-amber-400"
                                                        />
                                                        <span>{feature}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <textarea
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleChange}
                                                placeholder="Additional Comments"
                                                rows="3"
                                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-amber-400"
                                            ></textarea>
                                        </div>
                                        {error && <p className="text-red-400">{error}</p>}
                                        <button
                                            type="submit"
                                            className="w-full py-2 px-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-md transition duration-300"
                                        >
                                            Submit Feedback
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative text-center">
                    <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
                        <div className="py-[30px] px-0">
                            <div className="grid md:grid-cols-2 items-center">
                                <div className="md:text-start text-center">
                                    <Link href="#" className="text-[22px] focus:outline-none">
                                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">OZ-Invoice</span>
                                    </Link>
                                </div>

                                <div className="md:text-end text-center mt-6 md:mt-0">
                                    <a href="mailto:Support@carsi.com.au" className="text-slate-300 hover:text-amber-400">Support@carsi.com.au</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
                    <div className="container relative text-center">
                        <div className="grid grid-cols-1">
                            <div className="text-center">
                                <p className="text-gray-400">© {new Date().getFullYear()} OZ-Invoice. A product by CARSI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}