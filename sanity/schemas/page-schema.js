import { defineField, defineArrayMember, defineType } from "sanity";

export const pageType = defineType({
    name: "page",
    title: "Pages",
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
        defineField({
            name: "homepage",
            type: "homepage",
        }),
        // defineField({
        //     name: "pageBuilder",
        //     type: "array",
        //     title: "Page Builder",
        //     of: [
        //         defineArrayMember({
        //             name: "masthead",
        //             type: "masthead",
        //         })
        //     ]
        // })
    ]
});