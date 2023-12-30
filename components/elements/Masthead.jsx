"use client";

import Link from "next/link";
import Image from "next/image";

function Masthead({ heading, description, links, image }) {
    
    return (
        <section className="w-11/12 mx-auto">
            <div className="relative flex flex-col items-center text-white justify-center w-full" id="hero-masthead">
                <div className="h-full aspect-[1624/789]">
                    <Image src={image?.asset?.url} objectFit="cover" fill={true} />
                </div>
                <div className="flex flex-col w-full max-w-[574px] text-center px-4 relative z-[2]">
                    <h1 className="font-fraunces" dangerouslySetInnerHTML={{ __html: heading }} />
                    <p className="text-xl opacity-80 mt-6" dangerouslySetInnerHTML={{ __html: description }} />
                    {links && <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                        {links?.map((link, index) => (
                            <Link key={`masthead-link-${index}`} className={`${link?.button_type === "primary" ? "bg-white text-dark-grey" : "border border-solid border-white hover:bg-white hover:text-dark-grey"} py-4 px-7 w-full sm:w-[unset]`} href={link?.link_url}>{link?.label}</Link>
                        ))}
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Masthead;