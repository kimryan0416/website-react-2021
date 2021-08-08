import { Component } from "react";
import { 
	BrowserRouter as Router, 
	Switch,
	Route,
	Link,
	withRouter 
} from "react-router-dom";

import "./Portfolio.css";

import { Divider, Image, Button } from "../../components";

import { 
	projects,
	EasierVRAssets,
	EasierXRAssets,
	MoL,
	VRKeyboard,
	Orbit,
} from "./Projects";

class Portfolio extends Component {
	
	constructor() {
		super();
		this.state = {
			project:null
		}
	}

	handleItemClick = (project) => {
		const to = (project == this.state.project) ? null : project;
		this.setState({project:to});
	}

	goBack = () => {
		this.props.history.goBack();
	}

	render() {

		const items = projects.reduce((accumulator, p)=>{
			if (!accumulator[p.umbrella]) accumulator[p.umbrella] = {
				label:p.umbrella,
				items:[]
			};
			accumulator[p.umbrella].items.push(
				<PortfolioItem 
					linkTo={p.url}
					key={p.key}
					project={p.key}
					src={p.thumbnail} 
					title={p.title} 
					handler={this.handleItemClick}
				/>
			);
			return accumulator;
		},{});

		return (
			<Router>
				<h1>Portfolio</h1>
				<Divider space={32} />
				<p>These are a list of several coding projects that I have had the pleasure of partaking in. Some involve websites for clients, others involve personal projects that attempt to expand my knowledge about web programming <span className='no-br'>or prototyping.</span></p>
				<Divider space={16} />
				<hr />
				<Divider space={16} />

				{
					Object.values(items).map(i=>{
						return (
							<div>
								<h3>{i.label}</h3>
								<Divider space={8} />
								<div>
									{i.items}
								</div>
							</div>
						)
					})
				}

				<Switch>
					<Route 
						exact path="/portfolio/vrkeyboard" 
						component={()=> <PortfolioDisplay goBack={this.goBack}><VRKeyboard /></PortfolioDisplay>}
					/>
					<Route
						exact path="/portfolio/easierVRAssets"
						component={()=> <PortfolioDisplay goBack={this.goBack}><EasierVRAssets /></PortfolioDisplay>}
					/>
					<Route 
						exact path="/portfolio/easierXRAssets"
						component={()=> <PortfolioDisplay goBack={this.goBack}><EasierXRAssets /></PortfolioDisplay>}
					/>
					<Route 
						exact path="/portfolio/imol"
						component={()=> <PortfolioDisplay goBack={this.goBack}><MoL /></PortfolioDisplay>}
					/>
					<Route 
						exact path="/portfolio/orbit"
						component={()=> <PortfolioDisplay goBack={this.goBack}><Orbit /></PortfolioDisplay>}
					/>
				</Switch>

				{/*
					<h3>Startups &amp; Case studies</h3>
					<h3>Virtual Reality Research &amp; Projects</h3>
					<h3>Web Projects</h3>
					<h3>Games</h3>
					<h3>Other Projects</h3>
				*/}
			</Router>
		);
	}
}

function PortfolioItem(props) {
	return (
		<Link to={props.linkTo}>
			<Button cName="PortfolioItem" onClick={()=>{props.handler(props.project)}}>
				<Image 
					src={props.src} 
					alt="" 
					width={160} 
					height={160} 
					cName="PortfolioItemImage"
				/>
				<div className="PortfolioItemHover">
					<p>Click to learn more</p>
				</div>
			</Button>
		</Link>
	);
}

function PortfolioDisplay(props) {
	return (
		<div className="PortfolioDisplay">
			<div className="PortfolioDisplayCover" onClick={props.goBack}></div>
			<div className="PortfolioDisplayPanel">
				{/*}
					<Button cName="PortfolioBackButton" onClick={props.goBack}>Close</Button>
				{*/}
					{props.children}
			</div>
		</div>
	);
}

export default withRouter(Portfolio);