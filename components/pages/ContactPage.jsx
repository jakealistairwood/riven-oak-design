"use client";

import { useState } from "react";
import ContactForm from "../elements/ContactForm";

function ContactPage(props) {
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
    console.log(props);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center container">
            <ContactForm setFormSubmitSuccessful={setFormSubmitSuccessful} />
        </div>
    )
}

export default ContactPage;