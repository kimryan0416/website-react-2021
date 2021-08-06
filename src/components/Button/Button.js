import "./Button.css";

function Button(props) {
	return (
		<button className={`Button ${props.cName}`} onClick={(event)=>{ if (props.onClick) props.onClick(event)}}>
			{props.children}
		</button>
	);
}

export default Button;