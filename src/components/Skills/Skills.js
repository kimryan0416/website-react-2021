import Skill from "./Skill";
import Divider from "../Divider/Divider";

import "./Skills.css";

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

function Skills() {
	return (
		<div>
        <ul className="SkillComponent SkillLanguages">
          <li className="SkillGroup">
            <p><i>Web development</i></p>
            <ul className="SkillList">
              <li><Skill skill="HTML," src={markup} /></li>
              <li><Skill skill="CSS," src={css} /></li>
              <li><Skill skill="JavaScript," src={js} /></li>
              <li><Skill skill="PHP 5 & 7" src={php} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Virtual Reality</i></p>
            <ul className="SkillList">
              <li><Skill skill="C#" src={js} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Databases</i></p>
            <ul className="SkillList">
              <li><Skill skill="MySQL," src={sql} /></li>
              <li><Skill skill="SQLite" src={sql} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Data Management</i></p>
            <ul className="SkillList">
              <li><Skill skill="Python" src={python} /></li>
            </ul>
          </li>
        </ul>
        <Divider space={16} />
        <ul className="SkillComponent SkillFrameworks">
          <li className="SkillGroup">
            <p><i>Frameworks</i></p>
            <ul className="SkillList">
              <li><Skill skill="Angular," src={js} /></li>
              <li><Skill skill="React Native" src={react} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Libraries</i></p>
            <ul className="SkillList">
              <li><Skill skill="React.js," src={react} /></li>
              <li><Skill skill="jQuery," src={js} /></li>
              <li><Skill skill="D3.js" src={js} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Runtime Environments</i></p>
            <ul className="SkillList">
              <li><Skill skill="Node.js" src={js} /></li>
            </ul>
          </li>
        </ul>
        <Divider space={16} />
        <ul className="SkillComponent SkillSoftware">
          <li className="SkillGroup">
            <p><i>Design</i></p>
            <ul className="SkillList">
              <li><Skill skill="Adobe Photoshop," src={photoshop} /></li>
              <li><Skill skill="Figma" src={figma} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Virtual Reality &amp; Games</i></p>
            <ul className="SkillList">
              <li><Skill skill="Unity3D," src={unity} /></li>
              <li><Skill skill="Cinema4D," src={cube} /></li>
              <li><Skill skill="Blender" src={cube} /></li>
            </ul>
          </li>
          <li className="SkillGroup">
            <p><i>Video Editing</i></p>
            <ul className="SkillList">
              <li><Skill skill="Adobe After Effects" src={afterEffects}/></li>
            </ul>
          </li>
        </ul>
      </div>
	);
}

export default Skills;