import classNames from "classnames";

/**
 * Generates classnames for margin, padding, or border
 * @param {string} borderType
 * @param {*} value
 * @returns {Array}
 */
function getClassNamesForBorderType(borderType, value) {
	if (!!value === false) {
		return [null];
	}
	if(Array.isArray(value) === true) {
		if(value.length > 0 === true) {
			return value.map(direction => `${borderType}-${direction}`);
		}
	}
	if (typeof value === "string") {
		return [`${borderType}-${value}`]
	}
	return [null];
}

/**
 * Generates grid component based on component class name
 * @param {string} componentClassName
 * @returns {Component}
 */
export function buildGridComponent(componentClassName) {
	const GridComponent = ({
		className,
		style,
		layout,
		centered,
		padded,
		margin,
		border,
		collapsible,
		collapsed,
		flex,
    	...props
	}) => (
		<div
			{...props}
			className={classNames(
				componentClassName,
				{ padded: !!padded },
				...getClassNamesForBorderType("padded", padded),
				{ margin: !!margin },
				...getClassNamesForBorderType("margin", margin),
				{ centered: !!centered }, centered,
				{ collapsible, collapsed, layout: !!layout }, layout,
				{ border: !!border },
				className,
			)}
			style={{flex, ...style}}
		/>
	);
	return GridComponent;
};

/**
 * Injects given stringified stylesheet into document head
 * @param {string} stylesheet
 * @returns {undefined}
 */
export function injectStylesheet(stylesheet) {
    const styleElement = document.createElement("style");
    styleElement.textContent = stylesheet;
    document.querySelector("head").appendChild(styleElement);
};
