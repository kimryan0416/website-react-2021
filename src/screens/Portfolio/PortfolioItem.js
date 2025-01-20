import { 
	Link,
} from "react-router-dom";

import { 
	Divider, 
	Image,
	WithRouter
} from "../../components";

function PortfolioItem(props) {
	const data = props.data;
	const thumbnailStyle = (data.thumbnailStyle != null) ? data.thumbnailStyle : null;
	const thumbnailImageStyle = (data.thumbnailImageStyle != null) ? data.thumbnailImageStyle : null;
	return (
		<Link to={props.linkTo}>
			<div className="PortfolioItem" onClick={()=>{props.handler(data.project)}}>
				<Image 
					width={160} 
					height={160} 
					cName="PortfolioItemImageWrapper" 
					src={data.thumbnail} 
					alt="" 
					style={thumbnailStyle}
					imageStyle={thumbnailImageStyle}
				/>
				<Divider space={8} />
				<p className="h7"><strong>{data.title}</strong></p>
				<p className="linkSuggestion">Click to read more</p>
			</div>
		</Link>
	);
}

export default WithRouter(PortfolioItem);