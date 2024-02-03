"use client";

import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

function ScrollableImage({ heading, description, gallery }) {
    return (
        <section>
            <div className="container mx-auto py-16 md:py-28">
                <header className="section-header text-center max-w-[781px] w-full mx-auto">
                    <h2>
                        <AnimatedText text={heading} />
                    </h2>
                    {/* <h2 dangerouslySetInnerHTML={{ __html: heading }} /> */}
                    <motion.p 
                        className="opacity-80 text-dark-grey text-lg font-extralight pt-8 text-balance" 
                        dangerouslySetInnerHTML={{ __html: description }} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.6, 0.01, 0.05, 1],
                            delay: 0.4
                        }}
                    />
                </header>
            </div>
        </section>
    )
}

export default ScrollableImage;