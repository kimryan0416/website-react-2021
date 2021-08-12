import { withRouter, Link } from "react-router-dom";

import "./Home.css";
import { 
  Divider, 
  Skills,
  Button,
  ExtURL,
} from "../../components";

function Home(props) {
  return (
    <div className="Home">
      <h1>Hey there!</h1>
      <Divider space={32} />
      <div className="HomeContent">
        <div className="HomeItem">
          <p>The name's <strong>Ryan Kim</strong>. Pleasure to meet ya!</p>
          <Divider space={8} />
          <p>I'm someone with a robust interest in <strong>virtual reality</strong>, <strong>web application development</strong>, and <strong>user experiences</strong>. If you're ever in the need for a UX engineer or front-end developer who can provide the necessary skills to develop your VR projects, websites, or web applications, I'm <span className="no-br">your guy.</span></p>
        </div>
        <Divider space={32} />
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
            <ExtURL href="https://ryankimdev.com/blog"><Button>My Blog</Button></ExtURL>
          </div>
        </div>
        <Divider space={32} />
        <div className="HomeItem">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);