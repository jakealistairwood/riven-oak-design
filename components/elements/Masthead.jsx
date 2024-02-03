"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";

function Masthead({ heading, description, links, image }) {

    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    return (
        <section className="w-11/12 mx-auto">
            <div className="relative flex flex-col items-center text-white justify-center w-full" id="hero-masthead">
                {/* <div className="absolute inset-0 z-[2]" style={{
                    background: "rgba(0, 0, 0, 0.5)"
                }} /> */}
                <div className="h-full aspect-[1624/789]">
                    <Image priority src={image?.asset?.url} objectFit="cover" fill={true} />
                    <div className="absolute inset-0 z-[2]" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} />
                </div>
                <div className="flex flex-col w-full max-w-[574px] text-center px-4 relative z-[3]">
                    <h1 className="">
                        <AnimatedText text={heading} />
                    </h1>
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.6, 0.01, 0.05, 1],
                            delay: 0.4
                        }}
                    >
                        <p
                            className="text-lg opacity-80 font-extralight" 
                            dangerouslySetInnerHTML={{ __html: description }} 
                        />
                        {links && <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                            {links?.map((link, index) => (
                                <a key={`masthead-link-${index}`} className={`${link?.button_type === "primary" ? "bg-white text-dark-grey" : "border border-solid border-white/30 hover:bg-white hover:text-dark-grey"} py-[10px] rounded-lg px-7 w-full sm:w-[unset] transition-all duration-200 ease-linear`} href={link?.link_url}>{link?.label}</a>
                            ))}
                        </div>}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Masthead;