"use client";

import Image from "next/image";

export default function ThreeColumnContent(props) {
    console.log(props);
    const { grid_cards, section_heading } = props;
    return (
        <section className="bg-light-beige py-24 mb-24">
            <div className="container">
                <h2 className="mb-24 text-center">{section_heading}</h2>
                {grid_cards && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {grid_cards?.map((card, index) => (
                            <div key={`grid-card-${index}`} className="flex flex-col">
                                <div className="relative aspect-[519/605]">
                                    <Image className="grayscale duration-500 transition-all hover:grayscale-0" fill={true} objectFit="cover" src={card?.image?.asset?.url} alt="" />
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-crimson-pro text-[1.7rem] font-normal">{card?.title}</h3>
                                    <p className="mt-6 font-inter text-lg">{card?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}