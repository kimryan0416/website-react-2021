import { Divider, ExtURL, Image } from "../../../../components";
import { 
	thumbnail,
} from "./assets";

function UMichIntern() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Ongoing">Ongoing</p>)
		},
		{
			key: "Dates",
			value: (<p>June 2, 2021 – Present</p>)
		},
		{
			key: "External Links",
			value: (<ExtURL href="https://www.mi2lab.com/">Information Interaction Lab Website</ExtURL>)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>Virtual Reality (VR)</li>
					<li>Extended Reality (XR)</li>
					<li>Human-Computer Interaction</li>
					<li>Online Collaboration</li>
					<li>Education</li>
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
					<h3>University of Michigan: Information Interaction Laboratory – Research Intern</h3>
					<p><i>Investigating reasons for miscommunication between college-level instructors and VR developers.</i></p>
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
				<p>I am currently participating as a research intern at the University of Michigan’s Information Interaction Laboratory, under the supervision of Professor Michael Nebeling.</p>
				<Divider space={8} />
				<p>Our current project is a research inquiry into the development of Virtual Reality Learning Environments, or VRLEs. Particularly, we are curious how both instructors (who have few to no experiences with VR) and VR developers understand the application of VR in learning environments.</p>
				<Divider space={8} />
				<p>The project is a collaborative effort with two other peer researchers alongside our supervisor, Professor Nebeling. The project's paper is slated to be submitted to conferences either later in 2021 or early in 2022.</p>
				<Divider space={16} />
				<h4><strong>Responsibilities</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Remotely collaborate with peer researchers from the Information Interaction Lab and the University of Michigan’s REMS program to investigate the development of VRLEs.</li>
					<li>Participate in weekly meetings with other research groups at the Information Interaction Laboratory to share progress and suggestions.</li>
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