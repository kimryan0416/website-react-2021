import "./Button.css";

function Button(props) {
	const cName = (props.cName) ? `Button ${props.cName}` : "Button";
	return (
		<button className={cName} onClick={(event)=>{ if (props.onClick) props.onClick(event)}}>
			{props.children}
		</button>
	);
}

export default Button;