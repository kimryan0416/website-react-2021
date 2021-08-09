import { Link } from "react-router-dom";

import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function EasierXRAssets() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Premade template scripts for Unity developers to easily make VR experiences.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus OnHold">On-Hold</p>
				<Divider space={16} />
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Easier <span className="no-br">XR Assets</span></h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>The Easier XR Assets is an offshoot of the <Link to="/portfolio/easierVRAssets">EasierVRAssets</Link> project that is planned to work with Unity's XR Rig system.</p>
				<Divider space={8} />
				<p><i>This project has been put on-hold until later notice.</i></p>
			</div>
		</div>
	);
}

const EasierXRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easierxrassets",
	thumbnail:thumbnail,
	title:"Easier XR Assets",
	url:"easierXRAssets",
	content:<EasierXRAssets />
}


export default EasierXRAssetsData;