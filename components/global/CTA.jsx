
import ParallaxImages from "../elements/ParallexImages";
import { fetchCTAData } from "@/sanity-utils";

function CTA({ isContactPage, ctaData }) {
    const { cta } = ctaData;

    return (
        <section className={`${cta?.add_image_gallery ? "pt-8 md:pt-24 pb-24 md:pb-0" : "py-24"} ${isContactPage && "!pt-0"}`}>
            {!isContactPage && <div className="container">
                <div className="flex flex-col text-center max-w-[650px] w-full mx-auto">
                    <h2 className="mb-10" dangerouslySetInnerHTML={{ __html: cta?.heading }} />
                    <p className="text-lg text-dark-grey opacity-80 font-extralight">{cta?.description}</p>
                    <a className="btn mt-16 transition-all duration-300 border border-solid border-accent hover:bg-accent hover:text-white text-accent px-11 py-4 w-fit mx-auto" href="/contact">
                        Get in Touch
                    </a>
                </div>
            </div>}
            {cta?.add_image_gallery && <ParallaxImages top_slider={cta?.gallery?.top_slider} bottom_slider={cta?.gallery?.bottom_slider} />}
        </section>
    )
}

export default CTA;