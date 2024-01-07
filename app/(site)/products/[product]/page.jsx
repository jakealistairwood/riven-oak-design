"use client";

import { getProduct, getProducts } from "@/sanity-utils"
import ProductPage from "@/components/pages/ProductPage";
import { useParams } from "next/navigation";

export default async function Product({ params }) {
    const { id } = useParams();
    console.log(id);
    console.log(params);
    const products = await getProducts();
    const product = await getProduct(params.product);
    return <ProductPage products={products} product={product} slug={params.product} />
}

// export default async function Product({ params }) {
//     const products = await getProducts();
//     const product = await getProduct(params.slug);
//     return <ProductPage products={products} product={product} slug={params.slug} />
// }