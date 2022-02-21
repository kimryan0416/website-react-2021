import { Divider, ExtURL, Image } from "../../../../components";
import { thumbnail } from "./assets";

function Toste() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>Completed: December, 2019</p>)
		},
		{
			key:"Stable Version",
			value:(<p>1.0 (FIREFOX ONLY)</p>)
		},
		{
			key: "External Links",
			value: (<ExtURL href="https://github.com/ct-studio-buildboard/F19-T022">Downloadable Build &amp; Files</ExtURL>)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>JavaScript</li>
					<li>Python</li>
					<li>Natural Language Processing</li>
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
					<h3>Terms of Service Text Evaluator (ToSTE)</h3>
					<p><i>A browser extension capable of summarizing Terms of Service.</i></p>
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
				<p>The Terms of Service Text Evaluator, or "ToSTE" for short, is a browser extension intended to help people protect their data and personal information by summarizing Terms of Service documents. ToSTE answers the following question:</p>
				<Divider space={8} />
				<p><i>"How might we allow people to have positive digital interactions while feeling safe and empowered?".</i></p>
				<Divider space={8} />
				<p>Feeling safe in the digital world has a lot to do with the concept of privacy - it is about your data. Understanding your privacy gives YOU the power to make decisions on it. In the digital world, information about privacy is set out in Terms of Services, or ToS for short. This document contains how a company collects your data, use it, and share it. Unfortunately, ToS's generally are long and full of legal jargon. So, few people read it.</p>
				<Divider space={8} />
				<p>This raises a problem: on the one hand, people care about privacy, but on the other, they don't read documents that govern it. How do we solve that problem? Our solution is ToSTE: the "Terms of Service Text Evaluator" - A web extension that reads ToS on websites analyzes the complicated privacy clauses using machine learning, summarizes the clauses, and presents them in simpler language to users. With simpler ToS, users can understand ToS in a short amount of time and can make educated decisions on their data. We believe knowledge is power. ToSTE makes Terms of Service accessible so that one can understand their rights and privacy.</p>
				<Divider space={16} />
				<h4><strong>Functionality</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Parse through legal documents such as Terms of Service and return a summarized version of the document.</li>
    			<li>Uses Extractive Summarization to pick sentences that are most important in each section of a legal document.</li>
					<li>Works as a browser extension on FIREFOX ONLY, with a Python back-end server that communicates with the web extension.</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Peer Researchers</strong></h4>
				<Divider space={8} />
				<ul>
					<li><i><u>Emilie Burton</u></i> - Cornell Tech @ Cornell University [eb736@cornell.edu]</li>
					<li><i><u>Arief Hutahaean</u></i> - Cornell Tech @ Cornell University [arh272@cornell.edu]</li>
					<li><i><u>Jerry Tsou</u></i> - Cornell Tech @ Cornell University [ct558@cornell.edu]</li>
				</ul>
			</div>
		</div>
	);
}

const TosteData = {
	umbrella:"Web Projects",
	key:"toste",
	thumbnail:thumbnail,
	title:"Terms of Service Text Evaluator (ToSTE)",
	url:"toste",
	content:<Toste />
}

export default TosteData;