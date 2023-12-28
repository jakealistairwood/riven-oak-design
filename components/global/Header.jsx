import { createClient } from "next-sanity";
import { getPages } from "@/sanity-utils";
import Link from "next/link";
import Image from "next/image";

async function Header(props) {

    return (
        <header className="navbar flex items-center w-full fixed inset-0 top-0 left-0 h-fit bg-white z-[1000]">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between w-full relative py-6">
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
                    <a className="xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 block w-full max-w-[190px] md:max-w-[244px]" href="">
                        <Image priority className="w-full" src="/images/logo.png" width={244} height={30} />
                    </a>
                    <ul className="hidden lg:flex items-center gap-x-4">
                        <li className="uppercase opacity-60 text-sm">
                            <Link href="https://facebook.com/rivenoakdesign">Facebook</Link>
                        </li>
                        <li className="uppercase opacity-60 text-sm">
                            <Link href="https://x.com/rivenoakdesign">X</Link>
                        </li>
                        <li className="uppercase text-sm border border-solid border-accent text-accent">
                            <a href="mailto:jack@rivenoakdesign.com" className="block py-3 px-5">Get in Touch</a>
                        </li>
                    </ul>
                    <button className="mobile-menu-btn lg:hidden flex justify-center items-center">
                        <div className="flex flex-col gap-y-2">
                            <div className="h-[1px] w-[30px] bg-black" />
                            <div className="h-[1px] w-[30px] bg-black" />
                            <div className="h-[1px] w-[30px] bg-black" />
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;