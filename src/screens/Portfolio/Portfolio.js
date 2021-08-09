import { Component } from "react";
import { 
	Switch,
	Route,
	Link,
	withRouter,
} from "react-router-dom";

import "./Portfolio.css";

import { Divider, Image, } from "../../components";
import projects from "./Projects";

class Portfolio extends Component {
	
	constructor() {
		super();
		this.state = {
			project:null
		}
	}

	handleItemClick = (project) => {
		const to = (project === this.state.project) ? null : project;
		this.setState({project:to});
	}

	goBack = (to) => {
		this.props.history.push(to);
	}

	render() {
		return (
				<Switch>
					<Route 
						path="/portfolio/work" 
						component={()=> 
							<PortfolioPage page="Work Experience">
								<p>Particular experiences working in startups and companies. I've worked both in <strong>contract positions</strong> and <strong>startup companies</strong>.</p>
								<Divider space={24} />
								<div className="PortfolioItems">
									{projects.work.map((p,i)=>{
										return <PortfolioItem key={`work_${i}`} data={p} linkTo={`/portfolio/work/${p.url}`} handler={this.handleItemClick} />
									})}
								</div>
								<Switch>
									{projects.work.map(p=>{
										return (
											<Route 
												exact path={`/portfolio/work/${p.url}`}
												component={()=> <PortfolioDisplay goBack={()=>{this.goBack("/portfolio/work")}}>{p.content}</PortfolioDisplay>}
											/>
										)
									})}
								</Switch>
							</PortfolioPage>
						}
					/>
					<Route 
						path="/portfolio/projects" 
						component={()=> 
							<PortfolioPage page="Personal Projects">
								{projects.projects.map((p,i)=>{
									return (
										<>
											<h4>{p.type}</h4>
											{p.description}
											<Divider space={24} />
											<div key={`projects_${i}`} className="PortfolioItems">
												{p.items.map((p2,i2)=>{
													return <PortfolioItem key={`projects_${i}_${i2}`} data={p2} linkTo={`/portfolio/projects/${p2.url}`} handler={this.handleItemClick} />
												})}
											</div>
											<Divider space={24} />
										</>
									)
								})}
								<Switch>
									{projects.projects.map((p,i)=>{
										return p.items.map((p2,i2)=>{
											return (
												<Route 
													key={`projects_item_${i}_${i2}`}
													exact path={`/portfolio/projects/${p2.url}`}
													component={()=> <PortfolioDisplay goBack={()=>{this.goBack("/portfolio/projects")}}>{p2.content}</PortfolioDisplay>}
												/>
											)
										})
									})}
								</Switch>
							</PortfolioPage>
						}
					/>
					<Route 
						path="/portfolio/research" 
						component={()=> 
							<PortfolioPage page="Research Papers">
								<Divider space={24} />
								<div className="PortfolioItems">
									{projects.research.map((p,i)=>{
										return <PortfolioItem key={`research_${i}`} data={p} linkTo={`/portfolio/research/${p.url}`} handler={this.handleItemClick} />
									})}
								</div>
								<Switch>
									{projects.research.map(p=>{
										return (
											<Route 
												exact path={`/portfolio/research/${p.url}`}
												component={()=> <PortfolioDisplay goBack={()=>{this.goBack("/portfolio/research")}}>{p.content}</PortfolioDisplay>}
											/>
										)
									})}
								</Switch>
							</PortfolioPage>
						}
					/>
					<Route 
						path="/portfolio/education" 
						component={()=> 
							<PortfolioPage page="Education">
								<div className="PortfolioItems">
									
								</div>
							</PortfolioPage>
						}
					/>
					<Route 
						path="/portfolio"
						component={()=> <PortfolioHome changePage={this.changePage} />}
					/>
				</Switch>
		);
	}
}

function PortfolioHome(props) {
	return (
		<>
			<h1>Portfolio</h1>
			<Divider space={32} />
			<p>This is a list containing my prior work experience, coding projects, and education. Work experiences involve websites for clients, while personal projects are attempts to expand my knowledge about web programming, virtual reality, or <span className='no-br'>or prototyping.</span></p>
			<Divider space={16} />
			<div className="PortfolioPages">
				<div className="PortfolioPageLink">
					<Link to="/portfolio/work">
						<h3>Work Experience</h3>
						<p className="h7">Particular experiences working in startups and companies. I've worked both in <strong>contract positions</strong> and <strong>startup companies</strong>.</p>
					</Link>
				</div>
				<Divider space={16} />
				<div className="PortfolioPageLink">
					<Link to="/portfolio/projects">
						<h3>Personal Projects</h3>
						<p className="h7">A collection of personal projects that I had the pleasure of working in during my free time. Subtopics include <strong>Virtual Reality prototypes</strong>, <strong>web projects</strong>, <strong>games/hardware</strong></p>
					</Link>
				</div>
				<Divider space={16} />
				<div className="PortfolioPageLink">
					<Link to="/portfolio/research">
						<h3>Research Papers</h3>
						<p className="h7">Research papers I've previously written during my degree programs. Two involve <strong>Virtual Reality</strong> and another two involve <strong>User Experiences</strong></p>
					</Link>
				</div>
				<Divider space={16} />
				{/*}
				<div className="PortfolioPageLink">
					<Link to="/portfolio/education">
						<h3>Education</h3>
						<p className="h7">The degree programs and schools I've attended.</p>
					</Link>
				</div>
				{*/}
			</div>
		</>
	);
}

function PortfolioPage(props) {

	return (
		<>
			<div className="PortfolioHeader">
				<h6><Link to="/portfolio">Portfolio</Link></h6>
				<h2>{props.page}</h2>
			</div>
			<Divider space={32} />
			{props.children}
		</>
	);
}

function PortfolioItem(props) {
	const data = props.data;
	console.log(data);
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