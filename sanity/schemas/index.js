import { pageType } from "./page-schema";
import { productType } from "./product-schema";
import { globalOptions } from "./globalOptions-schema";
import { mastheadType } from "./mastheadType-schema";
import { homepageSchema } from "./homePage-schema";

const schemas = [
    pageType,
    productType,
    globalOptions,
    homepageSchema,
    mastheadType,
]

export default schemas;