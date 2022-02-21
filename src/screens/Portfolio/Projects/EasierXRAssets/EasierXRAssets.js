import { Link } from "react-router-dom";

import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function EasierXRAssets() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus OnHold">On-Hold</p>)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
				</ul>
			)
		}
	]

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={thumbnail} alt="" width={150} height={150} round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>Easier <span className="no-br">XR Assets</span></h3>
					<p><i>Premade template scripts for Unity developers to easily make VR experiences.</i></p>
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
				<p>The Easier XR Assets is an offshoot of the <Link to="/portfolio/projects/easierVRAssets">EasierVRAssets</Link> project that is planned to work with Unity's XR Rig system.</p>
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