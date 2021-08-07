import "./Image.css";

function Image(props) {
	const width = (props.width) ? props.width : "auto";
	const height = (props.height) ? props.height : "auto";
	const borderRadius = (props.round) ? "50%" : 0;
	const { src, alt, onClick } = props;

	var style = {
		width:width,
		height:height,
		borderRadius:borderRadius
	};
	if (props.style) style = {...style, ...props.style};

	var customClass = (props.cName) ? props.cName : "";
	if (onClick) customClass += " hover";

	return (
		<div 
			className={`Image ${customClass}`}
			style={style}
			onClick={onClick}
		>
			<img src={src} alt={alt} />
			{props.children}
		</div>
	);
}

export default Image;