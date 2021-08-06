import "./Image.css";

function Image(props) {
	const width = (props.width) ? props.width : "100%";
	const height = (props.height) ? props.height : "100%";
	const borderRadius = (props.round) ? "50%" : 0;
	const { src, alt, onClick } = props;

	var customClass = (props.cName) ? props.cName : "";
	if (onClick) customClass += " hover";

	return (
		<div 
			className={`Image ${customClass}`}
			style={{
				width:width,
				height:height,
				borderRadius:borderRadius
			}}
			onClick={onClick}
		>
			<img src={src} alt={alt} />
			{props.children}
		</div>
	);
}

export default Image;