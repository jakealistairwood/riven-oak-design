"use client";

import { useState } from "react";
import ContactForm from "../elements/ContactForm";
import AnimatedText from "../elements/AnimatedText";
import { motion } from "framer-motion";
// import { createClient, groq } from "next-sanity";
// import { clientConfig } from "@/sanity/config/client-config";
import CTA from "../global/CTA";

function ContactPage(props) {
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
    const { data, ctaData } = props;
    const { contact_page } = data;
  
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center container">
                {formSubmitSuccessful ? (
                    <div className="flex flex-col justify-center text-center" id="form-submission-message">
                        <h2>
                            <AnimatedText text={contact_page?.form_submission_message?.heading || "Thank You!"} />
                        </h2>
                        <div className="flex flex-col mt-6">
                            {contact_page?.form_submission_message?.message && <p className="opacity-80 text-lg max-w-[500px]">{contact_page?.form_submission_message?.message}</p>}
                            {contact_page?.form_submission_message?.link && <a className="btn mt-10 transition-all duration-300 border border-solid border-accent hover:bg-accent hover:text-white text-accent px-11 py-4 w-fit mx-auto" href={contact_page?.form_submission_message?.link?.url || ""}>{contact_page?.form_submission_message?.link?.label}</a>}
                        </div>
                    </div>
                ) : (
                    <>
                        <header className="flex flex-col justify-center text-center pt-32 md:pt-48 mb-16">
                            <h1>
                                <AnimatedText text={contact_page?.form_details?.header || "Get in Touch"} />
                            </h1>
                            {contact_page?.form_details?.description && (
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
                                    {contact_page?.form_details?.description}
                                </motion.p>
                            )}
                        </header>
                        <ContactForm emailJsConfig={contact_page?.form_details?.email_js_config} setFormSubmitSuccessful={setFormSubmitSuccessful} />
                    </>
                )}
            </div>
            <CTA isContactPage ctaData={ctaData} />
        </>
    )
}

export default ContactPage;