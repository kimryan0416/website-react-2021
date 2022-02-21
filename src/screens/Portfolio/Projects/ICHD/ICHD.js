import { Divider, ExtURL, Image } from "../../../../components";
import { thumbnail } from "./assets";

function ICHD() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>June 2017 - August 2017</p>)
		},
		{
			key: "External Links",
			value: (
				<ul>
					<li><ExtURL href="https://mhl.snu.ac.kr/ichd2018/">ICHD 2018 Website</ExtURL></li>
					<li><ExtURL href="https://mhl.snu.ac.kr/hyel2018/">HYEL 2018 Website</ExtURL></li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>MySQL</li>
					<li>PHP</li>
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
					<h3>Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Website Developer</h3>
					<p><i>Landing pages for two conferences hosted by SNU's Marine Hydrodynamics Lab.</i></p>
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
				<p>I was contracted to make a website for the 2018 International Conference on Hydrodynamics, which was being hosted by Seoul National University's (SNU's) Marine Hydrodynamics Laboratory (MHL).</p>
				<Divider space={8} />
				<p>The website allows for users who create accounts to upload documents into the website's main server and the managers of the conference to view these documents. This was necessary as the website was intended to allow the managers to view research papers and select individuals that they would invite to be speakers at this conference. The website gives users the chance to upload multiple documents at once and uses a database as a means of file management.</p>
				<Divider space={16} />
				<h4><strong>Functionality</strong></h4>
				<Divider space={8} />
				<p><u>Users can:</u></p>
				<Divider space={8} />
				<ul>
					<li>Create account with proper password encryption.</li>
					<li>Upload multiple files simultaneously, renaming them prior to upload if necessary.</li>
					<li>Delete unneeded files they themselves uploaded.</li>
					<li>(A password checking process operates to ensure files cannot be deleted by another party).</li>
				</ul>
				<Divider space={16} />
				<p><u>Administrators can:</u></p>
				<Divider space={8} />
				<ul>
					<li>Track all users with accounts on the website and download and/or modify their file uploads if necessary.</li>
					<li>Utilize a checklog that tracks the most recent uploads, deletions, and file renamings that have happened. (This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</li>
					<li>Retrieve replacement passwords for users who have lost and/or forgotten the passwords to their accounts</li>
					<li>(This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</li>
				</ul>
			</div>
		</div>
	);
}

const ICHDData = {
	umbrella:"Contract Work",
	key:"ichd",
	thumbnail:thumbnail,
	title:"Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Websites",
	url:"ichd",
	content:<ICHD />
}

export default ICHDData;