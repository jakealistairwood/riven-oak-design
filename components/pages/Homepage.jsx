"use client";

import Masthead from "../elements/Masthead";
import Introduction from "../elements/Introduction";
// import ImageCarousel from "../elements/ImageCarousel";
import OurProducts from "../elements/OurProducts";
import CTA from "../global/CTA";
import Accordion from "../elements/Accordion";

function Homepage(props) {
    const { products, homepage, ctaData } = props;

    return (
        <>
            <Masthead {...homepage?.masthead} />
            <Introduction {...homepage.introduction} />
            <Accordion {...homepage.our_process} />
            {/* <ImageCarousel {...homepage.image_swiper} /> */}
            {/* <OurProducts {...homepage.our_products} /> */}
            <OurProducts header_info={homepage?.our_products} products={products} />
            <CTA ctaData={ctaData} />
        </>
    )
}

export default Homepage;