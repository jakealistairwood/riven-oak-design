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
    },
};

const NavbarWrapper = ({ products, globalData }) => {
    const [isActive, setIsActive] = useState(false);
    // const [productsActive, setProductsActive] = useState(false);
    // const [openDropdown, setOpenDropdown] = useState(false);

    const { footer } = globalData;

    useEffect(() => {
        setIsActive(false);
        // setProductsActive(false);
        // setOpenDropdown(false);
    }, []);

    // useEffect(() => {
    //     if (isActive) {
    //         document.querySelector("body").classList.add("fixed", "inset-0");
    //     } else {
    //         document.querySelector("body").classList.remove("fixed", "inset-0");
    //     }
    // }, []);

    return (
        <>
            <header className="navbar w-full fixed inset-0 top-0 left-0 h-fit bg-white z-[1000] border-b border-solid border-[#D9D9D9]">
                <div className="container mx-auto">
                    <nav className="flex flex-row-reverse lg:flex-row items-center justify-between w-full relative py-6">
                        <ul className="hidden lg:flex items-center gap-x-4">
                            <li className="uppercase opacity-100 text-sm hover:underline underline-offset-4">
                                <a href="/">Home</a>
                            </li>
                            <li className="uppercase opacity-100 text-sm hover:underline underline-offset-4">
                                <a href="/about">About</a>
                            </li>
                            <li className="uppercase opacity-100 text-sm hover:underline underline-offset-4 relative">
                                <a href="/products">Products</a>
                                {/* <button
                                    onClick={() =>
                                        setOpenDropdown(!openDropdown)
                                    }
                                    onFocus={() => setOpenDropdown(true)}
                                    className="flex uppercase items-center gap-x-[6px] w-full"
                                >
                                    Products
                                    <div>
                                        <Image
                                            className={`${openDropdown ? "rotate-180" : "rotate-0"} transition-transform duration-200 ease-linear origin-center`}
                                            src="/images/claret-down.svg"
                                            alt=""
                                            height={12}
                                            width={12}
                                        />
                                    </div>
                                </button> */}
                                {/* <motion.nav
                                    animate={openDropdown ? "open" : "closed"}
                                    variants={animateMobileMenu}
                                    className={`${
                                        openDropdown
                                            ? "pointer-events-auto"
                                            : "pointer-events-none"
                                    } absolute top-[70px] left-0 bg-white rounded-lg bg-red z-[100] w-full min-w-[450px]`}
                                >
                                    <ul className="grid grid-cols-2 w-full p-10 gap-4">
                                        {products?.map((product, index) => (
                                            <li className="" key={`product-dropdown-link-${index}`}>
                                                <Link href={`/products/${product?.slug}` || ""} onClick={() => setOpenDropdown(false)} className="w-full block text-left opacity-70 duration-300 hover:opacity-100">{product?.title}</Link> 
                                            </li>
                                        ))}
                                    </ul>
                                </motion.nav> */}
                            </li>
                        </ul>
                        <MenuButton
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                        <a
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
                        </a>
                        <ul className="hidden lg:flex items-center gap-x-4">
                            <li className="uppercase text-sm border border-solid border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 ease-linear">
                                <a
                                    href="/contact"
                                    className="btn block py-3 px-5"
                                >
                                    Get in Touch
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <motion.nav
                    variants={animateMobileMenu}
                    animate={isActive ? "open" : "closed"}
                    initial="initial"
                    className="relative bottom-0 overflow-hidden"
                >
                    <div className="container">
                        <ul>
                            <li className="border-b border-solid border-[#E8E8E8]">
                                <a
                                    onClick={() => setIsActive(false)}
                                    className="w-full block text-left pb-4 font-medium uppercase"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="border-b border-solid border-[#E8E8E8]">
                                <a
                                    onClick={() => setIsActive(false)}
                                    className="w-full block text-left py-4 font-medium uppercase"
                                    href="/about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="border-b border-solid border-[#E8E8E8] py-4">
                                <a
                                    onClick={() => setIsActive(false)}
                                    className="w-full block text-left py-4 font-medium uppercase"
                                    href="/about"
                                >
                                    Product
                                </a>
                                {/* <button
                                    type="button"
                                    className="block w-full text-left"
                                    onClick={() =>
                                        setProductsActive(!productsActive)
                                    }
                                >
                                    <Link
                                        className="w-full block text-left font-medium uppercase"
                                        href="/"
                                    >
                                        Products
                                    </Link>
                                </button> */}
                                {/* <motion.nav
                                    variants={animateMobileMenu}
                                    animate={
                                        productsActive ? "open" : "closed"
                                    }
                                    initial="inital"
                                    className="overflow-hidden"
                                >
                                    <ul>
                                        {products?.map((product, index) => (
                                            index === 0 ? (
                                                <li key={`mobile-product-dropdown-link-${index}`} className="border-y border-solid border-[#E8E8E8] mt-4">
                                                    <Link
                                                        href={`/products/${product?.slug}`}
                                                        onClick={() =>
                                                            setIsActive(false)
                                                        }
                                                        className="w-full block text-left py-4 pl-4"
                                                    >
                                                        {product?.title}
                                                    </Link>
                                                </li>
                                            ) : index === products.length - 1 ? (
                                                <li key={`mobile-product-dropdown-link-${index}`} className="">
                                                    <Link href={`/products/${product?.slug}`} onClick={() => setIsActive(false)} className="w-full block text-left pl-4 pt-4">
                                                        {product?.title}
                                                    </Link>
                                                </li>
                                            ) : (
                                                <li key={`mobile-product-dropdown-link-${index}`} className="border-b border-solid border-[#E8E8E8]">
                                                    <Link
                                                        href={`/products/${product?.slug}`}
                                                        onClick={() =>
                                                            setIsActive(false)
                                                        }
                                                        className="w-full block text-left py-4 pl-4"
                                                    >
                                                        {product?.title}
                                                    </Link>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </motion.nav> */}
                            </li>
                            <li className="border-b border-solid border-[#E8E8E8]">
                                <a
                                    onClick={() => setIsActive(false)}
                                    className="w-full block text-left py-4 font-medium uppercase"
                                    href="/contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="py-8">
                            <ul className="flex items-center gap-4">
                                {footer?.social_icons.length > 0 &&
                                    footer?.social_icons?.map((icon, index) => (
                                        <a
                                            key={`mobile-menu-social-icon-${index}`}
                                            href={icon?.url}
                                            className="h-[45px] w-[45px] rounded-full bg-[#F9F9F9] flex items-center justify-center"
                                        >
                                            <img
                                                src={icon?.icon?.asset?.url}
                                                alt="social icon"
                                            />
                                        </a>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </motion.nav>
            </header>
            {isActive && (
                <div className="fixed inset-0 bg-black opacity-50 z-[90]" />
            )}
        </>
    );
};

export default NavbarWrapper;
