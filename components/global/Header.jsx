// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import MenuButton from "../elements/MenuButton";
import NavbarWrapper from "../elements/NavbarWrapper";
import { getProducts } from "@/sanity-utils";

async function Header(props) {
    // const [isActive, setIsActive] = useState(false);
    const products = await getProducts();
    
    return (
        <NavbarWrapper products={products} />
    )
}

export default Header;