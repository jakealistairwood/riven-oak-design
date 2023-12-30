import { defineField, defineType, defineArrayMember } from "sanity";

export const aboutSchema = defineType({
    name: "about_page",
    title: "About Page",
    type: "object",
    fields: [
        {
            name: "about_masthead",
            title: "About Masthead",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "subheading",
                    title: "Subheading",
                    type: "string",
                },
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true }
                }
            ]
        },
        {
            name: "two_column_text_image",
            title: "Two Column Text Image",
            type: "object",
            fields: [
                {
                    name: "content",
                    title: "Content",
                    type: "array",
                    of: [{
                        type: "block"
                    }]
                },
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [{
                        name: "alternative_text",
                        title: "Alternative Text",
                        type: "string",
                    }]
                }
            ]
        },
        {
            name: "three_column_grid",
            title: "Three Column Grid",
            type: "object",
            fields: [
                {
                    name: "section_heading",
                    title: "Section Heading",
                    type: "string",
                },
                {
                    name: "grid_cards",
                    title: "Grid Card",
                    type: "array",
                    of: [
                        {
                            name: "grid_card",
                            title: "Grid Card",
                            type: "object",
                            fields: [
                                {
                                    name: "image",
                                    title: "Image",
                                    type: "image",
                                    options: { hotspot: true },
                                    fields: [{ 
                                        name: "alternative_text",
                                        title: "Alternative Text",
                                        type: "string"
                                    }]
                                },
                                {
                                    name: "title",
                                    title: "Title",
                                    type: "string",
                                },
                                {
                                    name: "description",
                                    title: "Description",
                                    type: "string",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})