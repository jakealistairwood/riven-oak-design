import React from "react";
import { clientConfig } from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source) {
    return builder.image(source);
}