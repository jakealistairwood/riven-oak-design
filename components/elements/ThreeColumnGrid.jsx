"use client";

import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function ThreeColumnGrid({ products }) {
    return (
        <section className="bg-[#F4F0EC] py-16 md:py-24 mb-24">
            <div className="container">
                <h2 className="text-center mb-12 md:mb-20">
                    <AnimatedText text={"Other Products"} />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {products?.map((product, index) => (
                        <motion.div className="group" key={`product-card-${index}`} initial={{ y: 100, opacity: 0, filter: "blur(4px)"}} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)", transition: { delay: index * 0.2, duration: 0.4 } }} viewport={{ once: true }}>
                            <Link href={`/products/${product.slug}`} className="px-6 py-4 lg:px-10 lg:py-7 flex flex-col overflow-hidden relative aspect-[523/392]">
                                <div className="absolute inset-0">
                                    <Image className="scale-100 group-hover:scale-105 duration-200 ease-linear transition-transform" loading="lazy" quality={80} fill={true} objectFit="cover" src={product?.featured_image?.asset?.url} alt={`${product?.title} Featured Image`} sizes="(max-width: 768px) 100vw, 500px" />
                                </div>
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                                <div className="mt-auto relative z-[2] text-white">
                                    <small className="uppercase">Product</small>
                                    <h3 className="!font-inter text-xl lg:text-2xl font-medium">{product?.title}</h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnGrid;