"use client";

import Image from "next/image"
import { PortableText } from "@portabletext/react";

export default function TwoColumnTextImage(props) {
    const { content, image } = props;

    return (
        <section className="relative my-24">
            <div className="grid grid-cols-2 gap-28">
                <div className="self-center container pl-[18%] prose">
                    {content?.map((block) => (
                        block?.children?.map((child, index) => (
                            <div key={`content-block-${index}`} dangerouslySetInnerHTML={{ __html: child?.text }} />
                        ))
                    ))}
                </div>
                <div className="relative max-w-[764px] aspect-[1/1]">
                    <Image className="grayscale" fill={true} src={image?.asset?.url} objectFit="cover" />
                </div>
            </div>
        </section>
    )
}