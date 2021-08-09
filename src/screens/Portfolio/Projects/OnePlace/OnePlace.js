import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function OnePlace() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Designing and engineering the front-end of a SaaS product built to help families share important documents online.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React Native</li>
					<li>User Experience (UX) Design</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>OnePlace: Simple and secure file storage for your family</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>"OnePlace" initially started out as a Startup Studio venture from Cornell Tech between four colleagues, as part of CT's 2019-2020 studio-based master's degree. United by the idea of helping families share important documents online, the four of us wished to ultimately change how families interacted with each other online and how they cooperated to share critical information using the latest web technology.</p>
				<Divider space={8} />
				<p>I joined the project, originally coined "Software for Families," as the lead front-end engineer. I was responsible for designing and building out a user interface that would satisfy both tech-savvy millenials and older potential users who may not be as experienced in web technologies.</p>
				<Divider space={8} />
				<p> It was an interesting challenge and concept, and I quickly grew fond of the idea of engendering positive change by helping families adapt to modern conventions of file-sharing and communication while encouraging safe practices when using the Internet.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Status: Left Company [January. 2020 – January 2021]</li>
					<li>
						Peer Co-founders:
						<ul>
							<li>Daniel Asper - Co-CEO</li>
							<li>Yasmin Lalani - Co-CEO + Marketing Lead</li>
							<li>Sunny Lalani - CPO + DevOps</li>
							<li>Ryan Kim (Me) - CDO + Front-end Engineer</li>
						</ul>
					</li>
					<li>
						Roles & Responsibilities:
						<ul>
							<li>Co-Founder: Work together with our teams' leaders on corporate management, team building, and long-term planning</li>
							<li>Front-end Engineer: Work with our core engineering team to develop a user-friendly user interface and workflow while keeping best practices in security and design theory in mind.</li>
							<li>Chief Design Officer (CDO): Lead the direction of all aspects of the product's functionality and design, from using the design process to guide the team on conceptualizing the User Experience of the product to interacting with our Marketing and Dev Ops teams on ensuring consistency between our external-facing marketing material and our app's capabilities.</li>
						</ul>
					</li>
					<li>
						Tools:
						<ul>
							<li>
								Front-End:
								<ul>
									<li>React Native + Expo CLI: Main code base and framework</li>
									<li>Figma: Wireframing and Design</li>
									<li>Github: Version control and backup</li>
								</ul>
							</li>
							<li>
								Back-End:
								<ul>
									<li>AWS Amplify: Main API service hander + user authentication service</li>
									<li>Loopback: API Orchestration layer for our API service</li>
									<li>Mixpanel: User Analytics</li>
									<li>Github: Version control and backup</li>
								</ul>
							</li>
							<li>
								Internal:
								<ul>
									<li>Notion: Note-taking, code documentation, scheduling</li>
									<li>Google Drive: Asset sharing</li>
									<li>Zoom: Conferencing tool</li>
									<li>Slack: Team communication</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const OnePlaceData = {
	umbrella:"Startups",
	key:"oneplace",
	thumbnail:thumbnail,
	title:"OnePlace: Simple and secure file storage for your family",
	url:"oneplace",
	content:<OnePlace />
}

export default OnePlaceData;