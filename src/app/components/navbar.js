import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, [])

    return (
        <>
            <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
                <div className="container flex justify-between items-center">
                    <Link className="logo" href="/">
                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">OZ-Invoice</span>
                    </Link>

                    <ul className="buy-button list-none mb-0">
                        <li className="inline mb-0">
                            <Link href="#feedback" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Share Your Opinion</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}