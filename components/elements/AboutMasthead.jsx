"use client";

import Image from "next/image";

export default function AboutMasthead({ heading, subheading, image }) {
    return (
        <section>
            <div id="about-masthead" className="flex flex-col h-full">
                <div className="relative aspect-[1624/611]">
                    <Image src={image?.asset?.url} objectFit="cover" fill={true} />
                </div>
                <div className="container flex items-center justify-between py-9">
                    <h1 className="text-[5rem] !font-fraunces tracking-tightest">{heading}</h1>
                    <h2 className="max-w-[638px] text-[2rem] font-crimson-pro font-light">{subheading}</h2>
                </div>
            </div>
        </section>
    )
}