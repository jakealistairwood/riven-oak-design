"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = ({ setFormSubmitSuccessful }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async(data) => {
        const { name, email, subject, message } = data;
        
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                "service_svib44s",
                "template_isbakvr",
                templateParams,
                "95v4DqrB9npXsx2GJ"
            );
            
            setFormSubmitSuccessful(true);

            reset();
        } catch (e) {
            console.log(e);
        }
    }

    const resetForm = () => {
        reset();
    }

    return (
        <form className="max-w-[600px] mx-auto w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-control flex flex-col">
                <label className="pb-2" htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="px-4 border border-solid border-[#d9d9d9] min-h-[50px]"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Please enter your name",
                        },
                        maxLength: {
                            value: 40,
                            message:
                                "Please use no more than 40 characters",
                        },
                    })}
                />
                <div className="min-h-[1.5rem]">
                    {errors.name && (
                        <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                </div>
            </div>
            <div className="form-control flex flex-col">
                <label className="pb-2" htmlFor="email">Email Address:</label>
                <input
                    className="px-4 border border-solid border-[#d9d9d9] min-h-[50px]"
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                />
                <div className="min-h-[1.5rem]">
                    {errors.email && (
                        <span className="text-sm text-red-500">Please enter a valid email address</span>
                    )}
                </div>
            </div>
            <div className="form-control flex flex-col">
                <label className="pb-2" htmlFor="subject">Subject</label>
                <input
                    className="px-4 border border-solid border-[#d9d9d9] min-h-[50px]"
                    id="subject"
                    name="subject"
                    type="text"
                    {...register("subject", {
                        required: false,
                    })}
                />
                <div className="min-h-[1.5rem]" />
            </div>
            <div className="form-control flex flex-col">
                <label className="pb-2" htmlFor="message">Your message:</label>
                <textarea
                    className="p-4 w-full border border-solid border-[#d9d9d9]"
                    rows={3}
                    name='message'
                    {...register('message', {
                        required: true
                    })}
                    placeholder='Message'
                ></textarea>
                <div className="min-h-[1.5rem]">
                    {errors.message && (
                        <span className="text-sm text-red-500">Please enter a valid email address</span>
                    )}
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-2 md:flex-wrap">
                <button className="btn bg-accent py-4 px-10 text-white uppercase w-full md:w-fit" type="submit">Send message</button>
                <button className="btn border-accent border-solid border py-4 px-10 text-accent uppercase hover:bg-accent hover:text-white duration-200 ease-linear transition-all w-full md:w-fit" type="reset">Reset</button>
            </div>
        </form>
    );
};

export default ContactForm;
