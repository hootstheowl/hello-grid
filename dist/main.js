var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$classnames = require("classnames");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Grid", () => $4fa36e821943b400$export$ef2184bd89960b14);
$parcel$export(module.exports, "Row", () => $4fa36e821943b400$export$b59bdbef9ce70de2);
$parcel$export(module.exports, "Column", () => $4fa36e821943b400$export$816b5d811295e6bc);


function $43e04fb5e2b45844$var$getClassNamesForBorders(borderType, value) {
    if (!!value === false) return [
        null
    ];
    if (Array.isArray(value)) return value.map((direction)=>`${borderType}-${direction}`);
    if (typeof value === "string") return [
        `${borderType}-${value}`
    ];
    return [
        null
    ];
}
function $43e04fb5e2b45844$var$buildGridComponent(componentClassName) {
    const GridComponent = ({ className: className , style: style , layout: layout , centered: centered , padded: padded , margin: margin , border: border , collapsible: collapsible , collapsed: collapsed , flex: flex , ...props })=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
            ...props,
            className: (0, ($parcel$interopDefault($gXNCa$classnames)))(componentClassName, {
                padded: !!padded
            }, ...$43e04fb5e2b45844$var$getClassNamesForBorders("padded", padded), {
                margin: !!margin
            }, ...$43e04fb5e2b45844$var$getClassNamesForBorders("margin", margin), {
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
var $43e04fb5e2b45844$export$2e2bcd8739ae039 = $43e04fb5e2b45844$var$buildGridComponent;


const $4fa36e821943b400$export$ef2184bd89960b14 = (0, $43e04fb5e2b45844$export$2e2bcd8739ae039)("hello-grid");
const $4fa36e821943b400$export$b59bdbef9ce70de2 = (0, $43e04fb5e2b45844$export$2e2bcd8739ae039)("hello-grid-row");
const $4fa36e821943b400$export$816b5d811295e6bc = (0, $43e04fb5e2b45844$export$2e2bcd8739ae039)("hello-grid-column");


//# sourceMappingURL=main.js.map
