import { defineField, defineType } from "sanity";

export const mastheadType = defineType({
    name: "masthead",
    type: "object",
    title: "Masthead",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "description",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                })
            ]
        }),
        defineField({
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    name: "link",
                    title: "Link",
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            title: "Label",
                            type: "string"
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                        }
                    ]
                }
            ]
        })
    ]
})