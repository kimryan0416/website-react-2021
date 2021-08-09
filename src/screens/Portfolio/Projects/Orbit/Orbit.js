import { Divider } from "../../../../components";
import { thumbnail } from "./assets";

function Orbit() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>An audio-logging journey in Virtual Reality.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href="https://github.com/kimryan0416/Orbit-PublicVer" target="_blank" rel="noopener noreferrer">Downloadable Build &amp; Files</a>
					<br />
					<a href="https://sites.google.com/cornell.edu/cs5650-projects-2019/projects/orbit?authuser=0" target="_blank" rel="noopener noreferrer">Project Page</a>
				</p>
				<Divider space={16} />
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
					<li>Virtual Reality</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Orbit: Your VR Space For Mindfulness</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>Orbit is a semester-long Virtual Reality project aimed to provide users a safe space for immersive audio journaling and memory recording. To encourage this, our UI design is inspired by the vast night sky full of stars; users will create "orbs" of audio that mimic stars and create their very own beautiful galaxy of thoughts.</p>
				<Divider space={8} />
				<p>My role in this project was predominantly as a Software Lead. I was responsible for both designing and implementing the User Interface and back-end infrastructure for the VR application. Much of my work involves not just writing scripts but optimizing and refactoring code from my peers to maintain Orbit's performance on the Oculus Quest and remove potential bugs in our system. This project has laid the foundations for future projects such as the Grip Prefabs and the Virtual Keyboard.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><i><u>Status:</u></i> Completed [December 19, 2019]</li>
					<li><i><u>Current Stable Version:</u></i> Vertical Slice</li>
					<li>
						<i><u>Peer Contributors:</u></i>
						<ul>
							<li>Vini Tripathii- Cornell Tech @ Cornell University [ut33@cornell.edu]</li>
							<li>Daniel Asper - Cornell Tech @ Cornell University [da494@cornell.edu]</li>
						</ul>
					</li>
					<li><i><u>Advisors:</u></i> Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
					<li>
						<i><u>Equipment:</u></i>
						<ul>
							<li>Oculus Quest</li>
							<li>Unity</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const OrbitData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"orbit",
	thumbnail:thumbnail,
	title:"Orbit: Your VR Space For Mindfulness",
	url:"orbit",
	content:<Orbit />
}

export default OrbitData;