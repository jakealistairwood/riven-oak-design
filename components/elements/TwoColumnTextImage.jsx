"use client";

import Image from "next/image"
import { PortableText } from "@portabletext/react";

export default function TwoColumnTextImage(props) {
    const { heading, content, image } = props;

    return (
        <section className="relative my-24">
            <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-28">
                <div className="self-center container prose">
                    <h2 className="mb-6" dangerouslySetInnerHTML={{ __html: heading }} />
                    {content?.map((block) => (
                        block?.children?.map((child, index) => (
                            <div key={`content-block-${index}`} dangerouslySetInnerHTML={{ __html: child?.text }} />
                        ))
                    ))}
                </div>
                <div className="relative max-w-[764px] aspect-[1/1]">
                    <Image className="grayscale" fill={true} src={image?.asset?.url} objectFit="cover" sizes="(max-width: 992px) 100vw, (max-width: 1440px) 600px, 800px" />
                </div>
            </div>
        </section>
    )
}