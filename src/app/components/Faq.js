import React, { useState } from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from '../assets/icons/vander'

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(1)
    const accordionData = [
        {
            id: 1,
            title: 'How does Oz Invoice System handle different supplier invoice formats?',
            desc: 'Our system is designed to handle various invoice formats through intelligent data extraction and processing. We use AI to recognize and parse different invoice structures, ensuring accurate data capture regardless of the supplier format. The system can be trained to recognize new formats as needed.'
        },
        {
            id: 2,
            title: 'Can I use Google Sheets as my CRM with Oz Invoice System?',
            desc: 'Yes, absolutely! We support Google Sheets integration as a temporary CRM solution. You can easily import claim data from your Google Sheets, and our system will process it just like any other CRM data source. This makes it perfect for startups or businesses in transition.'
        },
        {
            id: 3,
            title: 'How does the AI analysis improve my invoicing process?',
            desc: 'Our AI analyzes historical invoice data to identify patterns, optimize pricing, and detect potential errors. It can suggest improvements based on past successful claims, help prevent undercharging, and ensure consistency across your invoicing process.'
        },
        {
            id: 4,
            title: 'Which accounting systems does Oz Invoice integrate with?',
            desc: 'Oz Invoice System integrates with major accounting platforms including QuickBooks, Xero, and other popular systems. We can also develop custom integrations for specific accounting software based on your needs.'
        },
    ]
    return (
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Get answers to common questions about Oz Invoice System and how it can transform your invoicing workflow.</p>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8">
                        {accordionData.map((item, index) => {
                            return (
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => setActiveIndex(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span>{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}