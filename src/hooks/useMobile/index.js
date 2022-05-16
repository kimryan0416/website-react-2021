import { useState, useEffect, createContext, useContext } from 'react';

const MobileContext = createContext(null);
const _MOBILE_WIDTH = 700;

const useMobile = _ => useContext(MobileContext);

const MobileProvider = (props) => {
	const [ mobile, setMobile ] = useState(null);
	useEffect(()=>{
		const HandleResize = _ => {
			setMobile(window.innerWidth <= _MOBILE_WIDTH);
		}
		HandleResize();
		window.addEventListener('resize',HandleResize);
		return _ => {
			window.removeEventListener('resize',HandleResize);
		}
	});
	return (
		<MobileContext.Provider value={mobile}>
			{props.children}
		</MobileContext.Provider>
	);
}

export {
	useMobile, 
	MobileProvider,
};
