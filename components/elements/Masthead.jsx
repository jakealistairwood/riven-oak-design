"use client";

function Masthead({ heading, description, links, image }) {

    console.log(links);
    
    return (
        <section className="w-11/12 mx-auto">
            <div className="relative flex flex-col items-center text-white justify-center w-full" id="hero-masthead" style={{
                backgroundImage: `url(${image?.asset?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
                <div className="flex flex-col w-full max-w-[574px] text-center px-4">
                    <h1 className="font-fraunces" dangerouslySetInnerHTML={{ __html: heading }} />
                    <p className="text-xl opacity-80 mt-6" dangerouslySetInnerHTML={{ __html: description }} />
                    {links && <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                        {links?.map((link, index) => (
                            <a className={`${link?.button_type === "primary" ? "bg-white text-dark-grey" : "border border-solid border-white"} py-4 px-7 w-full sm:w-[unset]`} href={link?.link_url}>{link?.label}</a>
                        ))}
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Masthead;