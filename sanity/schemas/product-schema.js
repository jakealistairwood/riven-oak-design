import { defineField, defineArrayMember, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        },
        {  
            name: "featured_image",
            title: "Featured Image",
            type: "image",
        },
        {
            name: "product_content",
            title: "Product Content",
            type: "object",
            fields: [
                {
                    name: "tagline",
                    title: "Tagline",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "array",
                    of: [
                        {
                            type: "block",
                        }
                    ]
                },
                {
                    name: "gallery",
                    title: "Gallery",
                    type: "array",
                    of: [
                        {
                            name: "image",
                            type: "image"
                        }
                    ]
                }
            ]
        }
    ]
});