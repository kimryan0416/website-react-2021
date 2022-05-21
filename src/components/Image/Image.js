import "./Image.css";

function Image(props) {

	const { src, alt, onClick } = props;

	var style = {}, imageStyle = {};
	if (props.width) style.width = props.width;
	if (props.height) style.height = props.height;
	if (props.round) style.borderRadius = "50%";
	if (props.style) style = {...style, ...props.style};
	if (props.imageStyle) imageStyle = props.imageStyle;

	var customClass = (props.cName) ? props.cName : "";
	if (onClick) customClass += " hover";

	return (
		<div 
			className={`Image ${customClass}`}
			style={style}
			onClick={onClick}
		>
			<img src={src} alt={alt} style={imageStyle} />
			{props.children}
		</div>
	);
}

export default Image;