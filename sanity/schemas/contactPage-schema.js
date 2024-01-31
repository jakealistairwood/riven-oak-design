import { defineField, defineType, defineArrayMember } from "sanity";

export const contactSchema = defineType({
    name: "contact_page",
    title: "Contact Page",
    type: "object",
    fields: [
        {
            name: "form_details",
            title: "Form Details",
            type: "object",
            fields: [
                {
                    name: "header",
                    title: "Header",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "email_js_config",
                    title: "Email JS Config",
                    type: "object",
                    fields: [
                        {
                            name: "service_ID",
                            title: "Service ID",
                            type: "string",
                        },
                        {
                            name: "template_id",
                            title: "Template ID",
                            type: "string",
                        },
                        {
                            name: "public_key",
                            title: "Public Key",
                            type: "string",
                        }
                    ]
                }
            ]
        },
        {
            name: "form_submission_message",
            title: "Form Submission Message",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "message",
                    title: "Message",
                    type: "text",
                },
                {
                    name: "link",
                    title: "Link",
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            title: "Label",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "string"
                        }
                    ]
                }
            ]
        }
    ]
})