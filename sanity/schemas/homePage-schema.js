import { defineField, defineType, defineArrayMember } from "sanity";

export const homepageSchema = defineType({
    name: "homepage",
    title: "Homepage",
    type: "object",
    fields: [
        defineArrayMember({
            name: "masthead",
            type: "masthead",
        }),
        defineField({
            name: "scrollable_image",
            title: "Scrollable Image",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "gallery",
                    title: "Gallery",
                    type: "array",
                    of: [
                        {
                            name: "image",
                            title: "Image",
                            type: "image"
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: "image_swiper",
            title: "Image Swiper",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "gallery",
                    title: "Gallery",
                    type: "array",
                    of: [
                        {
                            name: "gallery_item",
                            title: "Gallery Item",
                            type: "object",
                            fields: [
                                {
                                    name: "content",
                                    title: "Content",
                                    type: "object",
                                    fields: [
                                        {
                                            name: "title",
                                            title: "Title",
                                            type: "string",
                                        },
                                        {
                                            name: "description",
                                            title: "Description",
                                            type: "string",
                                        },
                                    ]
                                },
                                {
                                    name: "image",
                                    title: "Image",
                                    type: "image",
                                    options: {
                                        hotspot: true,
                                    },
                                    fields: [
                                        {
                                            name: 'alternative_text',
                                            title: 'Alternative Text',
                                            type: 'string',
                                        }
                                    ]
                                }
                            ],
                        },
                    ]
                }
            ]
        }),
        defineField({
            name: "our_products",
            title: "Our Products",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
            ]
        }),
    ]
})