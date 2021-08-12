import { Divider, ExtURL} from "../../../../components";
import { thumbnail, ffmp } from "./assets";

function SMP() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A browser-based media player for personal use.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus OnHold">On-Hold</p>
				<Divider space={16} />
				<p>
					<ExtURL href="https://github.com/kimryan0416/simpleMusicPlayer">Downloadable Build &amp; Files</ExtURL>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>PHP</li>
					<li>SQLite</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Simple Music Player (SMP)</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>The Simple Music Player, or "SMP" for short, is a fully functional HTML/JavaScript/PHP music player that utilizes a mixture of XML requests and SQLite queries to allow users to play audio and video from their browser. With the help of a SQLite database to store metadata information on each piece of media contained within the music player, data is can be easily accessed without altering the original metadata of all media files.</p>
				<Divider space={8} />
				<p>This project has given the opportunity to investigate how file uploads are processed both through AJAX and XMLHttpRequests(), as well as how JavaScript can be manipulated into playing audio and video. Investigations into how to mimic inheritance within JavaScript have also been permitted based on how the SMP had been designed.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> On-Hold</li>
					<li><strong>Current Stable Version:</strong> 1.0.1</li>
					<li>
						<strong>Functionality:</strong>
						<ul>
							<li>Play audio (mp3) and video (mp4, YouTube embed) media</li>
    						<li>Adjust looping and shuffling of albums</li>
    						<li>Autoscrolling lyrics</li>
    						<li>Media Info Editing, including album art and adding dynamic lyrics</li>
    						<li>Mobile Version in the works</li>
						</ul>
					</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Features</strong></h4>
				<Divider space={8} />
				<p>The SMP can play audio files, video files, and embedded YouTube videos and allows for dynamic subtitles if the user should want so. Additionally, users can add or delete media from the SMP as well, and with the use of a PHP library called the getID3, metadata can be extracted from media files and stored within the aforementioned database, saving users the effort from inputting all the metadata on their own. Should the need arise, users can also edit details of a piece of media, including uploading specific artwork for that media or use an already-existing artwork already added to the database by other media with artwork.</p>
				<Divider space={16} />
				<h4><strong>Deprecated Prototype: The Full-Function Music Player (FFMP)</strong></h4>
				<Divider space={8} />
				<p>
					<img className="PortfolioContentImage Right" src={ffmp} alt="Full-Function Music Player Screenshot" />
					The Full-Function Music Player, or "FFMP", was the basis for the creation of the SMP, which retains much of the same framework as the FFMP with optimized code and additional improvements.
				</p>
				<Divider space={8} />
				<p>The FFMP originally aimed to replicate the functionality of other public music players such as iTunes and Spotify. Users are given the ability to upload individual song files and categorical tags prior to upload (i.e. song title, artist, album artist). Songs can be divided between "Songs", "Artists", "Albums", and "Album Artists" ("Playlists" are not available in this version), which allows for organizing audio based on user preference.</p>
			</div>
		</div>
	);
}

const SMPData = {
	umbrella:"Web Projects",
	key:"smp",
	thumbnail:thumbnail,
	title:"Simple Music Player (SMP)",
	url:"smp",
	content:<SMP />
}

export default SMPData;