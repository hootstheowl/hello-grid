import stylesheet from "bundle-text:./style.scss";
import { injectStyle, buildGridComponent } from "./util";

export const Grid = buildGridComponent("hello-grid");
export const Row = buildGridComponent("hello-grid-row");
export const Column = buildGridComponent("hello-grid-column");

injectStyle(stylesheet);
