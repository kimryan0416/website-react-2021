import './Date.css';

const Date = (props) => {
	const width = (props.width) ? props.width : "72px";
	const height = (props.height) ? props.height : "64px";
	return (
		<div className="Date" style={{width:width,height:height}}>
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