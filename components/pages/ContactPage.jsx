"use client";

import { useState } from "react";
import ContactForm from "../elements/ContactForm";
import AnimatedText from "../elements/AnimatedText";

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
                        <p className="opacity-80 text-lg max-w-[500px]">I'll endeavour to get back to you as soon as I can. This should be no more than 3 working days.</p>
                        <a className="mt-10 transition-all duration-300 border border-solid border-accent hover:bg-accent hover:text-white text-accent px-11 py-4 w-fit mx-auto" href="/">Back to Home</a>
                    </div>
                </div>
            ) : (
                <>
                    <header className="flex flex-col justify-center text-center pt-48 mb-16">
                        <h1>Get in Touch</h1>
                        <p className="text-lg max-w-[500px] opacity-80 pt-10">For any queries or if you've seen something you like and would like a quote, please don't hesitate to get in touch using the form below.</p>
                    </header>
                    <ContactForm setFormSubmitSuccessful={setFormSubmitSuccessful} />
                </>
            )}
        </div>
    )
}

export default ContactPage;