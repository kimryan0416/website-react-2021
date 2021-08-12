import { Divider, ExtURL } from "../../../../components";
import { livestreams } from "../../../../downloads";

import { thumbnail } from "./assets";

function Livestreams() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A report about why live stream viewers interact with live streamers.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<ExtURL href={livestreams}>Report PDF (229 kB)</ExtURL>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>Computer-Mediated Communication</li>
					<li>Live Streaming</li>
					<li>User Experience (UX) Design</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Investigating the Motivation Behind Live Stream Participants Who Post Comments During Live Streams</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>A semester-long research endeavor to investigate changes in levels of viewer participation on live streams, with particular consideration to new features and behaviors particular to live streams; such new features include the ability of live streamers to see user reactions in real time, the ability to pay extra capital to make user messages more apparent, and the ability of viewers to network with each other in real time.</p>
				<Divider space={8} />
				<p>Our initial hypotheses include:</p>
				<Divider space={8} />
				<ol>
					<li>Participants post comments because they feel as if they are part of a greater community.</li>
    				<li>Participants feel like they have become one of the contributors.</li>
    				<li>Participants want to achieve a level of self-satisfaction.</li>
				</ol>
				<Divider space={8} />				
				<p>Our findings indicated that our first and third hypotheses were partially supported due to interviewees from our test sample stating they only participated if there was a certain level of intimacy involved between the themselves and the live streamer, or if there was some knowledge to be gained by interacting with the live streamer and other viewers. Hypothesis #2 was not supported because a desire to become a contributor does not lead to greater interaction in all situations and contexts.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [Jan. 2018 – May 2018]</li>
					<li>
						<strong>Peer Researchers</strong>
						<ul>
    						<li><i><u>Emily Chen</u></i> - Dept. of Information Science, Cornell University [ec745@cornell.edu]</li>
    						<li><i><u>Frederick Kennedy</u></i> - Dept. of Information Science, Cornell University [fak34@cornell.edu]</li>
    						<li><i><u>Sangmin Kim</u></i> - Dept. of Information Science, Cornell University [sk858@cornell.edu]</li>
    						<li><i><u>Daye Shin</u></i> - Dept. of Information Science, Cornell University [ds952@cornell.edu]</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const LivestreamsData = {
	umbrella:"Research",
	key:"livestreams",
	thumbnail:thumbnail,
	title:"Investigating the Motivation Behind Live Stream Participants Who Post Comments During Live Streams",
	url:"livestreams",
	content:<Livestreams />
}

export default LivestreamsData;