import { defineField, defineType, defineArrayMember } from "sanity";

export const globalOptions = defineType({
    name: "global_options",
    title: "Global Options",
    type: "document",
    fields: [
        defineField({
            name: "cta",
            title: "CTA",
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
                    name: "add_image_gallery",
                    title: "Add Image Gallery",
                    type: "boolean",
                },
                {
                    name: "gallery",
                    title: "Gallery",
                    type: "object",
                    description: "Requires 5 images on each slider to work properly",
                    fields: [
                        {
                            name: "top_slider",
                            title: "Top Slider",
                            type: "array",
                            of: [{
                                type: "image",
                            }]
                        },
                        {
                            name: "bottom_slider",
                            title: "Bottom Slider",
                            type: "array",
                            of: [{
                                type: "image"
                            }]
                        }
                    ],
                    hidden: ({ parent }) => !parent?.add_image_gallery
                },
            ]
        }),
        {
            name: "footer",
            title: "Footer",
            type: "object",
            fields: [
                {
                    name: "contact_info",
                    title: "Contact Info",
                    type: "object",
                    fields: [
                        {
                            name: "phone_number",
                            title: "Phone Number",
                            type: "string",
                        },
                        {
                            name: "email_address",
                            title: "Email Address",
                            type: "string",
                        }
                    ]
                },
                {
                    name: "social_icons",
                    title: "Social Icons",
                    type: "array",
                    of: [
                        {
                            name: "social_icon",
                            title: "Social Icon",
                            type: "object",
                            fields: [
                                {
                                    name: "url",
                                    title: "URL",
                                    type: "string",
                                },
                                {
                                    name: "icon",
                                    title: "Icon",
                                    type: "image",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})