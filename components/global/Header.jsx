import { createClient } from "next-sanity";
import { getPages } from "@/sanity-utils";
import Link from "next/link";
import Image from "next/image";

async function Header(props) {
    const data = await getPages();

    const navLinks = data.map((page) => page.slug);

    return (
        <header className="flex items-center w-full fixed inset-0 top-0 left-0 h-fit bg-white z-[1000]">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between w-full relative py-6">
                    <ul className="flex items-center gap-x-4">
                        {navLinks.map((link, index) => (
                            <li className="uppercase opacity-60 text-sm" key={`nav-link-${index}`}>
                                <Link href={link}>
                                    {link === "/" ? "Home" : link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-full max-w-[244px]" href="">
                        <Image priority className="w-full" src="/images/logo.png" width={244} height={30} />
                    </a>
                    <ul className="flex items-center gap-x-4">
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
                </nav>
            </div>
        </header>
    )
}

export default Header;