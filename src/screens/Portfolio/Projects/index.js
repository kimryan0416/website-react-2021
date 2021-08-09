import VRKeyboardData from "./vrKeyboard/vrKeyboard";
import EasierVRAssetsData from "./EasierVRAssets/EasierVRAssets";
import EasierXRAssetsData from "./EasierXRAssets/EasierXRAssets";
import MoLData from "./MoL/MoL";
import OrbitData from "./Orbit/Orbit";
import OnePlaceData from "./OnePlace/OnePlace";

const projects = {
	work:[
		OnePlaceData,
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
	],
	research:[
		MoLData,
		VRKeyboardData,
	],
	education:[]
}

export default projects;