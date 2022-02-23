import { Component } from 'react';
import { 
	Divider, 
	Button,
} from "../../components";

class PortfolioDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			enlargened:false
		}
	}
	toggleEnlarge = () => {
		this.setState({
			enlargened: !this.state.enlargened
		});
	}
	render() {
		const enlargedPanelClass = (this.state.enlargened)
			? 'enlargedPanel'
			: ''
		const enlargeButtonText = (this.state.enlargened)
			? 'Smaller panel'
			: 'Enlarge panel';
		return (
			<div className={`PortfolioDisplay ${enlargedPanelClass}`}>
				<div className="PortfolioDisplayCover" onClick={this.props.goBack}></div>
				<div className={`PortfolioDisplayPanel ${enlargedPanelClass}`}>
					<div className='PortfolioDisplayHeader'>
						<Button cName="PortfolioBackButton" onClick={this.props.goBack}>Close</Button>
						<Button cName="PortfolioEnlargeButton HideInMobile" onClick={this.toggleEnlarge}>{enlargeButtonText}</Button>
					</div>
					<Divider space={16} />
					<div className='PortfolioDisplayContents'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioDisplay;