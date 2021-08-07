import "./Home.css";
import { 
  Divider, 
  Skills 
} from "../../components";

function Home(props) {
  return (
    <>
      <h1>Hey there!</h1>
      <Divider space={32} />
      <p>The name's <strong>Ryan Kim</strong>. Pleasure to meet ya!</p>
      <p>I'm someone with a robust interest in <strong>virtual reality</strong>, <strong>web application development</strong>, and <strong>user experiences</strong>. If you're ever in the need for a UX engineer or front-end developer who can provide the necessary skills to develop your VR projects, websites, or web applications, I'm your guy.</p>
      <Divider space={32} />
      <Skills />
    </>
  );
}

export default Home;