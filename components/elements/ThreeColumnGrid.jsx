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
                <div className="grid grid-cols-3">
                    {products?.map((product, index) => (
                        <Link href={`/products/${product.slug}`} className="px-10 py-7 flex flex-col overflow-hidden relative aspect-[523/392]">
                            <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }}>
                                <Image fill={true} objectFit="cover" src={product?.featured_image?.asset?.url} alt={`${product?.title} Featured Image`} />
                            </motion.div>
                            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                            <div className="mt-auto relative z-[2] text-white">
                                <small className="uppercase">Product</small>
                                <h3 className="text-2xl font-medium">{product?.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnGrid;