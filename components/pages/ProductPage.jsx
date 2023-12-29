import ProductMasthead from "../elements/ProductMasthead";
// import CTA from "../global/CTA";

function ProductPage(props) {

    const { product, slug } = props;

    return (
        <>
            <ProductMasthead {...product} />
            {/* <CTA /> */}
        </>
    )
}

export default ProductPage;