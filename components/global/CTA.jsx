import { clientConfig } from "@/sanity/config/client-config";
import { createClient, groq } from "next-sanity";
import ParallaxImages from "../elements/ParallexImages";
import { useWindowSize } from "@/hooks/useWindowSize";

async function fetchCTAData() {
    const data = await createClient(clientConfig).fetch(
        groq`*[_type == "global_options"] {
            cta{
              heading,
              description,
              add_image_gallery,
              gallery{
                top_slider[]{
                  asset->
                },
                bottom_slider[]{
                  asset->
                }
              }
            }
          }`
    )
    return data[0];
}

async function CTA() {
    const data = await fetchCTAData();
    const { cta } = data;

    return (
        <section className={`${cta?.add_image_gallery ? "pt-24 pb-24 md:pb-0" : "py-24"}`}>
            <div className="container">
                <div className="flex flex-col text-center max-w-[650px] w-full mx-auto">
                    <h2 className="text-[64px] leading-[1.1] mb-10" dangerouslySetInnerHTML={{ __html: cta?.heading }} />
                    <p className="text-xl text-dark-grey opacity-80">{cta?.description}</p>
                    <a className="mt-16 border border-solid border-accent hover:bg-accent hover:text-white text-accent px-11 py-4 w-fit mx-auto" href="mailto:jack@rivenoakdesign.com">
                        Get in Touch
                    </a>
                </div>
            </div>
            {cta?.add_image_gallery && <ParallaxImages top_slider={cta?.gallery?.top_slider} bottom_slider={cta?.gallery?.bottom_slider} />}
        </section>
    )
}

export default CTA;