import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
// import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
    projectId: '6t7lr4lh',
    dataset: 'production',
    title: "Riven Oak Design",
    apiVersion: "2022-03-07",
    basePath: "/studio",
    useCdn: true,
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas },
});

export default config;