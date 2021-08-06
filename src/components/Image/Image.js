import "./Image.css";

function Image(props) {
	const width = (props.width) ? props.width : "100%";
	const height = (props.height) ? props.height : "100%";
	const borderRadius = (props.round) ? "50%" : 0;
	const customClass = (props.class) ? props.class : ""
	const { src, alt } = props;

	return (
		<div 
			className={`Image ${customClass}`}
			style={{
				width:width,
				height:height,
				borderRadius:borderRadius
			}}
		>
			<img src={src} alt={alt} />
			{props.children}
		</div>
	);
}

export default Image;