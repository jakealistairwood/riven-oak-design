import { getProduct } from "@/sanity-utils"
import ProductPage from "@/components/pages/ProductPage";

export default async function Product({ params }) {
    const product = await getProduct(params.slug);
    return <ProductPage product={product} slug={params.slug} />
}