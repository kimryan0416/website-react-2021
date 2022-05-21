import { 
  Divider, 
  Skills,
} from "../../components";
import Education from './Education';

import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Hello</h1>
      <Divider space={32} />
      <div className="HomeContent">
        <div className="HomeItem">
          <p>My name is <strong>Ryan Kim</strong>. Pleasure to meet ya!</p>
          <Divider space={8} />
          <p>I'm someone with a robust interest in <strong>virtual reality</strong>, <strong>web application development</strong>, and <strong>user experiences</strong>.</p>
          <Divider space={8} />
          <p>If you're ever in the need for a UX engineer or front-end developer who can provide the necessary skills to develop your VR projects, websites, or web applications, I'm <span className="no-br">your guy.</span></p>
        </div>
        <Divider space={32} />
        {/*}
        <div className="HomeItem HomeLinks">
          <div className="HomeLink">
            <p><i>Check out my portfolio, where I describe my experiences with jobs, projects, and research:</i></p>
            <Divider space={16} />
            <Link to="/portfolio">
              <Button>Portfolio</Button>
            </Link>
          </div>
          <div className="HomeLink">
            <p><i>I have a blog where I discuss creating games! Check it out on my Wordpress here:</i></p>
            <Divider space={16} />
            <Link to="/blog"><Button>My Blog</Button></Link>
          </div>
        </div>
        <Divider space={32} />
        {*/}
        <div className="HomeItem">
          <h4>Skills</h4>
          <Divider space={24} />
          <Skills />
        </div>
        <Divider space={32} />
        <div className="HomeItem">
          <h4>Education</h4>
          <Divider space={24} />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Home;