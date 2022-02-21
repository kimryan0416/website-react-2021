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
	const cName = (props.cName) ? props.cName : ''
	return <div 
		className={`Divider ${cName}`}
		style={style}></div>;
}

export default Divider;