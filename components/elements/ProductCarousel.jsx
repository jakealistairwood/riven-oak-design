import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";

//Swiper SCSS
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';

function ProductCarousel({ productImages }) {

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <div className="col-span-7 relative">
            <Swiper
                slidesPerView={1}
                modules={[EffectFade, Navigation]}
                navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                }} 
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                }}
            >
                {productImages?.map((product, index) => (
                    <SwiperSlide>
                        <div className="relative aspect-[1/1]">
                            <Image fill={true} objectFit="cover" src={product?.asset?.url} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex items-cente gap-[10px] absolute bottom-8 right-10 z-[2]">
                    <button ref={prevButtonRef} className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                        <Image src="/images/arrow-left.svg" height={32} width={32} alt="" />
                    </button>
                    <button ref={nextButtonRef} className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                        <Image src="/images/arrow-right.svg" height={32} width={32} alt="" />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default ProductCarousel;