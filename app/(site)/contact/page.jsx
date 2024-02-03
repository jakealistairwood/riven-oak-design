import { getContactPage } from "@/sanity-utils";
import { fetchCTAData } from "@/sanity-utils";
import ContactPage from "@/components/pages/ContactPage";

export default async function Contact() {

    const data = await getContactPage();
    const cta = await fetchCTAData();

    return (
        <>
            <ContactPage data={data} ctaData={cta} />
        </>
    )
}