import Masthead from "../elements/Masthead";
import ScrollableImage from "../elements/ScrollableImage";
import ImageCarousel from "../elements/ImageCarousel";
import OurProducts from "../elements/OurProducts";
import CTA from "../global/CTA";
import Accordion from "../elements/Accordion";

function Homepage(props) {
    const { homepage, products } = props;

    return (
        <>
            <Masthead {...homepage.masthead} />
            <ScrollableImage {...homepage.scrollable_image} />
            <Accordion {...homepage.image_swiper} />
            {/* <ImageCarousel {...homepage.image_swiper} /> */}
            <OurProducts products={products} {...homepage.our_products} />
            {/* <CTA /> */}
        </>
    )
}

export default Homepage;