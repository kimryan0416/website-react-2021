function Divider(props) {
	const space = (props.space) ? props.space : 16;
	const style = (props.horizontal) 
		? {
			height:"100%",
			marginRight:space
		} 
		: {
			width:"100%",
			marginBottom:space
		};
	return <div 
		className="Divider"
		style={style}></div>;
}

export default Divider;