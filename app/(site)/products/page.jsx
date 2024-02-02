import { getProducts } from "@/sanity-utils";
import ProductsPage from "@/components/pages/ProductsPage";

export default async function Product({ params }) {
    // const { id } = useParams();
    // const products = await getProducts();

    return (
        <ProductsPage />
    )
}