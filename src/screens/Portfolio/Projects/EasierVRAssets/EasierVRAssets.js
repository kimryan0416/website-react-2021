import { Divider, ExtURL, Image } from "../../../../components";
import { thumbnail } from "./assets";

function EasierVRAssets() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Ongoing">Ongoing</p>)
		},
		{
			key: "External Links",
			value: (
				<ul>
					<li><ExtURL href="https://github.com/kimryan0416/EasierVRAssets/releases/tag/v2.0.0">Latest Release (v2.0.0)</ExtURL></li>
					<li><ExtURL href="https://github.com/kimryan0416/EasierVRAssets">Github Repo</ExtURL></li>
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
				</ul>
			)
		}
	]

	return (
		<div className="PortfolioContent">
			<div className="PortfolioContentHeader">
				<div className='PortfolioContentHeaderImage'>
					<Image src={thumbnail} width={150} height={150} alt="" round cName="PortfolioThumbnail" />
				</div>
				<div className='PortfolioContentHeaderMain'>
					<h3>Easier <span className="no-br">VR Assets</span></h3>
					<p><i>Custom scripts as an alternative to Oculus Implementation's OVR scripts.</i></p>
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
				<p>The Easier VR Assets is a side project aimed to replicate the functionality of Oculus's OVRGrabber and OVRGrabbable scripts, which are provided in The "Oculus Integration" package on Unity.</p>
				<Divider space={8} />
				<p>Created in response to the general user-unfriendly nature of the default Oculus Integration package, this package attempts to reduce time for prototyping by having pre-set settings and code to allow for grabbing, locomotion, and any other events attached to each button input on the Oculus Quest and Quest 2 controllers.</p>
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