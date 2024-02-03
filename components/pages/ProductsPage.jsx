"use client";

import { useEffect, useState } from "react";
import OurProducts from "../elements/OurProducts";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "@/sanity/config/client-config";

function ProductsPage(props) {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        createClient(clientConfig).fetch(
            groq`*[_type == "product"]{
                _id,
                title,
                "slug": slug.current,
                featured_image{
                  asset->
                },
                product_content
              }`,
        ).then((data) => setProducts(data))
        .catch(console.error)
    }, []);

    const header_info = {
        heading: "Our Products",
        description: "At Riven Oak Design, we design and make gates, swing seats, outdoor and indoor furniture and fencing, among other products. All are crafted using traditional woodworking techniques with wood sourced from Westonbirt Aboretum, where our workshop is based.",
    }
    return (
        <>
            <div className="mt-20">
                <OurProducts products={products} header_info={header_info} />
            </div>
        </>
    )
}

export default ProductsPage;