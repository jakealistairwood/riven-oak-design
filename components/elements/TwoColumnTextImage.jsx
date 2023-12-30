"use client";

import Image from "next/image"

export default function TwoColumnTextImage(props) {
    const { content, image } = props;

    return (
        <section className="relative">
            <div className="grid grid-cols-2 gap-28 pl-[200px]">
                <div className="">
                    {content?.map((block) => (
                        block?.children?.map((child, index) => (
                            <div dangerouslySetInnerHTML={{ __html: child?.text }} />
                        ))
                    ))}
                </div>
                <div className="relative max-w-[764px] aspect-[1/1]">
                    <Image fill={true} src={image?.asset?.url} objectFit="cover" />
                </div>
            </div>
        </section>
    )
}