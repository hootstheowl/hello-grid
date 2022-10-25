import classNames from "classnames";

/**
 * Generates classnames for center, margin, padding, and border
 * @param {string} styleType
 * @param {*} value
 * @returns {Array}
 */
const getClassNamesForStyleType = (styleType, value) => {
  if (!!value === false) {
    return [null];
  }
  if(Array.isArray(value) === true) {
    if(value.length > 0 === true) {
      return value.map(direction => `${styleType}-${direction}`);
    }
  }
  if (typeof value === "string") {
    return [`${styleType}-${value}`];
  }
  return [null];
}

/**
 * Generates grid component based on component class name
 * @param {string} componentClassName
 * @returns {Component}
 */
export const buildGridComponent = (componentClassName) => (
  ({
    className,
    style,
    centered,
    padded,
    margin,
    bordered,
    collapsible,
    collapsed,
    flex,
    height,
    ...props
  }) => (
    <div
      {...props}
      className={classNames(
        componentClassName,
        {
          bordered: !!bordered,
          padded: !!padded,
          margin: !!margin,
          centered: !!centered,
          collapsible: !!collapsible,
          collapsed: !!collapsed,
        },
        getClassNamesForStyleType("centered", centered),
        getClassNamesForStyleType("bordered", bordered),
        getClassNamesForStyleType("padded", padded),
        getClassNamesForStyleType("margin", margin),
        className
      )}
      style={{
        flex,
        height,
        maxHeight: height,
        ...style
      }}
    />
  )
);

/**
 * Injects given stringified stylesheet into document head
 * @param {string} stylesheet
 * @returns {undefined}
 */
export const injectStylesheet = (stylesheet) => {
  const styleElement = document.createElement("style");
  styleElement.textContent = stylesheet;
  document.querySelector("head").appendChild(styleElement);
};
