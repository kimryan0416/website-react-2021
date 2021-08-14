import { Divider, ExtURL } from "../../../../components";
import { 
	thumbnail,
} from "./assets";

function MIMO() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Creating lesson plans and content for MIMO’s “React Basics” module.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<ExtURL href="https://getmimo.com/playgrounds">MIMO Website</ExtURL>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>Online Teaching</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>MIMO - React.js Content Contractor &amp; Consultant</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>I was responsible for the planning, generation, and execution of lessons that taught newcomers to React.js about the library’s key concepts and how to navigate its component-based infrastructure. These lessons are integrated into MIMO’s “React Basics” module, split across eight “Skills” that each represent major aspects of React.js such as state and Functional Components.</p>
				<Divider space={8} />
				<p>Content for each Skill consists of lessons. Each lesson consists of a description and executable code that students had to complete in order to move to the next lesson. As the lesson planner, I was allowed to decide not just what the content was but also how they would build off of one another sequentially across the eight Skills.</p>
				<Divider space={8} />
				<p>Since “React Basics” was meant for newcomers to React.js, I had to consider how to convey the lesson content in a manner that was easy to understand. The planning phase of the development process took the largest amount of time, whereas the implementation of lesson content into MIMO’s infrastructure took less time as a result of careful planning and adherence to MIMO’s content guidelines.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [May 17, 2021 – August 10, 2021]</li>
					<li>
						<strong>Responsibilities:</strong>
						<ul>
							<li>Formulate lesson plans, split across eight Skills, to help newcomers to React.js get acquainted with the library’s core concepts.</li>
							<li>Collaborate with MIMO supervisors to ensure that each lesson adhered to MIMO’s content guidelines.</li>
							<li>Implement lesson content into MIMO’s infrastructure using their proprietary Course Builder tool.</li>
							<li>Plan, develop, and integrate Projects that encapsulated the learning content from the eight Skills and gave example of how to use React.js to create web applications.</li>
						</ul>
					</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Project Code</strong></h4>
				<Divider space={8} />
				<div className="PortfolioContentColumns">
					<div className="PortfolioContentColumn">
 						<p>Presented here is a public version of the code used inside of the "React Basics" Projects. Students are required to modify each using the concepts taught in the module's Skills. The code samples to the right are the completed versions of each Project.</p>
					</div>
					<div className="ShowInMobile"><Divider space={16} /></div>
					<div className="PortfolioContentColumn">
						<iframe src="https://kimryan0416.github.io/mimo-projects/" height={460} width={256} />	
					</div>
				</div>
			</div>	
		</div>
	);
}

const MIMOData = {
	umbrella:"Startups",
	key:"mimo",
	thumbnail:thumbnail,
	title:"MIMO - React.js Content Contractor/Consultant",
	url:"mimo",
	content:<MIMO />
}

export default MIMOData;