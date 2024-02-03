"use client";

import { useEffect, useState } from "react";
import Masthead from "../elements/Masthead";
import ScrollableImage from "../elements/ScrollableImage";
import ImageCarousel from "../elements/ImageCarousel";
import OurProducts from "../elements/OurProducts";
import CTA from "../global/CTA";
import Accordion from "../elements/Accordion";

function Homepage(props) {
    const { products, homepage } = props;

    return (
        <>
            <Masthead {...homepage?.masthead} />
            <ScrollableImage {...homepage.scrollable_image} />
            <Accordion {...homepage.image_swiper} />
            {/* <ImageCarousel {...homepage.image_swiper} /> */}
            {/* <OurProducts {...homepage.our_products} /> */}
            <OurProducts header_info={homepage?.our_products} products={products} />
            <CTA />
        </>
    )
}

export default Homepage;