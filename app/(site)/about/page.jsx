import { getAboutPage } from "@/sanity-utils"

import AboutMasthead from "@/components/elements/AboutMasthead";
import TwoColumnTextImage from "@/components/elements/TwoColumnTextImage";

export default async function AboutPage() {
    const data = await getAboutPage();
    const { about_page } = data;
    return (
        <>
            <AboutMasthead {...about_page.about_masthead} />
            <TwoColumnTextImage {...about_page.two_column_text_image} />
        </>
    )
}