var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$classnames = require("classnames");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Grid", () => $4fa36e821943b400$export$ef2184bd89960b14);
$parcel$export(module.exports, "Row", () => $4fa36e821943b400$export$b59bdbef9ce70de2);
$parcel$export(module.exports, "Column", () => $4fa36e821943b400$export$816b5d811295e6bc);
var $478c82249b010604$exports = {};
$478c82249b010604$exports = ".hello-grid {\n  flex-direction: column;\n  flex-basis: auto;\n}\n\n.hello-grid-row {\n  min-height: 0;\n  flex-direction: row;\n  flex-basis: auto;\n}\n\n.hello-grid-column {\n  flex-direction: column;\n  flex-basis: 0;\n  margin: 0;\n}\n\n.hello-grid-column > .Column {\n  display: block;\n}\n\n.hello-grid, .hello-grid-row, .hello-grid-column {\n  max-width: 100%;\n  outline: none;\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n}\n\n.hello-grid.centered, .hello-grid-row.centered, .hello-grid-column.centered {\n  justify-content: center;\n  align-items: center;\n}\n\n.hello-grid.centered.vertical, .hello-grid.centered.horizonal, .hello-grid-row.centered.vertical, .hello-grid-row.centered.horizonal, .hello-grid-column.centered.vertical, .hello-grid-column.centered.horizonal {\n  align-items: initial;\n  justify-content: initial;\n}\n\n.hello-grid.centered.vertical, .hello-grid-row.centered.vertical, .hello-grid-column.centered.vertical {\n  justify-content: center;\n}\n\n.hello-grid.padded, .hello-grid-row.padded, .hello-grid-column.padded {\n  padding: var(--hello-grid-var-padding, 10px);\n}\n\n.hello-grid.padded.padded-left, .hello-grid.padded.padded-right, .hello-grid.padded.padded-top, .hello-grid.padded.padded-bottom, .hello-grid-row.padded.padded-left, .hello-grid-row.padded.padded-right, .hello-grid-row.padded.padded-top, .hello-grid-row.padded.padded-bottom, .hello-grid-column.padded.padded-left, .hello-grid-column.padded.padded-right, .hello-grid-column.padded.padded-top, .hello-grid-column.padded.padded-bottom {\n  padding: 0;\n}\n\n.hello-grid.padded.padded-left, .hello-grid-row.padded.padded-left, .hello-grid-column.padded.padded-left {\n  padding-left: var(--hello-grid-var-padding, 10px);\n}\n\n.hello-grid.padded.padded-right, .hello-grid-row.padded.padded-right, .hello-grid-column.padded.padded-right {\n  padding-right: var(--hello-grid-var-padding, 10px);\n}\n\n.hello-grid.padded.padded-top, .hello-grid-row.padded.padded-top, .hello-grid-column.padded.padded-top {\n  padding-top: var(--hello-grid-var-padding, 10px);\n}\n\n.hello-grid.padded.padded-bottom, .hello-grid-row.padded.padded-bottom, .hello-grid-column.padded.padded-bottom {\n  padding-bottom: var(--hello-grid-var-padding, 10px);\n}\n\n.hello-grid.margin, .hello-grid-row.margin, .hello-grid-column.margin {\n  margin: var(--hello-grid-var-margin, 10px);\n}\n\n.hello-grid.margin.margin-left, .hello-grid.margin.margin-right, .hello-grid.margin.margin-top, .hello-grid.margin.margin-bottom, .hello-grid-row.margin.margin-left, .hello-grid-row.margin.margin-right, .hello-grid-row.margin.margin-top, .hello-grid-row.margin.margin-bottom, .hello-grid-column.margin.margin-left, .hello-grid-column.margin.margin-right, .hello-grid-column.margin.margin-top, .hello-grid-column.margin.margin-bottom {\n  margin: 0;\n}\n\n.hello-grid.margin.margin-left, .hello-grid-row.margin.margin-left, .hello-grid-column.margin.margin-left {\n  margin-left: var(--hello-grid-var-margin, 10px);\n}\n\n.hello-grid.margin.margin-right, .hello-grid-row.margin.margin-right, .hello-grid-column.margin.margin-right {\n  margin-right: var(--hello-grid-var-margin, 10px);\n}\n\n.hello-grid.margin.margin-top, .hello-grid-row.margin.margin-top, .hello-grid-column.margin.margin-top {\n  margin-top: var(--hello-grid-var-margin, 10px);\n}\n\n.hello-grid.margin.margin-bottom, .hello-grid-row.margin.margin-bottom, .hello-grid-column.margin.margin-bottom {\n  margin-bottom: var(--hello-grid-var-margin, 10px);\n}\n\n.hello-grid.border, .hello-grid-row.border, .hello-grid-column.border {\n  border: var(--hello-grid-var-border, 1px solid gray);\n}\n\n.hello-grid.collapsible, .hello-grid-row.collapsible, .hello-grid-column.collapsible {\n  transition: all .5s;\n  overflow: hidden;\n}\n\n.hello-grid.collapsible.collapsed, .hello-grid-row.collapsible.collapsed, .hello-grid-column.collapsible.collapsed {\n  padding: 0;\n  flex: 0 !important;\n}\n\n";




/**
 * Generates classnames for margin, padding, or border
 * @param {string} borderType
 * @param {*} value
 * @returns {Array}
 */ function $be25f1620a50bfcc$var$getClassNamesForBorderType(borderType, value) {
    if (!!value === false) return [
        null
    ];
    if (Array.isArray(value) === true) {
        if (value.length > 0 === true) return value.map((direction)=>`${borderType}-${direction}`);
    }
    if (typeof value === "string") return [
        `${borderType}-${value}`
    ];
    return [
        null
    ];
}
function $be25f1620a50bfcc$export$74e117f0604b3afc(componentClassName) {
    const GridComponent = ({ className: className , style: style , layout: layout , centered: centered , padded: padded , margin: margin , border: border , collapsible: collapsible , collapsed: collapsed , flex: flex , ...props })=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
            ...props,
            className: (0, ($parcel$interopDefault($gXNCa$classnames)))(componentClassName, {
                padded: !!padded
            }, ...$be25f1620a50bfcc$var$getClassNamesForBorderType("padded", padded), {
                margin: !!margin
            }, ...$be25f1620a50bfcc$var$getClassNamesForBorderType("margin", margin), {
                centered: !!centered
            }, centered, {
                collapsible: collapsible,
                collapsed: collapsed,
                layout: !!layout
            }, layout, {
                border: !!border
            }, className),
            style: {
                flex: flex,
                ...style
            }
        });
    return GridComponent;
}
function $be25f1620a50bfcc$export$d0f895139e110e4a(stylesheet) {
    const styleElement = document.createElement("style");
    styleElement.textContent = stylesheet;
    document.querySelector("head").appendChild(styleElement);
}


const $4fa36e821943b400$export$ef2184bd89960b14 = (0, $be25f1620a50bfcc$export$74e117f0604b3afc)("hello-grid");
const $4fa36e821943b400$export$b59bdbef9ce70de2 = (0, $be25f1620a50bfcc$export$74e117f0604b3afc)("hello-grid-row");
const $4fa36e821943b400$export$816b5d811295e6bc = (0, $be25f1620a50bfcc$export$74e117f0604b3afc)("hello-grid-column");
(0, $be25f1620a50bfcc$export$d0f895139e110e4a)((0, (/*@__PURE__*/$parcel$interopDefault($478c82249b010604$exports))));


//# sourceMappingURL=main.js.map
