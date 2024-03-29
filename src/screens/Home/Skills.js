import { 
	Image, 
	Divider 
} from "../../components/";
import { 
  markup, 
  css,
  js,
  php,
  sql,
  python,

  react,

  photoshop,
  afterEffects,
  figma,
  unity,
  cube,
} from "../../assets";
import { useMobile } from '../../hooks/';

const Skill = (props) => {
	return (
		<div className="Skill">
			<Image width={16} height={16} round={true} cName="SkillIcon" src={props.src} alt="" />
      <Divider horizontal={true} space={4} />
      <span>{props.skill}</span>
    </div>
	);
}

const Skills = () => {
	const isMobile = useMobile();
	return (
		<div className={(isMobile) ? "Skills Mobile" : "Skills"}>
      <ul className="SkillComponent SkillLanguages">
        <li className="SkillGroup">
          <p><strong>Programming</strong></p>
          <Divider space={8} />
          <ul className="SkillList">
            <li><Skill skill="HTML" src={markup} /></li>
            <li><Skill skill="CSS" src={css} /></li>
            <li><Skill skill="JavaScript" src={js} /></li>
            <li><Skill skill="PHP 5 & 7" src={php} /></li>
            <li><Skill skill="C#" src={js} /></li>
            <li><Skill skill="Python" src={python} /></li>
            <li><Skill skill="C++" src={js} /></li>
          </ul>
          <Divider space={4} />
          <hr className="faded" />
          <Divider space={4} />
          <ul className="SkillList">
            <li><Skill skill="MySQL" src={sql} /></li>
            <li><Skill skill="SQLite" src={sql} /></li>
          </ul>
        </li>
      </ul>
      <ul className="SkillComponent SkillFrameworks">
        <li className="SkillGroup">
          <p><strong>Frameworks &amp; Libraries</strong></p>
          <Divider space={8} />
          <ul className="SkillList">
            <li><Skill skill="OpenXR" src={unity} /></li>
            <li><Skill skill="Oculus Integrations" src={unity} /></li>
            <li><Skill skill="Angular" src={js} /></li>
            <li><Skill skill="React Native" src={react} /></li>
          </ul>
          <Divider space={4} />
          <hr className="faded" />
          <Divider space={4} />
          <ul className="SkillList">
            <li><Skill skill="React.js" src={react} /></li>
            <li><Skill skill="Node.js" src={js} /></li>
            <li><Skill skill="jQuery" src={js} /></li>
            <li><Skill skill="D3.js" src={js} /></li>
          </ul>
        </li>
      </ul>
      <ul className="SkillComponent SkillSoftware">
        <li className="SkillGroup">
          <p><strong>Software</strong></p>
          <Divider space={8} />
          <ul className="SkillList">
            <li><Skill skill="Adobe Photoshop" src={photoshop} /></li>
            <li><Skill skill="Adobe After Effects" src={afterEffects}/></li>
            <li><Skill skill="Figma" src={figma} /></li>
          </ul>
          <Divider space={4} />
          <hr className="faded" />
          <Divider space={4} />
          <ul className="SkillList">
            <li><Skill skill="Unity3D" src={unity} /></li>
            <li><Skill skill="Cinema4D" src={cube} /></li>
        	  <li><Skill skill="Blender" src={cube} /></li>
          </ul>
        </li>
      </ul>
    </div>
	);
}

export default Skills;