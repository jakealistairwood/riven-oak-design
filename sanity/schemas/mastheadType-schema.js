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
                            name: "link_url",
                            title: "Link URL",
                            type: "string",
                        },
                        {
                            name: 'button_type',
                            title: 'Button Type',
                            type: 'string',
                            options: {
                              list: [
                                {title: 'Primary', value: 'primary'},
                                {title: 'Secondary', value: 'secondary'}
                              ],
                            }
                          }
                    ]
                }
            ]
        })
    ]
})