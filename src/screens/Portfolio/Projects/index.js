import OnePlaceData from "./OnePlace/OnePlace";
import ECornellData from "./ECornell/ECornell";
import ICHDData from "./ICHD/ICHD"

import VRKeyboardData from "./vrKeyboard/vrKeyboard";
import EasierVRAssetsData from "./EasierVRAssets/EasierVRAssets";
import EasierXRAssetsData from "./EasierXRAssets/EasierXRAssets";
import MoLData from "./MoL/MoL";
import OrbitData from "./Orbit/Orbit";

import EmbarkmentData from "./Embarkment/Embarkment";
import TosteData from "./Toste/Toste";
import SMPData from "./SMP/SMP";

const projects = {
	work:[
		OnePlaceData,
		ECornellData,
		ICHDData,
	],
	projects:[
		{
			type:"Virtual Reality Research and Projects",
			description:<p>Projects concerning Virtual Reality. These projects are operated within the <a href="https://www.oculus.com/quest/" target="_blank" rel="noopener noreferrer">Oculus Quest</a> and programmed in C#/C Sharp with <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity</a>.</p>,
			items:[
				EasierVRAssetsData,
				EasierXRAssetsData,
				MoLData,
				VRKeyboardData,
				OrbitData,
			],
		},
		{
			type:"Games",
			description:<p>I've worked on one game so far, but I plan to add more to the list in due time.</p>,
			items:[
				EmbarkmentData,
			]
		},
		{
			type:"Web Projects",
			description:<p>As someone who has worked extensively with web programming, I have worked on various projects ranging from browser web apps to JavaScript programs. Work experience and skillset includes HTML, CSS, JavaScript, PHP, SQL, and Python.</p>,
			items:[
				OnePlaceData,
				SMPData,
				TosteData,
				ECornellData,
				ICHDData,
			]
		}
	],
	research:[
		MoLData,
		VRKeyboardData,
	],
	education:[]
}

export default projects;