import { Divider, ExtURL } from "../../../../components";
import { 
	thumbnail,
} from "./assets";

function UMichIntern() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Investigating reasons for miscommunication between college-level instructors and VR developers.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Ongoing">Ongoing</p>
				<Divider space={16} />
				<p>
					<ExtURL href="https://www.mi2lab.com/">Information Interaction Lab Website</ExtURL>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>Virtual Reality (VR)</li>
					<li>Extended Reality (XR)</li>
					<li>Human-Computer Interaction</li>
					<li>Online Collaboration</li>
					<li>Education</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>University of Michigan: Information Interaction Laboratory – Research Intern</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>I am currently participating as a research intern at the University of Michigan’s Information Interaction Laboratory, under the supervision of Professor Michael Nebeling.</p>
				<Divider space={8} />
				<p>Our current project is a research inquiry into the development of Virtual Reality Learning Environments, or VRLEs. Particularly, we are curious how both instructors (who have few to no experiences with VR) and VR developers understand the application of VR in learning environments.</p>
				<Divider space={8} />
				<p>The project is a collaborative effort with two other peer researchers alongside our supervisor, Professor Nebeling. The project's paper is slated to be submitted to conferences either later in 2021 or early in 2022.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Ongoing [June 2, 2021 – Present]</li>
					<li>
						<strong>Responsibilities:</strong>
						<ul>
							<li>Remotely collaborate with peer researchers from the Information Interaction Lab and the University of Michigan’s REMS program to investigate the development of VRLEs.</li>
							<li>Participate in weekly meetings with other research groups at the Information Interaction Laboratory to share progress and suggestions.</li>
						</ul>
					</li>
				</ul>
			</div>	
		</div>
	);
}

const UMichInternData = {
	umbrella:"University",
	key:"umich_intern",
	thumbnail:thumbnail,
	title:"University of Michigan: Information Interaction Laboratory – Research Intern",
	url:"umich_intern",
	content:<UMichIntern />
}

export default UMichInternData;