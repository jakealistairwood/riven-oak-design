"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

//Swiper SCSS
import 'swiper/scss';
import 'swiper/scss/navigation';

const ImageCarousel = ({ description, heading, gallery }) => {

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    console.log(gallery);

    return (
        <section className="bg-[#F6F6F6] py-24">
            <div className="container mx-auto">
                <header className="flex justify-between w-full pb-16 border-b border-solid border-[#DEDEDE]">
                    <div className="flex flex-col w-full max-w-[560px]">
                        <h2 className="text-[70px] tracking-tighter">{heading}</h2>
                        <p className="mt-3 text-xl opacity-80">{description}</p>
                    </div>
                    <div className="flex items-center h-fit self-end gap-[10px]">
                        <button
                            className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-solid border-[#D4D4D4]"
                        >
                            <img src="/images/arrow-left.svg" alt="" />
                        </button>
                        <button
                            className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-solid border-[#D4D4D4]"
                        >
                            <img src="/images/arrow-right.svg" alt="" />
                        </button>
                    </div>
                </header>
                {/* <div className={`grid grid-cols-5 gap-6 pt-16`}>
                    {gallery?.map((item, index) => (
                        <div key={index} className={`${activeIndex === index ? "aspect-[711/472]" : "aspect-[178/472] opacity-40"}`}>
                            <img className="object-cover h-full" src={item?.image?.asset?.url} alt={item?.image?.asset?.alt} />
                        </div>
                    ))}
                </div> */}
                <div className="overflow-visible mt-16">
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
                        {gallery?.map((item, index) => (
                            <SwiperSlide className="relative aspect-[711/472]">
                                {({ isActive }) => (
                                    isActive ? (
                                        <div className="relative flex flex-col h-full" style={{
                                            backgroundImage: `url(${item?.image?.asset?.url})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}>
                                            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.3%, rgba(0, 0, 0, 0.73) 100%)" }} />
                                            <div className="justify-end p-10 mt-auto text-white relative z-[2]">
                                                <h3 className="text-[2rem] font-crimson-pro font-normal mb-1">{item?.content?.title}</h3>
                                                <p className="opacity-90 text-xl">{item?.content?.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-auto opacity-50">
                                            <img className="h-full w-full object-cover" src={item?.image?.asset?.url} alt={item?.image?.asset?.alt} />
                                        </div>
                                    )
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ImageCarousel;