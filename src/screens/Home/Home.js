import { Component } from "react";

import "./Home.css";
import { Divider } from "../../components";

function Home(props) {
  return (
    <>
      <h1>Hey there!</h1>
      <Divider space={32} />
      <p>The name's <strong>Ryan Kim</strong>. Pleasure to meet ya!</p>
      <p>I'm someone with a robust interest in <strong>virtual reality</strong>, <strong>web application development</strong>, and <strong>user experiences</strong>. If you're ever in the need for a UX engineer or front-end developer who can provide the necessary skills to develop your VR projects, websites, or web applications, I'm your guy.</p>
      <Divider space={32} />
      <h3>Memory Partitions</h3>
      <Divider space={8} />
      <SkillBar />
    </>
  );
}

class SkillBar extends Component {
  constructor() {
    super();
    this.state = {
      selected:null
    }
  }
  toggleSelected = (to) => {
    var selected = this.state.selected;
    if (this.state.selected != to) {
      selected = to;
    } else {
      selected = null;
    }
    this.setState({
      selected:selected
    })
  }
  render() {
    var  content = null;
    switch(this.state.selected) {
      case "webdev":
        content = <WebDev />
        break;
    }
    return (
      <div className="SkillBar">
        <div className="SkillBarWrapper">
          <div 
            className="SkillBarItem" 
            style={{width:"60%",backgroundColor:"lightblue"}}
            onClick={()=>{this.toggleSelected("webdev")}}
          >
            <p className="h7">Web Development</p>
          </div>
          <div 
            className="SkillBarItem" 
            style={{width:"25%",backgroundColor:"blue"}}
            onClick={()=>{this.toggleSelected("second")}}
          >
            <p className="h7">Second</p>
          </div>
          <div 
            className="SkillBarItem" 
            style={{width:"15%",backgroundColor:"green"}}
            onClick={()=>{this.toggleSelected("third")}}
          >
            <p className="h7">Third</p>
          </div>
        </div>
        {content}
      </div>
    );
  }
}

function WebDev() {
  return (
    <div className="Skill">
      <h5>Web Development</h5>
      <hr />
      <div className="SkillContent">
        <div>
          <p>Languages:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP 5 &amp; 7</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <p>Frameworks &amp; Libraries:</p>
          <ul>
                <li>jQuery</li>
                <li>D3.js</li>
                <li>Node.js</li>
                <li>Angular</li>
                <li>React.js</li>
                <li>React Native</li>
              </ul>
        </div>
        <div className="SkillProjects">
          <p>Related Projects:</p>
        </div>
      </div>
    </div>
  );
}

export default Home;