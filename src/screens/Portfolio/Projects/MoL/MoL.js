import { Divider, Button } from "../../../../components";
import { imol } from "../../../../downloads";
import { 
	thumbnail,
	button_mapping,
	environment,
	locomotion,
	palette,
	selection,
} from "./assets";

function MoL() {
	return (
		<div className="PortfolioContent">
			<div className="PortfolioSidebar">
				<img src={thumbnail} alt="" className="PortfolioThumbnail" />
				<Divider space={16} />
				<p><i>A report on the efficacy of memory retention in VR.</i></p>
				<Divider space={16} />
				<p className="PortfolioStatus Completed">Completed</p>
				<Divider space={16} />
				<p>
					<a href={imol} target="_blank" rel="noopener noreferrer">Download PDF (1.6 mB)</a>
					<br />
					<a href="https://drive.google.com/drive/folders/1YcBCD0vUy0Oj_lybbf-ZRvfHFcLavCcc?usp=sharing" target="_blank" rel="noopener noreferrer">Downloadable Build &amp; Files</a>
					<br />
					<a href="https://youtu.be/AhC4hOWlfGY" target="_blank" rel="noopener noreferrer">Video Demonstration (YouTube)</a>
				</p>
				<Divider space={16} />
				<ul>
					<li>C#/CSharp</li>
					<li>Oculus Quest</li>
					<li>Unity</li>
					<li>Information Interfaces and Presentation</li>
					<li>User Experience (UX) Design</li>
					<li>User Interfaces (UI)</li>
					<li>Virtual Reality</li>
				</ul>
			</div>
			<div className="PortfolioMain">
				<h3>Method of Loci and Memory Recall in Virtual Reality - A User-Generated Exploration</h3>
				<Divider space={16} />
				<h4><strong>Abstract</strong></h4>
				<Divider space={8} />
				<p>This paper proposes the idea that 3D object creation can work as a potential method to helping users apply the Method of Loci (MoL) in Virtual Reality (VR). In order to explore this alternative, the paper also introduces a prototype application of a content creator tool that can allow users to instantiate objects within a VR environment easily. Through experimentation with participants in a VR environment, key design issues surrounding this prototype have been made apparent, and thus this paper elaborates on how this content creator tool can be improved for future works. This paper also offers suggestions on how to improve the experiment procedure utilized in this paper and describes key aspects about the MoL technique in VR that should not be ignored.</p>
				<Divider space={16} />
				<h4><strong>Quick Details:</strong></h4>
				<Divider space={8} />
				<ul className="h7">
					<li><i><u>Status:</u></i> Completed [May 10, 2020]</li>
					<li><i><u>Researcher:</u></i> Ryan Kim - Lead researcher</li>
					<li><i><u>Advisor:</u></i> Harald Haraldsson - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
				</ul>
				<Divider space={16} />
				<h4><strong>Designing the Content Creation Tool</strong></h4>
				<Divider space={8} />
				<p><i>This segment has been taken from the official report. Download the report here:</i></p>
				<Divider space={8} />
				<a href={imol} target="_blank" rel="noopener noreferrer"><Button>Download PDF (1.6 mB)</Button></a>
				<Divider space={8} />
				<div className="h7">
					<p>In order to test the efficacy of MoL and offer an experience that improves immersion in VR, a prototype system for content creation has been designed. The prototype system uses a combination of 2D and 3D interaction modalities to provide a user flow that feels comfortable to use. Both the prototype system and the virtual environment are developed with Unity3D and are playable on the Oculus Quest and Rift.</p>
					<Divider space={8} />
					<h6><strong>Interface Design</strong></h6>
					<Divider space={8} />
					<p>
						<img className="PortfolioContentImage Right" src={palette} alt="Palette Screenshot" />
						The interface of this content creation system utilizes a combination of 2D palette menu and a 3D tooltip. This 2D menu is affixed to a virtual controller corresponding to the user's non-dominant hand, whereas the tooltip is affixed to the virtual controller corresponding to the user's dominant hand. The 2D menu consists of a palette of prefabricated objects, or "prefabs," that the user can select by touching the tooltip of their dominant hand to the palette where the prefabricated object is represented. The palette itself allows for several key functions, such as allowing users to cycle through the list of prefabs available to the user and saving the status of the virtual world for later use should the user decide to leave the virtual world.
					</p>
					<Divider space={8} />
					<p>The controllers of the Oculus Quest and Rift offer additional buttons and joysticks that are also mapped to other functions of the system. These functions include:</p>
					<Divider space={8} />
					<ul>
				    <li>Continuous movement through the VR environment</li>
    				<li>Blink teleportation for users with low tolerance for vection</li>
    				<li>Rotation of the player body at 22.5-degree intervals</li>
    				<li>Color picker toggle</li>
    				<li>Scaling type toggle between the prefab's original scale and the scale defined by the difference between the user's initial tooltip position at the start of the drag and the current position of the tooltip</li>
    				<li>Deleting objects in the world</li>
    				<li>Cycling through the palette list of prefabs</li>
    			</ul>
    			<Divider space={16} />
    			<h6><strong>Object Instantiation and Manipulation</strong></h6>
    			<Divider space={8} />
    			<p>
    				<img className="PortfolioContentImage Right" src={selection} alt="Selection Screenshot" />
    				To instantiate new objects into the world, the user must:
    			</p>
    			<Divider space={8} />
    			<ol>
    				<li>Select a prefab from the palette by touching the prefab with the tooltip.</li>
    				<li>Drag the tooltip while holding the index trigger to scale the object prior to placement in the virtual world.</li>
    			</ol>
    			<Divider space={8} />
					<p>Once objects have been instantiated in the world, the user is allowed to manipulate the position and rotation of the object via a grab metaphor with either controller as well as re-color the object via joystick toggle on the dominant hand's controller. Objects cannot be rescaled once they are instantiated in the world. Objects can also be deleted or copied, the functions of which are mapped to buttons on the dominant hand's controller.</p>
					<Divider space={8} />
					<img className="PortfolioContentImage" src={button_mapping} alt="Button Mapping Controls" />
					<Divider space={16} />
					<h6><strong>Locomotion</strong></h6>
					<Divider space={8} />
					<p>
						<img className="PortfolioContentImage Right" src={locomotion} alt="Locomotion Screenshot" />
						Locomotion within the virtual environment is divided into two subcategories: positioning and rotation. The player avatar in the virtual environment follows the position of the headset using the headset's 6-DOF sensors. Therefore, users can adjust their position in the virtual environment either by moving physically in real-world space or by using the joystick on the non-dominant controller for continuous locomotion. Players can also move around the virtual environment via blink teleportation, which reduces motion sickness from vection as well as reduces the time necessary to navigate across the virtual environment, which was a problem in previous studies involving MoL.
					</p>
					<Divider space={16} />
					<h6><strong>Environment</strong></h6>
					<Divider space={8} />
					<p>
						<img className="PortfolioContentImage Right" src={environment} alt="VR Environment Screenshot" />
						The virtual environment was a 3D rendering of Cornell Tech’s MakerLab. The virtual environment is populated with renderings of furniture commonly found in the real-world MakerLab such as chairs and tables, and the virtual environment attempts to replicate lighting conditions typically present in the real-world MakerLab. Colliders that match the shape and orientation of the walls, floor, and ceiling prohibit the player avatar from moving outside the test area. The virtual environment was built with and edited using Unity3D, and the game environment runs with Unity's proprietary game engine alongside Oculus' OVR Implementations SDK for VR support.
					</p>
				</div>
			</div>
		</div>
	);
}

const MoLData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"imol",
	thumbnail:thumbnail,
	title:"Method of Loci and Memory Recall in Virtual Reality - A User- Generated Exploration",
	url:"imol",
	content:<MoL />
}

export default MoLData;