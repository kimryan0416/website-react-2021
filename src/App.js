import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";

import { profileSquare, heyThere }  from './assets';
import { Image } from "./components";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
      </div>
      <Switch>
        <Route path="/">index</Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

function Nav() {
  return (
    <nav className="AppNav">
      <div className='NavProfile'>
        <div className='ProfileImageWrapper'>
          <Link to="/">
            <Image width={80} height={80} round={true} src={profileSquare} alt="Profile" />
            <Image width={80} height={40} class="ProfileImageOverlay" src={heyThere} alt="Hey there!" />
          </Link>
        </div>
        <div className='profile-social-links-container'>
          <p className='h7'>kimryan0416[AT]gmail.com</p>
          <div class='display-flex flex-direction-row justify-content-flex-start text-align-center flex-wrap-wrap'>
            <a href='https://www.linkedin.com/in/kimryan0416/' target='_blank'>
              <img src='./assets/icons/linkedinIcon.svg' alt="LinkedIn" class='profile-social-media-icon' />
            </a>
            <a href='https://github.com/kimryan0416' target='_blank'>
              <img src='./assets/icons/githubIcon.svg' alt="Github" class='profile-social-media-icon' />
            </a>
            <a href='https://twitter.com/ryankimdev' target='_blank'>
              <img src='./assets/icons/twitterIcon.svg' alt="Twitter" class='profile-social-media-icon' />
            </a>
            <a href='https://ryankimdev.com/blog' target='_blank'>
              <img src='./assets/icons/wordpressIcon.svg' alt="Wordpress" class='profile-social-media-icon' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
