import { 
	Link,
	withRouter,
} from "react-router-dom";

import { 
	Divider, 
	Image,
} from "../../components";

function PortfolioItem(props) {
	const data = props.data;
	return (
		<Link to={props.linkTo}>
			<div className="PortfolioItem" onClick={()=>{props.handler(data.project)}}>
				<Image 
					width={160} 
					height={160} 
					cName="PortfolioItemImageWrapper" 
					src={data.thumbnail} 
					alt="" 
				/>
				<Divider space={8} />
				<p className="h7"><strong>{data.title}</strong></p>
				<p className="linkSuggestion">Click to read more</p>
			</div>
		</Link>
	);
}

export default withRouter(PortfolioItem);