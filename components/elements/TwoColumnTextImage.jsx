"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

export default function TwoColumnTextImage(props) {
    const { heading, content, image } = props;

    return (
        <section className="relative my-24">
            <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-28">
                <div className="self-center container prose">
                    {heading && (
                        <h2 className="mb-6">
                            <AnimatedText text={heading} />
                        </h2>
                    )}
                    {content?.map((block) =>
                        block?.children?.map((child, index) => (
                            <motion.div
                                key={`content-block-${index}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.6, 0.01, 0.05, 1],
                                    delay: 0.4,
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: child?.text,
                                }}
                            />
                        ))
                    )}
                </div>
                <motion.div 
                    initial={{ y: 50, opacity: 0 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}  
                    className="relative max-w-[764px] aspect-[1/1]"
                    transition={{
                        duration: 1.2,
                        ease: [0.6, 0.01, 0.05, 1],
                        delay: 0.8,
                    }}
                >
                    <Image
                        className="grayscale"
                        fill={true}
                        src={image?.asset?.url}
                        objectFit="cover"
                        sizes="(max-width: 992px) 100vw, (max-width: 1440px) 600px, 800px"
                    />
                </motion.div>
            </div>
        </section>
    );
}
