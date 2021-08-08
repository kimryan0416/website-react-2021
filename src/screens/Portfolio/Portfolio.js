import { Component } from "react";
import "./Portfolio.css";

import { Divider, Image } from "../../components";

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			text:""
		}
	}
	render() {
		return (
			<>
				<h1>Portfolio</h1>
				<Divider space={32} />
				<p>These are a list of several coding projects that I have had the pleasure of partaking in. Some involve websites for clients, others involve personal projects that attempt to expand my knowledge about web programming <span className='no-br'>or prototyping.</span></p>
				<Divider space={32} />

				<div className="Portfolio">
					<div className="PortfolioItems">
						<div className="PortfolioItem">
						</div>
					</div>
					<div className="PortfolioDisplay"><p>hellomynameiswilliam</p></div>
				</div>
			</>
		);
	}
}

export default Portfolio;