"use client";

import Image from "next/image";

export default function AboutMasthead({ heading, subheading, image }) {
    return (
        <section className="w-11/12 mx-auto">
            <div id="about-masthead" className="relative flex flex-col items-center px-8 text-white justify-center w-full">
                <div className="h-full aspect-[1624/789]">
                    <Image src={image?.asset?.url} objectFit="cover" fill={true} />
                </div>
                <div className="flex flex-col text-center py-9 relative z-[2]">
                    <h1 className="text-[4rem] lg:text-[8rem] !font-fraunces tracking-tightest mb-4">{heading}</h1>
                    <h2 className="max-w-[638px] text-[1.3rem] lg:text-[1.7rem] leading-[1.3] font-instrument-sans font-light">{subheading}</h2>
                </div>
            </div>
        </section>
    )
}