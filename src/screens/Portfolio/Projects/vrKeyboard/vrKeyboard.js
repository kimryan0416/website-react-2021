import { 
	Divider, 
	Button,
	ExtURL,
	Image,
} from "../../../../components";
import { vrkeyboard } from "../../../../downloads";
import { 
	thumbnail,
	v0_1,
	v0_2,
	v0_3,
	v1_0,
	v1_1,
	v1_2,
	report,
} from "./assets";

function VRKeyboard() {

	const headerTable = [
		{
			key: "Status",	////
			value: (<p className="PortfolioStatus Completed">Completed</p>)
		},
		{
			key: "Dates",
			value: (<p>Completed: May 10, 2020</p>)
		},
		{
			key: "Stable Version",
			value: (<p>1.2</p>)
		},
		{
			key: "External Links",	/////
			value: (
				<ul>
					<li><ExtURL href={vrkeyboard}>Download PDF (2.2 mB)</ExtURL></li>
					<li><ExtURL href="https://sites.google.com/cornell.edu/cs5678-2020sp-projects/home/vrkeyboard?authuser=0">Project Page</ExtURL></li>
					<li><ExtURL href="https://youtu.be/AKYRDivoi2c">Ver. 1.0 Demonstration</ExtURL></li>
					<li><ExtURL href="https://youtu.be/IYpnoIrZA6c">Ver. 1.1 Demonstration</ExtURL></li>
				</ul>
			)
		},
		{
			key: "Skills & Topics",	////
			value: (
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
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
					<h3>A Survey and Implementation of Fast-Input Typing Methods in <span className="no-br">Virtual Reality</span></h3>
					<p><i>An input interface realized for easy use in virtual reality. The interface is a joystick-based control scheme where characters are selected via joystick orientation and characters are typed by using a mechanism similar to that of 9-pin cell phone keyboards.</i></p>
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
				<div className='PortfolioMainBlock'>
					<div className='PortfolioBlockText'>
						<p>The Virtual Keyboard is a project aimed to provide users of the Oculus Quest with a fast keyboard input channel.</p>
						<Divider space={8} />
						<p>One fascinating aspect about Virtual Reality is the lack of any realized method to input text within a reasonably quick time frame. While virtual keyboards currently exist such as Microsoft's HMDisplay-based VR Keyboard and Normal.'s Open-Source Keyboard, many of these available options are either highly experimental or offer experiences that are not intuitive in their nature. This project aims to create a drag-and-drop keyboard within Unity that is both intuitive to use for most users, reduces cognitive overload on the user, and allows for accurate text input.</p>
					</div>
					<div className='PortfolioBlockImageWrapper Right'>
						<img className="PortfolioContentImage" src={report} alt="Report Preview" />
					</div>
				</div>
				<Divider space={8} />
				<p>The project has come to a close as of May 2020, but the current iteration of the keyboard has the potentail to be expanded into other Virtual Reality applications developed at Cornell Tech. Other planned applications of this project include:</p>
				<Divider space={8} />
				<ul>
					<li>Research into delimiters between hard and soft input methods in Mixed Reality.</li>
					<li>Custom Debug Console within Virtual Reality for easy debugging and system control.</li>
					<li>Drag-and-drop prefab availability amongst Cornell Tech's Mixed Reality Collaboratory group.</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Peer Researchers</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Katie Donahoe - Cornell Tech @ Cornell University [kd459@cornell.edu]</li>
					<li>Prithvi Sriram - Cornell Tech @ Cornell University [ps976@cornell.edu]</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Advisor</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Functionality</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Character Selection via Joystick orientation; a 2nd inner layer toggable by index trigger hold on the controller holding the keyboard.</li>
					<li>Character Input and Delete via button press on controller not holding the keyboard.</li>
					<li>Holding the Input and Delete buttons acts similarly to holding a key on a normal keyboard.</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Equipment</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Oculus Quest</li>
					<li>Unity</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Abstract</strong></h4>
				<Divider space={8} />
				<p><i>This segment has been copied from the original report. Download the full report here:</i></p>
				<Divider space={8} />
				<ExtURL href={vrkeyboard}><Button>Download PDF (2.2 mB)</Button></ExtURL>
				<Divider space={16} />
				<hr />
				<Divider space={16} />
				<p className="h7">This work demonstrates VRKeyboard - a joystick and button-based text input method in Virtual Reality that resembles the semantic appearance and functionality of older T9 phone keyboards. This work also presents a modified version, Cheat VRKeyboard, which attempts to further improve the user experience by adding a short- cut “cheat” layer. These come from a collective goal to design a VR-oriented keyboard that is intuitive in nature and is functionally adequate for VR users’ general needs. Through experimentation with users, VRKeyboard’s two designs were evaluated both qualita- tively and quantitatively to observe if they align with user expecta- tions of functionality while maintaining a consistent performance across multiple users. Key results indicated that on average, users typed 8.49 WPM for the VRKeyboard, and 5.44 WPM for the VR “Cheat” keyboard, with experienced users typing 13.3 WPM for the VRKeyboard. Users made fewer errors with the VR Cheat keyboard, however felt it was more physically and mentally demanding than VRKeyboard.</p>
				<Divider space={16} />
				<Divider space={64} cName="HideInMobile" />
				<div className="PortfolioMainImageGallery HideInMobile">
					<img className="PortfolioContentImage" src={v0_1} alt="Ver. 0.1" />
					<img className="PortfolioContentImage" src={v0_2} alt="Ver. 0.2" />
					<img className="PortfolioContentImage" src={v0_3} alt="Ver. 0.3" />
					<img className="PortfolioContentImage" src={v1_0} alt="Ver. 1.0" />
					<img className="PortfolioContentImage" src={v1_1} alt="Ver. 1.1" />
					<img className="PortfolioContentImage" src={v1_2} alt="Ver. 1.2" />
				</div>
			</div>
		</div>
	);
}

const VRKeyboardData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"vrkeyboard",
	thumbnail:thumbnail,
	title:"A Survey and Implementation of Fast-Input Typing Methods in Virtual Reality",
	url:"vrKeyboard",
	content:<VRKeyboard />
}

export default VRKeyboardData;