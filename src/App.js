import { Component, createRef, } from "react";
import {
  HashRouter as Router,
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
  wordpress,
  indexIcon,
  portfolioIcon,
  downloadIcon,
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
                component={()=> <Portfolio width={this.state.width} />}
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
    this.navRef = createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
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
  
  closeMenu = () => {
    this.setState({menuOpen:false});
  }

  setWrapperRef = (node) => {
    this.navRef = node;
  }

  handleClickOutside = (event) => {
    if (this.navRef && !this.navRef.contains(event.target)) {
      this.closeMenu();
    }
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
      <nav ref={this.setWrapperRef} className="AppNav">
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
          <NavLinks isMobile={isMobile} open={this.state.menuOpen} closeMenu={this.closeMenu} />
        </div>
      </nav>
    );
  }
}

function NavLinks(props) {

  const location = window.location.href.split("#")[1].split("/")[1];
  const extraClasses = {
    index:"",
    portfolio:""
  }
  switch(location) {
    case "":
      extraClasses.index = "CurrentLink";
      break;
    case "portfolio":
      extraClasses.portfolio = "CurrentLink";
      break;
    default:
      break;
  }

  const L = (key, to, cName, label, desc, l = true) => {
    const c = (
      <Button cName={`NavItem ${cName}`} onClick={props.closeMenu}>
        {label}
        <span className='NavItemDescription h7'>{desc}</span>
      </Button>
    );
    if (!l) return <a key={`NavLink_${key}`} href={to} target="_blank" rel="noopener noreferrer">{c}</a>;
    return <Link key={`NavLink_${key}`} to={to}>{c}</Link>;
  }

  const menu = [
    L(0, "/", extraClasses.index, <><img src={indexIcon} alt="" className="NavIcon" /><span>Index</span></>, "Why, hello there! Intro & Skill Set"),
    L(1, "/portfolio", extraClasses.portfolio, <><img src={portfolioIcon} alt="" className="NavIcon" /><span>Portfolio</span></>, "All my public projects, from VR projects to web applications."),
    //L(2, "/research", "", <span>Research</span>, "Research topics I wrote papers for, filtered from my Portfolio."),
    //L(3, "/about", "", <span>About Me</span>, "More about me, my skills, work experience, and education."),
    L(4, resume, "DownloadLink", <><img src={downloadIcon} alt="" className="NavIcon" /><span>Resume <span className="h8">(57 kB)</span></span></>, "Download my resume in PDF form.", false),
  ];

  var mobileClass = "";
  if (props.isMobile) {
    mobileClass = (props.open) ? "MobileNavLinks open" : "MobileNavLinks"
  }

  return <div className={`NavLinksWrapper ${mobileClass}`}>{menu}</div>;
}


export default App;
