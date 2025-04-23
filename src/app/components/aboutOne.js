import { FiCheckCircle } from '../assets/icons/vander';

export default function AboutOne() {
    return (
        <>
            <div className="container py-16 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Streamline Your Invoicing <br /> With AI-Powered Automation</h3>
                <p className="text-slate-400">Oz Invoice System revolutionizes your invoicing workflow by seamlessly connecting your CRM to accounting systems. Our AI-powered platform automates the entire process from claim entry to final invoice generation, reducing manual work and minimizing errors. Experience the future of automated invoicing with intelligent features that adapt to your business needs.</p>

                <ul className="list-none text-slate-400 mt-4">
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Seamless CRM and Accounting System Integration</li>
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />AI-Powered Claim Analysis and Optimization</li>
                    <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />Automated Invoice Generation and Validation</li>
                </ul>
            </div>
        </>
    )
}