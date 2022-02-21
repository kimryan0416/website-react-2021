import { Divider, ExtURL, Image } from "../../../../components";
import { thumbnail } from "./assets";

function Orbit() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>Ended: December 19, 2019</p>)
		},
		{
			key: "External Links",
			value: (
				<ul>
					<li><ExtURL href="https://github.com/kimryan0416/Orbit-PublicVer">Downloadable Build &amp; Files</ExtURL></li>
					<li><ExtURL href="https://sites.google.com/cornell.edu/cs5650-projects-2019/projects/orbit?authuser=0">Project Page</ExtURL></li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
					<li>Virtual Reality</li>
				</ul>
			)
		},	
	]

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={thumbnail} alt="" width={150} height={150} round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>Orbit: Your VR Space For Mindfulness</h3>
					<p><i>An audio-logging journey in Virtual Reality.</i></p>
					<Divider space={16} />
					<div className='PortfolioContentHeaderMainTable'>
						{headerTable.map((row,i)=>{
							return (
								<div key={`PortfolioHeaderTableRow-${i}`} className='PortfolioContentHeaderMainTableRow'>
									<div className='PortfolioContentHeaderMainTableRowKey'>
										<p><strong>{row.key}:</strong></p>
									</div>
									<div className='PortfolioContentHeaderMainTableRowValue'>
										{row.value}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<Divider space={24} />
			<div className="PortfolioMain">
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>Orbit is a semester-long Virtual Reality project aimed to provide users a safe space for immersive audio journaling and memory recording. To encourage this, our UI design is inspired by the vast night sky full of stars; users will create "orbs" of audio that mimic stars and create their very own beautiful galaxy of thoughts.</p>
				<Divider space={8} />
				<p>My role in this project was predominantly as a Software Lead. I was responsible for both designing and implementing the User Interface and back-end infrastructure for the VR application. Much of my work involves not just writing scripts but optimizing and refactoring code from my peers to maintain Orbit's performance on the Oculus Quest and remove potential bugs in our system. This project has laid the foundations for future projects such as the Grip Prefabs and the Virtual Keyboard.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<h6><i><u>Current Stable Version:</u></i></h6>
				<Divider space={8} />
				<ul>
					<li>Vertical Slice</li>
				</ul>
				<Divider space={16} />
				<h6><i><u>Peer Contributors</u></i></h6>
				<Divider space={8} />
				<ul>
					<li>Vini Tripathii- Cornell Tech @ Cornell University [ut33@cornell.edu]</li>
					<li>Daniel Asper - Cornell Tech @ Cornell University [da494@cornell.edu]</li>
				</ul>
				<Divider space={16} />
				<h6><i><u>Advisors</u></i></h6>
				<Divider space={8} />
				<ul>
					<li>Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
				</ul>
				<Divider space={16} />
				<h6><i><u>Equipment</u></i></h6>
				<Divider space={8} />
				<ul>
					<li>Oculus Quest</li>
					<li>Unity</li>
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