import { Divider } from "../../../../components";
import { serviceSearch, serviceSearchPoster } from "../../../../downloads";

import { thumbnail } from "./assets";

function ServiceSearch() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A report on volunteering behavior amongst college students.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href={serviceSearch} target="_blank" rel="noopener noreferrer">Report PDF (634 kB)</a>
					<br />
					<a href={serviceSearchPoster} target="_blank" rel="noopener noreferrer">ServiceSearch Poster</a>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>ServiceSearch: An Opportunity Searcher Just For You</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>A semester-long inspection of human-computer interaction design via the development of a prototype mobile application called “ServiceSearch”. Working in a team of 6, the design phase of our prototype’s development involved rigorous application of HCI-based theory such as the usage of personas to facilitate user research and testing and the usage of interview data to develop design solutions to problems.</p>
				<Divider space={8} />
				<p>Our initial analysis of alternate existing web applications and interview responses suggested that students in colleges, particularly at Cornell, were largely constrained by time, transportation, and exposure to opportunities due to learning about opportunities mostly via word of mouth. Furthermore, students felt best about volunteering when the opportunity revolved around a specific interest of theirs or put to use a skill of theirs that could discovered.</p>
				<Divider space={8} />				
				<p>This directed the design of our “ServiceSearch” app to focus primarily on not just creating a database for volunteer opportunities but also catering to the limitations of each user such as volunteer interests, transportation options, and time available.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [Aug. 2017 – Dec. 2017]</li>
					<li>
						<strong>Peer Researchers</strong>
						<ul>
    						<li><i><u>Kate Brind</u></i> - Cornell University [kbb55@cornell.edu]</li>
    						<li><i><u>Amanda Chen</u></i> - Cornell University [aec255@cornell.edu]</li>
    						<li><i><u>Kevin Kee</u></i> - Cornell University [kpk58@cornell.edu]</li>
    						<li><i><u>Yoo Hyeon Kim</u></i> - Cornell University [yk493@cornell.edu]</li>
    						<li><i><u>Amanda Xu</u></i> - Cornell University [ax22@cornell.edu]</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const ServiceSearchData = {
	umbrella:"Research",
	key:"servicesearch",
	thumbnail:thumbnail,
	title:"ServiceSearch: An Opportunity Searcher Just For You",
	url:"servicesearch",
	content:<ServiceSearch />
}

export default ServiceSearchData;