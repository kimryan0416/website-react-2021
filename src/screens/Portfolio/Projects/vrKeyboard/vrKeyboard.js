import { Divider, Image } from "../../../../components";
import { thumbnail } from "./assets";

function VRKeyboard() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>An input interface realized for easy use in virtual reality. The interface is a joystick-based control scheme where characters are selected via joystick orientation and characters are typed by using a mechanism similar to that of 9-pin cell phone keyboards.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>A Survey and Implementation of Fast-Input Typing Methods in <span className="no-br">Virtual Reality</span></h3>
				<Divider space={16} />
				<h4><strong>Description</strong></h4>
				<Divider space={8} />
				<p>The Virtual Keyboard is a project aimed to provide users of the Oculus Quest with a fast keyboard input channel.</p>
				<Divider space={8} />
				<p>One fascinating aspect about Virtual Reality is the lack of any realized method to input text within a reasonably quick time frame. While virtual keyboards currently exist such as Microsoft's HMDisplay-based VR Keyboard and Normal.'s Open-Source Keyboard, many of these available options are either highly experimental or offer experiences that are not intuitive in their nature. This project aims to create a drag-and-drop keyboard within Unity that is both intuitive to use for most users, reduces cognitive overload on the user, and allows for accurate text input.</p>
				<Divider space={8} />
				<p>The project has come to a close as of May 2020, but the current iteration of the keyboard has the potentail to be expanded into other Virtual Reality applications developed at Cornell Tech. Other planned applications of this project include:</p>
				<Divider space={8} />
				<ul>
					<li>Research into delimiters between hard and soft input methods in Mixed Reality.</li>
					<li>Custom Debug Console within Virtual Reality for easy debugging and system control.</li>
					<li>Drag-and-drop prefab availability amongst Cornell Tech's Mixed Reality Collaboratory group.</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul>
					<li>Status: Completed [May 10, 2020]</li>
					<li>Current Stable Version: 1.2</li>
					<li>
						Peer Researchers:
						<ul>
							<li>Katie Donahoe - Cornell Tech @ Cornell University [kd459@cornell.edu]</li>
							<li>Prithvi Sriram - Cornell Tech @ Cornell University [ps976@cornell.edu]</li>
						</ul>
					</li>
					<li>Advisor: Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
					<li>
						Functionality:
						<ul>
							<li>Character Selection via Joystick orientation; a 2nd inner layer toggable by index trigger hold on the controller holding the keyboard.</li>
							<li>Character Input and Delete via button press on controller not holding the keyboard.</li>
							<li>Holding the Input and Delete buttons acts similarly to holding a key on a normal keyboard.</li>
						</ul>
					</li>
					<li>
						Equipment:
						<ul>
							<li>Oculus Quest</li>
							<li>Unity</li>
						</ul>
					</li>
				</ul>
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