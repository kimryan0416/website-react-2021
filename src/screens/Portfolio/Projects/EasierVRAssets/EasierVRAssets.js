import { Divider } from "../../../../components";
import { thumbnail } from "./assets";

function EasierVRAssets() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Custom scripts as an alternative to Oculus Implementation's OVR scripts.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Ongoing">Ongoing</p>
				<Divider space={16} />
				<p>
					<a href="https://github.com/kimryan0416/EasierVRAssets" target="_blank" rel="noopener noreferrer">Github Repo</a>
				</p>
				<Divider space={16} />
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Easier <span className="no-br">VR Assets</span></h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>The Easier VR Assets is a side project aimed to replicate the functionality of Oculus's OVRGrabber and OVRGrabbable scripts, which are provided in The "Oculus Implementations" package on Unity.</p>
				<Divider space={8} />
				<p>Created due to general confusion and various bugs found within the Oculus Implementations package available on Unity's Asset Store, this side project adds custom grabber and grabbable scripts to help expedite prototyping in VR.</p>
				<Divider space={8} />
				<p>Currently, the package offers two functions to the user's toolkit:</p>
				<Divider space={8} />
				<ul>
					<li>Grabbing (Distance and within Hand Proximity)</li>
					<li>Locomotion via Teleportation</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><i><u>Status:</u></i> Regularly Updated</li>
					<li><i><u>Current Stable Version:</u></i> V1.2.0</li>
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

const EasierVRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easiervrassets",
	thumbnail:thumbnail,
	title:"Easier VR Assets",
	url:"easierVRAssets",
	content:<EasierVRAssets />
}


export default EasierVRAssetsData;