import React from "react";
import Link from "next/link";

export default function AmazingFeatures() {
    const featureData = [
        {
            icon: "mdi mdi-account-cog-outline",
            title: 'Smart Claim Entry',
            desc: 'Seamlessly connect with your CRM or Google Sheets to input new claims with supplier and client details.'
        },
        {
            icon: "mdi mdi-file-document-multiple-outline",
            title: 'Invoice Data Integration',
            desc: 'Automatically pull and process invoice data from various supplier formats and structures.'
        },
        {
            icon: "mdi mdi-brain",
            title: 'AI-Powered Analysis',
            desc: 'Leverage historical data and LLM analysis to optimize claims and ensure accurate pricing.'
        },
        {
            icon: "mdi mdi-file-plus-outline",
            title: 'Automated Invoice Generation',
            desc: 'Create and format invoices automatically for your accounting system with minimal manual intervention.'
        },
        {
            icon: "mdi mdi-sync",
            title: 'Accounting System Integration',
            desc: 'Direct integration with major accounting systems for seamless invoice processing and tracking.'
        },
        {
            icon: "mdi mdi-chart-line",
            title: 'Real-time Monitoring',
            desc: 'Track claim status, invoice progress, and automation metrics through our intuitive dashboard.'
        },
    ]
    return (
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Experience the future of automated invoicing with our comprehensive suite of intelligent features designed to streamline your workflow.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featureData.map((item, index) => {
                        return (
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900" key={index}>
                                <i className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-fuchsia-600 text-transparent bg-clip-text`}></i>

                                <div className="content mt-7">
                                    <Link href="" className="title h5 text-lg font-medium hover:text-amber-400 duration-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}