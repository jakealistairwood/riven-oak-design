"use client";

// import { Swiper, SwiperSlide } from "swiper";
import ProductCarousel from "./ProductCarousel";
import Link from "next/link";
//Swiper SCSS
// import 'swiper/scss';
// import 'swiper/scss/autoplay';
// import 'swiper/scss/navigation';


function ProductMasthead(props) {

    console.log(props);

    const { title, product_content } = props;

    console.log(product_content);

    return (
        <section>
            <div className="container" id="product-masthead">
                <div className="flex flex-col lg:grid gap-8 lg:gap-16 lg:grid-cols-12 lg:place-content-center pb-24">
                    {/* <Swiper>

                    </Swiper> */}
                    <ProductCarousel productImages={product_content?.gallery} />
                    <div className="col-span-5 flex flex-col self-center">
                        <h1>{title}</h1>
                        <blockquote className="py-4 px-9 bg-[#F9F9F9] border-l-2 border-solid border-accent mt-10">
                            <p className="text-xl font-normal">{product_content?.tagline}</p>
                        </blockquote>
                        <div className="mt-10">
                            {product_content?.description.map((block, index) => (
                                block?.children?.map((child, i) => (
                                    <p key={`content-block-${i}`} className="text-normal mt-4 opacity-80 font-inter">{child.text}</p>
                                ))
                            ))}
                        </div>
                        <Link className="bg-accent py-4 px-6 text-white text-normal mt-12 w-fit" href="mailto:jack@rivenoakdesign.com">
                            Contact to Purchase
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductMasthead;