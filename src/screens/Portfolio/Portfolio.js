import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
	Routes,
	Route,
	Link,
} from "react-router-dom";

import "./Portfolio.css";

import { 
	Divider, 
	Image, 
	Button,
	ExtURL,
	WithRouter
} from "../../components";
import {
	useMobile
} from '../../hooks';

import PortfolioItem from './PortfolioItem';
import PortfolioDisplay from './PortfolioDisplay';

import projects from "./Projects";

const oneplace = projects.work.filter(p=>p.key==="oneplace")[0];
const tucanfitness = projects.work.filter(p=>p.key==="tucanfitness")[0];


const Portfolio = (props) => {
	const [ project, setProject ] = useState(null);

	const handleItemClick = (newProject) => {
		const to = (newProject === project) ? null : newProject;
		setProject(to);
	}
	const goBack = (to) => { props.history.push(to); }

	return (
		<Routes>
			<Route 
				path="/work" 
				element={<p>Work</p>}
			/>
			<Route 
				path="/projects" 
				element={<p>Projects</p>}
			/>
			<Route 
				path="/research" 
				element={<p>Research</p>}
			/>
			
			<Route 
				exact path="/oneplace"
				element={<PortfolioDisplay goBack={()=>{goBack("/portfolio")}}>{oneplace.content}</PortfolioDisplay>}
			/>
			<Route 
				exact path="/tucanfitness"
				element={<PortfolioDisplay goBack={()=>{goBack("/portfolio")}}>{tucanfitness.content}</PortfolioDisplay>}
			/>
			<Route 
				path="/"
				element={<PortfolioHome />}
			/>
		</Routes>
	);
}

const PortfolioHome = (props) => {
	return (
		<>
			<h1>Portfolio</h1>
			<Divider space={32} />
			<p>This is a list containing my prior work experience, coding projects, and research experience. Work experiences involve websites for clients, while personal projects are attempts to expand my knowledge about web programming, virtual reality, or <span className='no-br'>or prototyping.</span></p>
			<Divider space={8} />
			<p><i>NOTE: Some portfolio items are cross-referenced between work experiences, projects, and research experiences. In other words, some items may appear more than once.</i></p>
			<Divider space={32} />
			<div className="Portfolio">
				<div className="PortfolioPages">
					<div className="PortfolioPageLink">
						<Link to="/portfolio/work">
							<h3>Work Experience</h3>
							<p className="h7">Particular experiences working in universities, startups, and companies. I've worked in <strong>research internships</strong>, <strong>contract positions</strong>, and <strong>startup companies</strong>.</p>
							<p className="h7 a">- Click here if you're looking for my professional experiences.</p>
						</Link>
					</div>
					<Divider space={16} />
					<div className="PortfolioPageLink">
						<Link to="/portfolio/projects">
							<h3>Personal Projects</h3>
							<p className="h7">A collection of personal projects that I had the pleasure of working in during my free time. Subtopics include <strong>Virtual Reality prototypes</strong>, <strong>web projects</strong>, <strong>games/hardware</strong>.</p>
							<p className="h7 a">- Click here if you're interested in the various projects I've participated in or developed.</p>
						</Link>
					</div>
					<Divider space={16} />
					<div className="PortfolioPageLink">
						<Link to="/portfolio/research">
							<h3>Research Papers</h3>
							<p className="h7">Research papers I've previously written during my degree programs. Two involve <strong>Virtual Reality</strong> and another two involve <strong>User Experiences</strong>.</p>
							<p className="h7 a">- Click here if you're interested in my research experience.</p>
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
				<div className="PortfolioResources">
					<h5>Downloadable Resources</h5>
					<Divider space={8} />
					<p className="h7">Thanks to the various work experiences and projects, I've amassed a collection of tools and artifacts to help structure my development process in UX-heavy projects. I've made them available at the link below, for anybody curious!</p>
					<Divider space={16} />
					<ExtURL href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing"><Button>UX Design Resources</Button></ExtURL>
					<Divider space={16} />
					<p className="h7"><strong>Related experiences:</strong></p>
					<Divider space={8} />
					<Link to="/portfolio/oneplace">
						<div className="PortfolioMiniItem">
							<Image width={32} height={32} src={oneplace.thumbnail} alt="" />
							<Divider horizontal={true} space={8} />
							<p className="h8">{oneplace.title}</p>
						</div>
					</Link>
					<Link to="/portfolio/tucanfitness">
						<div className="PortfolioMiniItem">
							<Image width={32} height={32} src={tucanfitness.thumbnail} alt="" />
							<Divider horizontal={true} space={8} />
							<p className="h8">{tucanfitness.title}</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

const PortfolioPage = (props) => {
	const history = useNavigate();
	const isMobile = useMobile();

	const HandleOtherLink = (e) => {
		if (e.target.value === props.page) return;
		switch(e.target.value) {
			case "Work Experience":
				history.push("/portfolio/work");
				break;
			case "Personal Projects":
				history.push("/portfolio/projects");
				break;
			case "Research Papers":
				history.push("/portfolio/research");
				break;
			default:
				history.push('/portfolio');
				break;
		}
	}

	return (
		<>
			<div className="PortfolioHeader">
				{
					isMobile 
						? 
							(
								<div className="PortfolioHeaderLinks">
									<div className="PortfolioHeaderOtherLinks">
										<h6><i>Navigate to:</i></h6>
										<select value={props.page} onChange={HandleOtherLink}>
											<option value="Portfolio">&#8678; Back to Portfolio</option>
											<option value="Work Experience">Work Experience</option>
											<option value="Personal Projects">Personal Projects</option>
											<option value="Research Papers">Research Papers</option>
										</select>
									</div>
								</div>
							)
						: 
							(
								<div className="PortfolioHeaderLinks">
									<h6><Link to="/portfolio">&#8678; Back to Portfolio</Link></h6>
									<div className="PortfolioHeaderOtherLinks">
										<h6>{
											props.page==="Work Experience"
												? <span className="PortfolioCurrentOtherLink">Work</span>
												: <Link to="/portfolio/work">Work</Link>
										}</h6>
										<h6>{
											props.page==="Personal Projects"
												? <span className="PortfolioCurrentOtherLink">Personal</span>
												: <Link to="/portfolio/projects">Personal</Link>
										}</h6>
										<h6>{
											props.page==="Research Papers"
												? <span className="PortfolioCurrentOtherLink">Research</span>
												: <Link to="/portfolio/research">Research</Link>
										}</h6>
									</div>
								</div>
							)
					}
				<h2>{props.page}</h2>
			</div>
			<Divider space={32} />
			{props.children}
		</>
	);
}

export default WithRouter(Portfolio);