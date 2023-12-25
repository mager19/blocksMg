export const TagBlock = (props) => {
	const { text } = props;

	return (
		<div className="tagBlock">
			<span>{text}</span>
		</div>
	);
};
