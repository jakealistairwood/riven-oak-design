"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import { getProducts } from "@/sanity-utils";

const animateMobileMenu = {
    initial: {
        height: 0,
        opacity: 0,
    },
    open: {
        height: "auto",
        opacity: 1,
    },
    closed: {
        height: 0,
        opacity: 0,
    }
}

const NavbarWrapper = () => {
    const [isActive, setIsActive] = useState(false);
    const [productsActive, setProductsActive] = useState(false);

    useEffect(() => {
        setIsActive(false);
        setProductsActive(false);
    }, []);

    useEffect(() => {
        if (isActive) {
            document.querySelector("body").classList.add("fixed", "inset-0")
        } else {
            document.querySelector("body").classList.remove("fixed", "inset-0");
        }
    }, [isActive]);

    return (
        <>
            <header className="navbar w-full fixed inset-0 top-0 left-0 h-fit bg-white z-[1000]">
                <div className="container mx-auto">
                    <nav className="flex flex-row-reverse lg:flex-row items-center justify-between w-full relative py-6">
                        <ul className="hidden lg:flex items-center gap-x-4">
                                <li className="uppercase opacity-60 text-sm">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="uppercase opacity-60 text-sm">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="uppercase opacity-60 text-sm">
                                    Products
                                </li>
                            </ul>
                        <MenuButton isActive={isActive} setIsActive={setIsActive} />
                        <Link
                            className="xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 block w-full max-w-[190px] md:max-w-[244px]"
                            href="/"
                        >
                            <Image
                                priority
                                className="w-full"
                                src="/images/logo.png"
                                width={244}
                                height={30}
                            />
                        </Link>
                        <ul className="hidden lg:flex items-center gap-x-4">
                            <li className="uppercase opacity-60 text-sm">
                                <Link href="https://facebook.com/rivenoakdesign">
                                    Facebook
                                </Link>
                            </li>
                            <li className="uppercase opacity-60 text-sm">
                                <Link href="https://x.com/rivenoakdesign">X</Link>
                            </li>
                            <li className="uppercase text-sm border border-solid border-accent text-accent">
                                <a
                                    href="mailto:jack@rivenoakdesign.com"
                                    className="block py-3 px-5"
                                >
                                    Get in Touch
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <AnimatePresence>
                    <motion.nav variants={animateMobileMenu} animate={isActive ? "open" : "closed"} initial="initial" className="relative bottom-0 overflow-hidden">
                        <div className="container">
                            <ul>
                                <li className="border-b border-solid border-[#E8E8E8]">
                                    <Link onClick={() => setIsActive(false)} className="w-full block text-left pb-4 font-medium uppercase" href="/">Home</Link>
                                </li>
                                <li className="border-b border-solid border-[#E8E8E8]">
                                    <Link onClick={() => setIsActive(false)} className="w-full block text-left py-4 font-medium uppercase" href="/about">About</Link>
                                </li>
                                <li className="border-b border-solid border-[#E8E8E8] py-4">
                                    <button type="button" className="block w-full text-left" onClick={() => setProductsActive(!productsActive)}>
                                        <Link className="w-full block text-left font-medium uppercase" href="/">Products</Link>
                                    </button>
                                    <motion.nav variants={animateMobileMenu} animate={productsActive ? "open" : "closed"} initial="inital" className="overflow-hidden">
                                        <ul>
                                            <li className="border-y border-solid border-[#E8E8E8] mt-4">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Garden Furniture</Link>
                                            </li>
                                            <li className="border-b border-solid border-[#E8E8E8]">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Timber</Link>
                                            </li>
                                            <li className="border-b border-solid border-[#E8E8E8]">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Garden Gates</Link>
                                            </li>
                                            <li className="border-b border-solid border-[#E8E8E8]">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Coppice Products</Link>
                                            </li>
                                            <li className="border-b border-solid border-[#E8E8E8]">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Fencing</Link>
                                            </li>
                                            <li className="border-b border-solid border-[#E8E8E8]">
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left py-4 pl-4">Arches</Link>
                                            </li>
                                            <li>
                                                <Link href="/products/garden-furniture" onClick={() => setIsActive(false)} className="w-full block text-left pt-4 pl-4">Benches</Link>
                                            </li>
                                        </ul>
                                    </motion.nav>
                                </li>
                                <li className="border-b border-solid border-[#E8E8E8]">
                                    <Link onClick={() => setIsActive(false)} className="w-full block text-left py-4 font-medium uppercase" href="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul className="py-8">
                                <div className="flex items-center gap-4">
                                    <li className="uppercase opacity-60 text-sm">
                                        <Link href="https://facebook.com/rivenoakdesign">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="uppercase opacity-60 text-sm bg-white/10">
                                        <Link href="https://x.com/rivenoakdesign">X</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </motion.nav>
                </AnimatePresence>
            </header>
            {isActive && <div className="fixed inset-0 bg-black opacity-50 z-[90]" />}
        </>
    );
};

export default NavbarWrapper;
