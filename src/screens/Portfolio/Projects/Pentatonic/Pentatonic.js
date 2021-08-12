import { Divider, ExtURL } from "../../../../components";
import { pentatonic } from "../../../../downloads";

import { thumbnail } from "./assets";

function Pentatonic() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>Teaching young children about music scales.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<ExtURL href={pentatonic}>Report PDF (1.4 mB)</ExtURL>
					<br />
					<ExtURL href="https://youtu.be/X9uepFLdJ9k">Video Demonstration</ExtURL>
				</p>
				<Divider space={16} />
				<ul className="HideInMobile">
					<li>Arduino</li>
					<li>C/C++</li>
					<li>Teensy</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Pentatonic Tone Sequencer</h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>A collaborative project during Cornell University's INFO 4320 Intro to Rapid Prototyping course, the Pentatonic Tone Sequencer allows users to create harmonic sequences of music by pressing on the button pad on top of the device.</p>
				<Divider space={8} />
				<p>The device utilizes a 8 x 16 button grid with the X-axis representing the beat (from left to right) and the Y-axis representing a tone in a pentatonic harmonic scale. Users press on a button to activate it, and all notes that are activated in the same column (x-value) will output their associated y-value-based notes together, and the system will loop through and around the X-axis.</p>
				<Divider space={8} />
				<p>My main role in the group was as our team's lead programmer and wiring specialist. I was responsible for writing the main code that operated the button pads, audio output, and volume control. As such, I was also responsible for ensuring that the schematics of our sequencer were correctly wired such that voltages were controlled properly and signals from both the Teensy 5 chip and the Teensy Audio Shield we had used were sent to their proper peripherals. </p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><strong>Status:</strong> Completed [Sep. 2017 - Dec. 2017]</li>
					<li><strong>Current Stable Version:</strong> 1.0 (FIREFOX ONLY)</li>
					<li>
						<strong>Main Materials:</strong>
						<ul>
							<li>Adafruit 4x4 Button Pad (buttons)</li>
    						<li>Wood (frame)</li>
    						<li>Acrylic Sheet (frame)</li>
    						<li>3mm colored LED bulbs</li>
    						<li>Teensy 5</li>
    						<li>Teensy Audio Shield</li>
    						<li>Speaker</li>
    						<li>Power Bank (power supply)</li>
    						<li>Potentiometer (volume control)</li>
						</ul>
					</li>
					<li>
						<strong>Teammates:</strong>
						<ul>
							<li><i><u>Annie Zhang</u></i> - Cornell University [zz229@cornell.edu]</li>
							<li><i><u>Boris Chan</u></i> - Cornell University [bkc38@cornell.edu]</li>
							<li><i><u>Cindy Wang</u></i> - Cornell University [cw653@cornell.edu]</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

const PentatonicData = {
	umbrella:"Hardware",
	key:"pentatonic",
	thumbnail:thumbnail,
	title:"Pentatonic Tone Sequencer",
	url:"pentatonic",
	content:<Pentatonic />
}

export default PentatonicData;