"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

//Swiper SCSS
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';

const ImageCarousel = ({ description, heading, gallery }) => {

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <section className="bg-[#F6F6F6] py-24">
            <div className="container mx-auto">
                <div className="image-carousel-swiper">
                    <Swiper
                        draggable 
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        modules={[Navigation, Autoplay]} 
                        navigation={{
                            prevEl: prevButtonRef.current,
                            nextEl: nextButtonRef.current,
                        }} 
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevButtonRef.current;
                            swiper.params.navigation.nextEl = nextButtonRef.current;
                    }}
                        initialSlide={1} 
                        spaceBetween={10} 
                        slidesPerView={1} 
                        // centeredSlides
                        loop
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                initialSlide: 3,
                                centeredSlides: true,
                            }
                        }}
                    >
                        <header className="flex flex-col md:flex-row justify-between items-center md:items-start gap-y-10 text-center md:text-left w-full pb-16 border-b border-solid border-[#DEDEDE]">
                            <div className="flex flex-col w-full max-w-[560px]">
                                <h2>{heading}</h2>
                                <p className="mt-3 text-xl opacity-80">{description}</p>
                            </div>
                            <div className="flex items-center h-fit md:self-end gap-[10px]">
                                <motion.button
                                    className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-solid border-[#D4D4D4]"
                                    ref={prevButtonRef}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image height={32} width={32} src="/images/arrow-left.svg" alt="" />
                                </motion.button>
                                <motion.button
                                    className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-solid border-[#D4D4D4]"
                                    ref={nextButtonRef}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image height={32} width={32} src="/images/arrow-right.svg" alt="" />
                                </motion.button>
                            </div>
                        </header>
                        {gallery?.map((item, index) => (
                                <SwiperSlide key={`image-slide-${index}`} className="relative aspect-[711/472]">
                                    {({ isActive }) => (
                                        isActive ? (
                                            <div className="relative flex flex-col justify-between h-full p-6 md:p-10" style={{
                                                backgroundImage: `url(${item?.image?.asset?.url})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                            }}>
                                                {/* <small className="relative z-[2] text-white uppercase font-bold px-4 py-2 border border-solid border-white rounded-full w-fit">Step {index + 1}</small> */}
                                                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                                                <div className="justify-end mt-auto text-white relative z-[2]">
                                                    <h3 className="text-[2rem] font-crimson-pro font-normal mb-1">{item?.content?.title}</h3>
                                                    <p className="opacity-90 text-xl">{item?.content?.description}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-auto opacity-50">
                                                <Image className="h-full w-full object-cover" fill={true} src={item?.image?.asset?.url} alt={item?.image?.asset?.alt} />
                                            </div>
                                        )
                                    )}
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                {/* <div className={`grid grid-cols-5 gap-6 pt-16`}>
                    {gallery?.map((item, index) => (
                        <div key={index} className={`${activeIndex === index ? "aspect-[711/472]" : "aspect-[178/472] opacity-40"}`}>
                            <img className="object-cover h-full" src={item?.image?.asset?.url} alt={item?.image?.asset?.alt} />
                        </div>
                    ))}
                </div> */}
                {/* <div className="overflow-visible mt-16">
                    <Swiper 
                        draggable 
                        modules={[Navigation]} 
                        navigation={{
                            prevEl: prevButtonRef.current,
                            nextEl: nextButtonRef.current,
                        }} 
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevButtonRef.current;
                            swiper.params.navigation.nextEl = nextButtonRef.current;
                       }}
                        initialSlide={3} 
                        spaceBetween={10} 
                        slidesPerView={2} 
                        centeredSlides
                    >
                    </Swiper>
                </div> */}
            </div>
        </section>
    )
}

export default ImageCarousel;