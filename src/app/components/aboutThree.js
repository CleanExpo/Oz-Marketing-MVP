import Link from "next/link";
import { useState } from "react";

import { FiCheckCircle } from '../assets/icons/vander';


export default function AboutThree() {
    return (
        <div className="container py-16 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">From Claim to Invoice: <br /> Your Complete Automation Solution</h3>
            <p className="text-slate-400 ">Experience how Oz Invoice System transforms your invoicing process. Start with claim entry through CRM or Google Sheets, let our AI analyze historical data, and watch as invoices are automatically generated and sent to your accounting system.</p>

            <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Smart Claim Entry with CRM/Google Sheets Integration</li>
                <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />AI-Powered Historical Data Analysis and Optimization</li>
                <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Automated Invoice Generation and Accounting System Sync</li>
            </ul>

            <div className="mt-4">
                <Link href="#feedback" className="hover:text-amber-400 font-medium duration-500">Share Your Opinion <i className="mdi mdi-chevron-right text-[20px] align-middle"></i></Link>
            </div>
        </div>
    )
}