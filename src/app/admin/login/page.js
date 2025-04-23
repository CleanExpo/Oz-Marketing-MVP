'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                // Store authentication state (you might want to use a more secure method)
                localStorage.setItem('adminAuthenticated', 'true');
                router.push('/admin/dashboard');
            } else {
                setError(data.error || 'Invalid credentials');
            }
        } catch (err) {
            setError('Failed to authenticate');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full space-y-8 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Admin Login
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="text-red-400 text-center">{error}</div>
                    )}
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 