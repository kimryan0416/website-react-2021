import { Divider, ExtURL, Image } from "../../../../components";
import { serviceSearch, serviceSearchPoster } from "../../../../downloads";

import { thumbnail } from "./assets";

function ServiceSearch() {
	
	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>August 2017 – December 2017</p>)
		},
		{
			key: "External Links",
			value: (
				<ul>
					<li><ExtURL href={serviceSearch}>Report PDF (634 kB)</ExtURL></li>
					<li><ExtURL href={serviceSearchPoster}>ServiceSearch Poster</ExtURL></li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
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
					<h3>ServiceSearch: An Opportunity Searcher Just For You</h3>
					<p><i>A report on volunteering behavior amongst college students.</i></p>
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
				<p>A semester-long inspection of human-computer interaction design via the development of a prototype mobile application called “ServiceSearch”. Working in a team of 6, the design phase of our prototype’s development involved rigorous application of HCI-based theory such as the usage of personas to facilitate user research and testing and the usage of interview data to develop design solutions to problems.</p>
				<Divider space={8} />
				<p>Our initial analysis of alternate existing web applications and interview responses suggested that students in colleges, particularly at Cornell, were largely constrained by time, transportation, and exposure to opportunities due to learning about opportunities mostly via word of mouth. Furthermore, students felt best about volunteering when the opportunity revolved around a specific interest of theirs or put to use a skill of theirs that could discovered.</p>
				<Divider space={8} />				
				<p>This directed the design of our “ServiceSearch” app to focus primarily on not just creating a database for volunteer opportunities but also catering to the limitations of each user such as volunteer interests, transportation options, and time available.</p>
				<Divider space={16} />
				<h4><strong>Peer Researchers</strong></h4>
				<Divider space={8} />
				<ul>
    			<li><i><u>Kate Brind</u></i> - Cornell University [kbb55@cornell.edu]</li>
    			<li><i><u>Amanda Chen</u></i> - Cornell University [aec255@cornell.edu]</li>
    			<li><i><u>Kevin Kee</u></i> - Cornell University [kpk58@cornell.edu]</li>
    			<li><i><u>Yoo Hyeon Kim</u></i> - Cornell University [yk493@cornell.edu]</li>
    			<li><i><u>Amanda Xu</u></i> - Cornell University [ax22@cornell.edu]</li>
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