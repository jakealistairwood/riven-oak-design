"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const fadeInElement = {
    initial: {
        opacity: 0,
        y: 200,
        filter: "blur(12px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: (index) => ({
            delay: index * 0.5,
            duration: 0.6
        }),
    }
}

function OurProducts({ heading, description, products }) {

    return (
        <section id="our-products">
            <div className="container mx-auto py-28">
                <header className="section-header text-center max-w-[781px] w-full mx-auto">
                    {/* <h2 dangerouslySetInnerHTML={{ __html: heading }} /> */}
                    <h2>
                        <AnimatedText text={heading} />
                    </h2>
                    <motion.p 
                        className="opacity-80 text-lg font-extralight pt-8 text-dark-grey" 
                        dangerouslySetInnerHTML={{ __html: description }} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.6, 0.01, 0.05, 1],
                            delay: 0.4
                        }}
                    />
                </header>
                <div className="mt-[120px] grid grid-cols-6 gap-5 products-container">
                    {products.map((product, index) => (
                        <motion.a key={`product-card-${index}`} variants={fadeInElement} custom={index} whileInView="animate" initial="initial" viewport={{ once: true }} href={`/products/${product.slug}`} className="relative product-card" style={{ gridArea: `grid-area-${index + 1}` }}>
                            <div className="aspect-[1/1] flex flex-col justify-end p-6 lg:p-10 text-white overflow-hidden group" style={{
                                backgroundImage: `url(${product?.featured_image?.asset?.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}>
                                {/* <Image src={product?.featured_image?.asset?.url} fill alt="" className="object-cover group-hover:scale-105 duration-200 ease-linear transition-transform" /> */}
                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                                <div className="relative z-[2]">
                                    <small className="text-sm lg:text-normal uppercase text-normal">Product</small>
                                    <h3 className="product-card__label lg:text-[2rem] font-medium leading-[1.1] text-inter">{product?.title}</h3>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProducts;