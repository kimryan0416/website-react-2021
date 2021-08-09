import { Divider, Button } from "../../../../components";
import { 
	thumbnail,
	groupSketches,
	highFidelityWireframe,
	highFidelityWireframe2,
	highFidelityWireframe3,
	empathyMap,
	ideasSorted,
	teamPhoto,
	productPreview,
	richPicture,
	taskDelegation,
} from "./assets";

function OnePlace() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="OnePlace Logo" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Designing and engineering the front-end of a SaaS product built to help families share important documents online.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href="https://www.oneplace.family/" target="_blank" rel="noopener noreferrer">OnePlace Website</a>
					<br />
					<a href="https://medium.com/@ryan_oneplace" target="_blank" rel="noopener noreferrer">My Medium Stories</a>
					<br />
					<a href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing" target="_blank" rel="noopener noreferrer">UX Design Resources</a>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React Native</li>
					<li>User Experience (UX) Design</li>
				</ul>
				<div className="ShowInMobile">
					<Divider space={16} />
				</div>
				<div className="HideInMobile">
					<Divider space={64} />
					<img className="PortfolioContentImage" src={richPicture} alt="Rich Picture" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={empathyMap} alt="Empathy Map" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={ideasSorted} alt="Ideation" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={taskDelegation} alt="Task Delegation" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={groupSketches} alt="Group Sketches" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={highFidelityWireframe} alt="High Fidelity Wireframe 1" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={highFidelityWireframe2} alt="High Fidelity Wireframe 2" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={highFidelityWireframe3} alt="High Fidelity Wireframe 3" />
					<Divider space={8} />
					<img className="PortfolioContentImage" src={productPreview} alt="High Fidelity Wireframe 1" />
				</div>
			</div>
			<div className="PortfolioMain">
				<h3>OnePlace: Simple and secure file storage for your family</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>
					<img className="PortfolioContentImage Right" src={productPreview} alt="Product Preview" />
					"OnePlace" initially started out as a Startup Studio venture from Cornell Tech between four colleagues, as part of CT's 2019-2020 studio-based master's degree. United by the idea of helping families share important documents online, the four of us wished to ultimately change how families interacted with each other online and how they cooperated to share critical information using the latest web technology.</p>
				<Divider space={8} />
				<p>
					I joined the project, originally coined "Software for Families," as the lead front-end engineer. I was responsible for designing and building out a user interface that would satisfy both tech-savvy millenials and older potential users who may not be as experienced in web technologies.
				</p>
				<Divider space={8} />
				<p>
					It was an interesting challenge and concept, and I quickly grew fond of the idea of engendering positive change by helping families adapt to modern conventions of file-sharing and communication while encouraging safe practices when using the Internet.
				</p>
				<Divider space={8} />
				<img className="PortfolioContentImage" src={teamPhoto} alt="The Team" />
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Left Company [January. 2020 – January 2021]</li>
					<li>
						<strong>Peer Co-founders:</strong>
						<ul>
							<li><i><u>Daniel Asper</u></i> - Co-CEO</li>
							<li><i><u>Yasmin Lalani</u></i> - Co-CEO + Marketing Lead</li>
							<li><i><u>Sunny Ladkani</u></i> - CPO + DevOps</li>
							<li><i><u>Ryan Kim (Me)</u></i> - CDO + Front-end Engineer</li>
						</ul>
					</li>
					<li>
						<strong>Roles & Responsibilities:</strong>
						<ul>
							<li><i><u>Co-Founder:</u></i><br />Work together with our teams' leaders on corporate management, team building, and long-term planning</li>
							<li><i><u>Front-end Engineer:</u></i><br />Work with our core engineering team to develop a user-friendly user interface and workflow while keeping best practices in security and design theory in mind.</li>
							<li><i><u>Chief Design Officer (CDO):</u></i><br />Lead the direction of all aspects of the product's functionality and design, from using the design process to guide the team on conceptualizing the User Experience of the product to interacting with our Marketing and Dev Ops teams on ensuring consistency between our external-facing marketing material and our app's capabilities.</li>
						</ul>
					</li>
					<li>
						<strong>Tools:</strong>
						<ul>
							<li>
								<i><u>Front-End:</u></i>
								<ul>
									<li>React Native + Expo CLI: Main code base and framework</li>
									<li>Figma: Wireframing and Design</li>
									<li>Github: Version control and backup</li>
								</ul>
							</li>
							<li>
								<i><u>Back-End:</u></i>
								<ul>
									<li>AWS Amplify: Main API service hander + user authentication service</li>
									<li>Loopback: API Orchestration layer for our API service</li>
									<li>Mixpanel: User Analytics</li>
									<li>Github: Version control and backup</li>
								</ul>
							</li>
							<li>
								<i><u>Internal:</u></i>
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
				<Divider space={16} />
				<h4><strong>Lessons Learned: A Retrospective</strong></h4>
				<Divider space={8} />
				<p> I'd like to add a list of major obstacles we faced and general advise for other entrepreneurs who may be experiencing similar obstacles.</p>
				<Divider space={8} />
				<div className="PortfolioContentColumns">
					<div className="PortfolioContentColumn">
						<h6><strong>Gains:</strong></h6>
						<Divider space={8} />
 						<ul className="h7">
							<li>Invoking a sprint-driven development cycle of user research + code development gave us the edge we needed to start quickly, given our initial lack of resources.</li>
							<li>Developing a rigorous process of semi-structured user interviews helped to avoid major pitfalls in user research.</li>
							<li>Competitive Analyses of products currently existing in the market gave us a better perspective of why certain products are unable to satisfy niche users and how we could position "OnePlace" to better align with dissatisfied users.</li>
							<li>Delegating tasks to team members based on their strengths and goals tripled our rate of efficiency, motivated each team member to perform, and added a sense of transparency and trust among each other.</li>
							<li>Structuring our design sprints with a distinct process for interview processing, sketching, low-fidelity wireframing, and high-fidelity wireframing helped generate new ideas among team members about how to tackle existing problems and overall allowed us to proceed quickly with our design phase.</li>
						</ul>
					</div>
					<div className="ShowInMobile"><Divider space={16} /></div>
					<div className="PortfolioContentColumn">
						<h6><strong>Obstacles:</strong></h6>
						<Divider space={8} />
						<ul className="h7">
							<li>Our small number of user interviews risked the possibility of having too few data points to generate key insights from.</li>
							<li>Lack of attention to protocol with user interviews risked the authenticity of our user data.</li>
							<li>Disagreements about team decisions that were collectively agreed upon initially took valuable energy and time away from some of our more important responsibilities and contributed to tensions within our team dynamic.</li>
							<li>The sacrifice of work-life balance in our startup culture risked burnout and stress among our teammates, thereby reducing efficiency and team satisfaction in the long-term.</li>
						</ul>
					</div>
				</div>
				<Divider space={16} />
				<h4><strong>General Advice, by Category</strong></h4>
				<Divider space={8} />
				<p>The origins of "OnePlace" are mired with both wins and losses, gains and obstacles. This experience has taught me more than any previous job had ever done before about the importance of corporate structure, team-based decision-making, and work-life balance. I came out of the experience with a positive outlook towards the future of the company.</p>
				<Divider space={8} />
				<p>While there is no "right" way to do things, there are certainly "wrong" ways and avoiding those "wrong" ways will keep you and your company afloat for much longer than you might expect. Here is a list of suggestions I've created based off of my experiences and the obstacles we faced:</p>
				<Divider space={8} />
				<h6><strong>Research and User Interviews:</strong></h6>
				<Divider space={8} />
        <ul className="h7">
	        <li>Use either structured or semi-structured interviews with pre-established question lists and topics to ensure that all or most interviews are consistent in their quality.</li>
        	<li>... and <strong>enforce that quality</strong> by using teams of at least two people for your interviews in order to subdivide responsibilities and prevent focus-switching during the interview.</li>
					<li>
						Avoid common pitfalls in interview questions such as:
            <ul>
	            <li>disguising multiple questions as one single question,</li>
            	<li>asking leading questions to push interviewees towards a certain answer,</li>
            	<li>asking numerous "yes-no" questions instead of more open-ended ones that encourage interviewees to reflect upon their experiences, and</li>
            	<li>using vague language such as "good," "awesome," or "bad" that can be highly interpretive in nature.</li>
        		</ul>
        	</li>
        	<li>If you are at a phase where you wish to present any designs or wireframes of your product, do so with low-fidelity wireframes if you are early in your design process.</li>
        </ul>
        <Divider space={8} />
        <p><i>For more info on good practices for user interviews and user data processing, you can access a public resources GDrive folder here:</i></p>
        <Divider space={8} />
        <a href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing" target="_blank" rel="noopener noreferrer"><Button>UX Design Resources</Button></a>
        <Divider space={16} />
				<h6><strong>User Data Processing - Personas, Empathy Maps, Ethics:</strong></h6>
				<Divider space={8} />
        <ul className="h7">
        	<li>
        		Try to ensure interviewee privacy and objectiveness by removing indicators of an interviewee's identity from any recordings or notes taken during an interview.
        		<ul>	
        			<li>Using nicknames or pseudonyms for interviewees is an appropriate measure in this case.</li>
        			<li>Anonymizing user data is key if you need to share insights from your user interviews with 3rd parties who might be interested in your data.</li>
        			<li>Always ensure that you follow rules of consent when it comes to interviewee data. For example, if an interviewee is uncomfortable with using audio recordings, ensure that those wishes are respected.</li>
    				</ul>
    			</li>
    			<li>
    				Following user interviews, form "Personas" that represent typical members of your target demographics.
    				<ul>
        			<li>Your Personas will help be an anchoring point during your sketching and wireframing process.</li>
        			<li>Personas are typically built with the help of methods such as the Empathy Map, which generally help UX teams sort through interviewee data.</li>
        		</ul>
        	</li>
        </ul>
    		<Divider space={16} />
    		<h6><strong>The Design Process - Sketching and Wireframing:</strong></h6>
				<Divider space={8} />
    		<ul className="h7">
    			<li>
			    	The design process typically falls within these phases:
			    	<ul>
			        <li><i><u>Sketches:</u></i> a collection of rough sketches, usually with pen/paper, the basis for ideation. Can be random and often inconsistent between different sketches, but the purpose is to explore a wide variety of possible ideas.</li>
			        <li><i><u>Low-Fidelity Wireframes:</u></i> a rough outline of what your product will appear like and function as, usually also with pen/paper. These kinds of wireframes are typically used to clarify how your product will work and are often used in user interviews to see if potential users can use your product as expected.</li>
			        <li><i><u>High-Fidelity Wifeframes:</u></i> a clean-up of low-fidelity wireframes, primarily focused on appearance and UI, usually digital.</li>
			    	</ul>
			    </li>
			    <li>
				    The advent of digital tools such as Figma, Canva, and Balsamiq has has made it easy to forego the initial steps of sketching and low-fidelity wireframing. However, there is a significant difference in how users interpret hand-drawn wireframes and digital wireframes:
			      <ul> 
			        <li>Users typically are MORE critical of hand-drawn wireframes and usually focus on functionality over appearances.</li>
			        <li>Users are typically LESS critical of digital wireframes and usually focus on appearances over functionality in their feedback.</li>
						</ul>
					</li>
					<li>
				    When testing your product with users via wireframes, use either low-fidelity or high-fidelity wireframes based on this pattern of user behavior.
			      <ul>
			        <li>If you are at a phase where you wish to observe how users interpret the potential functionality of your product, use low-fidelity, hand-drawn wireframes.</li>
			        <li>If you are at a phase where you wish to get feedback on the appearance and general UI of your product, use high-fidelity, digital wireframes.</li>
  					</ul>
  				</li>
        </ul>
        <Divider space={16} />
    		<h6><strong>Corporate Structure:</strong></h6>
				<Divider space={8} />
				<ul className="h7">
					<li>
				    Startups typically require large amounts of dedication from its founders and early employees. Ensure that all founders and employees:
			      <ul>
			        <li>are transparent about their expectations, goals, and future roadmaps concerning your company and/or product,</li>
			        <li>adhere to role delegations and keeping each other responsible by keeping note of core responsibilities and tasks delegated to them, and</li>
			        <li>stay on full-time (at least for your founder team), unless the situation demands that a founder or employee work part-time (this is why keeping each other responsible for each person's respective tasks is important).</li>
						</ul>
					</li>
					<li>
				    Maintain corporate structure by establishing key processes early on and following them in times of uncertainty.
			      <ul>
			        <li>It might be tempting to forego corporate structure if you wish to move fast (a necessity for startups), but do not fall into this temptation.</li>
			        <li>Using well-defined, comprehensive contracts and agreements is a must in this regard!</li>
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