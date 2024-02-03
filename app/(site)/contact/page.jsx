import { getContactPage } from "@/sanity-utils";
import ContactPage from "@/components/pages/ContactPage";

export default async function Contact() {

    const data = await getContactPage();
    console.log(data);

    return (
        <>
            <ContactPage data={data} />
        </>
    )
}