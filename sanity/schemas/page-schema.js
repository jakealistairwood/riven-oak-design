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
        {
            name: "choose_page_template",
            title: "Choose Page Template",
            type: "string",
            options: {
                list: [
                  {title: 'Home', value: 'home'},
                  {title: 'About', value: 'about'}
                ],
              }
        },
        defineField({
            name: "homepage",
            type: "homepage",
            hidden: ({ parent }) => parent?.choose_page_template !== "home"
        }),
        defineField({
            name: "about_page",
            type: "about_page",
            hidden: ({ parent }) => parent?.choose_page_template !== "about"
        })
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