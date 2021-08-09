import { Divider } from "../../../../components";
import { thumbnail } from "./assets";

function ICHD() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Landing pages for two conferences hosted by SNU's Marine Hydrodynamics Lab.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href="https://mhl.snu.ac.kr/ichd2018/" target="_blank" rel="noopener noreferrer">ICHD 2018 Website</a>
					<br />
					<a href="https://mhl.snu.ac.kr/hyel2018/" target="_blank" rel="noopener noreferrer">HYEL 2018 Website</a>
				</p>
				<Divider space={16} />
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>MySQL</li>
					<li>PHP</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Websites</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>I was contracted to make a website for the 2018 International Conference on Hydrodynamics, which was being hosted by Seoul National University's (SNU's) Marine Hydrodynamics Laboratory (MHL).</p>
				<Divider space={8} />
				<p>The website allows for users who create accounts to upload documents into the website's main server and the managers of the conference to view these documents. This was necessary as the website was intended to allow the managers to view research papers and select individuals that they would invite to be speakers at this conference. The website gives users the chance to upload multiple documents at once and uses a database as a means of file management.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [June 2017 - Aug. 2017]</li>
					<li>
						<strong>Functionality:</strong>
						<ul>
							<li>
								<i><u>Users can:</u></i>
								<ul>
									<li>Create account with proper password encryption.</li>
									<li>Upload multiple files simultaneously, renaming them prior to upload if necessary.</li>
									<li>Delete unneeded files they themselves uploaded.</li>
									<li>(A password checking process operates to ensure files cannot be deleted by another party).</li>
								</ul>
							</li>
							<li>
								<i><u>Administrators can:</u></i>
								<ul>
									<li>Track all users with accounts on the website and download and/or modify their file uploads if necessary.</li>
									<li>Utilize a checklog that tracks the most recent uploads, deletions, and file renamings that have happened. (This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</li>
									<li>Retrieve replacement passwords for users who have lost and/or forgotten the passwords to their accounts</li>
									<li>(This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</li>
								</ul>
							</li>
						</ul>
					</li>
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