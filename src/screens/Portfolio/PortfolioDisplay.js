import { useState } from 'react';
import { 
	Divider, 
	Button,
} from "../../components";
import { useMobile } from '../../hooks/';

const PortfolioDisplay = (props) => {
	const [ enlargened, setEnlargened ] = useState(true);
	const isMobile = useMobile();
	const toggleEnlarge = _ => { setEnlargened(e=>!e); }

	const enlargedPanelClass = (enlargened)
		? 'enlargedPanel'
		: ''
	const enlargeButtonText = (enlargened)
		? 'Smaller panel'
		: 'Enlarge panel';

	return (
		<div className={(isMobile)?`PortfolioDisplay ${enlargedPanelClass} Mobile`:`PortfolioDisplay ${enlargedPanelClass}`}>
			<div className="PortfolioDisplayCover" onClick={props.goBack}></div>
			<div className={`PortfolioDisplayPanel ${enlargedPanelClass}`}>
				<div className='PortfolioDisplayHeader'>
					<Button cName="PortfolioBackButton" onClick={props.goBack}>Close</Button>
					{
						!isMobile &&
						<Button cName="PortfolioEnlargeButton HideInMobile" onClick={toggleEnlarge}>{enlargeButtonText}</Button>
					}
				</div>
				<Divider space={16} />
				<div className='PortfolioDisplayContents'>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default PortfolioDisplay;