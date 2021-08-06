import "./Divider.css";

function Divider(props) {
	const space = (props.space) ? props.space : 16;
	return <div 
		className="Divider"
		style={{
			marginBottom:space
		}}></div>;
}

export default Divider;