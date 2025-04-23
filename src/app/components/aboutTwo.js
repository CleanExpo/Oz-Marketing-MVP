import Link from "next/link";

import { FiCheckCircle, MdKeyboardArrowRight } from '../assets/icons/vander';

export default function AboutTwo() {
    return (
        <>
            <div className="container py-16 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
                <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Transform Your Invoicing <br /> Workflow with AI</h4>
                <p className="text-slate-400">Oz Invoice System leverages artificial intelligence to analyze historical data and optimize your invoicing process. Our platform ensures accurate claim processing and reduces manual intervention, helping you save time and minimize errors.</p>
                <ul className="list-none text-slate-400 mt-4">
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Historical Data Analysis for Better Decision Making</li>
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Automated Claim Validation and Processing</li>
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Real-time Monitoring and Analytics Dashboard</li>
                </ul>

                <div className="mt-4">
                    <Link href="#features" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">Explore Features <MdKeyboardArrowRight className="ms-1 text-[20px]" /></Link>
                </div>
            </div>
        </>
    )
}