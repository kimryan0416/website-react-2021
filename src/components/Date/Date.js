import './Date.css';

const Date = (props) => {
	let style = {};
	if (props._width != null) style.width = props._width;
	if (props._height != null) style.height = props._height;
	return (
		<div className="Date" style={style}>
			<div className="DateTop">
				<p><strong>{props.top}</strong></p>
			</div>
			<div className="DateBottom">
				<p>{props.bottom}</p>
			</div>
		</div>
	);
}

export default Date;