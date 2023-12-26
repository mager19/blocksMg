const tagBlockStyles = {
	borderRadius: '20px',
	color: '#000',
	fontSize: '11px',
	left: '0',
	letterSpacing: '0.5px',
	padding: '2px 5px',
	top: '-20px',
	opacity: 0.5,
	position: 'absolute',
	textDecoration: 'underline',
};


export const TagBlock = (props) => {
	const { text } = props;

	return (
		<div className="tagBlock" style={tagBlockStyles}>
			<span>{text}</span>
		</div>
	);
};
