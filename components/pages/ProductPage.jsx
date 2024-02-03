"use client";

import ProductMasthead from "../elements/ProductMasthead";
import ThreeColumnGrid from "../elements/ThreeColumnGrid";
import CTA from "../global/CTA";

function ProductPage(props) {

    const { products, product, slug } = props;

    const filteredProducts = products.filter((product) => product.slug !== slug);

    return (
        <>
            <ProductMasthead {...product} />
            <ThreeColumnGrid products={filteredProducts} />
            <CTA />
        </>
    )
}

export default ProductPage;