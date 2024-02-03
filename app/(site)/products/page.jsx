import { getProducts, fetchCTAData } from "@/sanity-utils";
import ProductsPage from "@/components/pages/ProductsPage";

export default async function Product({ params }) {
    // const { id } = useParams();
    // const products = await getProducts();
    const cta = await fetchCTAData();

    return (
        <ProductsPage ctaData={cta} />
    )
}