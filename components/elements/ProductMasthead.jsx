"use client";

// import { Swiper, SwiperSlide } from "swiper";
import ProductCarousel from "./ProductCarousel";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
//Swiper SCSS
// import 'swiper/scss';
// import 'swiper/scss/autoplay';
// import 'swiper/scss/navigation';


function ProductMasthead(props) {
    const { title, product_content } = props;

    return (
        <section>
            <div className="container" id="product-masthead">
                <div className="flex flex-col lg:grid gap-8 lg:gap-16 lg:grid-cols-12 pb-24">
                    {/* <Swiper>

                    </Swiper> */}
                    <ProductCarousel productImages={product_content?.gallery} />
                    <div className="col-span-5 flex flex-col self-center mt-10">
                        {title && (
                            <h1>
                                <AnimatedText text={title} />
                            </h1>
                        )}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.6, 0.01, 0.05, 1],
                                delay: 0.4
                            }}
                        >
                            <blockquote className="py-4 px-9 bg-[#F9F9F9] border-l-2 border-solid border-accent mt-10">
                                <p className="text-xl font-normal">{product_content?.tagline}</p>
                            </blockquote>
                            <div className="my-10">
                                {product_content?.description.map((block, index) => (
                                    block?.children?.map((child, i) => (
                                        <p key={`content-block-${i}`} className="text-normal mt-4 opacity-80 font-inter">{child.text}</p>
                                    ))
                                ))}
                            </div>
                            <Link className="bg-accent py-4 px-6 text-white text-normal mt-12 w-fit" href="mailto:jack@rivenoakdesign.com">
                                Contact to Purchase
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductMasthead;