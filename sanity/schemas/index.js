import { pageType } from "./page-schema";
import { globalOptions } from "./globalOptions-schema";
import { mastheadType } from "./mastheadType-schema";
import { homepageSchema } from "./homePage-schema";

const schemas = [
    pageType,
    globalOptions,
    homepageSchema,
    mastheadType,
]

export default schemas;