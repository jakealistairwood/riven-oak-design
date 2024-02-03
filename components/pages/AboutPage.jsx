"use client";

import AboutMasthead from "../elements/AboutMasthead";
import TwoColumnTextImage from "../elements/TwoColumnTextImage";
import ThreeColumnContent from "../elements/ThreeColumnContent";
import CTA from "../global/CTA";

function AboutPage(props) {
    const { about_masthead, two_column_text_image, three_column_grid, ctaData } = props;
    return (
        <>
            <AboutMasthead {...about_masthead} />
            <TwoColumnTextImage {...two_column_text_image} />
            <ThreeColumnContent {...three_column_grid} />
            <CTA ctaData={ctaData} />
        </>
    )
}

export default AboutPage;