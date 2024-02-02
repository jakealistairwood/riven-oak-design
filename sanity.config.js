import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
// import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
    projectId: '6t7lr4lh',
    dataset: 'production',
    title: "Riven Oak Design",
    basePath: "/studio",
    apiVersion: "2024-02-01",
    useCdn: true,
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas },
});

export default config;