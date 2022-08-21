export const Spacer = ({ size, axis, style = {}, ...delegated }) => {
	const width = axis === "vertical" ? 1 : size;
	const height = axis === "horizontal" ? 1 : size;
	return (
		<div
			style={{
				width,
				minWidth: width,
				height,
				minHeight: height,
				...style,
			}}
			{...delegated}
		/>
	);
};
