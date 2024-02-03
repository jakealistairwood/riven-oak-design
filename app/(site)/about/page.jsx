import { getAboutPage } from "@/sanity-utils"

// import AboutMasthead from "@/components/elements/AboutMasthead";
// import TwoColumnTextImage from "@/components/elements/TwoColumnTextImage";
// import ThreeColumnContent from "@/components/elements/ThreeColumnContent";
import AboutPage from "@/components/pages/AboutPage";

export default async function About() {
    const data = await getAboutPage();
    const { about_page } = data;
    return (
        <>
            <AboutPage {...about_page} />
            {/* <AboutMasthead {...about_page.about_masthead} />
            <TwoColumnTextImage {...about_page.two_column_text_image} />
            <ThreeColumnContent {...about_page.three_column_grid} /> */}
        </>
    )
}