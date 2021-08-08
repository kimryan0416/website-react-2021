import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function MoL() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A report on the efficacy of memory retention in VR.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
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
				<h3>Method of Loci and Memory Recall in Virtual Reality - A User-Generated Exploration</h3>
				<Divider space={16} />
				<h4><strong>Abstract</strong></h4>
				<Divider space={8} />
				<p>This paper proposes the idea that 3D object creation can work as a potential method to helping users apply the Method of Loci (MoL) in Virtual Reality (VR). In order to explore this alternative, the paper also introduces a prototype application of a content creator tool that can allow users to instantiate objects within a VR environment easily. Through experimentation with participants in a VR environment, key design issues surrounding this prototype have been made apparent, and thus this paper elaborates on how this content creator tool can be improved for future works. This paper also offers suggestions on how to improve the experiment procedure utilized in this paper and describes key aspects about the MoL technique in VR that should not be ignored.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Status: Completed [May 10, 2020]</li>
					<li>Researcher: Ryan Kim - Lead researcher</li>
					<li>Advisor: Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
				</ul>
			</div>
		</div>
	);
}

const MoLData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"imol",
	thumbnail:thumbnail,
	title:"Method of Loci and Memory Recall in Virtual Reality - A User- Generated Exploration",
	url:"/portfolio/imol"
}

export {
	MoL,
	MoLData
}