"use client";

import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/utils/SanityImage";

export default function AboutMasthead({ heading, subheading, image }) {
    return (
        <section className="w-11/12 mx-auto">
            <div
                id="about-masthead"
                className="relative flex flex-col items-center px-8 text-white justify-center w-full"
            >
                <div className="h-full aspect-[1624/789]">
                    <Image
                        src={urlFor(image?.asset?.url).format("webp").quality(80).url()}
                        objectFit="cover"
                        fill={true}
                    />
                </div>
                <div className="flex flex-col text-center py-9 relative z-[2]">
                    {heading && (
                        <h1 className="text-[4rem] lg:text-[8rem] !font-fraunces tracking-tightest mb-4">
                            <AnimatedText text={heading} />
                        </h1>
                    )}
                    <motion.h2
                        className="max-w-[638px] text-[1.3rem] lg:text-[1.7rem] leading-[1.3] font-instrument-sans font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.6, 0.01, 0.05, 1],
                            delay: 0.4,
                        }}
                    >
                        {subheading}
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}
