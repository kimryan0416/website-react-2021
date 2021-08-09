import { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { 
  profileSquare, 
  heyThere, 
  github, 
  linkedIn, 
  twitter,
  wordpress
}  from './assets';
import { 
  Image, 
  Button,
} from "./components";
import {
  Home,
  Portfolio,
} from "./screens";
import { resume } from "./downloads";

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  updateDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="AppHeader">
            <Nav width={this.state.width} />
          </header>
          <main>
            <Switch>
              <Route 
                path="/portfolio"
                component={()=> <Portfolio />}
              />
              <Route 
                path="/" 
                component={()=> <Home />} 
              />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      const to = this.isMobile() ? this.state.menuOpen : false
      this.setState({menuOpen:to});
    }
  }

  isMobile = () => {
    return (this.props.width <= 700);
  }

  toggleMenu = () => {
    this.setState(prevState => ({menuOpen:!prevState.menuOpen}));
  }

  render() {
    const isMobile = this.isMobile();
    var mobileButton = null;
    if (isMobile) {
      // now in mobile mode
      /*
      mobileButton = <Image 
        width={24} 
        height={24} 
        src={menu} 
        alt="Menu" 
        onClick={this.toggleMenu}
      />;
      */
      mobileButton = <Button cName="NavItem" onClick={this.toggleMenu}>MENU</Button>
    }

    return (
      <nav className="AppNav">
        <div className='NavProfile'>
          <div className='ProfileImageWrapper'>
            <Link to="/">
              <Image width={80} height={80} round={true} src={profileSquare} alt="Profile" />
              <Image width={80} height={40} cName="ProfileImageOverlay" src={heyThere} alt="Hey there!" />
            </Link>
          </div>
          <div>
            <p className='h7'>kimryan0416[AT]gmail.com</p>
            <div className='ProfileSocialLinksContainer'>
              <a href='https://www.linkedin.com/in/kimryan0416/' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={linkedIn} alt="LinkedIn" cName="ProfileSocialMediaIcon" />
              </a>
              <a href='https://github.com/kimryan0416' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={github} alt="Github" cName='ProfileSocialMediaIcon' />
              </a>
              <a href='https://twitter.com/ryankimdev' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={twitter} alt="Twitter" cName='ProfileSocialMediaIcon' />
              </a>
              <a href='https://ryankimdev.com/blog' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={wordpress} alt="Wordpress" cName='ProfileSocialMediaIcon' />
              </a>
            </div>
          </div>
        </div>
        <div className="NavLinks">
          {mobileButton}
          <NavLinks isMobile={isMobile} open={this.state.menuOpen} />
        </div>
      </nav>
    );
  }
}

function NavLinks(props) {

  const L = (to, label, desc, l = true) => {
    const c = (
      <Button cName='NavItem'>
        <span>{label}</span>
        <span className='NavItemDescription h7'>{desc}</span>
      </Button>
    );
    if (!l) return <a href={to} target="_blank" rel="noopener noreferrer">{c}</a>;
    return <Link to={to}>{c}</Link>;
  }

  const menu = [
    L("/", "Index", "Introductions & Skill Set: Nice and Simple."),
    L("/portfolio", "Portfolio", "All my public projects, from VR projects to web applications."),
    //L("/research", "Research", "Research topics I wrote papers for, filtered from my Portfolio."),
    //L("/about", "About Me", "More about me, my skills, work experience, and education."),
    L(resume, "Resume", "Download my resume in PDF form.", false),
  ];

  var mobileClass = "";
  if (props.isMobile) {
    mobileClass = (props.open) ? "MobileNavLinks open" : "MobileNavLinks"
  }

  return <div className={`NavLinksWrapper ${mobileClass}`}>{menu}</div>;
}


export default App;
