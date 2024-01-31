import { fetchContactPage } from "@/sanity-utils";
import ContactPage from "@/components/pages/ContactPage";

export default async function Contact() {
    const { data } = await fetchContactPage();

    return (
        <>
            <ContactPage {...data} />
        </>
    )
}