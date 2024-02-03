"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function ThreeColumnContent(props) {
    const { grid_cards, section_heading } = props;
    
    return (
        <section className="bg-light-beige py-16 md:py-24 mb-12 md:mb-24">
            <div className="container">
                {section_heading && (
                    <h2 className="mb-12 md:mb-24 text-center">
                        <AnimatedText text={section_heading} />
                    </h2>
                )}
                {grid_cards && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                        {grid_cards?.map((card, index) => (
                            <div key={`grid-card-${index}`} className="flex flex-col">
                                <div className="relative aspect-[519/605]">
                                    <Image className="grayscale duration-500 transition-all hover:grayscale-0" fill={true} objectFit="cover" src={card?.image?.asset?.url} alt="" sizes="(max-width: 768px) 100vw, 500px" />
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-crimson-pro text-[1.7rem] font-normal">{card?.title}</h3>
                                    <p className="mt-6 text-lg font-extralight">{card?.description}</p>
                                </div>
                            </div>
                        ))} 
                    </div>
                )}
            </div>
        </section>
    )
}