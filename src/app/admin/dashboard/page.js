'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AdminDashboard() {
    const router = useRouter();
    const [feedbacks, setFeedbacks] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication
        const isAuthenticated = localStorage.getItem('adminAuthenticated');
        if (!isAuthenticated) {
            router.push('/admin/login');
            return;
        }

        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/feedback/list?page=${pagination.page}&limit=${pagination.limit}`);
            const data = await response.json();
            console.log("data", data);

            if (data.success) {
                setFeedbacks(data.feedbacks);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        router.push('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                                OZ-Invoice Admin
                            </span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-sm font-medium text-white bg-amber-400 hover:bg-amber-500 rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 ">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow overflow-hidden">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-white">
                                User Feedback
                            </h3>
                        </div>
                        <div className="border-t border-gray-700">
                            {loading ? (
                                <div className="text-center py-4 text-white flex justify-center items-center"><Loader2 className='animate-spin' /></div>
                            ) : (
                                <div className="divide-y divide-gray-700">
                                    {feedbacks.map((feedback) => (
                                        <div key={feedback.id} className="p-4 hover:bg-white/5">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="text-white font-medium">{feedback.name}</h4>
                                                    <p className="text-gray-400 text-sm">{feedback.email}</p>
                                                    {feedback.company && (
                                                        <p className="text-gray-400 text-sm">Company: {feedback.company}</p>
                                                    )}
                                                </div>
                                                <span className="text-gray-400 text-sm">
                                                    {new Date(feedback.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="text-white">Features Interested In:</p>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {feedback.features.map((feature, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 text-xs rounded-full bg-amber-400/20 text-amber-400"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {feedback.comments && (
                                                <div className="mt-2">
                                                    <p className="text-white">Comments:</p>
                                                    <p className="text-gray-400 mt-1">{feedback.comments}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-700 sm:px-6">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button
                                    onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                                    disabled={pagination.page === 1}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                                    disabled={pagination.page === pagination.totalPages}
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Showing <span className="font-medium">{feedbacks.length}</span> of{' '}
                                        <span className="font-medium">{pagination.total}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                                            disabled={pagination.page === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 disabled:opacity-50"
                                        >
                                            Previous
                                        </button>
                                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-white">
                                            Page {pagination.page} of {pagination.totalPages}
                                        </span>
                                        <button
                                            onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                                            disabled={pagination.page === pagination.totalPages}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 