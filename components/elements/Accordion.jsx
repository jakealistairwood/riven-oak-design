"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const animateAccordion = {
    initial: {
        height: 0,
        opacity: 0,
    },
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const Accordion = ({ description, heading, gallery }) => {
    return (
        <section className="bg-[#F6F6F6] py-16 md:py-24">
            <div className="container w-full  sm:w-4/5 lg:w-1/2 mx-auto">
                <header className="flex flex-col md:flex-row justify-center items-center gap-y-10 text-center w-full pb-16">
                    <div className="flex flex-col w-full max-w-[560px]">
                        {heading && (
                            <h2>
                                <AnimatedText text={heading} />
                            </h2>
                        )}
                        <motion.p 
                            className="mt-8 text-lg font-light opacity-80"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.6, 0.01, 0.05, 1],
                                delay: 0.4
                            }}
                        >
                            {description}
                        </motion.p>
                    </div>
                </header>
                <div className="flex flex-col">
                    {gallery?.map((item, index) => (
                        <AccordionItem
                            index={index}
                            accordion_content={item}
                            key={`accordion-item${index}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AccordionItem = ({ index, accordion_content }) => {
    const { content, image } = accordion_content;
    const [openAccordion, setOpenAccordion] = useState(false);

    return (
        <button
            className="py-6 flex flex-col border-b border-solid border-[#DEDEDE]"
            type="button"
            onClick={() => setOpenAccordion(!openAccordion)}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                    <span className="">{index + 1}</span>
                    <h3 className="text-[2.5rem]">{content?.title}</h3>
                </div>
                <div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={openAccordion ? "rotate-180 origin-center transition-transform duration-200" : "rotate-0"}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.46934 9.4C4.60997 9.25955 4.80059 9.18066 4.99934 9.18066C5.19809 9.18066 5.38871 9.25955 5.52934 9.4L11.8933 15.764C11.9166 15.7873 11.9442 15.8058 11.9745 15.8184C12.0049 15.831 12.0375 15.8375 12.0703 15.8375C12.1032 15.8375 12.1358 15.831 12.1662 15.8184C12.1965 15.8058 12.2241 15.7873 12.2473 15.764L18.6113 9.4C18.7535 9.26752 18.9416 9.1954 19.1359 9.19883C19.3302 9.20226 19.5155 9.28097 19.653 9.41838C19.7904 9.55579 19.8691 9.74118 19.8725 9.93548C19.8759 10.1298 19.8038 10.3178 19.6713 10.46L13.3073 16.824C13.1448 16.9865 12.9519 17.1154 12.7396 17.2034C12.5272 17.2914 12.2997 17.3366 12.0698 17.3366C11.84 17.3366 11.6124 17.2914 11.4001 17.2034C11.1878 17.1154 10.9948 16.9865 10.8323 16.824L4.46934 10.46C4.32889 10.3194 4.25 10.1288 4.25 9.93C4.25 9.73125 4.32889 9.54063 4.46934 9.4Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
            <motion.div
                initial="initial"
                animate={openAccordion ? "open" : "closed"}
                variants={animateAccordion}
                className={`${
                    openAccordion
                        ? "h-auto opacity-100 visible pointer-events-auto"
                        : "invisible opacity-0 h-0 pointer-events-none"
                }`}
            >
                <div className="min-h-[40px]" />
                <div className="aspect-[16/9] relative w-full">
                    <Image
                        src={image?.asset?.url}
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
                <p className="my-10 text-left px-8" dangerouslySetInnerHTML={{ __html: content?.description }} />
            </motion.div>
        </button>
    );
};

export default Accordion;
