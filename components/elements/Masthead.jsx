"use client";

import Image from "next/image";

function Masthead({ heading, description, image }) {
    
    return (
        <section className="w-11/12 mx-auto">
            <div className="relative flex flex-col items-center text-white justify-center w-full" id="hero-masthead" style={{
                backgroundImage: `url(${image?.asset?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
                <div className="flex flex-col w-full max-w-[574px] text-center">
                    <h1 className="font-fraunces" dangerouslySetInnerHTML={{ __html: heading }} />
                    <p className="text-xl opacity-80 mt-6" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </section>
    )
}

export default Masthead;