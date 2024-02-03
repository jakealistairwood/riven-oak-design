"use client";

import { useState } from "react";
import ContactForm from "../elements/ContactForm";
import AnimatedText from "../elements/AnimatedText";
import { motion } from "framer-motion";

function ContactPage(props) {
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
    console.log(props);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center container">
            {formSubmitSuccessful ? (
                <div className="flex flex-col justify-center text-center">
                    <h2>
                        <AnimatedText text="Thank You!" />
                    </h2>
                    <div className="flex flex-col mt-6">
                        <p className="opacity-80 text-lg max-w-[500px]">I&apos;ll endeavour to get back to you as soon as I can. This should be no more than 3 working days.</p>
                        <a className="btn mt-10 transition-all duration-300 border border-solid border-accent hover:bg-accent hover:text-white text-accent px-11 py-4 w-fit mx-auto" href="/">Back to Home</a>
                    </div>
                </div>
            ) : (
                <>
                    <header className="flex flex-col justify-center text-center pt-32 md:pt-48 mb-16">
                        <h1>
                            <AnimatedText text={"Get in Touch"} />
                        </h1>
                        <motion.p 
                            className="text-lg max-w-[500px] opacity-80 pt-8"
                            initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.6, 0.01, 0.05, 1],
                                    delay: 0.4,
                                }}
                        >
                            For any queries or if you&apos;ve seen something you like and would like a quote, please don&apos;t hesitate to get in touch using the form below.
                        </motion.p>
                    </header>
                    <ContactForm setFormSubmitSuccessful={setFormSubmitSuccessful} />
                </>
            )}
        </div>
    )
}

export default ContactPage;