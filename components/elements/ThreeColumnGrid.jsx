"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function ThreeColumnGrid({ products }) {
    console.log(products);
    return (
        <section className="bg-[#F4F0EC] py-24 mb-24">
            <div className="container">
                <h2 className="text-center mb-20" dangerouslySetInnerHTML={{ __html: "<span class='italic'>Other</span> Products" }} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {products?.map((product, index) => (
                        <Link key={`product-card-${index}`} href={`/products/${product.slug}`} className="px-6 py-4 lg:px-10 lg:py-7 flex flex-col overflow-hidden relative aspect-[523/392]">
                            <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }}>
                                <Image loading="lazy" quality={80} fill={true} objectFit="cover" src={product?.featured_image?.asset?.url} alt={`${product?.title} Featured Image`} sizes="(max-width: 768px) 100vw, 500px" />
                            </motion.div>
                            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                            <div className="mt-auto relative z-[2] text-white">
                                <small className="uppercase">Product</small>
                                <h3 className="text-xl lg:text-2xl font-medium">{product?.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnGrid;