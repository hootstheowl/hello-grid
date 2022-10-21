import classNames from "classnames";

function getClassNamesForBorders(borderType, value) {
	if (!!value === false) {
		return [null];
	}
	if(Array.isArray(value)) {
		return value.map(direction => `${borderType}-${direction}`);
	}
	if (typeof value === "string") {
		return [`${borderType}-${value}`]
	}
	return [null];
}

function buildGridComponent(componentClassName) {
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
				...getClassNamesForBorders("padded", padded),
				{ margin: !!margin },
				...getClassNamesForBorders("margin", margin),
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

export default buildGridComponent;
