import { Divider, ExtURL, Image } from "../../../../components";
import { pentatonic } from "../../../../downloads";

import { thumbnail } from "./assets";

function Pentatonic() {

	const headerTable = [
		{
			key: "Status",
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>September 2017 - December 2017</p>)
		},
		{
			key: "Stable Version",
			value: (<p>1.0 (FIREFOX ONLY)</p>)
		},
		{
			key: "External Links",
			value: (
				<ul>
					<li><ExtURL href={pentatonic}>Report PDF (1.4 mB)</ExtURL></li>
					<li><ExtURL href="https://youtu.be/X9uepFLdJ9k">Video Demonstration</ExtURL></li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",
			value: (
				<ul>
					<li>Arduino</li>
					<li>C/C++</li>
					<li>Teensy</li>
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
					<h3>Pentatonic Tone Sequencer</h3>
					<p><i>Teaching young children about music scales.</i></p>
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
				<p>A collaborative project during Cornell University's INFO 4320 Intro to Rapid Prototyping course, the Pentatonic Tone Sequencer allows users to create harmonic sequences of music by pressing on the button pad on top of the device.</p>
				<Divider space={8} />
				<p>The device utilizes a 8 x 16 button grid with the X-axis representing the beat (from left to right) and the Y-axis representing a tone in a pentatonic harmonic scale. Users press on a button to activate it, and all notes that are activated in the same column (x-value) will output their associated y-value-based notes together, and the system will loop through and around the X-axis.</p>
				<Divider space={8} />
				<p>My main role in the group was as our team's lead programmer and wiring specialist. I was responsible for writing the main code that operated the button pads, audio output, and volume control. As such, I was also responsible for ensuring that the schematics of our sequencer were correctly wired such that voltages were controlled properly and signals from both the Teensy 5 chip and the Teensy Audio Shield we had used were sent to their proper peripherals. </p>
				<Divider space={16} />
				<h4><strong>Main Materials</strong></h4>
				<Divider space={8} />
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
				<Divider space={16} />
				<h4><strong>Teammates</strong></h4>
				<ul>
					<li><i><u>Annie Zhang</u></i> - Cornell University [zz229@cornell.edu]</li>
					<li><i><u>Boris Chan</u></i> - Cornell University [bkc38@cornell.edu]</li>
					<li><i><u>Cindy Wang</u></i> - Cornell University [cw653@cornell.edu]</li>
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