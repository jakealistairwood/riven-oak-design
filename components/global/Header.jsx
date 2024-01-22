// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import MenuButton from "../elements/MenuButton";
import NavbarWrapper from "../elements/NavbarWrapper";
import { getProducts, getFooterData } from "@/sanity-utils";

async function Header(props) {
    // const [isActive, setIsActive] = useState(false);
    const products = await getProducts();
    const footerData = await getFooterData();
    
    return (
        <NavbarWrapper products={products} globalData={footerData} />
    )
}

export default Header;