import { createClient, groq } from "next-sanity";
import { clientConfig } from "./sanity/config/client-config";

export async function getPages() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
    )
}

export async function getPage(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            pageBuilder[]{
                heading,
                image{
                  alt,
                  asset->
                }
              }
        }`,
        { slug } 
    );
}

export async function getProducts() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "product"]{
            _id,
            "slug": slug.current,
            title,
            product_content
          }`,
    )
}

export async function getProduct(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
            _id,
            "slug": slug.current,
            title,
            product_content
          }`,
          { slug }
    )
}