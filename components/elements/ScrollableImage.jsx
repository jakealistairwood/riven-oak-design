"use client";

function ScrollableImage({ heading, description, gallery }) {
    return (
        <section>
            <div className="container mx-auto py-28">
                <header className="section-header text-center max-w-[781px] w-full mx-auto">
                    <h2 dangerouslySetInnerHTML={{ __html: heading }} />
                    <p className="opacity-80 text-dark-grey text-xl pt-8" dangerouslySetInnerHTML={{ __html: description }} />
                </header>
            </div>
        </section>
    )
}

export default ScrollableImage;