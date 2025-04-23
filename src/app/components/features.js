import React from "react";
import Image from "next/image";

export default function Features({ classlist }) {
    const features = [
        {
            id: 1,
            title: "Smart Claim Entry",
            description: "Seamlessly connect with your CRM or Google Sheets to input new claims with supplier and client details.",
            icon: "uil uil-file-check-alt",
            image: "/images/features/claim-entry.png"
        },
        {
            id: 2,
            title: "Invoice Data Integration",
            description: "Automatically pull and process invoice data from various supplier formats and structures.",
            icon: "uil uil-invoice",
            image: "/images/features/invoice-data.png"
        },
        {
            id: 3,
            title: "AI-Powered Analysis",
            description: "Leverage historical data and LLM analysis to optimize claims and ensure accurate pricing.",
            icon: "uil uil-brain",
            image: "/images/features/ai-analysis.png"
        },
        {
            id: 4,
            title: "Automated Invoice Generation",
            description: "Create and format invoices automatically for your accounting system.",
            icon: "uil uil-file-plus-alt",
            image: "/images/features/invoice-gen.png"
        },
        {
            id: 5,
            title: "Accounting System Integration",
            description: "Direct integration with major accounting systems for seamless invoice processing.",
            icon: "uil uil-sync",
            image: "/images/features/accounting.png"
        },
        {
            id: 6,
            title: "Real-time Monitoring",
            description: "Track claim status, invoice progress, and automation metrics through our dashboard.",
            icon: "uil uil-chart-line",
            image: "/images/features/monitoring.png"
        },
    ];

    return (
        <>
            <div className={classlist}>
                <div className="grid grid-cols-1 pb-6 text-center" >
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Streamline Your Invoicing with <br /> <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Oz Invoice System</span></h3>

                    <p className="text-slate-400 max-w-xl mx-auto">From claim entry to final invoice generation, our system automates your entire invoicing workflow with intelligent features.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {features.map((item, index) => {
                        return (
                            <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-500" key={index}>


                                <div className="p-6">
                                    <h5 className="text-lg font-semibold">{item.title}</h5>
                                    <p className="text-slate-400 mt-3">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}