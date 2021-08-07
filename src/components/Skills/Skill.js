import Image from "../Image/Image";
import Divider from "../Divider/Divider";

function Skill(props) {
	return (
		<div className="Skill">
			<Image width={16} height={16} round={true} cName="SkillIcon" src={props.src} alt="" />
            <Divider horizontal={true} space={4} />
            <span>{props.skill}</span>
        </div>
	);
}

export default Skill;