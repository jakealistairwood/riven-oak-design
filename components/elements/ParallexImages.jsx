"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"

function ParallaxImages({ top_slider, bottom_slider }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    console.log(top_slider, bottom_slider);

    return (
        <div className="relative overflow-hidden hidden md:flex flex-col gap-[1vw] mt-[160px]" ref={containerRef}>
            <motion.div className="flex items-center gap-[1vw] w-[120vw] -left-[10vw]" style={{ x: x1 }}>
                {top_slider?.map((item, index) => (
                    <div key={`top-slider-${index}`} className="relative aspect-[16/9] max-w-[450px] w-full">
                        <Image sizes="(max-width: 992px) 275px, 500px" loading={"lazy"} fill={true} src={item?.asset?.url} alt="" />
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex items-center gap-[1vw] w-[120vw] -left-[10vw]" style={{ x: x2 }}>
                {bottom_slider?.map((item, index) => (
                    <div key={`bottom-slider-${index}`} className="relative aspect-[16/9] max-w-[450px] w-full">
                        <Image sizes="(max-width: 992px) 275px, 500px" loading={"lazy"} fill={true} src={item?.asset?.url} alt="" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default ParallaxImages;