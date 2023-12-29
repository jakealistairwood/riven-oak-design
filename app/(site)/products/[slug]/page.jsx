import { getProduct, getProducts } from "@/sanity-utils"
import ProductPage from "@/components/pages/ProductPage";

export default async function Product({ params }) {
    const products = await getProducts();
    const product = await getProduct(params.slug);
    return <ProductPage products={products} product={product} slug={params.slug} />
}