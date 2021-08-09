import { Divider } from "../../../../components";
import { thumbnail } from "./assets";

function Toste() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A browser extension capable of summarizing Terms of Service.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href="https://github.com/ct-studio-buildboard/F19-T022" target="_blank" rel="noopener noreferrer">Downloadable Build &amp; Files</a>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>JavaScript</li>
					<li>Python</li>
					<li>Natural Language Processing</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Terms of Service Text Evaluator (ToSTE)</h3>
				<Divider space={16} />
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
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [December, 2019]</li>
					<li><strong>Current Stable Version:</strong> 1.0 (FIREFOX ONLY)</li>
					<li>
						<strong>Functionality:</strong>
						<ul>
							<li>Parse through legal documents such as Terms of Service and return a summarized version of the document.</li>
    						<li>Uses Extractive Summarization to pick sentences that are most important in each section of a legal document.</li>
    						<li>Works as a browser extension on FIREFOX ONLY, with a Python back-end server that communicates with the web extension.</li>
						</ul>
					</li>
					<li>
						<strong>Peer Researchers:</strong>
						<ul>
							<li><i><u>Emilie Burton</u></i> - Cornell Tech @ Cornell University [eb736@cornell.edu]</li>
							<li><i><u>Arief Hutahaean</u></i> - Cornell Tech @ Cornell University [arh272@cornell.edu]</li>
							<li><i><u>Jerry Tsou</u></i> - Cornell Tech @ Cornell University [ct558@cornell.edu]</li>
						</ul>
					</li>
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