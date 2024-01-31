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
            title,
            "slug": slug.current,
            featured_image{
              asset->
            },
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
            product_content{
                description,
                tagline,
                gallery[]{
                    asset->
                }
            }
          }`,
          { slug }
    )
}

export async function getAboutPage() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == "about"][0] {
            _id,
            "slug": slug.current,
            about_page {
              two_column_text_image{
                heading,
                content,
                image{
                  asset->
                }
              },
              about_masthead{
                heading,
                subheading,
                image{
                  asset->
                }
              },
              three_column_grid{
                section_heading,
                grid_cards[]{
                  description,
                  title,
                  image{
                    asset->
                  }
                }
              }
            }
          }`
    )
}

export async function fetchContactPage() {
    return createClient(clientConfig).fetch(
        // groq`*[_type == "page" && slug.current == "contact"][0] {
        //     _id,
        //     "slug": slug.current,
        //     contact_page{
        //       form_submission_message{
        //         heading,
        //         message,
        //         link,
        //       },
        //       form_details{
        //           header,
        //           description,
        //           email_js_config{
        //             public_key,
        //             service_ID,
        //             template_id,
        //           }
        //       }
        //     }
        //   }`
        groq`*[_type == "page"]`
    )
}

export async function getFooterData() {
    const data = await createClient(clientConfig).fetch(
        groq`*[_type == "global_options"] {
            footer{
              contact_info{
                email_address,
                phone_number,
              },
              social_icons[]{
                url,
                icon{
                  asset->
                }
              }
            }
        }`
    )
    return data[0];
}