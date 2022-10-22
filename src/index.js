import stylesheet from "bundle-text:./style.scss";
import { buildGridComponent, injectStylesheet } from "./util";

export const Grid = buildGridComponent("hello-grid");
export const Row = buildGridComponent("hello-grid-row");
export const Column = buildGridComponent("hello-grid-column");

injectStylesheet(stylesheet);
