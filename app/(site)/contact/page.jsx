

export default async function ContactPage() {
    return (
        <>
            <AboutMasthead {...about_page.about_masthead} />
            <TwoColumnTextImage {...about_page.two_column_text_image} />
            <ThreeColumnContent {...about_page.three_column_grid} />
        </>
    )
}