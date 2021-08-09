import { VRKeyboard, VRKeyboardData } from "./vrKeyboard/vrKeyboard";
import { EasierVRAssets, EasierVRAssetsData } from "./EasierVRAssets/EasierVRAssets";
import { EasierXRAssets, EasierXRAssetsData } from "./EasierXRAssets/EasierXRAssets";
import { MoL, MoLData } from "./MoL/MoL";
import { Orbit, OrbitData } from "./Orbit/Orbit";
import { OnePlace, OnePlaceData } from "./OnePlace/OnePlace";

const projects = [
	OnePlaceData,
	EasierVRAssetsData,
	EasierXRAssetsData,
	MoLData,
	VRKeyboardData,
	OrbitData,
]

export {
	projects,
	OnePlace,
	EasierVRAssets,
	EasierXRAssets,
	MoL,
	VRKeyboard,
	Orbit,
}