import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '6t7lr4lh',
    dataset: 'production',
    title: "Riven Oak Design",
    basePath: "/studio",
    useCdn: false,
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas },
});

export default config;