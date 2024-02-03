"use client";

import { getProduct, getProducts, fetchCTAData } from "@/sanity-utils"
import ProductPage from "@/components/pages/ProductPage";
import { useParams } from "next/navigation";

export default async function Product({ params }) {
    // const { id } = useParams();
    const products = await getProducts();
    const product = await getProduct(params.product);
    const cta = await fetchCTAData();

    return <ProductPage products={products} product={product} slug={params.product} ctaData={cta} />
}

// export default async function Product({ params }) {
//     const products = await getProducts();
//     const product = await getProduct(params.slug);
//     return <ProductPage products={products} product={product} slug={params.slug} />
// }